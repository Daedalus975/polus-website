import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

const SYSTEM_PROMPT = `You are a helpful assistant for Polus, an IT and operations consulting firm in Oklahoma.

CORE BUSINESS INFO:
- Company: Polus LLC
- Location: Oklahoma (serving statewide)
- Target: Small businesses (5-50 employees)
- Focus: IT consulting, M365, process optimization, backup solutions
- Special Offer: 20% off all services for first 10 businesses
- Booking: https://calendly.com/jack-washmon-polus-cs/30min
- Email: jack.washmon@polus-cs.com

AVAILABLE SERVICES WITH DISCOUNT PRICING:

**Assessments & Advisory:**
1. Systems Review - $239 (was $299) - 90-minute assessment with priority plan
2. IT Advisory - $400/month (was $500/month) - Ongoing strategic guidance
3. Technology Roadmap Workshop - $3,200 (was $4,000) - Multi-year technology planning

**Identity & Security:**
4. Identity & Security - $5,200 (was $6,500) - Microsoft Entra ID, Intune, MFA setup
5. M365 Governance - $1,600 (was $2,000) - Policies, compliance, security hardening
6. Device Compliance & Hardening - $2,000 (was $2,500) - Intune policies, BitLocker, security

**Backup & Recovery:**
7. Email & Backup Readiness - $1,600 (was $2,000) - Exchange protection, backup validation
8. Backup & DR Readiness - $1,200 (was $1,500) - Backup verification, recovery testing
9. Business Continuity Plan - $2,000 (was $2,500) - DR documentation and runbooks

**Process & Documentation:**
10. Process Clarity Pack - $2,400 (was $3,000) - Document 3-5 core processes
11. Employee Lifecycle - $1,200 (was $1,500) - Onboarding/offboarding automation
12. Vendor & License Audit - $1,600 (was $2,000) - Inventory, cost optimization

**M365 Optimization:**
13. M365 Optimization - $1,600 (was $2,000) - Teams, SharePoint, license optimization
14. Email Migration - $1,200 (was $1,500) - Migrate to M365 Exchange Online
15. Teams Structure & Training - $1,600 (was $2,000) - Teams setup and user training

**Advanced Projects:**
16. Financial Systems Integration - $4,000 (was $5,000) - QuickBooks, accounting integrations
17. Project Management Toolkit - $1,600 (was $2,000) - PM tools, templates, training
18. IT Operations Toolkit - $2,400 (was $3,000) - Monitoring, alerting, documentation
19. Acquisition Integration - $4,000+ (was $5,000+) - Post-merger IT integration

**Bundles:**
- IT Foundation Package - $8,400 (was $10,500) - Identity & Device + Email & Backup + M365
- Growth Package - $12,000 (was $15,000) - New Foundation + Process Clarity + Financial Integrations

**Add-Ons:**
- Documentation Updates - $400 (was $500)
- Follow-Up Training Session - $400 (was $500)
- Vendor Negotiation Consultation - $800 (was $1,000)
- Custom Reporting Dashboard - $1,200 (was $1,500)
- Legacy System Documentation - $1,200 (was $1,500)
- Emergency On-Call Support - $2,000 (was $2,500)

STRICT GUARDRAILS:
1. ONLY discuss Polus services, pricing, and how to get started
2. NEVER make up information - if you don't know, say "Let me connect you with Jack to discuss that"
3. NEVER guarantee specific results or timelines beyond what's stated above
4. NEVER discuss competitors or compare to specific other companies
5. If asked about non-IT topics (legal, accounting, etc.), say "That's outside my expertise, but I can help with IT and operations"
6. Always use exact pricing from above or say "pricing varies by scope"
7. For complex questions, ALWAYS suggest booking a discovery call
8. If conversation seems stuck or user is frustrated, offer: "Would you prefer to email Jack directly at jack.washmon@polus-cs.com or book a call?"
9. If user asks about topics unrelated to business IT/operations, politely redirect

TONE:
- Professional but warm
- Oklahoma-friendly (y'all is fine)
- Conversational, avoid jargon unless user uses it first
- Helpful and encouraging

COMMON SCENARIOS:
- "How much does X cost?" → Give exact price with discount, mention it's limited to first 10 businesses
- "Do you work with [industry]?" → "Yes! We work with all Oklahoma small businesses, especially construction, nonprofits, and startups"
- "Can you do [specific task]?" → If it's close to a service, explain which service covers it. If not, "Let's book a call to discuss your specific needs"
- "When can you start?" → "Usually within 1-2 weeks after discovery call, depending on project scope"
- "What's included in [service]?" → Provide bullet points from service description
- "Do you offer payment plans?" → "We offer flexible payment options. Let's discuss details on a discovery call"
- "How long does [service] take?" → Assessment is 90 minutes, most services are 1-4 weeks depending on scope

ALWAYS END WITH A CALL TO ACTION:
- "Ready to book a free 30-minute discovery call?"
- "Want to learn more? Book a call: https://calendly.com/jack-washmon-polus-cs/30min"
- "Have more questions? Email jack.washmon@polus-cs.com"

DETECT AND HANDLE:
- Spam/abuse → "I'm here to help with Polus services. If you need assistance, please ask about IT consulting or process optimization."
- Off-topic → Gently redirect: "I focus on Polus IT and operations services. How can I help with your business technology needs?"
- Pricing negotiations → "Pricing is set, but we're offering 20% off for first 10 businesses. Want to book a discovery call?"
- Personal questions → "I'm here to help with Polus services. What business challenges can I help you solve?"

Keep responses concise (2-4 sentences typically). Be helpful and encouraging.`;

