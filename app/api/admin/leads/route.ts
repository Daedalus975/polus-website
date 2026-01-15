import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

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

async function getNurtureContacts(): Promise<NurtureContact[]> {
  const dataDir = path.join(process.cwd(), 'data');
  const filePath = path.join(dataDir, 'nurture-contacts.json');
  
  try {
    const content = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(content);
  } catch {
    return [];
  }
}

export async function GET() {
  try {
    const [leads, nurtureContacts] = await Promise.all([
      getLeads(),
      getNurtureContacts()
    ]);

    // Merge lead data with nurture data
    const mergedLeads = leads.map(lead => {
      const nurture = nurtureContacts.find(n => n.email.toLowerCase() === lead.email.toLowerCase());
      return {
        ...lead,
        emails_sent: nurture?.emails_sent,
        nurture_subscribed_at: nurture?.subscribed_at
      };
    });

    // Add nurture contacts not in leads
    const existingEmails = new Set(leads.map(l => l.email.toLowerCase()));
    const nurtureOnlyContacts = nurtureContacts
      .filter(n => !existingEmails.has(n.email.toLowerCase()))
      .map(n => ({
        email: n.email,
        name: n.name,
        source: 'checklist_download',
        created_at: n.subscribed_at,
        lead_score: n.lead_score || 5,
        events: [{
          type: 'checklist_downloaded',
          timestamp: n.subscribed_at
        }],
        has_booked_service: n.has_booked_service,
        booking_date: n.booking_date,
        emails_sent: n.emails_sent,
        nurture_subscribed_at: n.subscribed_at
      }));

    const allLeads = [...mergedLeads, ...nurtureOnlyContacts].sort((a, b) => 
      new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    );

    return NextResponse.json({ 
      ok: true,
      leads: allLeads,
      total: allLeads.length
    });

  } catch (error) {
    console.error('[Admin API] Failed to load leads:', error);
    return NextResponse.json({ 
      error: 'Failed to load leads',
      ok: false 
    }, { status: 500 });
  }
}
