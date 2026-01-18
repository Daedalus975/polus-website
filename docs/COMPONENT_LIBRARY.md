# Component Library Reference

**Last Updated:** January 18, 2026

---

## Core Components

### Button

**File:** `components/Button.tsx`  
**Type:** Client Component  
**Purpose:** Reusable button with consistent styling

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
import Button from '@/components/Button';

<Button 
  variant="primary" 
  size="lg" 
  onClick={() => console.log('clicked')}
>
  Get Started
</Button>

<Button variant="secondary" type="submit">
  Submit Form
</Button>

<Button variant="outline" size="sm" disabled>
  Loading...
</Button>
```

**Styling:**
- Primary: Gold background, forest text, hover effects
- Secondary: Forest border, gold text, hover fills
- Outline: Transparent with border

---

### Card

**File:** `components/Card.tsx`  
**Type:** Client Component (if hover effects) or Server Component  
**Purpose:** Consistent card container with optional hover effects

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
import Card from '@/components/Card';

<Card hover>
  <h3 className="text-2xl font-heading mb-4">Service Title</h3>
  <p className="text-gray-600 mb-6">Description text...</p>
  <Button>Learn More</Button>
</Card>

<Card className="bg-polus-mint/10">
  <p>Custom background card</p>
</Card>
```

**Default Styling:**
- White background
- Rounded corners
- Drop shadow
- Padding: p-6 sm:p-8
- Hover: Lift effect with increased shadow (if hover=true)

---

### Section

**File:** `components/Section.tsx`  
**Type:** Server Component  
**Purpose:** Consistent section wrapper with spacing and background options

**Props:**
```typescript
interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'gray' | 'forest' | 'mint' | 'gold';
  spacing?: 'sm' | 'md' | 'lg';
}
```

**Usage:**
```typescript
import Section from '@/components/Section';

<Section background="forest" spacing="lg">
  <div className="max-w-7xl mx-auto px-4">
    <h2 className="text-4xl font-heading text-white mb-8">
      Our Services
    </h2>
    {/* Content */}
  </div>
</Section>
```

**Background Colors:**
- white: `bg-white`
- gray: `bg-gray-50`
- forest: `bg-polus-forest` (text should be white/light)
- mint: `bg-polus-mint/10`
- gold: `bg-polus-gold/10`

**Spacing:**
- sm: `py-8 sm:py-12`
- md: `py-12 sm:py-16`
- lg: `py-16 sm:py-20 lg:py-24`

---

### Navbar

**File:** `components/Navbar.tsx`  
**Type:** Client Component (mobile menu state)  
**Purpose:** Main site navigation with mobile responsive menu

**Features:**
- Logo with link to home
- Desktop horizontal menu
- Mobile hamburger menu
- Dropdown support (not currently used)
- Active link highlighting
- "Book a Call" CTA button

**Menu Items:**
```typescript
const menuItems = [
  { label: 'Services', href: '/services' },
  { label: 'Industries', href: '/industries' },
  { label: 'Locations', href: '/locations' },
  { label: 'Why Polus', href: '/why-polus' },
  { label: 'About', href: '/about' },
  { label: 'Resources', href: '/resources' },
];
```

**Styling:**
- Sticky header with backdrop blur
- Responsive: Desktop menu at lg breakpoint, mobile below
- Mobile: Full-screen overlay menu
- Active state: Gold underline

**Usage:**
```typescript
// Already included in app/layout.tsx
import Navbar from '@/components/Navbar';

<body>
  <Navbar />
  {children}
  <Footer />
</body>
```

---

### Footer

**File:** `components/Footer.tsx`  
**Type:** Server Component  
**Purpose:** Site footer with links, contact info, social media

**Sections:**
1. **Services** - Links to key services
2. **Company** - About, Why Polus, Resources, Referral
3. **Legal** - Privacy, Terms, Cookie Policy, **Disclaimer** (added Jan 2026), Accessibility
4. **Contact** - Email, phone, address
5. **Social** - LinkedIn link
6. **Bottom** - Copyright, Polus branding

**Links Updated (Jan 2026):**
- Added `/disclaimer` between Cookie Policy and Accessibility

