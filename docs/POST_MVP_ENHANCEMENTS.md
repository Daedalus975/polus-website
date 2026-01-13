# Post-MVP Enhancements

This document tracks features and improvements to implement after initial launch.

---

## Additional Calendly Event Types

**Current:** Single 30-minute Discovery Call (public on website)

**Future Event Types to Create:**

### 1. Project Kickoff Meeting (60 min)
**When to use:** Send link after contract signing  
**Purpose:**
- Review scope, timeline, deliverables
- Collect access credentials and requirements
- Set expectations and communication cadence
- Answer pre-project questions

**Setup:**
- Duration: 60 minutes
- Buffer: 15 minutes after
- Location: Microsoft Teams
- Intake questions:
  - What's your biggest concern going into this project?
  - Do you have all necessary credentials ready?
  - Any scheduling constraints we should know about?

---

### 2. Follow-Up/Check-In (30 min)
**When to use:** For existing clients during or after projects  
**Purpose:**
- Progress updates
- Address questions or blockers
- Gather feedback
- Discuss next phases

**Setup:**
- Duration: 30 minutes
- Buffer: 10 minutes after
- Location: Phone or Teams
- Limit: Max 2 bookings per week

---

### 3. Technical Deep-Dive (60-90 min)
**When to use:** Complex pre-sale discussions (after discovery call)  
**Purpose:**
- Detailed technical architecture review
- Security/compliance requirements discussion
- Integration planning
- Custom solution design

**Setup:**
- Duration: 90 minutes
- Buffer: 15 minutes after
- Location: Microsoft Teams (screen sharing required)
- Intake questions:
  - What specific technical concerns need addressed?
  - Who else from your team should join?
  - What systems/tools are currently in use?

---

### 4. Systems Assessment Session (90-120 min)
**When to use:** Paid Systems Assessment service (scheduled after payment)  
**Purpose:**
- Conduct the actual assessment interview
- Review current documentation
- Walk through existing processes
- Identify priority improvements

**Setup:**
- Duration: 120 minutes
- Buffer: 30 minutes after
- Location: Microsoft Teams
- Prerequisites: Payment received, checklist completed
- Intake: Link to completed Client Readiness Intake Checklist

---

## Email System Enhancements

### Resend API Configuration
**Status:** Pending  
**Required for MVP:** YES  
**Action Items:**
1. Sign up at resend.com (free tier: 3,000 emails/month)
2. Verify domain: polus-cs.com
3. Get API key
4. Add to .env.local: `RESEND_API_KEY=re_xxxxx`
5. Test contact form submission
6. Test quote form submission

**Email Templates to Create:**
- [ ] Form submission confirmation (to user)
- [ ] Form notification (to jack.washmon@polus-cs.com)
- [ ] Quote request received
- [ ] Discovery call booked follow-up
- [ ] Post-discovery recap template

---

## Payment Integration

### Stripe Payment Links
**Status:** Optional for MVP  
**Current:** Empty placeholders in .env.local

**Future Implementation:**
1. **Deposit Payment Link** - For 50% upfront on fixed-scope projects
2. **Invoice Payment Link** - For final balance or hourly work
3. **Package URLs** - Pre-configured packages with set pricing

**Action Items:**
- [ ] Create Stripe account
- [ ] Set up payment links
- [ ] Add to .env.local
- [ ] Test guest checkout flow

---

## Website Enhancements

### Analytics & Tracking
- [ ] Add Google Analytics 4
- [ ] Set up conversion tracking (form submissions, bookings)
- [ ] Monitor quiz completion rates
- [ ] Track most-visited service pages

### Content Additions
- [ ] Blog/resources section
- [ ] Video intro on homepage (60-second explainer, increases time on page)

### Lead Generation Optimizations

#### Quick Wins (High Impact, Easy Implementation)

**1. Exit-Intent Popup** 🔥 PRIORITY 1
- [ ] Implement exit-intent detection (mouse leaves viewport)
- [ ] Offer: "Wait! Get your free checklist + 20% discount"
- [ ] Single email capture field with instant download
- Expected: 2-4% conversion rate on exit traffic
- Tools: Plain JavaScript or library like Ouibounce

**2. Chat Widget** 🔥 PRIORITY 2
- [x] Implement AI-powered chat widget with OpenAI
- [x] Custom system prompt with all services and pricing
- [x] Guardrails: rate limiting, content moderation, escalation keywords
- [x] Positioned bottom right with floating button
- [ ] Get OpenAI API key and add to .env.local
- [ ] Set spending limits in OpenAI dashboard ($10/month to start)
- Expected cost: $0.05-$3/month for typical traffic
- Setup time: Already implemented, just needs API key

**3. Additional Lead Magnets**
- [ ] M365 Security Checklist (common pain point)
- [ ] IT Budget Template for Small Businesses
- [ ] Process Red Flags: 10 Signs You Need Better Systems
- [ ] Each with dedicated landing page + download

