import fs from "fs/promises";
import path from "path";

export type Lead = {
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

// Lead scoring points
export const SCORE_VALUES = {
  checklist_downloaded: 5,
  roi_calculated: 10,
  roi_emailed: 15,
  chat_rated_helpful: 10,
  chat_email_provided: 8,
  book_cta_clicked: 20,
  service_viewed: 2,
  multiple_services_viewed: 7, // 3+ services
  faq_interaction: 1,
  comparison_table_viewed: 3,
  booking_created: 20,
  quote_submitted: 15,
  contact_form_submitted: 10
};

async function getLeadsFilePath(): Promise<string> {
  const dataDir = path.join(process.cwd(), 'data');
  await fs.mkdir(dataDir, { recursive: true });
  return path.join(dataDir, 'leads.json');
}

export async function getLeads(): Promise<Lead[]> {
  try {
    const filePath = await getLeadsFilePath();
    const content = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(content);
  } catch {
    return [];
  }
}

export async function saveLeads(leads: Lead[]): Promise<void> {
  const filePath = await getLeadsFilePath();
  await fs.writeFile(filePath, JSON.stringify(leads, null, 2));
}

export async function trackLeadEvent(
  email: string,
  eventType: keyof typeof SCORE_VALUES,
  metadata?: Record<string, unknown>,
  name?: string
): Promise<void> {
  const leads = await getLeads();
  const leadIndex = leads.findIndex(l => l.email.toLowerCase() === email.toLowerCase());
  
  const event = {
    type: eventType,
    timestamp: new Date().toISOString(),
    metadata
  };

  if (leadIndex !== -1) {
    // Update existing lead
    leads[leadIndex].events.push(event);
    leads[leadIndex].lead_score += SCORE_VALUES[eventType] || 0;
    
    // Check for multiple services viewed
    if (eventType === 'service_viewed') {
      const serviceViews = leads[leadIndex].events.filter(e => e.type === 'service_viewed').length;
      if (serviceViews === 3) {
        // Give bonus points for viewing 3+ services
        leads[leadIndex].lead_score += SCORE_VALUES.multiple_services_viewed - (SCORE_VALUES.service_viewed * 3);
        leads[leadIndex].events.push({
          type: 'multiple_services_viewed',
          timestamp: new Date().toISOString(),
          metadata: { count: serviceViews }
        });
      }
    }
    
    if (name && !leads[leadIndex].name) {
      leads[leadIndex].name = name;
    }
  } else {
    // Create new lead
    leads.push({
      email,
      name,
      source: eventType,
      created_at: new Date().toISOString(),
      lead_score: SCORE_VALUES[eventType] || 0,
      events: [event],
      has_booked_service: false
    });
  }

  await saveLeads(leads);
}

export async function markLeadAsBooked(email: string): Promise<void> {
  const leads = await getLeads();
  const leadIndex = leads.findIndex(l => l.email.toLowerCase() === email.toLowerCase());
  
  if (leadIndex !== -1) {
    leads[leadIndex].has_booked_service = true;
    leads[leadIndex].booking_date = new Date().toISOString();
    leads[leadIndex].lead_score += SCORE_VALUES.booking_created;
    leads[leadIndex].events.push({
      type: 'booking_created',
      timestamp: new Date().toISOString()
    });
    
    await saveLeads(leads);
  }
}

export function calculateLeadScore(events: Array<{ type: string }>): number {
  let score = 0;
  const serviceViews = events.filter(e => e.type === 'service_viewed').length;
  
  for (const event of events) {
    score += SCORE_VALUES[event.type as keyof typeof SCORE_VALUES] || 0;
  }
  
  // Add bonus for multiple service views
  if (serviceViews >= 3) {
    score += SCORE_VALUES.multiple_services_viewed - (SCORE_VALUES.service_viewed * 3);
  }
  
  return score;
}
