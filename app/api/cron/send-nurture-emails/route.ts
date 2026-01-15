import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { NURTURE_SEQUENCES } from '@/lib/emailTemplates';
import { promises as fs } from 'fs';
import path from 'path';

type NurtureContact = {
  email: string;
  name?: string;
  subscribed_at: string;
  has_booked_service: boolean;
  emails_sent: {
    day1_welcome?: 'sent' | 'failed';
    day3_education?: 'pending' | 'sent' | 'failed';
    day7_book_call?: 'pending' | 'sent' | 'failed';
    day14_still_thinking?: 'pending' | 'sent' | 'skipped' | 'failed';
  };
};

const CONTACTS_FILE = path.join(process.cwd(), 'data', 'nurture-contacts.json');

async function getContacts(): Promise<NurtureContact[]> {
  try {
    const data = await fs.readFile(CONTACTS_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

async function saveContacts(contacts: NurtureContact[]): Promise<void> {
  await fs.mkdir(path.dirname(CONTACTS_FILE), { recursive: true });
  await fs.writeFile(CONTACTS_FILE, JSON.stringify(contacts, null, 2));
}

function daysSince(dateString: string): number {
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - date.getTime());
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}

export async function GET(request: NextRequest) {
  // Simple auth - check for cron secret (optional, for security)
  const authHeader = request.headers.get('authorization');
  if (process.env.CRON_SECRET && authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const contacts = await getContacts();
    let emailsSent = 0;
    let errors = 0;

    const host = process.env.SMTP_HOST;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const from = process.env.SMTP_FROM || 'Polus <no-reply@polus-cs.com>';

    if (!host || !user || !pass) {
      return NextResponse.json({ 
        error: 'SMTP not configured' 
      }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host,
      port: Number(process.env.SMTP_PORT || 587),
      secure: false,
      auth: { user, pass }
    });

    for (const contact of contacts) {
      const daysSinceSubscription = daysSince(contact.subscribed_at);

      // Day 3 Education Email
      if (
        daysSinceSubscription >= 3 && 
        contact.emails_sent.day3_education === 'pending'
      ) {
        try {
          await transporter.sendMail({
            from,
            to: contact.email,
            replyTo: 'jack.washmon@polus-cs.com',
            subject: NURTURE_SEQUENCES.day3_education.subject,
            html: NURTURE_SEQUENCES.day3_education.html,
            text: NURTURE_SEQUENCES.day3_education.text
          });
          contact.emails_sent.day3_education = 'sent';
          emailsSent++;
          console.log(`Day 3 email sent to ${contact.email}`);
        } catch (error) {
          contact.emails_sent.day3_education = 'failed';
          errors++;
          console.error(`Failed Day 3 email to ${contact.email}:`, error);
        }
      }

      // Day 7 Book Call Email
      if (
        daysSinceSubscription >= 7 && 
        contact.emails_sent.day7_book_call === 'pending'
      ) {
        try {
          await transporter.sendMail({
            from,
            to: contact.email,
            replyTo: 'jack.washmon@polus-cs.com',
            subject: NURTURE_SEQUENCES.day7_book_call.subject,
            html: NURTURE_SEQUENCES.day7_book_call.html,
            text: NURTURE_SEQUENCES.day7_book_call.text
          });
          contact.emails_sent.day7_book_call = 'sent';
          emailsSent++;
          console.log(`Day 7 email sent to ${contact.email}`);
        } catch (error) {
          contact.emails_sent.day7_book_call = 'failed';
          errors++;
          console.error(`Failed Day 7 email to ${contact.email}:`, error);
        }
      }

      // Day 14 Still Thinking Email (only if they haven't booked)
      if (
        daysSinceSubscription >= 14 && 
        contact.emails_sent.day14_still_thinking === 'pending'
      ) {
        if (contact.has_booked_service) {
          contact.emails_sent.day14_still_thinking = 'skipped';
          console.log(`Day 14 email skipped for ${contact.email} (booked service)`);
        } else {
          try {
            await transporter.sendMail({
              from,
              to: contact.email,
              replyTo: 'jack.washmon@polus-cs.com',
              subject: NURTURE_SEQUENCES.day14_still_thinking.subject,
              html: NURTURE_SEQUENCES.day14_still_thinking.html,
              text: NURTURE_SEQUENCES.day14_still_thinking.text
            });
            contact.emails_sent.day14_still_thinking = 'sent';
            emailsSent++;
            console.log(`Day 14 email sent to ${contact.email}`);
          } catch (error) {
            contact.emails_sent.day14_still_thinking = 'failed';
            errors++;
            console.error(`Failed Day 14 email to ${contact.email}:`, error);
          }
        }
      }
    }

    // Save updated contact statuses
    await saveContacts(contacts);

    return NextResponse.json({ 
      success: true, 
      emailsSent,
      errors,
      contactsChecked: contacts.length
    });

  } catch (error: any) {
    console.error('Cron job error:', error);
    return NextResponse.json({ 
      success: false, 
      error: error.message 
    }, { status: 500 });
  }
}