**Usage:**
```typescript
// Already included in app/layout.tsx
import Footer from '@/components/Footer';

<body>
  <Navbar />
  {children}
  <Footer />
</body>
```

---

### ContactForm

**File:** `components/ContactForm.tsx`  
**Type:** Client Component  
**Purpose:** Main contact form with service selection

**Features:**
- Text inputs: name, email, phone, businessName
- Textarea: message
- Multi-select: interestedServices
- Form validation with react-hook-form
- Submit to `/api/contact`
- Success/error messaging
- Loading state during submission

**Props:**
```typescript
interface ContactFormProps {
  preselectedServices?: string[];
}
```

**Usage:**
```typescript
import ContactForm from '@/components/ContactForm';

// Basic usage
<ContactForm />

// With preselected services (from quiz)
<ContactForm preselectedServices={['systems-assessment', 'it-operations-toolkit']} />
```

**Service Options:**
All 19 services + 2 bundles available for selection

**Validation Rules:**
- Name: Required, min 2 characters
- Email: Required, valid email format
- Phone: Optional, but validated if provided
- Business Name: Optional
- Message: Required, min 10 characters

**API Integration:**
```typescript
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
});
```

---

### QuoteForm

**File:** `components/QuoteForm.tsx` (524 lines)  
**Type:** Client Component  
**Purpose:** Multi-step quote request form

**Steps:**
1. Basic Info (name, email, phone, businessName)
2. Service Selection (checkboxes for all services)
3. Timeline & Budget
4. Additional Details (textarea)
5. Review & Submit

**Features:**
- Step-by-step navigation
- Progress indicator
- Form validation per step
- Service bundles displayed separately
- Calculate total estimated cost
- Submit to `/api/contact` with "Quote Request" subject

**State Management:**
```typescript
const [step, setStep] = useState(1);
const [formData, setFormData] = useState({
  // name, email, phone, businessName
  // selectedServices: string[]
  // timeline, budget, additionalDetails
});
```

**Usage:**
```typescript
import QuoteForm from '@/components/QuoteForm';

<QuoteForm />
```

**Typical Flow:**
1. User fills basic info → Next
2. User selects services → Next
3. User provides timeline/budget → Next
4. User adds details → Review
5. User reviews → Submit
6. Form sends email with all details

---

### ServicesGrid

**File:** `components/ServicesGrid.tsx`  
**Type:** Client Component  
**Purpose:** Display services with search functionality

**Features:**
- Grid layout (1 col mobile, 2 cols tablet, 3 cols desktop)
- Search by title, description, or tags
- Real-time filtering
- Empty state with "Clear search" button
- Service cards with hover effects

**Props:**
```typescript
interface ServicesGridProps {
  services: Array<{
    title: string;
    slug: string;
    description: string;
    startingPrice: string;
    timeline: string;
    tags?: string[];
  }>;
}
```

**Usage:**
```typescript
import ServicesGrid from '@/components/ServicesGrid';

const services = [
  { title: "Systems Review", slug: "systems-assessment", ... },
  // ... more services
];

<ServicesGrid services={services} />
```

**Search Logic:**
- Lowercase comparison
- Searches: title, description, tags
- Updates immediately on input change

---

### FAQAccordion

**File:** `components/FAQAccordion.tsx`  
**Type:** Client Component  
**Purpose:** Collapsible FAQ sections

**Features:**
- Expand/collapse individual items
- Smooth animation
- Plus/minus icon indicator
- Accessible (keyboard navigation)

**Props:**
```typescript
interface FAQAccordionProps {
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}
```

**Usage:**
```typescript
import FAQAccordion from '@/components/FAQAccordion';

const faqs = [
  {
    question: "How long does this service take?",
    answer: "Typically 2-3 weeks depending on complexity."
  },
  // ... more FAQs
];

<FAQAccordion faqs={faqs} />
```

**Styling:**
- Border between items
- Hover background change
- Smooth height animation on expand/collapse

---

### IndustryHero

**File:** `components/IndustryHero.tsx`  
**Type:** Server Component  
**Purpose:** Hero section for industry-specific pages

**Props:**
```typescript
interface IndustryHeroProps {
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
}
```

