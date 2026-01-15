import { NextResponse } from "next/server";
import { z } from "zod";
import nodemailer from "nodemailer";
import { NURTURE_SEQUENCES } from "@/lib/emailTemplates";
import { promises as fs } from 'fs';
import path from 'path';

const Schema = z.object({ 
  email: z.string().email(), 
  name: z.string().optional(),
  honeypot: z.string().optional() 
});

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

// Store contacts in JSON file (in production, use database)
const CONTACTS_FILE = path.join(process.cwd(), 'data', 'nurture-contacts.json');

async function getContacts(): Promise<NurtureContact[]> {
  try {
    await fs.mkdir(path.dirname(CONTACTS_FILE), { recursive: true });
    const data = await fs.readFile(CONTACTS_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

async function saveContact(contact: NurtureContact): Promise<void> {
  const contacts = await getContacts();
  const existing = contacts.findIndex(c => c.email === contact.email);
  
  if (existing >= 0) {
    contacts[existing] = contact;
  } else {
    contacts.push(contact);
  }
  
  await fs.mkdir(path.dirname(CONTACTS_FILE), { recursive: true });
  await fs.writeFile(CONTACTS_FILE, JSON.stringify(contacts, null, 2));
}

export async function POST(req: Request) {
  const data = await req.json().catch(() => null);
  if (!data) return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });

  if (data.honeypot) return NextResponse.json({ ok: true });

  const parsed = Schema.safeParse(data);
  if (!parsed.success) return NextResponse.json({ error: "Validation failed" }, { status: 400 });

  const { email, name } = parsed.data;

  // Send Day 1 welcome email immediately
  try {
    const host = process.env.SMTP_HOST;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const from = process.env.SMTP_FROM || 'Polus <no-reply@polus-cs.com>';

    if (host && user && pass) {
      const transporter = nodemailer.createTransport({
        host,
        port: Number(process.env.SMTP_PORT || 587),
        secure: false,
        auth: { user, pass }
      });

      await transporter.sendMail({
        from,
        to: email,
        replyTo: 'jack.washmon@polus-cs.com',
        subject: NURTURE_SEQUENCES.day1_welcome.subject,
        html: NURTURE_SEQUENCES.day1_welcome.html,
        text: NURTURE_SEQUENCES.day1_welcome.text
      });

      // Save contact for future nurture emails
      await saveContact({
        email,
        name,
        subscribed_at: new Date().toISOString(),
        has_booked_service: false,
        emails_sent: {
          day1_welcome: 'sent',
          day3_education: 'pending',
          day7_book_call: 'pending',
          day14_still_thinking: 'pending'
        }
      });

      console.log(`Day 1 email sent to ${email}`);
    } else {
      console.warn('SMTP not configured, skipping welcome email');
    }
  } catch (error) {
    console.error('Failed to send welcome email:', error);
    // Don't fail the request if email fails
  }

  return NextResponse.json({ ok: true, downloadUrl: "/checklists/process-it-readiness-checklist.pdf" });
}
