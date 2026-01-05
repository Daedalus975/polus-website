# Site Map + Routes (Next.js App Router)

## Top navigation (v1)
- Home: `/`
- Services: `/services`
- Industries: `/industries`
- About: `/about`
- Contact: `/contact`
- Primary CTA (button): `/book`

## Core routes (v1)
- `/` Home
- `/services` Services overview
- `/services/[slug]` Service detail template
- `/industries` Industries landing
- `/industries/construction`
- `/industries/nonprofits`
- `/industries/startups`
- `/about` About
- `/results` Results (credibility without testimonials)
- `/book` Book a Free Discovery Call (embedded scheduler)
- `/contact` Contact form
- `/pay` Pay Invoice / Pay Deposit (guest checkout links)
- `/privacy` Privacy Policy
- `/terms` Terms

## API routes (server)
- `/api/contact` POST: Contact + Quote form submissions
- `/api/lead-magnet` POST: capture email and return download URL (or send email)

## Service slugs (v1)
- `systems-assessment`
- `process-mapping-sops`
- `onboarding-offboarding`
- `m365-governance`
- `endpoint-standardization`
- `backup-disaster-recovery`
- `managed-it`
- `service-desk-setup`
- `web-development`
- `mvp-prd`
- `automation-no-code`

## Disabled routes (v1; keep behind feature flag)
- `/resources`
- `/blog`
- `/blog/[slug]`