**4. ROI Calculator**
- [ ] Interactive tool: "How much are inefficient processes costing you?"
- [ ] Inputs: Team size, average hourly rate, hours wasted per week
- [ ] Output: Annual cost + "Polus could save you $X"
- [ ] Collect email to send detailed report

**5. Email Drip Sequence After Lead Magnet**
- [ ] Day 1: Deliver checklist + welcome
- [ ] Day 3: "The 3 biggest mistakes Oklahoma businesses make with IT"
- [ ] Day 7: "Ready to talk? Book your free assessment" (CTA)
- [ ] Tool: Resend + simple cron job or Loops.so

#### Medium Effort (Proven Converters)

**6. Service Comparison Tool**
- [ ] Interactive table: DIY vs. Polus vs. Traditional MSP
- [ ] Compare: Cost, time commitment, expertise required, results timeline
- [ ] Shows where Polus fits between full MSP and DIY
- [ ] Email gate to view full comparison

**7. Free Systems Assessment Tool**
- [ ] Detailed online questionnaire (15-20 questions)
- [ ] Generates auto-scored report with recommendations
- [ ] "Based on your answers, you should start with [Service Name]"
- [ ] Better than quiz - more depth, creates perceived value

**8. Retargeting Pixel**
- [ ] Install Facebook Pixel
- [ ] Install Google Ads tracking
- [ ] Create custom audiences: Homepage visitors, quiz starters, service page viewers
- [ ] Run remarketing ads to discount promotion

#### Advanced Features (If Budget Allows)

**9. Video Content**
- [ ] Homepage explainer video (60 seconds)
- [ ] Service overview videos for top 3 services
- [ ] "Day in the life" behind-the-scenes for authenticity
- [ ] Increases time on page, builds trust

**10. Email Signature CTA**
- [ ] Add to jack.washmon@polus-cs.com signature
- [ ] "P.S. First 10 Oklahoma businesses get 20% off - [Book Free Call]"
- [ ] Turns every email into marketing touchpoint

### SEO Optimization
- [ ] Submit sitemap to Google Search Console
- [ ] Optimize meta descriptions
- [ ] Add schema markup for services
- [ ] Local SEO optimization (Oklahoma focus)

### Performance
- [ ] Replace ImagePlaceholder components with real images
- [ ] Optimize image sizes and formats (WebP)
- [ ] Implement lazy loading
- [ ] Test Lighthouse scores

---

## Documentation Cleanup

### Files to Review/Remove
- [ ] app/api/lead-magnet/route.ts (unused - lead magnets removed)
- [ ] components/LeadMagnetForm.tsx (unused)
- [ ] public/checklists/README.txt (optional)

### Documentation to Update
- [ ] Update README.md with deployment instructions
- [ ] Add CHANGELOG.md
- [ ] Create CLIENT_ONBOARDING.md with process docs

---

## Priority Order

**Phase 1 (Immediate - Pre-Launch):**
1. ✅ Calendly Discovery Call setup
2. ✅ Resend API key configuration
3. ✅ AI Chat Widget implemented
4. Test all forms end-to-end
5. **Get OpenAI API key** (https://platform.openai.com/api-keys)
6. **Set OpenAI spending limit** ($10/month recommended to start)

**Phase 2 (First Month):**
1. Monitor form submissions and booking rates
2. Create Project Kickoff calendar for first client
3. Set up basic analytics
4. **Implement exit-intent popup** (2-4 hours, high ROI)
5. **Add Tawk.to chat widget** (10 minutes setup)

**Phase 3 (Month 2-3):**
1. Create additional lead magnets (M365 Security, Budget Template)
2. Build ROI calculator
3. Set up email drip sequences
4. Create additional calendar types as needed
5. Implement Stripe payment links

**Phase 4 (Quarter 2):**
1. Service comparison tool
2. Free systems assessment tool (advanced quiz)
3. Video content production
4. Blog/content strategy
5. SEO optimization push
6. Replace placeholder images
7. Retargeting campaigns (requires traffic data)

---

## Notes

- Keep MVP simple - launch fast, iterate based on real feedback
- Don't create calendar types until you have a proven need
- Email functionality is critical - prioritize Resend setup
- Track what prospects ask about most to guide feature priority
- **Exit-intent popup and chat widget are highest ROI for minimal effort**
- Lead magnets should address specific Oklahoma small business pain points
- Test one lead gen feature at a time to measure impact
- ROI calculator works best when numbers are realistic and conservative
- Video content builds trust faster than text alone
- Retargeting requires minimum 1,000 visitors/month to be cost-effective

---

## Excluded Post-Launch Features

**Requires Existing Client Base:**
- Testimonials/social proof (need real clients first)
- Case studies (need completed projects)
- "Trusted by X businesses" badges (brand new company)
- Client portal preview (need client work examples)

**Note:** Add these features after first 3-5 successful client engagements (estimated 3-6 months post-launch).
