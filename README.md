# Polus LLC Website

A professional lead-generation website for Polus LLC, an IT and operations consulting firm serving Oklahoma small businesses.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Forms:** Zod validation + server actions
- **Payments:** Stripe Payment Links
- **Email:** Nodemailer (SMTP)

## Features

✅ Fully responsive design inspired by modern SaaS aesthetics  
✅ Dark forest theme with gold accents  
✅ SEO-optimized with metadata on all pages  
✅ Contact form with honeypot spam protection  
✅ Lead magnet capture (checklist download)  
✅ Stripe payment links for deposits and invoices  
✅ Service pages with detailed offerings  
✅ Industry-specific landing pages  
✅ FAQ accordion component  
✅ Analytics tracking hooks ready  

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Copy `.env.example` to `.env.local` and fill in your values:

```bash
# Business settings
BUSINESS_INBOX_EMAIL=contact@polusllc.com
BOOKING_URL=https://calendly.com/your-link-here

# Stripe payment links
NEXT_PUBLIC_STRIPE_DEPOSIT_URL=https://buy.stripe.com/your-deposit-link
NEXT_PUBLIC_STRIPE_INVOICE_URL=https://buy.stripe.com/your-invoice-link

# SMTP for contact form emails
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your-smtp-username
SMTP_PASS=your-smtp-password
SMTP_FROM="Polus <no-reply@polusllc.com>"

# Optional analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### 3. Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

### 4. Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
app/
├── (pages)
│   ├── page.tsx              # Home page
│   ├── about/                # About page
│   ├── services/             # Services overview
│   │   └── [slug]/          # Dynamic service pages
│   ├── industries/           # Industry landing pages
│   ├── contact/              # Contact form
│   ├── book/                 # Discovery call booking
│   ├── pay/                  # Payment links
│   ├── results/              # Results & outcomes
│   ├── privacy/              # Privacy policy
│   └── terms/                # Terms of service
├── api/
│   ├── contact/route.ts      # Contact form submission
│   └── lead-magnet/route.ts  # Lead magnet capture
├── globals.css               # Global styles
└── layout.tsx                # Root layout

components/
├── Button.tsx                # Primary/secondary/link buttons
├── Card.tsx                  # Content cards with hover effects
├── ContactForm.tsx           # Full contact/quote form
├── FAQAccordion.tsx          # Expandable FAQ component
├── Footer.tsx                # Site footer
├── LeadMagnetForm.tsx        # Email capture form
├── Navbar.tsx                # Sticky navigation
├── PricingCard.tsx           # Service pricing cards
├── Section.tsx               # Page section wrapper
├── ServiceCard.tsx           # Service listing cards
└── TrustBadgeStrip.tsx       # Certification badges

docs/                         # Full documentation & copy deck
lib/                          # Utility functions
public/                       # Static assets
src/config/
└── featureFlags.ts           # Feature toggles
```

## Pages & Routes

| Route                        | Description                          |
|------------------------------|--------------------------------------|
| `/`                          | Home page with hero, packages, FAQ   |
| `/about`                     | Company overview & values            |
| `/services`                  | Services overview                    |
| `/services/[slug]`           | Individual service details           |
| `/industries`                | Industries overview                  |
| `/industries/construction`   | Construction-focused page            |
| `/industries/nonprofits`     | Nonprofit-focused page               |
| `/industries/startups`       | Startup-focused page                 |
| `/results`                   | Outcomes & sample deliverables       |
| `/contact`                   | Contact form                         |
| `/book`                      | Discovery call booking               |
| `/pay`                       | Payment links (deposits/invoices)    |
| `/privacy`                   | Privacy policy                       |
| `/terms`                     | Terms of service                     |

## Available Services (Slugs)

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

## Form Submissions

### Contact Form

- Validates with Zod
- Honeypot spam protection
- Sends email via SMTP
- Returns success/error messages

### Lead Magnet Form

- Captures email address
- Returns download URL for checklist
- Can be configured to send email with PDF

## Analytics Events

The `track()` function in `lib/track.ts` can be connected to Google Analytics, Plausible, or any analytics provider:

- `cta_book_click` - Discovery call CTA clicked
- `contact_submit` - Contact form submitted
- `lead_magnet_download` - Checklist downloaded
- `pay_link_click` - Payment link clicked

## Customization

### Colors

Edit `tailwind.config.ts` to customize the color scheme:

```typescript
colors: {
  polus: {
    paper: "#FEFFFF",    // Text/backgrounds
    forest: "#0D251C",   // Primary background
    gold: "#C2A319",     // CTAs/accents
    mint: "#B1E3C7",     // Secondary accents
    emerald: "#116238",  // Focus states
    surface1: "#102D22", // Elevated surfaces
    surface2: "#143427"  // More elevated surfaces
  }
}
```

### Copy

All copy follows `docs/05_COPY_DECK.md`. Update pages directly or modify the copy deck and regenerate.

### Feature Flags

Edit `src/config/featureFlags.ts` to enable/disable features:

- `BLOG_ENABLED` - Blog section (currently disabled)
- `RESOURCES_ENABLED` - Resources library (currently disabled)
- `TESTIMONIALS_ENABLED` - Testimonials section (currently disabled)

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import to Vercel
3. Add environment variables
4. Deploy

### Other Platforms

Supports any Node.js hosting:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## Email Configuration

Contact form requires SMTP credentials. Recommended providers:

- **SendGrid** (free tier available)
- **Mailgun**
- **Amazon SES**
- **Postmark**

## Stripe Setup

1. Create Stripe account
2. Create payment links for:
   - Project deposit
   - Invoice payment
3. Add URLs to `.env.local`

## Next Steps

1. **Add Logo:** Replace "Polus" text in Navbar with logo image
2. **Customize Colors:** Adjust Tailwind config if needed
3. **Add Images:** Hero section can use background images
4. **Connect Calendar:** Update `BOOKING_URL` with your Calendly link
5. **Configure Email:** Set up SMTP credentials
6. **Add Analytics:** Connect Google Analytics or similar
7. **Create Checklist PDF:** Add your actual checklist to `/public/checklists/`

## Documentation

Full documentation is in the `/docs` folder:

- `01_PRD.md` - Product requirements
- `02_SITE_MAP_AND_ROUTES.md` - Site structure
- `03_UI_STYLE_TOKENS.json` - Design system
- `04_BRAND_GUIDE.md` - Brand & messaging
- `05_COPY_DECK.md` - All website copy
- `06_COMPONENT_SPEC.md` - Component specifications
- `07_FORMS_AND_VALIDATION.md` - Form requirements
- `08_STRIPE_AND_PAYMENTS.md` - Payment setup
- `09_SEO_ANALYTICS.md` - SEO and tracking
- `10_FEATURE_FLAGS.md` - Feature toggles
- `11_DEFINITION_OF_DONE.md` - Completion checklist

## Support

For questions or issues, refer to the documentation or contact the development team.

## License

Proprietary - © 2026 Polus LLC