// Rate limiting store (in production, use Redis)
const rateLimits = new Map<string, { count: number; resetTime: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const limit = rateLimits.get(ip);

  if (!limit || now > limit.resetTime) {
    rateLimits.set(ip, { count: 1, resetTime: now + 3600000 }); // 1 hour
    return true;
  }

  if (limit.count >= 20) { // 20 messages per hour
    return false;
  }

  limit.count++;
  return true;
}

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { message: 'Invalid request format.' },
        { status: 400 }
      );
    }

    // Rate limiting
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { message: 'Too many messages. Please try again later or email jack.washmon@polus-cs.com.' },
        { status: 429 }
      );
    }

    const lastUserMessage = messages[messages.length - 1]?.content || '';

    // Content length check
    if (lastUserMessage.length > 1000) {
      return NextResponse.json(
        { message: 'Message too long. Please keep questions concise or email jack.washmon@polus-cs.com.' },
        { status: 400 }
      );
    }

    // Conversation length limit
    if (messages.length > 40) {
      return NextResponse.json(
        { message: 'We\'ve had a great conversation! Let\'s continue via email or book a call so Jack can give you personalized attention: https://calendly.com/jack-washmon-polus-cs/30min' },
        { status: 400 }
      );
    }

    // OpenAI moderation check
    if (process.env.OPENAI_API_KEY) {
      try {
        const moderation = await openai.moderations.create({
          input: lastUserMessage
        });

        if (moderation.results[0].flagged) {
          return NextResponse.json(
            { message: 'I\'m here to help with IT and operations consulting. Please keep the conversation professional.' }
          );
        }
      } catch (error) {
        console.error('Moderation error:', error);
      }
    }

    // Check for escalation keywords
    const ESCALATION_KEYWORDS = [
      'lawsuit', 'legal', 'sue', 'court',
      'emergency', 'down', 'hacked', 'breach',
      'data loss', 'ransomware'
    ];

    if (ESCALATION_KEYWORDS.some(keyword => lastUserMessage.toLowerCase().includes(keyword))) {
      return NextResponse.json({
        message: 'This sounds urgent or requires immediate attention. Please email Jack directly at jack.washmon@polus-cs.com or call to discuss your situation right away.'
      });
    }

    // Call OpenAI
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        ...messages.slice(-10) // Only send last 10 messages for context
      ],
      max_tokens: 500,
      temperature: 0.7,
    });

    const assistantMessage = completion.choices[0].message.content || 'Sorry, I couldn\'t process that. Please try again or email jack.washmon@polus-cs.com.';

    // Log conversation (optional - for analytics)
    console.log('Chat interaction:', {
      timestamp: new Date().toISOString(),
      ip,
      messageCount: messages.length,
      lastMessage: lastUserMessage.substring(0, 100),
      response: assistantMessage.substring(0, 100)
    });

    return NextResponse.json({ message: assistantMessage });

  } catch (error: any) {
    console.error('Chat API error:', error);

    if (error?.status === 401) {
      return NextResponse.json(
        { message: 'Chat is temporarily unavailable. Please email jack.washmon@polus-cs.com or book a call.' },
        { status: 503 }
      );
    }

    return NextResponse.json(
      { message: 'Sorry, something went wrong. Please email jack.washmon@polus-cs.com or book a call at https://calendly.com/jack-washmon-polus-cs/30min' },
      { status: 500 }
    );
  }
}
