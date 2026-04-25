# Google Analytics 4 Setup & Tracking Guide

**Last Updated:** April 2026  
**GA4 Measurement ID:** G-RMS0FPEQPD  
**Status:** ✅ Fully Configured

## Overview

This guide covers the complete GA4 setup for Polus, including:
- Event tracking on all major conversion points
- Custom dimensions and metrics
- Conversion configuration in GA4
- Key reports and dashboards to monitor

## 🎯 Events Being Tracked

### Lead Generation Events (Conversions)

| Event Name | Trigger | Location | Parameters |
|------------|---------|----------|------------|
| `contact_form_submit` | Contact form submission successful | Contact page | services_selected, form_location, included_phone |
| `quote_form_submit` | Quote form submission successful | Quote form (multi-step) | services_selected, budget_range, timeline |
| `calendly_booking_click` | Click on "Book Discovery Call" button | Homepage, Navbar, Service pages | button_location |
| `roi_calculator_submit` | ROI calculator results calculated | ROI Calculator page | estimated_savings, services_interested |
| `assessment_quiz_complete` | Assessment quiz finished | /start page | recommended_services, total_score |

### Engagement Events

| Event Name | Trigger | Location | Parameters |
|------------|---------|----------|------------|
| `phone_click` | Click on phone number link | Footer, Contact page | click_location |
| `email_click` | Click on email link | Footer, Contact page | click_location |
| `view_service` | Service detail page viewed | /services/[slug] | service_name, service_slug, service_price, service_category |
| `industry_page_view` | Industry landing page viewed | /industries/[industry] | industry_name |
| `location_page_view` | Location page viewed | /locations/[location] | location_name |
| `referral_program_view` | Referral program page viewed | /referral | - |
| `blog_post_view` | Blog post viewed (future) | /blog/[slug] | post_title, post_slug, post_categories |
| `resource_download` | Resource downloaded (future) | /resources | resource_name, resource_type |

## 📊 GA4 Configuration Steps

### Step 1: Mark Events as Conversions

1. Go to **GA4 → Configure → Events**
2. Find each of these events in the list
3. Click the toggle under "Mark as conversion"

**Events to mark as conversions:**
- ✅ `contact_form_submit`
- ✅ `quote_form_submit`
- ✅ `calendly_booking_click`
- ✅ `roi_calculator_submit`
- ✅ `assessment_quiz_complete`

**Why:** These represent true lead generation actions. Tracking them as conversions lets you measure ROI from different traffic sources.

### Step 2: Create Custom Dimensions

Go to **Admin → Custom Definitions → Create Custom Dimensions**

| Dimension Name | Scope | Event Parameter | Description |
|----------------|-------|-----------------|-------------|
| Services Selected | Event | services_selected | Which services users are interested in |
| Form Location | Event | form_location | Where on the site the form was submitted |
| Button Location | Event | button_location | Where the CTA button was clicked |
| Service Category | Event | service_category | Category of service viewed |
| Industry | Event | industry_name | Which industry page was viewed |
| Lead Quality Score | Event | total_score | Quiz score (proxy for lead quality) |

**Why:** Custom dimensions let you segment conversions by service interest, traffic source quality, and user behavior patterns.

### Step 3: Set Up Audiences

Go to **Admin → Audiences → Create New Audience**

**High-Intent Visitors:**
- Users who viewed 3+ service pages
- Users who completed the assessment quiz
- Users who started a quote form

**Ready to Buy:**
- Users who clicked booking button
- Users who completed ROI calculator
- Return visitors who viewed pricing

**Oklahoma Traffic:**
- City = Oklahoma City OR Tulsa OR Norman OR Edmond

**Why:** Audiences can be used for remarketing and understanding segment-specific conversion rates.

### Step 4: Enhanced Measurement

Go to **Data Streams → Your Website → Enhanced measurement**

Enable these built-in events:
- ✅ Pageviews
- ✅ Scrolls (track 90% scroll depth)
- ✅ Outbound clicks
- ✅ Site search (if search added)
- ✅ Video engagement (for future video content)
- ✅ File downloads (for PDF resources)

### Step 5: Exclude Internal Traffic

