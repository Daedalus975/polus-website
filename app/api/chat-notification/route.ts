import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

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

    // TODO: In production, integrate with your email provider (SendGrid, Mailgun, Resend, etc.)
    // Example with SendGrid:
    // await sendgrid.send({
    //   to: 'jack.washmon@polus-cs.com',
    //   from: 'notifications@polus-cs.com',
    //   subject: `New Chat: ${userMessageCount} messages${userEmail ? ` from ${userEmail}` : ''}`,
    //   text: emailBody,
    //   html: emailBody.replace(/\n/g, '<br>')
    // });

    // For now, just log it (you'll see this in Vercel logs)
    console.log('=== CHAT NOTIFICATION ===');
    console.log(emailBody);
    console.log('========================');

    return NextResponse.json({ 
      success: true, 
      message: 'Notification logged (production email pending)' 
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
