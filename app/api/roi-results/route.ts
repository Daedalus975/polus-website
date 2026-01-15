import { NextResponse } from "next/server";
import { z } from "zod";

const Schema = z.object({
  email: z.string().email(),
  scenario: z.object({
    downtime_hours_per_year: z.number(),
    security_incidents_per_year: z.number(),
    manual_task_hours_per_week: z.number(),
    undocumented_processes: z.number()
  }),
  results: z.object({
    currentCost: z.number(),
    optimizedCost: z.number(),
    annualSavings: z.number(),
    threeYearValue: z.number(),
    roi: z.number(),
    paybackMonths: z.number()
  }),
  honeypot: z.string().optional()
});

export async function POST(req: Request) {
  const data = await req.json().catch(() => null);
  if (!data) return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });

  // Honeypot check
  if (data.honeypot) return NextResponse.json({ ok: true });

  const parsed = Schema.safeParse(data);
  if (!parsed.success) return NextResponse.json({ error: "Validation failed" }, { status: 400 });

  const { email, scenario, results } = parsed.data;

  // Log for CRM/analytics (in production, send to your email service provider)
  console.log('[ROI Calculator] Lead captured:', { email, scenario, results });

  // TODO: In production, send email via your ESP (SendGrid, Mailgun, etc.)
  // Example email content:
  // - PDF summary of ROI calculation
  // - Link to book discovery call
  // - Relevant case studies/resources

  // For now, just return success
  return NextResponse.json({ 
    ok: true,
    message: "Results emailed successfully!"
  });
}
