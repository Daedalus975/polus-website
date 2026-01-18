# Technical Architecture & Code Organization

**Last Updated:** January 18, 2026

---

## Technology Stack

**Framework:** Next.js 14.2.0  
**React:** 18  
**Language:** TypeScript  
**Styling:** Tailwind CSS 3.4.1  
**Deployment:** Vercel  
**Email:** nodemailer with Resend SMTP  
**Forms:** react-hook-form  
**Calendar:** Calendly embedded  
**Analytics:** Google Analytics 4 (configured, not fully wired)

---

## Project Structure

```
c:\Users\shado\OneDrive\Desktop\Web Design\Websites\Polus\
├── app/                          # Next.js App Router pages
│   ├── about/                    # About page
│   ├── api/                      # API routes
│   │   ├── contact/              # Contact form submission
│   │   └── roi-results/          # ROI calculator email
│   ├── book/                     # Calendly booking page
│   ├── contact/                  # Contact form page
│   ├── cookie-policy/            # Cookie policy
│   ├── disclaimer/               # Legal disclaimer (NEW Jan 2026)
│   ├── industries/               # Industries overview
│   │   ├── architecture/         # Industry-specific pages
│   │   ├── construction/
│   │   ├── finance/
│   │   ├── healthcare/
│   │   ├── hospitality/
│   │   ├── legal/
│   │   ├── manufacturing/
│   │   └── retail/
│   ├── invoices/                 # Pay invoice page
│   ├── locations/                # Locations overview
│   │   ├── edmond/               # Location-specific pages
│   │   ├── norman/
│   │   ├── oklahoma-city/
│   │   └── tulsa/
│   ├── privacy-policy/           # Privacy policy
│   ├── referral/                 # Referral program page
│   ├── resources/                # Resource center (placeholder)
│   ├── roi/                      # ROI calculator
│   ├── services/                 # Services overview
│   │   └── [slug]/               # Dynamic service detail pages (1125 lines)
│   ├── start/                    # Assessment quiz (913 lines)
│   ├── terms-of-service/         # Terms of service
│   ├── why-polus/                # Why choose Polus page
│   ├── favicon.ico               # Site favicon
│   ├── globals.css               # Global Tailwind styles
│   ├── layout.tsx                # Root layout with Navbar/Footer
│   └── page.tsx                  # Home page (271 lines)
│
├── components/                   # Reusable React components
│   ├── AnimatedBackgrounds.tsx   # SVG animated patterns
│   ├── Button.tsx                # Primary button component
│   ├── Card.tsx                  # Card container component
│   ├── ContactForm.tsx           # Main contact form
│   ├── FAQAccordion.tsx          # FAQ collapsible sections
│   ├── Footer.tsx                # Site footer (updated Jan 2026)
│   ├── IndustryHero.tsx          # Industry page headers
│   ├── LocationHero.tsx          # Location page headers
│   ├── Navbar.tsx                # Main navigation
│   ├── OperatingSystemAnimated.tsx # Animated logos
│   ├── QuoteForm.tsx             # Multi-step quote form (524 lines)
│   ├── Section.tsx               # Section wrapper
│   ├── ServicesGrid.tsx          # Services grid with search
│   └── VideoSection.tsx          # Video embed component
│
├── src/                          # Source utilities
│   └── lib/                      # Utility functions
│       └── nodemailer.ts         # Email configuration
│
├── lib/                          # Additional utilities (alternative location)
│
├── public/                       # Static assets
│   ├── images/                   # Image files
│   │   ├── industries/           # Industry-specific images
│   │   ├── locations/            # Location-specific images
│   │   ├── logos/                # Company and partner logos
│   │   └── services/             # Service-related images
│   └── fonts/                    # Custom fonts (if any)
│
├── docs/                         # Knowledge transfer documentation (NEW Jan 2026)
│   ├── PROJECT_OVERVIEW.md       # High-level project context
│   └── SERVICES_PRICING.md       # Complete services catalog
│
├── .env.local                    # Environment variables (gitignored)
├── .gitignore                    # Git ignore rules
├── next.config.mjs               # Next.js configuration
├── package.json                  # NPM dependencies
├── tailwind.config.ts            # Tailwind configuration
├── tsconfig.json                 # TypeScript configuration
└── README.md                     # Project readme

```

