import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";
import { trackLeadEvent } from "@/lib/leadTracking";

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

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(value);
};

export async function POST(req: Request) {
  try {
    console.log('[ROI Calculator] ========== API CALLED ==========');
    
    const data = await req.json().catch(() => null);
    if (!data) {
      console.log('[ROI Calculator] ERROR: Invalid JSON');
      return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
    }

    // Honeypot check
    if (data.honeypot) return NextResponse.json({ ok: true });

    const parsed = Schema.safeParse(data);
    if (!parsed.success) {
      console.log('[ROI Calculator] ERROR: Validation failed', parsed.error);
      return NextResponse.json({ error: "Validation failed" }, { status: 400 });
    }

  const { email, scenario, results } = parsed.data;

  // Log for CRM/analytics
  console.log('[ROI Calculator] Lead captured:', { email, scenario, results });

  // Track lead event for scoring
  await trackLeadEvent(email, 'roi_emailed', { 
    roi: results.roi,
    annual_savings: results.annualSavings 
  });

  // Validate Resend API key
  if (!process.env.RESEND_API_KEY) {
    console.error('[ROI Calculator] ERROR: RESEND_API_KEY environment variable not set');
    return NextResponse.json({ 
      error: "Email service not configured",
      ok: false 
    }, { status: 500 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  console.log('[ROI Calculator] Using Resend API, key present:', !!process.env.RESEND_API_KEY);

    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #1a3d2e 0%, #0f2419 100%); color: #B1E3C7; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
    .header h1 { margin: 0; font-size: 28px; }
    .content { background: #ffffff; padding: 30px; border: 1px solid #e0e0e0; }
    .roi-box { background: linear-gradient(135deg, #B1E3C7 0%, #93c5fd 100%); color: #1a3d2e; padding: 30px; text-align: center; border-radius: 8px; margin: 20px 0; }
    .roi-number { font-size: 48px; font-weight: bold; margin: 10px 0; }
    .stats { display: grid; gap: 15px; margin: 20px 0; }
    .stat { background: #f8f9fa; padding: 15px; border-radius: 6px; border-left: 4px solid #B1E3C7; }
    .stat-label { font-size: 12px; color: #666; text-transform: uppercase; letter-spacing: 0.5px; }
    .stat-value { font-size: 24px; font-weight: bold; color: #1a3d2e; margin: 5px 0; }
    .assumptions { background: #f0f8f4; padding: 20px; border-radius: 6px; margin: 20px 0; }
    .assumptions ul { margin: 10px 0; padding-left: 20px; }
    .assumptions li { margin: 8px 0; }
    .cta { text-align: center; margin: 30px 0; }
    .button { display: inline-block; background: #B1E3C7; color: #1a3d2e; padding: 15px 40px; text-decoration: none; border-radius: 6px; font-weight: bold; }
    .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
  </style>
</head>
<body>
  <div class="header">
    <h1>Your IT ROI Analysis</h1>
    <p style="margin: 10px 0 0 0; opacity: 0.9;">Personalized for Your Business</p>
  </div>
  
  <div class="content">
    <p>Hi there,</p>
    <p>Here's your personalized IT optimization analysis. These numbers are based on the scenario you provided and conservative industry benchmarks.</p>
    
    <div class="roi-box">
      <div style="font-size: 14px; text-transform: uppercase; letter-spacing: 1px; opacity: 0.8;">Your Potential ROI</div>
      <div class="roi-number">${results.roi > 0 ? '+' : ''}${results.roi.toFixed(0)}%</div>
      <div style="font-size: 16px; margin-top: 10px;">
        <strong>${results.paybackMonths} month</strong> payback period
      </div>
    </div>

    <div class="stats">
      <div class="stat">
        <div class="stat-label">Annual Savings</div>
        <div class="stat-value">${formatCurrency(results.annualSavings)}</div>
      </div>
      <div class="stat">
        <div class="stat-label">Current Annual Cost</div>
        <div class="stat-value" style="color: #dc2626;">${formatCurrency(results.currentCost)}</div>
        <div style="font-size: 12px; color: #666;">Wasted on inefficiency</div>
      </div>
      <div class="stat">
        <div class="stat-label">3-Year Value</div>
        <div class="stat-value" style="color: #d4af37;">${formatCurrency(results.threeYearValue)}</div>
        <div style="font-size: 12px; color: #666;">Compounding savings over time</div>
      </div>
    </div>

    <h3 style="color: #1a3d2e; margin-top: 30px;">Your Inputs</h3>
    <ul style="list-style: none; padding: 0;">
      <li>📉 <strong>Downtime:</strong> ${scenario.downtime_hours_per_year} hours/year</li>
      <li>🔒 <strong>Security incidents:</strong> ${scenario.security_incidents_per_year}/year</li>
      <li>⚙️ <strong>Manual tasks:</strong> ${scenario.manual_task_hours_per_week} hours/week</li>
      <li>📋 <strong>Undocumented processes:</strong> ${scenario.undocumented_processes}</li>
    </ul>

    <div class="assumptions">
      <h4 style="margin: 0 0 10px 0; color: #1a3d2e;">Assumptions Used</h4>
      <ul style="margin: 0;">
        <li>✓ 75% downtime reduction through proper M365 configuration & documentation</li>
        <li>✓ 80% fewer security incidents via governance, MFA, and security training</li>
        <li>✓ 60% task automation using Power Automate, SharePoint, and workflows</li>
        <li>✓ 85% documentation improvement with process mapping and SOPs</li>
      </ul>
      <p style="font-size: 12px; color: #666; margin: 10px 0 0 0;">These are conservative industry estimates based on actual client results.</p>
    </div>

    <div class="cta">
      <p><strong>Ready to make this happen?</strong></p>
      <p>Book a free 30-minute discovery call to discuss your specific situation and see exactly how we can help.</p>
      <a href="https://polus-cs.com/book" class="button">Book Free Discovery Call →</a>
    </div>

    <p style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0; font-size: 14px; color: #666;">
      <strong>Questions?</strong> Reply to this email or call us at (405) 555-0123
    </p>
  </div>

  <div class="footer">
    <p><strong>Polus LLC</strong><br>
    Oklahoma City, OK<br>
    <a href="https://polus-cs.com" style="color: #B1E3C7;">polus-cs.com</a></p>
  </div>
</body>
</html>`;

    const textContent = `Your IT ROI Analysis

Hi there,

Here's your personalized IT optimization analysis:

YOUR POTENTIAL ROI: ${results.roi > 0 ? '+' : ''}${results.roi.toFixed(0)}%
Payback Period: ${results.paybackMonths} months

FINANCIAL BREAKDOWN:
- Annual Savings: ${formatCurrency(results.annualSavings)}
- Current Annual Cost: ${formatCurrency(results.currentCost)} (wasted on inefficiency)
- 3-Year Value: ${formatCurrency(results.threeYearValue)}

YOUR INPUTS:
- Downtime: ${scenario.downtime_hours_per_year} hours/year
- Security incidents: ${scenario.security_incidents_per_year}/year
- Manual tasks: ${scenario.manual_task_hours_per_week} hours/week
- Undocumented processes: ${scenario.undocumented_processes}

ASSUMPTIONS USED:
✓ 75% downtime reduction through proper M365 configuration & documentation
✓ 80% fewer security incidents via governance, MFA, and security training
✓ 60% task automation using Power Automate, SharePoint, and workflows
✓ 85% documentation improvement with process mapping and SOPs

These are conservative industry estimates based on actual client results.

READY TO MAKE THIS HAPPEN?

Book a free 30-minute discovery call to discuss your specific situation:
https://polus-cs.com/book

Questions? Reply to this email or call us at (405) 555-0123

---
Polus LLC
Oklahoma City, OK
https://polus-cs.com`;

    try {
      const { data, error } = await resend.emails.send({
        from: 'Polus <no-reply@polus-cs.com>',
        to: email,
        replyTo: 'jack.washmon@polus-cs.com',
        subject: `Your IT ROI Analysis: ${formatCurrency(results.annualSavings)} Annual Savings Potential`,
        html: htmlContent,
        text: textContent,
      });

      if (error) {
        console.error('[ROI Calculator] Resend API error:', error);
        return NextResponse.json({ 
          error: error.message || "Failed to send email",
          ok: false 
        }, { status: 500 });
      }

      console.log('[ROI Calculator] Email sent successfully to:', email, '| ID:', data?.id);

      return NextResponse.json({ 
        ok: true,
        message: "Results emailed successfully!"
      });

    } catch (error) {
      console.error('[ROI Calculator] Email send error:', error);
      
      if (error instanceof Error) {
        console.error('[ROI Calculator] Error details:', {
          message: error.message,
          stack: error.stack
        });
      }
      
      return NextResponse.json({ 
        error: error instanceof Error ? error.message : "Failed to send email",
        ok: false 
      }, { status: 500 });
    }

  } catch (outerError) {
    console.error('[ROI Calculator] Unexpected error:', outerError);
    return NextResponse.json({ 
      error: "Internal server error",
      ok: false 
    }, { status: 500 });
  }
}