Go to **Admin → Data Filters → Create Filter**

1. Create filter named "Internal Traffic"
2. Add your office IP address
3. Set filter state to "Active"

**Why:** Prevents your own browsing from skewing analytics data.

## 📈 Key Reports to Create

### Report 1: Lead Source Performance

**Type:** Exploration (Free Form)  
**Dimensions:** Source/Medium, Campaign  
**Metrics:** Users, Sessions, Conversions (contact_form_submit, quote_form_submit, calendly_booking_click)  
**Visualization:** Table

**Use:** Understand which traffic sources bring the highest quality leads.

### Report 2: Service Interest Funnel

**Type:** Funnel Exploration  
**Steps:**
1. Homepage view
2. Services page view
3. Service detail page view
4. Contact form submit OR Calendly click

**Breakdown:** By service_name

**Use:** Identify which services drive the most interest and where users drop off.

### Report 3: Geographic Performance

**Type:** Exploration (Free Form)  
**Dimensions:** City  
**Metrics:** Users, Conversions, Conversion Rate  
**Filter:** Include only Oklahoma cities

**Use:** Understand which Oklahoma cities are most engaged. Helps with local SEO and ad targeting.

### Report 4: Form Completion Rate

**Type:** Exploration (Free Form)  
**Dimensions:** Landing Page  
**Metrics:** Sessions, contact_form_submit, quote_form_submit  
**Calculated Metric:** Form Completion Rate = (contact_form_submit + quote_form_submit) / Sessions

**Use:** Identify which landing pages convert best.

### Report 5: Quiz Performance

**Type:** Exploration (Funnel)  
**Steps:**
1. /start page view
2. quiz_start event
3. quiz_answer event
4. assessment_quiz_complete event
5. Contact form OR Calendly click

**Use:** Understand quiz drop-off points and conversion to lead.

### Report 6: Content Performance (Blog - Future)

**Type:** Exploration (Free Form)  
**Dimensions:** Page Path, post_categories  
**Metrics:** Users, Engagement Rate, Average Engagement Time, Conversions  
**Filter:** Page Path contains "/blog/"

**Use:** Measure which blog topics drive the most engagement and conversions.

## 🎯 Success Metrics to Monitor

### Weekly Dashboard KPIs

**Lead Generation:**
- Total Conversions (all forms)
- Conversion Rate by Source
- Cost Per Lead (if running ads)
- Form Completion Rate

**Traffic Quality:**
- Avg Session Duration on Service Pages
- Pages Per Session
- Bounce Rate on Landing Pages
- Return Visitor Rate

**Geographic Performance:**
- Oklahoma Traffic %
- OKC vs Tulsa vs Norman Traffic
- Conversion Rate by City

**Content Engagement:**
- Top 5 Service Pages by Views
- Top 5 Landing Pages by Conversions
- Blog Post Performance (once launched)

### Monthly Analysis

1. **Lead Volume Trends:** Are conversions increasing month-over-month?
2. **Source Quality:** Which channels bring highest-quality leads (score, services selected)?
3. **Service Demand:** Which services are most viewed and requested?
4. **Geographic Expansion:** Are we reaching new Oklahoma cities?
5. **Content ROI:** Which blog posts (future) drive the most conversions?

## 🔧 Custom Code Implementation

### Files Modified

| File | Purpose | Events Tracked |
|------|---------|----------------|
| `lib/analytics.ts` | Main tracking utility functions | All custom events |
| `lib/track.ts` | Generic event tracking wrapper | GA4 gtag calls |
| `components/Button.tsx` | Button component with tracking | Optional trackEvent prop |
| `components/ContactForm.tsx` | Contact form | contact_form_submit |
| `components/QuoteForm.tsx` | Multi-step quote form | quote_form_submit |
| `components/ROICalculator.tsx` | ROI calculator | roi_calculator_submit |
| `app/start/page.tsx` | Assessment quiz | assessment_quiz_complete |
| `app/page.tsx` | Homepage CTAs | calendly_booking_click |

### How to Add Tracking to New Features

**Example: Add tracking to a new button**