---

## App Router Architecture

**Next.js 14+ uses App Router** (not Pages Router)

**Key Concepts:**
- Each folder in `/app` is a route segment
- `page.tsx` files create publicly accessible routes
- `layout.tsx` files define UI shared across routes
- `[slug]` folders are dynamic routes
- Server Components by default (faster, better SEO)
- Client Components only when needed (use `"use client"` directive)

**Example Routes:**
- `/app/page.tsx` → https://polus-cs.com/
- `/app/services/page.tsx` → https://polus-cs.com/services
- `/app/services/[slug]/page.tsx` → https://polus-cs.com/services/systems-assessment

---

## Server vs. Client Components

### Server Components (Default)

**Used for:**
- Static content
- Data fetching
- SEO metadata
- Database queries (if added later)

**Benefits:**
- Zero JavaScript sent to client
- Direct backend access
- Better performance
- Better SEO

**Examples:**
```typescript
// app/services/page.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "IT Services for Small Businesses",
  description: "...",
};

export default function ServicesPage() {
  const services = [...]; // Static data
  return <ServicesGrid services={services} />;
}
```

**CRITICAL RULE:** Components that export `metadata` MUST be Server Components (cannot use `"use client"`)

### Client Components

**Used for:**
- Interactivity (onClick, onChange, etc.)
- Browser APIs (window, document, localStorage)
- React hooks (useState, useEffect, etc.)
- Event handlers

**Requires:** `"use client"` directive at top of file

**Examples:**
```typescript
// components/ContactForm.tsx
"use client";
import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({...});
  // Interactive logic
}
```

**Common Client Components:**
- ContactForm
- QuoteForm
- ServicesGrid (search functionality)
- Navbar (mobile menu)
- FAQAccordion (collapsible sections)

---

## API Routes

### POST /api/contact

**File:** `app/api/contact/route.ts`  
**Purpose:** Handle contact form submissions  
**Method:** POST  
**Body:**
```json
{
  "name": "string",
  "email": "string",
  "phone": "string (optional)",
  "businessName": "string (optional)",
  "message": "string",
  "interestedServices": ["string"] (optional)
}
```

**Response:**
- 200: Success, email sent
- 400: Missing required fields
- 500: Server error (email failed)

**Email Sent To:** `CONTACT_EMAIL` from environment variables

**Uses:** nodemailer with Resend SMTP

### POST /api/roi-results

**File:** `app/api/roi-results/route.ts`  
**Purpose:** Email ROI calculator results to user  
**Method:** POST  
**Body:**
```json
{
  "userEmail": "string",
  "userInfo": {
    "businessName": "string",
    "industry": "string"
  },
  "results": {
    "totalCost": "number",
    "totalRecurring": "number",
    "totalOneTime": "number",
    "selectedServices": [...]
  }
}
```

**Response:**
- 200: Success, results emailed
- 400: Missing email or results
- 500: Server error

**Email Template:** Custom HTML with results breakdown

---

## Data Flow Patterns

### Static Data (Services, Industries, Locations)

**Pattern:** Defined in page components, passed to client components as props

**Example:**
```typescript
// app/services/[slug]/page.tsx (Server Component)
const services = [
  { slug: "systems-assessment", title: "...", ... },
  // ... 18 more services
];

// Find service by slug from URL params
const service = services.find(s => s.slug === params.slug);

// Pass to client component
return <ServiceDetail service={service} />;
```

**Future:** Consider moving to `/lib/data.ts` for reusability

### Form Data (Contact, Quote, ROI)

**Pattern:** Client component collects input → POST to API route → API sends email

**Example Flow:**
1. User fills out ContactForm (client component)
2. Form submits to `/api/contact` (API route)
3. API route uses nodemailer to send email
4. API returns success/error
5. Form shows success message or error

**Validation:** Client-side with react-hook-form, server-side in API route

### Quiz Results (Assessment)

**Pattern:** Client component state → Generate recommendations → Pass to quote form

**Flow:**
1. User answers 14 questions in `/app/start/page.tsx`
2. Answers stored in component state
3. On submit, calculate scores for 6 service bundles
4. Redirect to `/contact` with recommended services in URL params
5. Contact page prefills recommended services

