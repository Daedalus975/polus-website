# Development Workflows & Common Tasks

**Last Updated:** January 18, 2026

---

## Table of Contents

1. [Adding a New Service](#adding-a-new-service)
2. [Updating Pricing](#updating-pricing)
3. [Creating a New Page](#creating-a-new-page)
4. [Updating Navigation](#updating-navigation)
5. [Adding Environment Variables](#adding-environment-variables)
6. [Debugging Common Issues](#debugging-common-issues)
7. [Local Testing](#local-testing)
8. [Git Workflow](#git-workflow)
9. [Deployment Process](#deployment-process)
10. [Content Updates](#content-updates)

---

## Adding a New Service

**⚠️ UPDATED WORKFLOW (Jan 18, 2026):** Services are now managed in a centralized data file.

### Step 1: Add Service to Centralized Data File

**File:** `lib/serviceData.ts`

**Location:** Inside the `SERVICES` array

**Template:**
```typescript
{
  title: "New Service Name",
  description: "Brief one-sentence description for listings and SEO.",
  slug: "new-service-slug", // Must be unique, kebab-case
  category: "infrastructure", // or: operations, security, advisory, bundles
  checkboxLabel: "Label for Contact/Quote Forms",
  tag: "Optional Badge Label", // e.g., "Start Here", "Core Infrastructure"
  featured: false // Set true if should be highlighted
}
```

**Available Categories:**
- `infrastructure` - Core Infrastructure (M365, Identity, IT Ops)
- `operations` - Operations & Process (Process Docs, Training, Web Dev)
- `security` - Security & Risk (Backup, DR, Compliance)
- `advisory` - Advisory & Planning (IT Advisory, Roadmap, Assessment)
- `bundles` - Package Deals (Foundation, Growth packages)

### Step 2: Service Detail Page (If Needed)

**File:** `app/services/[slug]/page.tsx`

Services without detail pages will work, but for full service pages, add to `services` array in detail page template.

### Step 3: Forms Auto-Update

✅ **ContactForm and QuoteForm automatically update!**

No manual updates needed - they import from `lib/serviceData.ts` via `getCheckboxLabels()`

### Step 4: Add to Quiz Recommendations (Optional)

**File:** `app/start/page.tsx`

**If the service should be recommended by assessment quiz:**

**Location:** Within recommendation logic (~line 600+)

**Example:**
```typescript
if (condition based on quiz answers) {
  recommendedServices.push({
    serviceSlug: "new-service-slug",
    reason: "Why this service is recommended based on your answers"
  });
}
```

### Step 4: Add to Quiz Recommendations (Optional)

```powershell
npm run dev
```

**Visit:**
- `/services` - Verify service appears in grid and correct category
- Click category tabs to verify filtering works
- `/services/new-service-slug` - Verify detail page renders (if created)
- Check forms at `/contact` - Verify new service checkbox appears
- Test search functionality
- Verify responsive design on mobile

### Step 6: Commit and Deploy

```powershell
git add .
git commit -m "feat: Add new-service-slug service"
git push origin main
```

**Vercel will automatically deploy** (~2-3 minutes)

---

## Updating Pricing

### Simple Price Update (No Tiers)

**File:** `app/services/[slug]/page.tsx`

**Find the service in the array and update:**
```typescript
{
  slug: "service-slug",
  // ... other fields
  startingPrice: "$X,XXX", // Update this value
  // ... other fields
}
```

**Pricing is displayed as shown - no automatic discounts applied**

### Tiered Pricing Update

**Update each tier individually:**
```typescript
pricingTiers: [
  {
    name: "Tier 1",
    price: "$X,XXX", // Update
    description: "..." // Update scope if changed
  },
  {
    name: "Tier 2",
    price: "$X,XXX", // Update
    description: "..." // Update scope if changed
  }
]
```

### Update Corresponding Listing Page

**File:** `app/services/page.tsx`

**Find and update:**
```typescript
{
  title: "Service Name",
  slug: "service-slug",
  // ... other fields
  startingPrice: "$X,XXX", // Must match detail page
  // ... other fields
}
```

### Update Home Page (If Featured)

**File:** `app/page.tsx`

**If service is featured on home page, update pricing there too:**

**Example (~line 165):**
```typescript
<Card>
  <h3>Service Name</h3>
  <p className="text-3xl font-bold">
    <span className="line-through text-gray-400">${originalPrice}</span>
    <span className="text-polus-gold ml-2">${discountedPrice}</span>
  </p>
</Card>
```

### Bundle Pricing Updates

**Bundles automatically sum component services**, but bundle prices are set manually

**File:** `app/services/[slug]/page.tsx`

**Find bundle service:**
```typescript
{
  slug: "bundle-slug",
  isBundle: true,
  startingPrice: "$XX,XXX", // Update this
  overview: `
    Save $X,XXX when you bundle these services:
    - Service 1 ($X,XXX value)
    - Service 2 ($X,XXX value)
    - Service 3 ($X,XXX value)
    Total value: $XX,XXX | Bundle price: $XX,XXX
  `,
}
```

**Update savings description in services listing:**

**File:** `app/services/page.tsx`

```typescript
{
  title: "Bundle Name",
  slug: "bundle-slug",
  description: "Save $X,XXX on bundled services..." // Update savings amount
}
```

### Test Pricing Changes

1. Check detail page shows correct price
2. Check pricing appears on services listing
3. If featured on home, verify home page pricing
4. Check any references in email templates

---

## Creating a New Page

### Step 1: Create Page File

**Location:** `app/new-page-name/page.tsx`

**Basic Template:**
```typescript
import { Metadata } from 'next';
import Section from '@/components/Section';

export const metadata: Metadata = {
  title: "Page Title | Polus",
  description: "SEO-friendly page description.",
};

export default function NewPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="forest" spacing="lg">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading text-white mb-6">
            Page Title
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Page subtitle or introduction.
          </p>
        </div>
      </Section>

      {/* Content Section */}
      <Section background="white" spacing="md">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-heading mb-8">Section Heading</h2>
          <p className="text-lg text-gray-700 mb-6">
            Content paragraph...
          </p>
        </div>
      </Section>
    </>
  );
}
```

### Step 2: Add to Navigation (Optional)

**File:** `components/Navbar.tsx`

**Add to menuItems array:**
```typescript
const menuItems = [
  // ... existing items
  { label: 'New Page', href: '/new-page-name' },
];
```

**Note:** Consider menu organization - don't overcrowd navbar

### Step 3: Add to Footer (Optional)

**File:** `components/Footer.tsx`

**Add to appropriate section:**
```typescript
<div>
  <h3 className="font-semibold mb-4">Section Name</h3>
  <ul className="space-y-2">
    {/* ... existing links */}
    <li>
      <Link href="/new-page-name" className="hover:text-polus-gold">
        New Page
      </Link>
    </li>
  </ul>
</div>
```

### Step 4: Test Page

```powershell
npm run dev
# Visit http://localhost:3000/new-page-name
```

**Check:**
- Page loads without errors
- Metadata appears in browser tab
- Responsive design works on mobile
- Navigation links work
- Content is readable and styled correctly

---

## Updating Navigation

### Navbar Updates

**File:** `components/Navbar.tsx`

**Add/Remove/Reorder Menu Items:**
```typescript
const menuItems = [
  { label: 'Services', href: '/services' },
  { label: 'Industries', href: '/industries' },
  { label: 'New Item', href: '/new-page' }, // Add here
  { label: 'About', href: '/about' },
];
```

**Add Dropdown (Not Currently Used):**
```typescript
{
  label: 'Parent Menu',
  submenu: [
    { label: 'Submenu Item 1', href: '/page-1' },
    { label: 'Submenu Item 2', href: '/page-2' },
  ]
}
```

**Then update JSX to handle submenu property**

### Footer Updates

**File:** `components/Footer.tsx`

**Structure:**
- Column 1: Services
- Column 2: Company
- Column 3: Legal
- Column 4: Contact

**Add link to any column:**
```typescript
<li>
  <Link href="/new-page" className="text-gray-400 hover:text-polus-gold transition">
    New Page Name
  </Link>
</li>
```

### Mobile Menu

**Mobile menu automatically inherits from menuItems array** - no separate update needed

---

## Adding Environment Variables

### Local Development

**File:** `.env.local` (create if doesn't exist)

**Add variables:**
```bash
# SMTP Configuration
SMTP_HOST=smtp.resend.com
SMTP_PORT=465
SMTP_USER=resend
SMTP_PASS=your_api_key_here

# Application
CONTACT_EMAIL=jack.washmon@polus-cs.com

# Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

**Rules:**
- Variables starting with `NEXT_PUBLIC_` are accessible client-side
- Other variables are server-side only
- Never commit `.env.local` to git (already in .gitignore)

### Production (Vercel)

**Steps:**
1. Go to Vercel dashboard
2. Select project
3. Settings → Environment Variables
4. Add each variable:
   - Key: `SMTP_HOST`
   - Value: `smtp.resend.com`
   - Environment: Production (and/or Preview, Development)
5. Click "Save"
6. Redeploy for changes to take effect

**Redeploy:**
- Deployments tab → Click "..." → Redeploy

### Using Variables in Code

**Server-side (API routes, Server Components):**
```typescript
const smtpHost = process.env.SMTP_HOST;
```

**Client-side (Client Components):**
```typescript
const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
```

**Validation:**
```typescript
if (!process.env.SMTP_HOST) {
  throw new Error('SMTP_HOST environment variable is required');
}
```

---

## Debugging Common Issues

### Build Errors

**Error: "Metadata export found in Client Component"**

**Cause:** Using `export const metadata` in a file with `"use client"`

**Fix:**
1. Remove `"use client"` from component with metadata, OR
2. Move metadata to parent Server Component
3. Pass data as props to Client Component

**Error: "Cannot find module '@/components/...'"**

**Cause:** Component doesn't exist or path is wrong

**Fix:**
1. Verify file exists at specified path
2. Check for typos in import statement
3. Ensure file has proper export

**Error: "Property 'X' does not exist on type 'Y'"**

**Cause:** TypeScript type mismatch

**Fix:**
1. Check prop interface matches component usage
2. Add property to interface if missing
3. Use optional chaining `obj?.property` if property might not exist

### Runtime Errors

**Error: "Cannot read properties of undefined (reading 'X')"**

**Cause:** Trying to access property of null/undefined object

**Fix:**
1. Add null check: `if (object) { ... }`
2. Use optional chaining: `object?.property`
3. Provide default value: `const value = object?.property || 'default';`

**Error: "window is not defined"**

**Cause:** Using browser API in Server Component

**Fix:**
1. Add `"use client"` directive, OR
2. Check for browser: `if (typeof window !== 'undefined') { ... }`

### Email Issues

**Emails not sending (500 error)**

**Debug Steps:**
1. Check `.env.local` file exists and has all variables
2. Verify Resend API key is valid (check Resend dashboard)
3. Check server logs for detailed error
4. Test with curl:
```powershell
curl -X POST http://localhost:3000/api/contact `
  -H "Content-Type: application/json" `
  -d '{"name":"Test","email":"test@example.com","message":"Test message"}'
```

**Check API route:**
```typescript
console.log('SMTP Config:', {
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  user: process.env.SMTP_USER,
  // Don't log password
});
```

### Styling Issues

**Tailwind classes not working**

**Possible Causes:**
1. Class name typo
2. Conflicting classes
3. CSS specificity issue
4. Tailwind not configured for file

**Debug:**
1. Inspect element in browser DevTools
2. Check if class is in compiled CSS
3. Try using `!important` temporarily: `!bg-red-500`
4. Ensure file is included in tailwind.config.ts `content` array

---

## Local Testing

### Start Development Server

```powershell
# Install dependencies (first time or after package.json changes)
npm install

# Start dev server with hot reload
npm run dev
```

**Server starts at:** http://localhost:3000

**Hot Reload:** Changes to files automatically refresh browser

### Test Production Build Locally

```powershell
# Build for production
npm run build

# Start production server
npm start
```

**Why test production build:**
- Catches build-time errors
- Tests optimizations
- Verifies environment variables work
- Ensures no dev-only code breaks production

### Common Test Scenarios

**Test new service:**
1. Visit `/services`
2. Search for service name
3. Click service card
4. Verify detail page loads
5. Check pricing discount calculates
6. Test FAQ accordion
7. Click "Get Started" CTA
8. Verify contact form prefills service

**Test form submission:**
1. Fill out contact form
2. Submit
3. Check for success message
4. Verify email received (check inbox)
5. Test validation (submit with missing fields)

**Test responsive design:**
1. Open DevTools (F12)
2. Toggle device toolbar (Ctrl+Shift+M)
3. Test mobile sizes (375px, 414px)
4. Test tablet (768px, 1024px)
5. Test desktop (1280px, 1920px)
6. Check navigation menu on mobile
7. Verify touch targets are large enough

**Test quiz flow:**
1. Visit `/start`
2. Answer all questions
3. Submit
4. Verify redirect to `/contact`
5. Check services prefilled
6. Verify recommendations match quiz answers

---

## Git Workflow

### Daily Workflow

```powershell
# Pull latest changes
git pull origin main

# Make changes to files...

# Check what changed
git status

# Add changes
git add .

# Commit with descriptive message
git commit -m "feat: Add new service for cloud migration"

# Push to GitHub
git push origin main
```

### Commit Message Conventions

**Format:** `<type>: <description>`

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `refactor`: Code refactoring (no functional change)
- `docs`: Documentation updates
- `style`: Formatting, whitespace (no code change)
- `test`: Adding tests
- `chore`: Maintenance, dependencies

**Examples:**
```
feat: Add disaster recovery testing service
fix: Resolve contact form validation error
refactor: Extract pricing logic to utility function
docs: Update README with deployment instructions
style: Format code with Prettier
chore: Update dependencies to latest versions
```

### Branching (Optional, Not Currently Used)

**For larger features:**
```powershell
# Create feature branch
git checkout -b feature/new-service

# Make changes and commit
git add .
git commit -m "feat: Add new service"

# Push branch
git push origin feature/new-service

# Create pull request on GitHub
# Merge after review
```

### Viewing History

```powershell
# See recent commits
git log --oneline -10

# See what changed in a commit
git show <commit-hash>

# See changes not yet committed
git diff
```

---

## Deployment Process

### Automatic Deployment (Vercel)

**Trigger:** Push to `main` branch

**Process:**
1. Push commits to GitHub
2. Vercel detects push via webhook
3. Vercel starts build process
4. Runs `npm install`
5. Runs `npm run build`
6. Deploys to production if build succeeds
7. Updates https://polus-cs.com

**Build Time:** ~2-3 minutes

**Monitor:** Vercel dashboard shows build logs and status

### Manual Deployment

**Via Vercel Dashboard:**
1. Go to Deployments tab
2. Click "Redeploy" on previous deployment
3. Confirm

**Via Vercel CLI:**
```powershell
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

### Rollback Deployment

**If something breaks:**
1. Go to Vercel dashboard
2. Deployments tab
3. Find previous working deployment
4. Click "..." → "Promote to Production"

**OR fix forward:**
```powershell
# Revert problematic commit
git revert <commit-hash>

# Push
git push origin main
```

### Preview Deployments

**Automatic for Pull Requests:**
- Each PR gets unique preview URL
- Test changes before merging
- URL format: `polus-<hash>.vercel.app`

**Manual Preview:**
```powershell
vercel
# Gives preview URL without affecting production
```

---

## Content Updates

### Update Service Description

**File:** `app/services/[slug]/page.tsx`

**Find service and update:**
```typescript
{
  slug: "service-slug",
  description: "New description for SEO and listings",
  overview: `
    Updated detailed description...
  `,
  deliverables: [
    "Updated deliverable 1",
    "New deliverable 2"
  ],
}
```

**Also update listing page:**

**File:** `app/services/page.tsx`

```typescript
{
  title: "Service Name",
  description: "Same new description", // Keep consistent
}
```

### Add FAQ to Service

**File:** `app/services/[slug]/page.tsx`

**Add to `faqs` array:**
```typescript
faqs: [
  // ... existing FAQs
  {
    question: "New question?",
    answer: "Detailed answer with specifics."
  }
]
```

### Update Home Page Content

**File:** `app/page.tsx`

**Sections:**
- Hero (lines ~60-110)
- Value Props (lines ~115-170)
- Featured Packages (lines ~175-250)
- FAQ (lines ~255-300)

**Example - Update Hero:**
```typescript
<h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading mb-6">
  New Headline Text
</h1>
<p className="text-xl sm:text-2xl mb-8">
  New subtitle text
</p>
```

### Update About Page

**File:** `app/about/page.tsx`

**Update:**
- Company story
- Team bios
- Values and mission
- Contact information

### Add Testimonial (Future)

**Pattern for when testimonials are added:**
```typescript
const testimonials = [
  {
    quote: "Polus transformed our IT infrastructure...",
    author: "John Doe",
    title: "CEO",
    company: "Example Corp",
    industry: "Healthcare"
  }
];
```

---

## Quick Reference Commands

### Development
```powershell
npm install          # Install dependencies
npm run dev          # Start dev server
npm run build        # Production build
npm start            # Run production build
```

### Git
```powershell
git status           # Check changes
git add .            # Stage all changes
git commit -m "msg"  # Commit with message
git push origin main # Push to GitHub
git pull origin main # Pull latest changes
git log --oneline    # View commit history
```

### Deployment
```powershell
vercel               # Deploy preview
vercel --prod        # Deploy production
git push origin main # Auto-deploy via Vercel
```

---

## Checklist for Common Tasks

### Before Pushing Code
- [ ] Test locally (`npm run dev`)
- [ ] Build succeeds (`npm run build`)
- [ ] No TypeScript errors
- [ ] Changes reviewed for typos
- [ ] Responsive design tested
- [ ] Commit message is descriptive

### After Deployment
- [ ] Check Vercel build logs (no errors)
- [ ] Visit production site
- [ ] Test changed functionality
- [ ] Check mobile responsiveness
- [ ] Verify no broken links
- [ ] Monitor for any error reports

### Adding New Service
- [ ] Added to services detail array
- [ ] Added to services listing page
- [ ] Pricing matches across both
- [ ] FAQs answer common questions
- [ ] Deliverables have scope boundaries
- [ ] Timeline is realistic
- [ ] Tested service detail page loads
- [ ] Tested service appears in search
- [ ] Updated contact form options (if needed)

---

This document provides step-by-step workflows for all common development tasks as of January 18, 2026.