```tsx
import { Button } from "@/components/Button";

<Button 
  href="/new-page"
  trackEvent={{
    name: 'custom_event_name',
    params: { 
      button_location: 'feature_section',
      event_category: 'Engagement'
    }
  }}
>
  Click Me
</Button>
```

**Example: Fire a custom event manually**

```tsx
import { trackEvent } from "@/lib/analytics";

function handleAction() {
  trackEvent('custom_action', {
    action_type: 'download',
    resource_name: 'IT Checklist',
    event_category: 'Resource'
  });
}
```

## 🚨 Common Mistakes to Avoid

### 1. Don't Track PII (Personally Identifiable Information)
❌ **NEVER** send:
- Email addresses
- Phone numbers
- Full names
- IP addresses

✅ **OK to send:**
- Has phone: yes/no
- Services selected: ["m365-governance", "backup-dr"]
- Location: "Oklahoma City" (city level is fine)
-Score: 85

### 2. Test Events Before Deploying

Use **GA4 DebugView** to test:
1. Open your site in Chrome
2. Install "Google Analytics Debugger" extension
3. Go to GA4 → Configure → DebugView
4. Perform actions on your site
5. Verify events appear in DebugView

### 3. Consistent Naming Conventions

- Use lowercase with underscores: `contact_form_submit` ✅
- Not camelCase: `contactFormSubmit` ❌
- Not spaces: `contact form submit` ❌

### 4. Don't Over-Track

Focus on actions that indicate **buying intent**:
- ✅ Form submissions, booking clicks, calculator use
- ❌ Every scroll, every hover, every link click

## 📅 Recommended Configuration Timeline

### Week 1: GA4 Setup
- [ ] Mark lead gen events as conversions
- [ ] Create custom dimensions
- [ ] Set up internal traffic filter
- [ ] Enable enhanced measurement
- [ ] Test events in DebugView

### Week 2: Audience Building
- [ ] Create "High-Intent Visitors" audience
- [ ] Create "Oklahoma Traffic" audience
- [ ] Create "Ready to Buy" audience
- [ ] Enable remarketing in Google Ads (if using ads)

### Week 3: Reporting
- [ ] Create Lead Source Performance report
- [ ] Create Service Interest Funnel
- [ ] Create Geographic Performance report
- [ ] Set up weekly email report

### Week 4: Optimization
- [ ] Review first week of data
- [ ] Identify highest-converting sources
- [ ] Identify highest-converting pages
- [ ] Make data-driven decisions on SEO/content

## 🎯 Benchmark Goals (B2B Service Business)

| Metric | Target | Notes |
|--------|--------|-------|
| Overall Conversion Rate | 2-5% | Forms + bookings / total visitors |
| Service Page → Contact | 5-10% | Users who view service detail then convert |
| Quiz Completion → Contact | 15-25% | High-intent users |
| Time on Service Pages | 2-3 min | Indicates quality traffic reading content |
| Return Visitor Rate | 20-30% | Users researching before deciding |
| Oklahoma Traffic % | 40-60% | Local business focus |

## 🆘 Troubleshooting

### Events Not Showing Up

1. **Check DebugView:** Is the event firing at all?
2. **Check Console:** Open browser console (F12), look for "[GA4 Event]" logs
3. **Check Cookie Consent:** Did user accept analytics cookies?
4. **Check Ad Blockers:** Some extensions block GA4
5. **Wait 24-48 hours:** GA4 can take time to process new events

### Conversion Counts Seem Low

1. **Are events marked as conversions?** Check Configure → Events
2. **Are users accepting cookies?** Check cookie consent acceptance rate
3. **Is tracking code on all pages?** Verify GA4 tag in page source
4. **Compare with form submissions:** Do backend form counts match GA4?

### Data Looks Wrong

1. **Exclude your own traffic:** Set up internal traffic filter
2. **Check date ranges:** Make sure you're comparing similar periods
3. **Verify timezone:** GA4 should match your business timezone (America/Chicago)

## 📞 Support

For GA4 questions:
- **Google Support:** https://support.google.com/analytics
- **GA4 Community:** https://support.google.com/analytics/community

For implementation questions:
- Check `lib/analytics.ts` for all tracking functions
- Console logs show `[GA4 Event]` for debugging
- DebugView shows real-time event verification