**URL Format:** `/contact?services=security-first-package,it-operations-toolkit`

---

## Styling Architecture

### Tailwind Configuration

**File:** `tailwind.config.ts`

**Custom Colors:**
```typescript
colors: {
  'polus-forest': '#0D251C',
  'polus-gold': '#DAAA00',
  'polus-mint': '#B1E3C7',
  'polus-emerald': '#10B981',
}
```

**Custom Fonts:**
```typescript
fontFamily: {
  'heading': ['var(--font-heading)', 'sans-serif'],
}
```

### Design System Patterns

**Consistent Spacing:**
- Sections: `py-12 sm:py-16 lg:py-20`
- Containers: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Cards: `p-6 sm:p-8`
- Gaps: `gap-8` or `gap-12`

**Typography Hierarchy:**
- H1: `text-4xl sm:text-5xl lg:text-6xl font-heading`
- H2: `text-3xl sm:text-4xl lg:text-5xl font-heading`
- H3: `text-2xl sm:text-3xl font-heading`
- Body: `text-base sm:text-lg`
- Small: `text-sm`

**Responsive Breakpoints:**
- sm: 640px
- md: 768px
- lg: 1024px
- xl: 1280px
- 2xl: 1536px

**Color Usage:**
- Primary backgrounds: `bg-polus-forest`
- Accents: `text-polus-gold` or `bg-polus-gold`
- Light accents: `bg-polus-mint/10`
- Hover states: `hover:bg-polus-gold hover:text-polus-forest`

**Button Patterns:**
```typescript
// Primary button
className="bg-polus-gold text-polus-forest px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition"

// Secondary button
className="border border-polus-gold text-polus-gold px-6 py-3 rounded-lg font-semibold hover:bg-polus-gold hover:text-polus-forest transition"
```

---

## Component Patterns

### Reusable Button Component

**File:** `components/Button.tsx`

**Props:**
```typescript
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}
```

**Usage:**
```typescript
<Button variant="primary" size="lg" onClick={handleClick}>
  Get Started
</Button>
```

### Reusable Card Component

**File:** `components/Card.tsx`

**Props:**
```typescript
interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}
```

**Usage:**
```typescript
<Card hover>
  <h3>Service Title</h3>
  <p>Description...</p>
</Card>
```

### Section Wrapper Component

**File:** `components/Section.tsx`

**Props:**
```typescript
interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'gray' | 'forest' | 'mint';
}
```

**Usage:**
```typescript
<Section background="forest">
  <h2>Section Heading</h2>
  {/* Content */}
</Section>
```

---

## SEO & Metadata

### Metadata API

**Pattern:** Export `metadata` object or `generateMetadata` function from Server Components

**Static Metadata:**
```typescript
// app/services/page.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "IT Services | Polus",
  description: "Project-based IT consulting for Oklahoma small businesses.",
  openGraph: {
    title: "IT Services | Polus",
    description: "...",
    url: "https://polus-cs.com/services",
    siteName: "Polus",
    type: "website",
  },
};
```

**Dynamic Metadata:**
```typescript
// app/services/[slug]/page.tsx
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = services.find(s => s.slug === params.slug);
  return {
    title: `${service.title} | Polus`,
    description: service.description,
  };
}
```

**Root Layout Metadata:**
```typescript
// app/layout.tsx
export const metadata: Metadata = {
  title: { default: "Polus | IT Consulting", template: "%s | Polus" },
  description: "Project-based IT consulting for Oklahoma small businesses.",
};
```

---

## Environment Variables

### Required Variables

**File:** `.env.local` (gitignored)

```bash
# SMTP Configuration (Resend)
SMTP_HOST=smtp.resend.com
SMTP_PORT=465
SMTP_USER=resend
SMTP_PASS=<your_resend_api_key>

# Contact Form
CONTACT_EMAIL=jack.washmon@polus-cs.com

# Google Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

**Usage in Code:**
```typescript
// Server-side only
const smtpHost = process.env.SMTP_HOST;

// Client-side (must prefix with NEXT_PUBLIC_)
const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
```

**Vercel Deployment:**
- Add all environment variables in Vercel dashboard
- Settings → Environment Variables
- Separate production/preview/development values if needed

---

## Build & Deployment

### Local Development

```powershell
# Install dependencies
npm install

