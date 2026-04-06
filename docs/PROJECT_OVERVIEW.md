# Polus Website - Project Overview

**Last Updated:** January 18, 2026  
**Tech Stack:** Next.js 14.2.0, TypeScript, Tailwind CSS, Vercel Deployment  
**Business:** IT Consulting for Oklahoma Small Businesses (5-50 employees)

---

## Business Model

**Company:** Polus LLC  
**Owner/Consultant:** Jack Washmon  
**Primary Contact:** jack.washmon@polus-cs.com  
**Service Area:** Oklahoma (primarily OKC and Tulsa metros)  

**Target Market:**
- Small businesses with 5-50 employees
- Companies too small for full-time IT staff
- Organizations needing project-based consulting (not MSP contracts)
- Focus on Microsoft 365, operations consulting, and IT modernization

**Value Proposition:**
- Project-based consulting without MSP pricing or long-term contracts
- Expert-level work at Oklahoma-market pricing
- Focus on fixing root causes, not just break-fix
- Plain-English clarity and transparent pricing

---

## Current Promotions

**Referral Program:**
- Both referrer and referee get 10% discount on their next project
- No cap on referrals
- Valid for 12 months from issue date

---

## Recent Major Updates (January 2026)

### 1. Comprehensive Pricing Strategy Overhaul
**Date:** January 15-18, 2026  
**Reason:** Market analysis showed 30-60% underpricing on multiple services

**Major Price Increases:**
- Systems Review: $299 → **$799** (reflects 4-6 hours strategic work)
- Technology Roadmap: $2,000 → **$5,000** (board-ready deliverables)
- IT Documentation: $2,000/$4,000 → **$3,500/$6,000** (comprehensive scope)

**Scope Boundaries Added:**
- IT Advisory: 15-min email cap, meeting prep included in hours, agenda required
- M365 Training: 30-min or 5-email follow-up cap
- IT Operations: 50 asset cap (+$50 per 10 additional)
- Backup & DR: Defined "system", up to 2 systems (+$500 per additional)
- Cloud Cost: 1 Azure sub + 1 M365 tenant (+$500 each additional)
- Compliance Docs: Exact artifact counts (10 policies + 20 SOPs)

**Complexity Tiers Added:**
- Process Documentation: Simple ($1,200) / Standard ($1,800) / Complex ($3,000)

**Explicit Assumptions & Pricing Adders:**
- Identity & Security: 3 SSO apps max (+$500 each), single location (+$1,000 per additional)
- M365 Governance: Site count tiers (+$50 per additional site)
- Employee Lifecycle: 5 role templates (+$300 each additional)

**Bundle Pricing Updates:**
- IT Foundation: $13,500 → **$14,500** (save $1,500)
- Growth Package: $8,500 → **$9,299** (save $1,000)

### 2. Service Naming Standardization
**Phase 1:** Renamed services to technical capability names
- "Identity & Security" → "Microsoft 365 / Entra ID Setup"
- "M365 Governance" → "Teams & SharePoint Governance"
- "Systems Review" → "IT Assessment"
- "Backup & DR" → "Backup & Disaster Recovery"
- "Process Documentation" → "Process Mapping & SOP Development"
- "Employee Lifecycle" → "Onboarding & Offboarding Automation"

**Phase 2:** Shortened navigation names for UX
- Navbar only: "Microsoft 365 / Entra ID" → "M365 / Entra ID"
- Navbar only: "Teams & SharePoint Governance" → "Teams/SharePoint"
- Navbar only: "Backup & Disaster Recovery" → "Backup & DR"
- Services page retains full descriptive names

### 3. New Features & Pages
- **Disclaimer Page:** Comprehensive legal protections (January 18, 2026)
- **Cookies Page:** Cookie policy with preference management
- **Referral Program:** Dedicated page with tracking and stackable discounts
- **ROI Calculator:** Interactive calculator for IT investment ROI
- **Assessment Quiz:** 13-question quiz for personalized service recommendations

