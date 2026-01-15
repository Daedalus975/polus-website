import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import crypto from "crypto";
import fs from "fs/promises";
import path from "path";
import nodemailer from "nodemailer";

const CalendlyWebhookSchema = z.object({
  event: z.string(),
  payload: z.object({
    event_type: z.object({
      name: z.string().optional()
    }).optional(),
    invitee: z.object({
      email: z.string().email(),
      name: z.string().optional(),
      first_name: z.string().optional(),
      last_name: z.string().optional()
    }).optional(),
    scheduled_event: z.object({
      start_time: z.string(),
      end_time: z.string(),
      name: z.string()
    }).optional()
  })
});

type NurtureContact = {
  email: string;
  name?: string;
  subscribed_at: string;
  has_booked_service: boolean;
  booking_date?: string;
  booking_type?: string;
  emails_sent: {
    day1_welcome: 'pending' | 'sent' | 'failed' | 'skipped';
    day3_education: 'pending' | 'sent' | 'failed' | 'skipped';
    day7_book_call: 'pending' | 'sent' | 'failed' | 'skipped';
    day14_still_thinking: 'pending' | 'sent' | 'failed' | 'skipped';
  };
  lead_score?: number;
};

type Lead = {
  email: string;
  name?: string;
  source: string;
  created_at: string;
  lead_score: number;
  events: Array<{
    type: string;
    timestamp: string;
    metadata?: Record<string, unknown>;
  }>;
  has_booked_service: boolean;
  booking_date?: string;
};

async function getContacts(): Promise<NurtureContact[]> {
  const dataDir = path.join(process.cwd(), 'data');
  const filePath = path.join(dataDir, 'nurture-contacts.json');
  
  try {
    const content = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(content);
  } catch {
    return [];
  }
}

async function saveContacts(contacts: NurtureContact[]): Promise<void> {
  const dataDir = path.join(process.cwd(), 'data');
  const filePath = path.join(dataDir, 'nurture-contacts.json');
  
  await fs.mkdir(dataDir, { recursive: true });
  await fs.writeFile(filePath, JSON.stringify(contacts, null, 2));
}

async function getLeads(): Promise<Lead[]> {
  const dataDir = path.join(process.cwd(), 'data');
  const filePath = path.join(dataDir, 'leads.json');
  
  try {
    const content = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(content);
  } catch {
    return [];
  }
}

async function saveLeads(leads: Lead[]): Promise<void> {
  const dataDir = path.join(process.cwd(), 'data');
  const filePath = path.join(dataDir, 'leads.json');
  
  await fs.mkdir(dataDir, { recursive: true });
  await fs.writeFile(filePath, JSON.stringify(leads, null, 2));
}

function verifyWebhookSignature(payload: string, signature: string | null, secret: string): boolean {
  if (!signature) return false;
  
  const hmac = crypto.createHmac('sha256', secret);
  hmac.update(payload);
  const expectedSignature = hmac.digest('base64');
  
  return crypto.timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(expectedSignature)
  );
}

async function sendOwnerNotification(email: string, name: string, eventName: string, startTime: string) {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.resend.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER || 'resend',
        pass: process.env.SMTP_PASS,
      },
    });

    const startDate = new Date(startTime);
    const formattedDate = startDate.toLocaleString('en-US', {
      timeZone: 'America/Chicago',
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      timeZoneName: 'short'
    });

    await transporter.sendMail({
      from: process.env.SMTP_FROM || 'Polus <no-reply@polus-cs.com>',
      to: process.env.BUSINESS_INBOX_EMAIL || 'jack.washmon@polus-cs.com',
      replyTo: email,
      subject: `[BOOKING] New ${eventName} scheduled`,
      html: `
<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(135deg, #1a3d2e 0%, #0f2419 100%); color: #B1E3C7; padding: 20px; border-radius: 8px 8px 0 0;">
    <h2 style="margin: 0;">🎉 New Booking</h2>
  </div>
  
  <div style="background: #ffffff; padding: 20px; border: 1px solid #e0e0e0; border-top: none;">
    <p style="font-size: 16px; margin-bottom: 20px;"><strong>${name}</strong> just booked a call!</p>
    
    <div style="background: #f8f9fa; padding: 15px; border-radius: 6px; margin-bottom: 15px;">
      <p style="margin: 5px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #1a3d2e;">${email}</a></p>
      <p style="margin: 5px 0;"><strong>Event:</strong> ${eventName}</p>
      <p style="margin: 5px 0;"><strong>When:</strong> ${formattedDate}</p>
    </div>
    
    <p style="color: #666; font-size: 14px; margin-top: 15px;">
      ✓ Contact marked as "booked" in nurture sequence<br>
      ✓ Day 14 "still thinking?" email will be skipped<br>
      ✓ Lead score updated (+20 points)
    </p>
  </div>
  
  <div style="text-align: center; padding: 15px; color: #666; font-size: 12px;">
    <p>Polus LLC - Calendly Integration</p>
  </div>
</div>`,
      text: `New Booking Notification

${name} (${email}) just booked a call!

Event: ${eventName}
When: ${formattedDate}

✓ Contact marked as "booked" in nurture sequence
✓ Day 14 email will be skipped
✓ Lead score updated

---
Polus LLC - Calendly Integration`
    });

    console.log(`[Calendly Webhook] Owner notification sent for ${email}`);
  } catch (error) {
    console.error('[Calendly Webhook] Failed to send owner notification:', error);
  }
}

