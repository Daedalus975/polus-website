# Copilot prompt (paste into Copilot Chat)

You are building the Polus LLC consulting website using **Next.js App Router + TypeScript + Tailwind**.

**Source of truth:** Everything in /docs. If there is a conflict between code and docs, update the code to match docs.

## Requirements
- Implement pages and routes in docs/02_SITE_MAP_AND_ROUTES.md
- Use copy from docs/05_COPY_DECK.md (do not invent marketing claims)
- Use style tokens from docs/03_UI_STYLE_TOKENS.json
- Blog/resources must remain disabled using feature flags in docs/10_FEATURE_FLAGS.md
- Forms must match docs/07_FORMS_AND_VALIDATION.md (server-side route + email send)
- Payments must match docs/08_STRIPE_AND_PAYMENTS.md (Stripe Payment Links, guest pay)

## Build approach
- Create a minimal component library in /components (Button, Card, Section, FAQAccordion)
- Keep components small and reusable
- Use accessibility best practices (labels, focus rings, contrast)
- Add analytics event hooks as described in docs/09_SEO_ANALYTICS.md (as simple function calls)

## Deliverables
- Working dev server (`npm run dev`)
- All v1 pages created
- Forms send email (with provider stub if keys missing)
- Payment link buttons wired via env vars
- README with setup instructions and env vars