# Run development server
npm run dev

# Open browser to http://localhost:3000
```

### Production Build

```powershell
# Build for production
npm run build

# Test production build locally
npm start

# Open browser to http://localhost:3000
```

**Build Output:** `.next/` folder (gitignored)

### Vercel Deployment

**Automatic Deployment:**
- Connected to GitHub repository
- Pushes to `main` branch trigger production deployment
- Pull requests create preview deployments
- Build logs visible in Vercel dashboard

**Build Command:** `npm run build`  
**Output Directory:** `.next`  
**Install Command:** `npm install`

**Deployment URL:**
- Production: https://polus-cs.com
- Preview: https://polus-<hash>.vercel.app

**Build Time:** ~2-3 minutes average

---

## TypeScript Configuration

**File:** `tsconfig.json`

**Key Settings:**
- `strict: true` - Enforce strict type checking
- `noImplicitAny: true` - Require explicit types
- `paths: { "@/*": ["./src/*"] }` - Path aliases (optional, not actively used)

**Common Type Imports:**
```typescript
import { Metadata } from 'next';
import type { ReactNode } from 'react';
```

---

## Common Development Issues & Solutions

### Issue: "Metadata export found in Client Component"

**Cause:** Trying to export `metadata` from a file with `"use client"` directive

**Solution:**
1. Remove `"use client"` from component with metadata
2. Move interactive logic to separate Client Component
3. Pass data as props from Server Component to Client Component

**Example:**
```typescript
// ❌ WRONG
"use client";
export const metadata = {...}; // Error!

// ✅ CORRECT
// services/page.tsx (Server Component)
export const metadata = {...};
export default function ServicesPage() {
  return <ServicesGrid services={services} />; // Pass to client component
}

// components/ServicesGrid.tsx (Client Component)
"use client";
export default function ServicesGrid({ services }) {
  // Interactive logic here
}
```

### Issue: "Cannot read properties of undefined (reading 'title')"

**Cause:** Dynamic route not finding data (service, industry, location)

**Solution:** Add null check and 404 handling

**Example:**
```typescript
const service = services.find(s => s.slug === params.slug);
if (!service) {
  notFound(); // Next.js 404 page
}
```

### Issue: "ReferenceError: window is not defined"

**Cause:** Using browser APIs in Server Component

**Solution:** Add `"use client"` directive or check for browser environment

**Example:**
```typescript
// Option 1: Make it a Client Component
"use client";
const width = window.innerWidth;

// Option 2: Check for browser
if (typeof window !== 'undefined') {
  const width = window.innerWidth;
}
```

### Issue: Email not sending (500 error)

**Possible Causes:**
1. Missing environment variables
2. Incorrect SMTP credentials
3. Resend API key expired
4. Network/firewall blocking port 465

**Debug Steps:**
1. Check `.env.local` file exists and has all variables
2. Verify Resend API key in dashboard
3. Check server logs for detailed error
4. Test with different email address

---

## File Naming Conventions

**Pages:** `page.tsx` (Next.js App Router convention)  
**Layouts:** `layout.tsx` (Next.js App Router convention)  
**Components:** PascalCase (e.g., `ContactForm.tsx`, `Button.tsx`)  
**Utilities:** camelCase (e.g., `nodemailer.ts`)  
**Styles:** kebab-case (e.g., `globals.css`)  
**Routes:** kebab-case folders (e.g., `/terms-of-service/`)  

---

## Code Organization Best Practices

1. **Server Components by default** - Only add `"use client"` when needed
2. **Extract reusable logic** - Create utility functions in `/lib` or `/src/lib`
3. **Keep pages lean** - Move complex UI to components
4. **Type everything** - Use TypeScript interfaces for all props
5. **Consistent styling** - Use Tailwind utilities, avoid inline styles
6. **Descriptive names** - Function names should describe what they do
7. **Comment complex logic** - Especially quiz scoring, pricing calculations
8. **Handle errors** - Add try/catch in API routes, null checks in components

---

This document provides a comprehensive technical reference for the Polus website architecture as of January 18, 2026.
