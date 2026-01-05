import { NextResponse } from "next/server";
import { z } from "zod";
import nodemailer from "nodemailer";
import { headers } from "next/headers";

// Simple in-memory rate limiting (resets on server restart)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

function checkRateLimit(ip: string): { allowed: boolean; retryAfter?: number } {
  const now = Date.now();
  const windowMs = 60 * 60 * 1000; // 1 hour
  const maxRequests = 3;

  const record = rateLimitMap.get(ip);
  
  if (!record || now > record.resetTime) {
    // New window
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs });
    return { allowed: true };
  }
  
  if (record.count >= maxRequests) {
    // Rate limit exceeded
    const retryAfter = Math.ceil((record.resetTime - now) / 1000);
    return { allowed: false, retryAfter };
  }
  
  // Increment count
  record.count++;
  return { allowed: true };
}

// Cleanup old entries every hour
setInterval(() => {
  const now = Date.now();
  for (const [ip, record] of rateLimitMap.entries()) {
    if (now > record.resetTime) {
      rateLimitMap.delete(ip);
    }
  }
}, 60 * 60 * 1000);

const Schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  company: z.string().optional(),
  industry: z.string().optional(),
  team_size: z.string().optional(),
  primary_need: z.array(z.string()).optional(),
  urgency: z.string().optional(),
  message: z.string().min(20),
  honeypot: z.string().optional(),
  form_type: z.enum(["contact", "quote"]).optional()
});

function formatEmailBody(data: z.infer<typeof Schema>): string {
  const lines: string[] = [];
  
  lines.push(`Name: ${data.name}`);
  lines.push(`Email: ${data.email}`);
  
  if (data.phone) {
    lines.push(`Phone: ${data.phone}`);
  }
  
  if (data.company) {
    lines.push(`Company: ${data.company}`);
  }
  
  if (data.form_type === "quote") {
    lines.push("\n--- QUOTE REQUEST DETAILS ---");
    
    if (data.industry) {
      lines.push(`Industry: ${data.industry}`);
    }
    
    if (data.team_size) {
      lines.push(`Team Size: ${data.team_size}`);
    }
    
    if (data.urgency) {
      const urgencyLabels: Record<string, string> = {
        "urgent": "Urgent (need to start within 2 weeks)",
        "soon": "Soon (within 1 month)",
        "planning": "Planning (1-3 months out)",
        "exploring": "Just exploring options"
      };
      lines.push(`Timeline: ${urgencyLabels[data.urgency] || data.urgency}`);
    }
    
    if (data.primary_need && data.primary_need.length > 0) {
      lines.push(`\nServices Requested:`);
      data.primary_need.forEach((need, index) => {
        lines.push(`  ${index + 1}. ${need}`);
      });
    }
  }
  
  lines.push(`\n--- MESSAGE ---`);
  lines.push(data.message);
  
  return lines.join('\n');
}

export async function POST(req: Request) {
  // Get IP address for rate limiting
  const headersList = await headers();
  const ip = headersList.get('x-forwarded-for')?.split(',')[0] || 
             headersList.get('x-real-ip') || 
             'unknown';
  
  // Check rate limit
  const rateCheck = checkRateLimit(ip);
  if (!rateCheck.allowed) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { 
        status: 429,
        headers: {
          'Retry-After': String(rateCheck.retryAfter || 3600)
        }
      }
    );
  }

  const data = await req.json().catch(() => null);
  if (!data) return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });

  // Honeypot protection (silent success for bots)
  if (data.honeypot) return NextResponse.json({ ok: true });

  const parsed = Schema.safeParse(data);
  if (!parsed.success) {
    return NextResponse.json({ error: "Validation failed", issues: parsed.error.flatten() }, { status: 400 });
  }

  const inbox = process.env.BUSINESS_INBOX_EMAIL;
  if (!inbox) return NextResponse.json({ error: "Missing BUSINESS_INBOX_EMAIL" }, { status: 500 });

  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = process.env.SMTP_FROM || "Polus <no-reply@polusllc.com>";

  if (!host || !user || !pass) {
    return NextResponse.json(
      { error: "Email not configured. Set SMTP_* env vars in .env.local." },
      { status: 500 }
    );
  }

  const transporter = nodemailer.createTransport({
    host,
    port: Number(process.env.SMTP_PORT || 587),
    secure: false,
    auth: { user, pass }
  });

  // Create appropriate subject line
  const isQuoteRequest = parsed.data.form_type === "quote";
  
  let subject: string;
  if (isQuoteRequest) {
    // Format: [QUOTE] Industry | Primary Service | Timeline
    const parts: string[] = ["QUOTE"];
    
    // Add industry if available
    if (parsed.data.industry) {
      const industryLabel = parsed.data.industry.charAt(0).toUpperCase() + parsed.data.industry.slice(1);
      parts.push(industryLabel);
    } else {
      parts.push(parsed.data.name);
    }
    
    // Add primary service if available
    if (parsed.data.primary_need && parsed.data.primary_need.length > 0) {
      parts.push(parsed.data.primary_need[0]);
    }
    
    // Add urgency indicator
    if (parsed.data.urgency) {
      const urgencyMap: Record<string, string> = {
        "urgent": "🔴 URGENT",
        "soon": "1 month",
        "planning": "1-3 months",
        "exploring": "Exploring"
      };
      parts.push(urgencyMap[parsed.data.urgency] || parsed.data.urgency);
    }
    
    subject = parts.join(" | ");
  } else {
    subject = `[CONTACT] ${parsed.data.name}`;
  }

  await transporter.sendMail({
    from,
    to: inbox,
    replyTo: parsed.data.email,
    subject,
    text: formatEmailBody(parsed.data)
  });

  return NextResponse.json({ ok: true });
}
