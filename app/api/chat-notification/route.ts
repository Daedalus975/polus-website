import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import nodemailer from 'nodemailer';

const NotificationSchema = z.object({
  messages: z.array(z.object({
    role: z.enum(['user', 'assistant']),
    content: z.string()
  })),
  userEmail: z.string().email().optional()
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { messages, userEmail } = NotificationSchema.parse(body);

    // Filter to only send notifications for substantial conversations
    const userMessageCount = messages.filter(m => m.role === 'user').length;
    if (userMessageCount < 3) {
      return NextResponse.json({ success: true, message: 'Conversation too short for notification' });
    }

    // Generate transcript
    const transcript = messages
      .map(m => `[${m.role.toUpperCase()}]: ${m.content}`)
      .join('\n\n');

    const timestamp = new Date().toLocaleString('en-US', { 
      timeZone: 'America/Chicago',
      dateStyle: 'full',
      timeStyle: 'short'
    });

    const emailBody = `
New Chat Conversation Alert
===========================

Time: ${timestamp}
User Email: ${userEmail || 'Not provided'}
Message Count: ${messages.length} (${userMessageCount} from user)

TRANSCRIPT:
-----------

${transcript}

---
This is an automated notification from your Polus website chat system.
`.trim();

    // Send email via Resend (existing setup)
    const inbox = process.env.BUSINESS_INBOX_EMAIL;
    const host = process.env.SMTP_HOST;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const from = process.env.SMTP_FROM || 'Polus <no-reply@polus-cs.com>';

    if (!inbox || !host || !user || !pass) {
      console.error('Missing email configuration for chat notification');
      return NextResponse.json({ 
        success: false, 
        message: 'Email not configured' 
      }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host,
      port: Number(process.env.SMTP_PORT || 587),
      secure: false,
      auth: { user, pass }
    });

    await transporter.sendMail({
      from,
      to: inbox,
      replyTo: userEmail || undefined,
      subject: `[CHAT] ${userMessageCount} messages${userEmail ? ` from ${userEmail}` : ' (no email)'}`,
      text: emailBody
    });

    return NextResponse.json({ 
      success: true, 
      message: 'Notification sent' 
    });

  } catch (error: any) {
    console.error('Chat notification error:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, message: 'Invalid request format' },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: false, message: 'Failed to send notification' },
      { status: 500 }
    );
  }
}