**Usage:**
```typescript
import IndustryHero from '@/components/IndustryHero';

<IndustryHero
  title="IT Solutions for Healthcare"
  description="HIPAA-compliant technology that supports patient care and operational efficiency."
  imageSrc="/images/industries/healthcare.jpg"
  imageAlt="Healthcare technology"
/>
```

**Layout:**
- Two-column on desktop (text left, image right)
- Single column on mobile (text top, image bottom)
- Forest background with white text
- Full-width responsive

---

### LocationHero

**File:** `components/LocationHero.tsx`  
**Type:** Server Component  
**Purpose:** Hero section for location-specific pages

**Props:**
```typescript
interface LocationHeroProps {
  city: string;
  tagline: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
}
```

**Usage:**
```typescript
import LocationHero from '@/components/LocationHero';

<LocationHero
  city="Oklahoma City"
  tagline="Enterprise IT for the Capital"
  description="Serving businesses in Oklahoma City with on-site and remote IT consulting."
  imageSrc="/images/locations/okc.jpg"
  imageAlt="Oklahoma City skyline"
/>
```

**Similar to IndustryHero but tailored for locations**

---

### OperatingSystemAnimated

**File:** `components/OperatingSystemAnimated.tsx`  
**Type:** Client Component  
**Purpose:** Animated logos for operating systems/platforms

**Features:**
- Windows, macOS, Linux, ChromeOS logos
- Floating animation
- Responsive sizing
- Used on services/overview pages

**Usage:**
```typescript
import OperatingSystemAnimated from '@/components/OperatingSystemAnimated';

<OperatingSystemAnimated />
```

**No props** - displays all logos with animation automatically

---

### AnimatedBackgrounds

**File:** `components/AnimatedBackgrounds.tsx`  
**Type:** Client Component  
**Purpose:** Decorative SVG background patterns

**Patterns:**
- Dots
- Lines
- Waves
- Abstract shapes

**Usage:**
```typescript
import { DotsPattern, WavesPattern } from '@/components/AnimatedBackgrounds';

<section className="relative">
  <DotsPattern className="absolute inset-0 opacity-10" />
  <div className="relative z-10">
    {/* Content appears above pattern */}
  </div>
</section>
```

---

### VideoSection

**File:** `components/VideoSection.tsx`  
**Type:** Server Component  
**Purpose:** Embed YouTube or Vimeo videos

**Props:**
```typescript
interface VideoSectionProps {
  videoUrl: string;
  title?: string;
  description?: string;
}
```

**Usage:**
```typescript
import VideoSection from '@/components/VideoSection';

<VideoSection
  videoUrl="https://www.youtube.com/embed/VIDEO_ID"
  title="Watch Our Approach"
  description="See how we help businesses modernize their IT."
/>
```

**Responsive Embed:**
- 16:9 aspect ratio maintained
- Full width on mobile, constrained on desktop

---

## Form Components Patterns

### React Hook Form Integration

All forms use `react-hook-form` for validation and state management

**Installation:**
```bash
npm install react-hook-form
```

**Basic Pattern:**
```typescript
import { useForm } from 'react-hook-form';

interface FormData {
  name: string;
  email: string;
}

export default function MyForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // Submit logic
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register('name', { required: 'Name is required' })}
        className="..."
      />
      {errors.name && <span className="text-red-500">{errors.name.message}</span>}

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
}
```

### Common Validation Rules

**Email:**
```typescript
register('email', {
  required: 'Email is required',
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: 'Invalid email address'
  }
})
```

**Phone:**
```typescript
register('phone', {
  pattern: {
    value: /^[\d\s\-\(\)\+]+$/,
    message: 'Invalid phone number'
  }
})
```

**Required Text:**
```typescript
register('name', {
  required: 'Name is required',
  minLength: {
    value: 2,
    message: 'Name must be at least 2 characters'
  }
})
```

---

## Layout Components

### Page Layout Pattern