### 4. Bug Fixes
- Assessment quiz crash: Added safety check for undefined currentQ
- ROI email not sending: Fixed .env.local corruption
- Vercel deployment: Split server/client components for metadata exports
- Service search functionality: Restored after layout changes
- Contact form: Added missing service bundle mappings

---

## Website Structure

**Public Pages:**
- Home (`/`)
- Services listing (`/services`)
- Individual service pages (`/services/[slug]`)
- Industries (`/industries`)
- Locations (`/locations`)
- About (`/about`)
- Why Polus (`/why-polus`)
- Contact (`/contact`)
- Book discovery call (`/book` - Calendly integration)
- Assessment quiz (`/start`)
- ROI Calculator (`/roi-calculator`)
- Referral Program (`/referral`)
- Resources (`/resources/[slug]`)

**Legal Pages:**
- Privacy Policy (`/privacy`)
- Terms of Service (`/terms`)
- Cookie Policy (`/cookies`)
- Disclaimer (`/disclaimer`)
- Accessibility (`/accessibility`)

**Utility Pages:**
- Pay Invoice (`/pay`)
- Admin Dashboard (`/admin` - currently disabled, needs auth)
- 404 Not Found

---

## Core Technologies

**Framework:** Next.js 14.2.0 (App Router)  
**Language:** TypeScript  
**Styling:** Tailwind CSS with custom design tokens  
**Deployment:** Vercel  
**Analytics:** Google Analytics 4 (configured but not fully wired)  
**Email:** nodemailer with Resend SMTP  
**Forms:** React Hook Form (Contact, Quote forms)  
**Calendar:** Calendly embedded for bookings  

**Key Dependencies:**
- React 18
- next-themes (dark mode support - not actively used)
- Server Components and Client Components pattern
- Metadata API for SEO

---

## Design System

**Color Palette:**
- **polus-forest:** `#0D251C` (dark green background)
- **polus-surface1:** `rgba(13, 37, 28, 0.5)` (elevated surfaces)
- **polus-paper:** `#FEFFFE` (primary text)
- **polus-gold:** `#DAAA00` (primary accent, CTAs)
- **polus-mint:** `#B1E3C7` (secondary accent, success states)
- **polus-emerald:** `#116238` (tertiary accent)

**Typography:**
- Headings: font-heading class (bold, tight tracking)
- Body: Default sans-serif with opacity layers for hierarchy
- Text colors: Use rgba with opacity for subtle hierarchy

**Components:**
- Button component with primary/secondary/link variants
- Card component with hover states
- Section component for consistent page layout
- Consistent spacing and responsive design

---

## Business Intelligence

**Total Services:** 19 active services + bundles  
**Service Categories:**
- Core Infrastructure (M365/Entra, Identity, Governance)
- Operations (Process Docs, IT Ops, Training)
- Security & Risk (Backup, DR, Compliance)
- Strategic (Advisory, Roadmap, Assessment)
- Bundles (IT Foundation, Growth Package)
- Specialized (Acquisition, Web Dev, Product Planning)

**Pricing Range:** $799 - $18,000 (individual services)  
**Recurring Services:** IT Advisory ($500-$1,000/mo), DR Testing ($1,500/quarter)  
**Bundles:** $9,299 (Growth), $14,500 (IT Foundation)

**Target Project Size:** $2,500 - $15,000 typical  
**Service Delivery:** 1-12 weeks depending on complexity

---

## Feature Flags

Located in `src/config/featureFlags.ts`:

```typescript
export const FEATURE_FLAGS = {
  STARTING_POINT_QUIZ_ENABLED: true,
  ADMIN_DASHBOARD_ENABLED: false, // Disabled until auth implemented
  RESOURCE_CENTER_ENABLED: true,
  REFERRAL_PROGRAM_ENABLED: true
};
```

---

## Environment Variables

Required in `.env.local`:

