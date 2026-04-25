# Polus Website

Professional IT consulting website for Polus LLC, serving Oklahoma small businesses (5-50 employees) with project-based IT consulting services.

**Live Site:** https://polus-cs.com  
**Owner:** Jack Washmon (jack.washmon@polus-cs.com)  
**Last Updated:** April 2026

## Table of Contents

- [Tech Stack](#tech-stack)
- [Features](#features)
- [Current Promotions](#current-promotions-march-2026)
- [Quick Start](#quick-start)
- [Project Structure](#project-structure)
- [Pages & Routes](#pages--routes)
- [Available Services](#available-services-19-total)
- [API Endpoints](#api-endpoints)
- [Form Submissions](#form-submissions)
- [Recent Major Updates](#recent-major-updates)
- [Design System](#design-system)
- [Deployment](#deployment)
- [Email Configuration](#email-configuration)
- [Known Issues & Future Work](#known-issues--future-work)
- [Common Development Tasks](#common-development-tasks)
- [Documentation](#documentation)
- [Business Model](#business-model)
- [Git Workflow](#git-workflow)
- [Support & Contact](#support--contact)

---

## Tech Stack

- **Framework:** Next.js 14.2.0 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 3.4.1
- **CMS:** Sanity v3.99.0 (headless CMS for blog content)
- **Deployment:** Vercel (automatic CI/CD)
- **Email:** nodemailer with Resend SMTP
- **Forms:** react-hook-form
- **Analytics:** Google Analytics 4 (G-RMS0FPEQPD)
- **Scheduling:** Calendly embedded

## Features

✅ Fully responsive design with forest, gold, and mint color scheme  
✅ SEO-optimized with metadata on all pages  
✅ 19 detailed service pages with pricing transparency  
✅ Assessment quiz to recommend services  
✅ ROI calculator with email results  
✅ Multi-step quote form  
✅ Contact form with service selection  
✅ Referral program (10% discount, stackable)  
✅ 8 industry-specific landing pages  
✅ 4 location pages (OKC, Tulsa, Norman, Edmond)  
✅ FAQ accordion components  
✅ Calendly booking integration  
✅ Pay invoice functionality  
✅ **Blog system with Sanity CMS (67 posts, Apr 2026 - Jun 2027)**  
✅ **Case study capability via Sanity**  
✅ Resources center (content coming soon)  
✅ Google Analytics 4 with cookie consent  
✅ Comprehensive legal pages (Privacy, Terms, Cookie Policy, Disclaimer, Accessibility)

## Current Promotions (March 2026)

- **Referral Program:** 10% discount for both referrer and referee on next project  

## Quick Start

### 1. Install Dependencies

```powershell
npm install
```

### 2. Configure Environment Variables

Create `.env.local` in the root directory:

```bash
# SMTP Configuration (Resend)
SMTP_HOST=smtp.resend.com
SMTP_PORT=465
SMTP_USER=resend
SMTP_PASS=re_YourResendAPIKey

# Contact Form
CONTACT_EMAIL=jack.washmon@polus-cs.com

# Google Analytics 4 (fully configured)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-RMS0FPEQPD

# Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID=gzb97594
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_TOKEN=your_token_here
```

### 3. Run Development Server

```powershell
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

### 4. Build for Production

```powershell
npm run build
npm start
```

## Project Structure

```
app/
├── page.tsx                  # Home page
├── about/                    # About page
├── services/                 # Services overview
│   └── [slug]/              # Dynamic service pages (19 services)
├── industries/               # Industry overview
│   ├── architecture/         # Industry-specific landing pages
│   ├── construction/
│   ├── finance/
│   ├── healthcare/
│   ├── hospitality/
│   ├── legal/
│   ├── manufacturing/
│   └── retail/
├── locations/                # Locations overview
│   ├── edmond/              # Location-specific pages
│   ├── norman/
│   ├── oklahoma-city/
│   └── tulsa/
├── contact/                  # Contact form
├── book/                     # Calendly booking embed
├── start/                    # Assessment quiz (913 lines)
├── roi/                      # ROI calculator
├── referral/                 # Referral program details
├── invoices/                 # Pay invoice page
├── resources/                # Resource center (coming soon)
├── why-polus/                # Why choose Polus
├── privacy-policy/           # Privacy policy
├── terms-of-service/         # Terms of service
├── cookie-policy/            # Cookie policy
├── disclaimer/               # Legal disclaimer (added Jan 2026)
├── accessibility/            # Accessibility statement
├── api/
│   ├── contact/route.ts     # Contact form handler
│   └── roi-results/route.ts # ROI results email
├── globals.css               # Global Tailwind styles
└── layout.tsx                # Root layout with Navbar/Footer

components/
├── AnimatedBackgrounds.tsx   # SVG animated patterns
├── Button.tsx                # Reusable button component
├── Card.tsx                  # Card container with hover effects
├── ContactForm.tsx           # Main contact form
├── FAQAccordion.tsx          # Collapsible FAQ sections
├── Footer.tsx                # Site footer (updated Jan 2026)
├── IndustryHero.tsx          # Industry page hero sections
├── LocationHero.tsx          # Location page hero sections
├── Navbar.tsx                # Main navigation
├── OperatingSystemAnimated.tsx # Animated OS logos
├── QuoteForm.tsx             # Multi-step quote form (524 lines)
├── Section.tsx               # Section wrapper component
├── ServicesGrid.tsx          # Services grid with search
└── VideoSection.tsx          # Video embed component

docs/                         # Comprehensive documentation (added Jan 2026)
├── PROJECT_OVERVIEW.md       # Business context & overview
├── SERVICES_PRICING.md       # Complete service catalog
├── TECHNICAL_ARCHITECTURE.md # Technical details
├── COMPONENT_LIBRARY.md      # Component reference
└── DEVELOPMENT_WORKFLOWS.md  # Common tasks & workflows

src/
└── lib/
    └── nodemailer.ts         # Email configuration

public/
├── images/                   # Image assets
│   ├── industries/
│   ├── locations/
│   ├── logos/
│   └── services/
└── fonts/                    # Custom fonts (if any)
```

## Pages & Routes

| Route                        | Description                          |
|------------------------------|--------------------------------------|
| `/`                          | Home page with hero, packages, FAQ   |
| `/about`                     | Company overview & team              |
| `/services`                  | Services overview (19 services)      |
| `/services/[slug]`           | Individual service detail pages      |
| `/industries`                | Industries overview                  |
| `/industries/[industry]`     | 8 industry-specific landing pages    |
| `/locations`                 | Service locations overview           |
| `/locations/[location]`      | 4 location pages (OKC, Tulsa, etc.)  |
| `/why-polus`                 | Why choose Polus                     |
| `/contact`                   | Contact form with service selection  |
| `/book`                      | Discovery call booking (Calendly)    |
| `/start`                     | Assessment quiz (14 questions)       |
| `/roi`                       | ROI calculator with email results    |
| `/referral`                  | Referral program (10% discount)      |
| `/invoices`                  | Pay invoice page                     |
| `/resources`                 | Resources library (coming soon)      |
| `/privacy-policy`            | Privacy policy                       |
| `/terms-of-service`          | Terms of service                     |
| `/cookie-policy`             | Cookie policy                        |
| `/disclaimer`                | Legal disclaimer (added Jan 2026)    |
| `/accessibility`             | Accessibility statement              |

## Available Services (19 Total)

**Core Infrastructure:**
- `systems-assessment` - Systems Review ($799, was $299 before Jan 2026)
- `identity-device-foundation` - Microsoft 365 / Entra ID Setup ($6,500-$11,000)
- `m365-governance` - Teams & SharePoint Governance ($3,500-$8,500)
- `employee-lifecycle` - Onboarding & Offboarding Automation ($2,500-$3,500)

**Operations:**
- `strategic-advisory` - IT Advisory ($500-$1,000/month)
- `it-operations-toolkit` - IT Operations Setup ($4,500-$7,500)
- `it-documentation` - IT Documentation Package ($3,500-$6,000, updated Jan 2026)
- `m365-training` - Microsoft 365 End-User Training ($1,200-$2,500)

**Security & Risk:**
- `backup-dr-readiness` - Backup & Disaster Recovery ($1,500-$3,500)
- `dr-testing-service` - DR Testing Service ($1,500/quarter)
- `compliance-documentation` - Compliance Documentation Prep ($3,500-$7,500)

**Strategic:**
- `technology-roadmap-workshop` - Technology Roadmap ($5,000, was $2,000 before Jan 2026)
- `cloud-cost-optimization` - Cloud Cost Optimization Review ($1,200)

**Specialized:**
- `process-clarity-pack` - Process Documentation (Simple $1,200 / Standard $1,800 / Complex $3,000)
- `web-development` - Web Development ($3,500-$8,500)
- `mvp-prd` - Product Planning (MVP/PRD Workshop) ($2,000)
- `acquisition-integration` - Acquisition Integration ($18,000 phased)

**Bundles:**
- `new-foundation-bundle` - IT Foundation Package ($14,500, save $1,500)
- `growth-acceleration-bundle` - Growth Package ($9,299, save $1,000)

## API Endpoints

### Public Endpoints

- `POST /api/contact` - Contact form submission (sends email via SMTP)
- `POST /api/roi-results` - ROI calculator results (emails to user)

## Content Management (Sanity CMS)

**CMS:** Sanity v3.99.0 (headless CMS)  
**Studio:** https://polus-cs.sanity.studio  
**Project ID:** gzb97594  
**Dataset:** production  

### Content Types

**Blog Posts (`blogPost`):**
- 67 posts currently published (April 2026 - June 2027)
- Fields: title, slug, author, publishedAt, excerpt, featuredImage, categories, body, SEO metadata
- Categories: Microsoft 365, Backup & DR, IT Operations, Security, Process & Workflows, Case Studies
- Rich text body with Portable Text format

**Case Studies (`caseStudy`):**
- Fields: title, slug, client, industry, teamSize, challenge, solution, results, testimonial
- Industry options: Construction, Healthcare, Manufacturing, Professional Services, Retail, Non-Profit
- Designed for client success stories and social proof

### Sanity Studio

**Access:** Run locally with `npm run sanity:dev` or deploy to Sanity hosting

**Managing Content:**
```powershell
# Start Sanity Studio locally
npm run sanity:dev

# Deploy Studio to Sanity hosting
sanity deploy

# Run GROQ queries
sanity documents query "*[_type == 'blogPost'] | order(publishedAt desc)"

# Import content
sanity dataset import data.ndjson production --replace
```

### Schemas Location

- `schemas/blogPost.ts` - Blog post schema
- `schemas/caseStudy.ts` - Case study schema  
- `schemas/index.ts` - Schema registry

## Form Submissions

### Contact Form

**File:** `components/ContactForm.tsx`

**Features:**
- Validates with react-hook-form
- Text inputs: name, email, phone, businessName
- Textarea: message
- Multi-select: interestedServices (all 19 services + bundles)
- Sends email via nodemailer + Resend SMTP
- Success/error messaging
- Can prefill services from assessment quiz

**Validation:**
- Name: Required, min 2 characters
- Email: Required, valid format
- Phone: Optional but validated if provided
- Message: Required, min 10 characters

### Quote Form

**File:** `components/QuoteForm.tsx` (524 lines)

**Features:**
- Multi-step form (5 steps)
- Step 1: Basic info
- Step 2: Service selection with checkboxes
- Step 3: Timeline & budget
- Step 4: Additional details
- Step 5: Review & submit
- Submits to same `/api/contact` endpoint

### ROI Calculator

**File:** `app/roi/page.tsx`

**Features:**
- Collects business metrics
- Calculates potential ROI based on service selection
- Emails personalized results via `/api/roi-results`
- Shows immediate results on screen

### Assessment Quiz

**File:** `app/start/page.tsx` (913 lines)

**Features:**
- 14 questions about business IT needs
- Calculates scores for 6 service bundles
- Redirects to contact page with recommended services prefilled
- Helps qualify leads and recommend appropriate services
## Recent Major Updates

### April 2026: Blog System Launch

**Sanity CMS Integration:**
- Integrated Sanity v3.99.0 as headless CMS
- Created blog post and case study schemas
- Imported 67 professionally-written blog posts
- Publishing schedule: Weekly posts from April 2026 through June 2027
- Topics: Microsoft 365, IT operations, security, backup/DR, compliance, process workflows
- SEO-optimized with proper metadata and Portable Text formatting

**Content Strategy:**
- Focused on Oklahoma small business IT education
- Technical accuracy verified (CMMC, HIPAA, SOC 2, Microsoft Entra ID rebrand)
- Topical authority approach with minimal content overlap
- All posts include proper frontmatter, excerpts, and featured images

### January 2026: Comprehensive Pricing Overhaul

Based on market analysis showing 30-60% underpricing:
- **Systems Review:** $299 → $799 (reflects 4-6 hours strategic consulting)
- **Technology Roadmap:** $2,000 → $5,000 (executive/board-ready deliverables)
- **IT Documentation:** $2,000/$4,000 → $3,500/$6,000 (comprehensive scope)
- **Added explicit scope boundaries** to all services (device caps, user limits, etc.)
- **Created complexity tiers** for Process Documentation (Simple/Standard/Complex)
- **Added pricing adders** for scalable factors (SSO apps, locations, systems, etc.)
- **Updated bundle pricing** to match new component costs

### January 2026: Legal Disclaimer Page

- Created comprehensive `/disclaimer` page
- Added to footer legal section
- Covers professional services disclaimers, no warranties, limitation of liability
- Strategic split: Service-specific boundaries on pages, general legal protections on disclaimer

### Design System

**Colors (Tailwind Config):**
```typescript
colors: {
  'polus-forest': '#0D251C',  // Primary background
  'polus-gold': '#DAAA00',    // CTAs and accents
  'polus-mint': '#B1E3C7',    // Light accents
  'polus-emerald': '#10B981', // Focus states
}
```

**Typography:**
- Headings: `font-heading` custom font family
- Body: Default sans-serif with rgba opacity for hierarchy
- Responsive: Mobile-first with sm/md/lg breakpoints

**Component Patterns:**
- Button: Primary (gold), Secondary (outline), consistent hover states
- Card: White background, rounded corners, drop shadow, optional hover lift
- Section: Consistent padding, background color options (white/gray/forest/mint)
- Spacing: py-12 sm:py-16 lg:py-20 for sections

## Deployment

### Vercel (Current Setup)

**Automatic Deployment:**
1. Push commits to GitHub main branch
2. Vercel detects push via webhook
3. Runs build process (`npm run build`)
4. Deploys to production if successful
5. Updates https://polus-cs.com

**Build Time:** ~2-3 minutes  
**Monitor:** Vercel dashboard shows build logs and deployment status

**Environment Variables:**
Set in Vercel dashboard → Settings → Environment Variables
- SMTP_HOST
- SMTP_PORT
- SMTP_USER
- SMTP_PASS
- CONTACT_EMAIL
- NEXT_PUBLIC_GA_MEASUREMENT_ID (configured: G-RMS0FPEQPD)
- NEXT_PUBLIC_SANITY_PROJECT_ID
- NEXT_PUBLIC_SANITY_DATASET
- NEXT_PUBLIC_SANITY_API_VERSION
- SANITY_API_TOKEN (for write operations)

**Preview Deployments:**
- Pull requests automatically get preview URLs
- Format: `polus-<hash>.vercel.app`

### Rollback

If deployment has issues:
1. Go to Vercel dashboard → Deployments
2. Find previous working deployment
3. Click "..." → "Promote to Production"

Or fix forward:
```powershell
git revert <commit-hash>
git push origin main
```

## Email Configuration

Contact form and ROI calculator require SMTP credentials.

**Current Setup: Resend**

1. Sign up at https://resend.com
2. Get API key from dashboard
3. Configure in `.env.local`:
```bash
SMTP_HOST=smtp.resend.com
SMTP_PORT=465
SMTP_USER=resend
SMTP_PASS=<your_resend_api_key>
CONTACT_EMAIL=jack.washmon@polus-cs.com
```

**Alternative SMTP Providers:**
- SendGrid (free tier available)
- Mailgun
- Amazon SES
- Postmark

## Known Issues & Future Work

### High Priority
- [ ] **Admin Dashboard Authentication:** Currently disabled (ADMIN_DASHBOARD_ENABLED: false), needs Clerk/Auth0/NextAuth implementation
- [ ] **Resource Files:** 7 resources show "Coming Soon" - need actual downloadable content (templates, guides, checklists)
- [ ] **Calendly Webhooks:** Booking tracking needs webhook implementation for better analytics

### Medium Priority
- [ ] **Blog Frontend Pages:** Sanity CMS and 67 posts ready, need to build Next.js pages to display them (/blog, /blog/[slug])
- [ ] **Case Study Pages:** Schema ready, need frontend implementation
- [ ] **Complexity Pricing Adders:** Services with variable complexity could use dynamic pricing calculator
- [ ] **Mobile Optimization:** Further optimize quiz and forms for mobile
- [ ] **Performance:** Optimize images, add lazy loading for below-fold content

### Low Priority
- [ ] **Dark Mode:** Consider adding toggle (currently light mode only)
- [ ] **Video Content:** Service explainer videos for social media and landing pages
- [ ] **Additional Resources:** Expand downloadable templates and guides library

## Common Development Tasks

**Add a New Service:**
1. Add to `app/services/[slug]/page.tsx` services array
2. Add to `app/services/page.tsx` listing page
3. Update contact form service options (if selectable)
4. Test detail page and search functionality

**Update Pricing:**
1. Update in `app/services/[slug]/page.tsx`
2. Update in `app/services/page.tsx` (keep consistent)
3. If on home page, update `app/page.tsx`

**Create a New Page:**
1. Create `app/new-page/page.tsx`
2. Export metadata for SEO
3. Add to navbar (optional)
4. Add to footer (optional)
5. Test locally then deploy

**Full workflows available in:** `docs/DEVELOPMENT_WORKFLOWS.md`

## Documentation

Comprehensive documentation is in the `/docs` folder:

- **PROJECT_OVERVIEW.md** - Business model, tech stack, recent updates, design system
- **SERVICES_PRICING.md** - Complete service catalog with pricing, tiers, scope boundaries
- **TECHNICAL_ARCHITECTURE.md** - Next.js structure, server vs client components, API routes, styling
- **COMPONENT_LIBRARY.md** - All components with props, usage examples, patterns
- **DEVELOPMENT_WORKFLOWS.md** - Step-by-step guides for common tasks
- **ANALYTICS_SETUP.md** - Complete Google Analytics 4 setup guide, event tracking, conversions, reports

**Quick Setup:** See `GA4_SETUP_CHECKLIST.md` in root for fast GA4 configuration

## Business Model

**Target Market:** Oklahoma small businesses (5-50 employees)  
**Service Area:** OKC and Tulsa metros primarily  
**Focus:** Microsoft 365, IT operations, modernization  
**Model:** Project-based consulting (not MSP contracts)  
**Services:** 19 individual services + 2 bundles  
**Pricing:** $799-$18,000 (individual services)  
**Recurring:** IT Advisory ($500-$1,000/mo), DR Testing ($1,500/quarter)

## Git Workflow

```powershell
# Daily workflow
git pull origin main
# Make changes...
git add .
git commit -m "feat: descriptive message"
git push origin main

# Commit types: feat, fix, refactor, docs, style, chore
```

## Support & Contact

**Owner:** Jack Washmon  
**Email:** jack.washmon@polus-cs.com  
**Website:** https://polus-cs.com

For development questions, refer to documentation in `/docs` folder.

## License

Proprietary - © 2026 Polus LLC
