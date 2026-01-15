// Email nurture sequence templates for Resend integration
// Day 1: Welcome + Resource Delivery
// Day 3: Educational content
// Day 7: Book call CTA
// Day 14: "Still thinking?" (if no service selected)
// Day 90 post-project: Check-in

export type EmailTemplate = {
  subject: string;
  html: string;
  text: string;
};

export const NURTURE_SEQUENCES = {
  // Triggered immediately after checklist download
  day1_welcome: {
    subject: "Your Client Readiness Checklist + Next Steps",
    html: `
      <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 600px; margin: 0 auto; color: #2d3748;">
        <div style="padding: 24px; background: #116238; color: white;">
          <h1 style="margin: 0; font-size: 24px;">Thanks for downloading!</h1>
        </div>
        
        <div style="padding: 32px 24px; background: #f8fafc;">
          <p style="margin: 0 0 16px; font-size: 16px; line-height: 1.6;">
            Hi there,
          </p>
          
          <p style="margin: 0 0 16px; font-size: 16px; line-height: 1.6;">
            Your <strong>Client Readiness Checklist</strong> is attached (or accessible at <a href="https://www.polus-cs.com/checklist" style="color: #b1e3c7;">www.polus-cs.com/checklist</a>).
          </p>
          
          <p style="margin: 0 0 16px; font-size: 16px; line-height: 1.6;">
            This checklist helps you prepare for any IT consulting engagement—whether with us or another provider. 
            Having this information ready saves time and gets you better results.
          </p>
          
          <div style="margin: 32px 0; padding: 20px; background: white; border-left: 4px solid #b1e3c7;">
            <h2 style="margin: 0 0 12px; font-size: 18px; color: #116238;">Quick wins to start with:</h2>
            <ul style="margin: 0; padding-left: 20px;">
              <li style="margin-bottom: 8px;">Review your Microsoft 365 admin portal access—make sure you can log in</li>
              <li style="margin-bottom: 8px;">List your top 3 IT or process pain points</li>
              <li style="margin-bottom: 8px;">Identify who else needs to be in the conversation (stakeholders)</li>
            </ul>
          </div>
          
          <p style="margin: 0 0 24px; font-size: 16px; line-height: 1.6;">
            If you're ready to talk through your specific challenges, our discovery calls are free and usually take 30 minutes.
          </p>
          
          <div style="text-align: center;">
            <a href="https://www.polus-cs.com/book" style="display: inline-block; padding: 14px 32px; background: #d4af37; color: #002412; text-decoration: none; border-radius: 8px; font-weight: 600;">
              Book Free Discovery Call
            </a>
          </div>
          
          <p style="margin: 32px 0 0; font-size: 14px; color: #64748b;">
            — Jack Washmon<br>
            Polus LLC<br>
            <a href="mailto:jack.washmon@polus-cs.com" style="color: #b1e3c7;">jack.washmon@polus-cs.com</a>
          </p>
        </div>
      </div>
    `,
    text: `Your Client Readiness Checklist + Next Steps

Hi there,

Your Client Readiness Checklist is accessible at https://www.polus-cs.com/checklist.

This checklist helps you prepare for any IT consulting engagement—whether with us or another provider. Having this information ready saves time and gets you better results.

Quick wins to start with:
- Review your Microsoft 365 admin portal access—make sure you can log in
- List your top 3 IT or process pain points
- Identify who else needs to be in the conversation (stakeholders)

If you're ready to talk through your specific challenges, our discovery calls are free and usually take 30 minutes.

Book a call: https://www.polus-cs.com/book

— Jack Washmon
Polus LLC
jack.washmon@polus-cs.com`
  },

  // Day 3: Educational content
  day3_education: {
    subject: "3 Mistakes Oklahoma Businesses Make with IT",
    html: `
      <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 600px; margin: 0 auto; color: #2d3748;">
        <div style="padding: 24px; background: #116238; color: white;">
          <h1 style="margin: 0; font-size: 24px;">3 Common IT Mistakes</h1>
        </div>
        
        <div style="padding: 32px 24px; background: #f8fafc;">
          <p style="margin: 0 0 16px; font-size: 16px; line-height: 1.6;">
            Hi there,
          </p>
          
          <p style="margin: 0 0 24px; font-size: 16px; line-height: 1.6;">
            Over the past few years working with Oklahoma small businesses, I've seen three patterns repeat:
          </p>
          
          <div style="margin: 24px 0; padding: 20px; background: white; border-radius: 8px;">
            <h2 style="margin: 0 0 12px; font-size: 18px; color: #116238;">1. Delaying Microsoft 365 governance</h2>
            <p style="margin: 0; font-size: 15px; line-height: 1.6; color: #4a5568;">
              Teams/SharePoint sprawl gets worse every month. By the time businesses address it, they're looking at 200+ 
              teams, inconsistent permissions, and no one knows where files are. Early governance saves thousands later.
            </p>
          </div>
          
          <div style="margin: 24px 0; padding: 20px; background: white; border-radius: 8px;">
            <h2 style="margin: 0 0 12px; font-size: 18px; color: #116238;">2. No documented processes</h2>
            <p style="margin: 0; font-size: 15px; line-height: 1.6; color: #4a5568;">
              Critical workflows live in one person's head. When they're out sick or leave, the team scrambles. 
              Simple SOPs prevent this—and they don't have to be complicated.
            </p>
          </div>
          
          <div style="margin: 24px 0; padding: 20px; background: white; border-radius: 8px;">
            <h2 style="margin: 0 0 12px; font-size: 18px; color: #116238;">3. Assuming backups work</h2>
            <p style="margin: 0; font-size: 15px; line-height: 1.6; color: #4a5568;">
              Having a backup system ≠ having backups that work. Regular restore testing is the only way to know. 
              We've seen businesses discover gaps after an incident—not before.
            </p>
          </div>
          
          <p style="margin: 24px 0 0; font-size: 16px; line-height: 1.6;">
            Sound familiar? These are fixable. Most take 2-6 weeks to address properly.
          </p>
          
          <p style="margin: 24px 0 0; font-size: 16px; line-height: 1.6;">
            If any of these resonate, let's talk—discovery calls are free.
          </p>
          
          <div style="text-align: center; margin: 32px 0;">
            <a href="https://www.polus-cs.com/book" style="display: inline-block; padding: 14px 32px; background: #d4af37; color: #002412; text-decoration: none; border-radius: 8px; font-weight: 600;">
              Book a Discovery Call
            </a>
          </div>
          
          <p style="margin: 32px 0 0; font-size: 14px; color: #64748b;">
            — Jack Washmon<br>
            Polus LLC
          </p>
        </div>
      </div>
    `,
    text: `3 Common IT Mistakes

Hi there,

Over the past few years working with Oklahoma small businesses, I've seen three patterns repeat:

1. Delaying Microsoft 365 governance
Teams/SharePoint sprawl gets worse every month. By the time businesses address it, they're looking at 200+ teams, inconsistent permissions, and no one knows where files are. Early governance saves thousands later.

2. No documented processes
Critical workflows live in one person's head. When they're out sick or leave, the team scrambles. Simple SOPs prevent this—and they don't have to be complicated.

3. Assuming backups work
Having a backup system ≠ having backups that work. Regular restore testing is the only way to know. We've seen businesses discover gaps after an incident—not before.

Sound familiar? These are fixable. Most take 2-6 weeks to address properly.

If any of these resonate, let's talk—discovery calls are free.

Book a call: https://www.polus-cs.com/book

— Jack Washmon
Polus LLC`
  },

  // Day 7: Call to action
  day7_book_call: {
    subject: "Ready to fix your IT systems?",
    html: `
      <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 600px; margin: 0 auto; color: #2d3748;">
        <div style="padding: 24px; background: #116238; color: white;">
          <h1 style="margin: 0; font-size: 24px;">Let's talk about your systems</h1>
        </div>
        
        <div style="padding: 32px 24px; background: #f8fafc;">
          <p style="margin: 0 0 16px; font-size: 16px; line-height: 1.6;">
            Hi there,
          </p>
          
          <p style="margin: 0 0 16px; font-size: 16px; line-height: 1.6;">
            You downloaded our checklist about a week ago. I wanted to follow up and see if you're still thinking about 
            improving your IT setup or operations.
          </p>
          
          <div style="margin: 32px 0; padding: 24px; background: white; border-left: 4px solid #d4af37;">
            <h2 style="margin: 0 0 12px; font-size: 18px;">Here's what happens on a discovery call:</h2>
            <ul style="margin: 0; padding-left: 20px; font-size: 15px; line-height: 1.8;">
              <li style="margin-bottom: 8px;">We talk through your current challenges (15 min)</li>
              <li style="margin-bottom: 8px;">I ask clarifying questions to understand your environment (10 min)</li>
              <li style="margin-bottom: 8px;">I recommend what to prioritize and what services fit (5 min)</li>
            </ul>
            <p style="margin: 16px 0 0; font-size: 15px; color: #4a5568;">
              No sales pitch. No pressure. You'll leave knowing exactly what to do next—whether that's hiring us, 
              doing it yourself, or something else.
            </p>
          </div>
          
          <p style="margin: 24px 0 0; font-size: 16px; line-height: 1.6;">
            Calls are 30 minutes and free. Most clients book within a few days of their first inquiry.
          </p>
          
          <div style="text-align: center; margin: 32px 0;">
            <a href="https://www.polus-cs.com/book" style="display: inline-block; padding: 14px 32px; background: #d4af37; color: #002412; text-decoration: none; border-radius: 8px; font-weight: 600;">
              Book Your Discovery Call
            </a>
          </div>
          
          <p style="margin: 32px 0 0; font-size: 14px; color: #64748b;">
            — Jack Washmon<br>
            Polus LLC<br>
            <a href="mailto:jack.washmon@polus-cs.com" style="color: #b1e3c7;">jack.washmon@polus-cs.com</a>
          </p>
        </div>
      </div>
    `,
    text: `Let's talk about your systems

Hi there,

You downloaded our checklist about a week ago. I wanted to follow up and see if you're still thinking about improving your IT setup or operations.

Here's what happens on a discovery call:
- We talk through your current challenges (15 min)
- I ask clarifying questions to understand your environment (10 min)
- I recommend what to prioritize and what services fit (5 min)

No sales pitch. No pressure. You'll leave knowing exactly what to do next—whether that's hiring us, doing it yourself, or something else.

Calls are 30 minutes and free. Most clients book within a few days of their first inquiry.

Book your call: https://www.polus-cs.com/book

— Jack Washmon
Polus LLC
jack.washmon@polus-cs.com`
  },

  // Day 14: Final follow-up (if no service selected)
  day14_still_thinking: {
    subject: "Still thinking about your IT project?",
    html: `
      <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 600px; margin: 0 auto; color: #2d3748;">
        <div style="padding: 24px; background: #116238; color: white;">
          <h1 style="margin: 0; font-size: 24px;">Quick check-in</h1>
        </div>
        
        <div style="padding: 32px 24px; background: #f8fafc;">
          <p style="margin: 0 0 16px; font-size: 16px; line-height: 1.6;">
            Hi there,
          </p>
          
          <p style="margin: 0 0 16px; font-size: 16px; line-height: 1.6;">
            I haven't heard from you since you grabbed our checklist a couple weeks ago. That's totally fine—most businesses 
            are juggling priorities, and IT work often gets pushed.
          </p>
          
          <p style="margin: 0 0 24px; font-size: 16px; line-height: 1.6;">
            I wanted to check in one last time: <strong>Are you still thinking about improving your IT setup, processes, 
            or M365 environment?</strong>
          </p>
          
          <div style="margin: 32px 0; padding: 20px; background: white; border-radius: 8px;">
            <h2 style="margin: 0 0 12px; font-size: 18px; color: #116238;">If yes:</h2>
            <p style="margin: 0 0 16px; font-size: 15px; line-height: 1.6; color: #4a5568;">
              Book a discovery call and let's figure out what makes sense for your business. No obligation, just clarity.
            </p>
            <a href="https://www.polus-cs.com/book" style="color: #b1e3c7; text-decoration: underline;">Book a call →</a>
          </div>
          
          <div style="margin: 32px 0; padding: 20px; background: white; border-radius: 8px;">
            <h2 style="margin: 0 0 12px; font-size: 18px; color: #116238;">If no (or not yet):</h2>
            <p style="margin: 0; font-size: 15px; line-height: 1.6; color: #4a5568;">
              That's okay too. I won't keep emailing you, but feel free to reach out anytime—my contact info is below.
            </p>
          </div>
          
          <p style="margin: 32px 0 0; font-size: 16px; line-height: 1.6;">
            Either way, thanks for downloading our checklist. Hope it was useful.
          </p>
          
          <p style="margin: 32px 0 0; font-size: 14px; color: #64748b;">
            — Jack Washmon<br>
            Polus LLC<br>
            <a href="mailto:jack.washmon@polus-cs.com" style="color: #b1e3c7;">jack.washmon@polus-cs.com</a><br>
            <a href="https://www.polus-cs.com" style="color: #b1e3c7;">www.polus-cs.com</a>
          </p>
        </div>
      </div>
    `,
    text: `Quick check-in

Hi there,

I haven't heard from you since you grabbed our checklist a couple weeks ago. That's totally fine—most businesses are juggling priorities, and IT work often gets pushed.

I wanted to check in one last time: Are you still thinking about improving your IT setup, processes, or M365 environment?

If yes:
Book a discovery call and let's figure out what makes sense for your business. No obligation, just clarity.
→ https://www.polus-cs.com/book

If no (or not yet):
That's okay too. I won't keep emailing you, but feel free to reach out anytime—my contact info is below.

Either way, thanks for downloading our checklist. Hope it was useful.

— Jack Washmon
Polus LLC
jack.washmon@polus-cs.com
www.polus-cs.com`
  },

  // Day 90 post-project completion: Check-in
  day90_followup: {
    subject: "How are things going?",
    html: `
      <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 600px; margin: 0 auto; color: #2d3748;">
        <div style="padding: 24px; background: #116238; color: white;">
          <h1 style="margin: 0; font-size: 24px;">Haven't seen you in a while</h1>
        </div>
        
        <div style="padding: 32px 24px; background: #f8fafc;">
          <p style="margin: 0 0 16px; font-size: 16px; line-height: 1.6;">
            Hi there,
          </p>
          
          <p style="margin: 0 0 16px; font-size: 16px; line-height: 1.6;">
            It's been about 3 months since we wrapped up your project. I wanted to check in and see how things are going.
          </p>
          
          <div style="margin: 32px 0; padding: 20px; background: white; border-radius: 8px;">
            <h2 style="margin: 0 0 12px; font-size: 18px; color: #116238;">A few quick questions:</h2>
            <ul style="margin: 0; padding-left: 20px; font-size: 15px; line-height: 1.8;">
              <li style="margin-bottom: 8px;">Are the systems we implemented still working well?</li>
              <li style="margin-bottom: 8px;">Any new challenges or pain points come up?</li>
              <li style="margin-bottom: 8px;">Are you considering any other projects or improvements?</li>
            </ul>
          </div>
          
          <p style="margin: 24px 0 0; font-size: 16px; line-height: 1.6;">
            If anything needs attention—or if you're ready to tackle the next priority—let's talk. Even if everything's 
            running smoothly, I'd love to hear how it's going.
          </p>
          
          <div style="text-align: center; margin: 32px 0;">
            <a href="https://www.polus-cs.com/contact" style="display: inline-block; padding: 14px 32px; background: #d4af37; color: #002412; text-decoration: none; border-radius: 8px; font-weight: 600; margin-right: 12px;">
              Send an Update
            </a>
            <a href="https://www.polus-cs.com/book" style="display: inline-block; padding: 14px 32px; background: transparent; color: #d4af37; text-decoration: none; border-radius: 8px; font-weight: 600; border: 2px solid #d4af37;">
              Book Another Call
            </a>
          </div>
          
          <p style="margin: 32px 0 0; font-size: 14px; color: #64748b;">
            — Jack Washmon<br>
            Polus LLC<br>
            <a href="mailto:jack.washmon@polus-cs.com" style="color: #b1e3c7;">jack.washmon@polus-cs.com</a>
          </p>
        </div>
      </div>
    `,
    text: `Haven't seen you in a while

Hi there,

It's been about 3 months since we wrapped up your project. I wanted to check in and see how things are going.

A few quick questions:
- Are the systems we implemented still working well?
- Any new challenges or pain points come up?
- Are you considering any other projects or improvements?

If anything needs attention—or if you're ready to tackle the next priority—let's talk. Even if everything's running smoothly, I'd love to hear how it's going.

Send an update: https://www.polus-cs.com/contact
Book another call: https://www.polus-cs.com/book

— Jack Washmon
Polus LLC
jack.washmon@polus-cs.com`
  }
};