```
# SMTP Configuration (Resend)
SMTP_HOST=smtp.resend.com
SMTP_PORT=587
SMTP_USER=resend
SMTP_PASSWORD=[resend_api_key]
BUSINESS_INBOX_EMAIL=jack.washmon@polus-cs.com

# Analytics (not fully wired)
NEXT_PUBLIC_GA_MEASUREMENT_ID=[GA4_ID]

# Contact Form Submission
CONTACT_FORM_EMAIL=jack.washmon@polus-cs.com
```

---

## Known Issues & Future Work

**High Priority:**
1. Admin dashboard needs authentication (Clerk/Auth0/NextAuth)
2. Create actual resource files (7 resources show "Coming Soon")
3. Wire GA4 analytics properly (add to layout, track events)
4. Calendly webhook testing for booking tracking

**Medium Priority:**
1. Add complexity adders to service pricing (multi-location, extra apps)
2. Consider tiered pricing for some flat-rate services
3. Mobile menu optimization (works but could be smoother)
4. Service search on mobile (works but small screen UX)

**Low Priority:**
1. Dark mode toggle (theme system exists but not exposed)
2. Blog or insights section (discussed but not built)
3. Case studies page (need client permission first)
4. Video testimonials or explainer content

---

## Development Patterns

**Component Structure:**
- Server Components by default
- Client Components only when needed (forms, interactivity, state)
- Clear separation for metadata exports (must be server components)

**File Organization:**
- `/app` - Next.js App Router pages and routes
- `/components` - Reusable UI components
- `/src` - Business logic, utilities, config
- `/lib` - Shared libraries (tracking, email, etc.)
- `/public` - Static assets (images, SVGs)
- `/docs` - Project documentation (this file)

**Naming Conventions:**
- PascalCase for components: `Button.tsx`, `ContactForm.tsx`
- kebab-case for routes: `/services/[slug]`, `/roi-calculator`
- camelCase for functions: `calculateDiscount()`, `getServiceSchema()`

**Code Quality:**
- TypeScript strict mode
- ESLint enabled
- Proper type definitions for all components
- Zero build errors maintained

---

## Git History Highlights

**Major Commits:**
- Jan 18, 2026: Added comprehensive Disclaimer page
- Jan 15, 2026: Comprehensive pricing strategy overhaul
- Jan 15, 2026: Service renaming and navigation optimization
- Jan 15, 2026: Assessment quiz fix and ROI email fix
- Previous: Services page restyling, cookies page, file cleanup

**Commit Message Style:**
- `feat:` for new features
- `fix:` for bug fixes
- `refactor:` for code improvements
- `docs:` for documentation
- Clear, descriptive commit messages with context

---

## Key Contacts & Resources

**Business Owner:** Jack Washmon  
**Email:** jack.washmon@polus-cs.com  
**Website:** https://polus-cs.com  
**GitHub:** https://github.com/Daedalus975/polus-website  
**Deployment:** Vercel (automatic on push to main)

**Service Area:**
- Oklahoma City metro
- Tulsa metro
- Anywhere in Oklahoma (remote-capable)
- Travel fees for on-site outside OKC/Tulsa

---

## Success Metrics (Implicit)

**Website Goals:**
1. Generate qualified discovery call bookings
2. Establish pricing expectations upfront (transparency)
3. Demonstrate expertise through detailed service descriptions
4. Capture leads via Contact/Quote forms
5. Educate market on value of services vs. DIY or MSP

**Conversion Funnel:**
1. Land on home or services page
2. Browse services or take assessment quiz
3. Book discovery call OR request quote
4. Receive Next Steps recap within 24-48 hours
5. Convert to project engagement

**Key Pages for Conversion:**
- Home page (hero CTA)
- Services listing (service cards)
- Individual service detail pages (pricing, CTAs)
- Assessment quiz (personalized recommendations)
- Contact/Book pages (form submissions)

---

This document provides the high-level overview. See additional documentation files for detailed technical information.