export async function POST(request: NextRequest) {
  const rawBody = await request.text();
  
  // Verify webhook signature if secret is configured
  const signature = request.headers.get('calendly-webhook-signature');
  const webhookSecret = process.env.CALENDLY_WEBHOOK_SECRET;
  
  if (webhookSecret && !verifyWebhookSignature(rawBody, signature, webhookSecret)) {
    console.error('[Calendly Webhook] Invalid signature');
    return NextResponse.json({ error: 'Invalid signature' }, { status: 401 });
  }

  let data;
  try {
    data = JSON.parse(rawBody);
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const parsed = CalendlyWebhookSchema.safeParse(data);
  if (!parsed.success) {
    console.error('[Calendly Webhook] Validation failed:', parsed.error);
    return NextResponse.json({ error: 'Invalid webhook payload' }, { status: 400 });
  }

  const { event, payload } = parsed.data;
  
  // Only process booking.created events
  if (event !== 'invitee.created') {
    console.log('[Calendly Webhook] Ignored event type:', event);
    return NextResponse.json({ ok: true, message: 'Event type not processed' });
  }

  const inviteeEmail = payload.invitee?.email;
  const inviteeName = payload.invitee?.name || 
                       `${payload.invitee?.first_name || ''} ${payload.invitee?.last_name || ''}`.trim() || 
                       'Unknown';
  const eventName = payload.event_type?.name || payload.scheduled_event?.name || 'Discovery Call';
  const startTime = payload.scheduled_event?.start_time;

  if (!inviteeEmail) {
    console.error('[Calendly Webhook] No invitee email found');
    return NextResponse.json({ error: 'No invitee email' }, { status: 400 });
  }

  console.log(`[Calendly Webhook] Processing booking for ${inviteeEmail}`);

  try {
    // Update nurture contacts
    const contacts = await getContacts();
    const contactIndex = contacts.findIndex(c => c.email.toLowerCase() === inviteeEmail.toLowerCase());
    
    if (contactIndex !== -1) {
      contacts[contactIndex].has_booked_service = true;
      contacts[contactIndex].booking_date = new Date().toISOString();
      contacts[contactIndex].booking_type = eventName;
      
      // Skip Day 14 email if pending
      if (contacts[contactIndex].emails_sent.day14_still_thinking === 'pending') {
        contacts[contactIndex].emails_sent.day14_still_thinking = 'skipped';
      }
      
      await saveContacts(contacts);
      console.log(`[Calendly Webhook] Updated nurture contact: ${inviteeEmail}`);
    }

    // Update or create lead with booking event
    const leads = await getLeads();
    const leadIndex = leads.findIndex(l => l.email.toLowerCase() === inviteeEmail.toLowerCase());
    
    if (leadIndex !== -1) {
      // Update existing lead
      leads[leadIndex].has_booked_service = true;
      leads[leadIndex].booking_date = new Date().toISOString();
      leads[leadIndex].lead_score = (leads[leadIndex].lead_score || 0) + 20;
      leads[leadIndex].events.push({
        type: 'booking_created',
        timestamp: new Date().toISOString(),
        metadata: { event_name: eventName, start_time: startTime }
      });
    } else {
      // Create new lead
      leads.push({
        email: inviteeEmail,
        name: inviteeName,
        source: 'calendly_webhook',
        created_at: new Date().toISOString(),
        lead_score: 20,
        has_booked_service: true,
        booking_date: new Date().toISOString(),
        events: [{
          type: 'booking_created',
          timestamp: new Date().toISOString(),
          metadata: { event_name: eventName, start_time: startTime }
        }]
      });
    }
    
    await saveLeads(leads);
    console.log(`[Calendly Webhook] Updated lead score for: ${inviteeEmail}`);

    // Send owner notification
    if (startTime) {
      await sendOwnerNotification(inviteeEmail, inviteeName, eventName, startTime);
    }

    return NextResponse.json({ 
      ok: true,
      message: 'Booking processed successfully',
      email: inviteeEmail,
      marked_as_booked: true
    });

  } catch (error) {
    console.error('[Calendly Webhook] Processing error:', error);
    return NextResponse.json({ 
      error: 'Failed to process booking',
      ok: false 
    }, { status: 500 });
  }
}
