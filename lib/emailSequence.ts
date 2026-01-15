// Email sequence scheduler using Nodemailer + Resend SMTP
// This tracks when users should receive nurture emails
// Uses a simple JSON file or database to track email states

import nodemailer from 'nodemailer';
import { NURTURE_SEQUENCES } from './emailTemplates';

// Create email transporter using Resend SMTP
function createTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.resend.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false,
    auth: {
      user: process.env.SMTP_USER || 'resend',
      pass: process.env.SMTP_PASS || process.env.RESEND_API_KEY
    }
  });
}

export type EmailStatus = 'pending' | 'sent' | 'skipped' | 'failed';

export type NurtureContact = {
  email: string;
  name?: string;
  subscribed_at: string;
  has_booked_service: boolean;
  project_completed_at?: string;
  emails_sent: {
    day1_welcome?: EmailStatus;
    day3_education?: EmailStatus;
    day7_book_call?: EmailStatus;
    day14_still_thinking?: EmailStatus;
    day90_followup?: EmailStatus;
  };
};

/**
 * Add a contact to the nurture sequence
 * This should be called when someone downloads a resource or submits a contact form
 */
export async function addToNurtureSequence(
  email: string,
  name?: string
): Promise<void> {
  // Send Day 1 email immediately
  
  try {
    const transporter = createTransporter();
    
    await transporter.sendMail({
      from: process.env.EMAIL_FROM || 'jack.washmon@polus-cs.com',
      to: email,
      subject: NURTURE_SEQUENCES.day1_welcome.subject,
      html: NURTURE_SEQUENCES.day1_welcome.html,
      text: NURTURE_SEQUENCES.day1_welcome.text,
      replyTo: 'jack.washmon@polus-cs.com'
    });
    
    console.log(`Day 1 email sent to ${email}`);
    
    // TODO: Schedule follow-up emails (Day 3, 7, 14) using a job queue or cron
    // Options:
    // 1. Vercel Cron Jobs (check eligibility)
    // 2. Database + API route that checks daily
    // 3. External service like Trigger.dev or Inngest
    
  } catch (error) {
    console.error('Failed to send Day 1 email:', error);
    throw error;
  }
}

/**
 * Mark a contact as having booked a service
 * This prevents them from receiving the Day 14 "still thinking?" email
 */
export async function markServiceBooked(email: string): Promise<void> {
  // In production, update database record
  console.log(`Marking ${email} as service booked - will skip Day 14 email`);
  
  // TODO: Implement database update
  // UPDATE nurture_contacts SET has_booked_service = true WHERE email = ?
}

/**
 * Mark a project as completed for a contact
 * This triggers the Day 90 follow-up email
 */
export async function markProjectCompleted(
  email: string,
  completion_date: string
): Promise<void> {
  // In production, update database record
  console.log(`Marking project completed for ${email} on ${completion_date}`);
  
  // TODO: Implement database update and schedule Day 90 email
  // UPDATE nurture_contacts SET project_completed_at = ? WHERE email = ?
}

/**
 * Send scheduled emails (should be called daily via cron)
 * This checks all contacts and sends appropriate emails based on timing
 */
export async function sendScheduledEmails(): Promise<void> {
  // In production, query database for contacts who need emails
  console.log('Checking for scheduled emails to send...');
  
  // TODO: Implement daily email check
  // 1. Query contacts where:
  //    - subscribed_at was 3 days ago AND day3_education not sent
  //    - subscribed_at was 7 days ago AND day7_book_call not sent
  //    - subscribed_at was 14 days ago AND day14_still_thinking not sent AND has_booked_service = false
  //    - project_completed_at was 90 days ago AND day90_followup not sent
  //
  // 2. For each matching contact, send appropriate email via Resend
  // 3. Update their record with sent status
}

/**
 * Unsubscribe a contact from nurture emails
 */
export async function unsubscribeContact(email: string): Promise<void> {
  console.log(`Unsubscribing ${email} from nurture sequence`);
  
  // TODO: Implement database update
  // UPDATE nurture_contacts SET unsubscribed = true WHERE email = ?
}

// Example cron job API route handler
// Create this at: app/api/cron/send-nurture-emails/route.ts
/*
export async function GET(request: Request) {
  // Verify this is coming from Vercel Cron
  const authHeader = request.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return new Response('Unauthorized', { status: 401 });
  }

  try {
    await sendScheduledEmails();
    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ success: false, error: String(error) }, { status: 500 });
  }
}
*/

// Vercel cron configuration (add to vercel.json):
/*
{
  "crons": [{
    "path": "/api/cron/send-nurture-emails",
    "schedule": "0 10 * * *"
  }]
}
*/
