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
- [ ] Case studies / project examples
- [ ] Client testimonials
- [ ] Blog/resources section
- [ ] Video intro on homepage

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
2. 🔄 Resend API key configuration (REQUIRED)
3. Test all forms end-to-end

**Phase 2 (First Month):**
1. Monitor form submissions and booking rates
2. Create Project Kickoff calendar for first client
3. Set up basic analytics

**Phase 3 (Month 2-3):**
1. Add testimonials from first clients
2. Create additional calendar types as needed
3. Implement Stripe payment links

**Phase 4 (Quarter 2):**
1. Blog/content strategy
2. Case studies
3. SEO optimization push
4. Replace placeholder images

---

## Notes

- Keep MVP simple - launch fast, iterate based on real feedback
- Don't create calendar types until you have a proven need
- Email functionality is critical - prioritize Resend setup
- Track what prospects ask about most to guide feature priority