**Typical Page Structure:**
```typescript
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Section from '@/components/Section';

export default function MyPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="forest" spacing="lg">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-heading text-white mb-6">
            Page Title
          </h1>
          <p className="text-xl text-white/90">
            Subtitle or description
          </p>
        </div>
      </Section>

      {/* Content Sections */}
      <Section background="white" spacing="md">
        <div className="max-w-7xl mx-auto px-4">
          {/* Content */}
        </div>
      </Section>

      <Section background="gray" spacing="md">
        <div className="max-w-7xl mx-auto px-4">
          {/* More content */}
        </div>
      </Section>
    </>
  );
}
```

**Container Pattern:**
```typescript
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  {/* Content automatically centered with responsive padding */}
</div>
```

---

## Responsive Design Patterns

### Grid Layouts

**Services Grid:**
```typescript
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {services.map(service => (
    <Card key={service.slug}>
      {/* Service card content */}
    </Card>
  ))}
</div>
```

**Two-Column Layout:**
```typescript
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
  <div>
    {/* Text content */}
  </div>
  <div>
    {/* Image or complementary content */}
  </div>
</div>
```

### Mobile-First Approach

**Always define mobile styles first, then add breakpoints:**
```typescript
// ✅ CORRECT
<h1 className="text-3xl sm:text-4xl lg:text-5xl">

// ❌ WRONG
<h1 className="lg:text-5xl sm:text-4xl text-3xl">
```

**Common Responsive Patterns:**
```typescript
// Padding
className="px-4 sm:px-6 lg:px-8"

// Typography
className="text-base sm:text-lg lg:text-xl"

// Spacing
className="py-8 sm:py-12 lg:py-16"

// Grid columns
className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"

// Hidden/visible
className="hidden lg:block" // Show only on desktop
className="block lg:hidden" // Show only on mobile
```

---

## Animation Patterns

### Hover Effects

**Cards:**
```typescript
<div className="transition-transform duration-300 hover:scale-105 hover:shadow-xl">
  {/* Card content */}
</div>
```

**Buttons:**
```typescript
<button className="transition-colors duration-200 hover:bg-polus-gold hover:text-polus-forest">
  Hover Me
</button>
```

### Smooth Transitions

**Background Colors:**
```typescript
<div className="bg-white hover:bg-gray-50 transition-colors duration-200">
```

**Opacity:**
```typescript
<div className="opacity-0 hover:opacity-100 transition-opacity duration-300">
```

**Transform:**
```typescript
<div className="transform translate-y-0 hover:-translate-y-2 transition-transform duration-200">
```

---

## Accessibility Patterns

### Semantic HTML

**Use proper heading hierarchy:**
```typescript
<h1>Page Title</h1>
<h2>Section Title</h2>
<h3>Subsection Title</h3>
```

**Buttons vs Links:**
```typescript
// ✅ Button for actions
<button onClick={handleClick}>Submit Form</button>

// ✅ Link for navigation
<Link href="/services">View Services</Link>

// ❌ Don't use button for navigation
<button onClick={() => router.push('/services')}>View Services</button>
```

### ARIA Labels

**Interactive elements without visible text:**
```typescript
<button aria-label="Close menu">
  <XIcon className="w-6 h-6" />
</button>
```

**Form inputs:**
```typescript
<label htmlFor="email">Email Address</label>
<input id="email" type="email" aria-required="true" />
```

---

## Performance Optimization

### Image Optimization

**Use Next.js Image component:**
```typescript
import Image from 'next/image';

<Image
  src="/images/services/consulting.jpg"
  alt="IT consulting services"
  width={800}
  height={600}
  className="rounded-lg"
  priority // For above-the-fold images
/>
```

### Code Splitting

**Dynamic imports for large components:**
```typescript
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('@/components/HeavyComponent'), {
  loading: () => <p>Loading...</p>
});
```

---

## Component Checklist

When creating a new component, consider:

- [ ] Is it a Server or Client Component?
- [ ] Does it need TypeScript interfaces for props?
- [ ] Is it reusable enough for `/components` folder?
- [ ] Does it need responsive styles?
- [ ] Does it need hover/focus states?
- [ ] Does it need accessibility attributes?
- [ ] Does it need loading/error states?
- [ ] Is it documented with comments?

---

This document provides a complete reference for all components in the Polus website as of January 18, 2026.
