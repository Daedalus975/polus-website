// Google Analytics 4 Event Tracking Utility

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

type EventParams = {
  [key: string]: string | number | boolean | undefined;
};

/**
 * Send a custom event to Google Analytics 4
 */
export function trackEvent(eventName: string, params?: EventParams) {
  if (typeof window === 'undefined') return;
  
  if (window.gtag) {
    window.gtag('event', eventName, params);
    console.log('[GA4 Event]', eventName, params);
  } else {
    console.warn('[GA4] gtag not available, event not tracked:', eventName);
  }
}

/**
 * Track contact form submission
 */
export function trackContactFormSubmit(params: {
  services?: string[];
  formLocation?: string;
  hasPhone?: boolean;
}) {
  trackEvent('contact_form_submit', {
    services_selected: params.services?.join(', ') || 'none',
    form_location: params.formLocation || 'unknown',
    included_phone: params.hasPhone ? 'yes' : 'no',
    event_category: 'Lead Generation',
    event_label: 'Contact Form',
  });
}

/**
 * Track quote form submission
 */
export function trackQuoteFormSubmit(params: {
  services?: string[];
  budget?: string;
  timeline?: string;
}) {
  trackEvent('quote_form_submit', {
    services_selected: params.services?.join(', ') || 'none',
    budget_range: params.budget || 'not_specified',
    timeline: params.timeline || 'not_specified',
    event_category: 'Lead Generation',
    event_label: 'Quote Form',
  });
}

/**
 * Track Calendly booking click
 */
export function trackCalendlyClick(location: string) {
  trackEvent('calendly_booking_click', {
    button_location: location,
    event_category: 'Lead Generation',
    event_label: 'Schedule Discovery Call',
  });
}

/**
 * Track ROI calculator submission
 */
export function trackROICalculatorSubmit(params: {
  estimatedSavings?: number;
  services?: string[];
}) {
  trackEvent('roi_calculator_submit', {
    estimated_savings: params.estimatedSavings || 0,
    services_interested: params.services?.join(', ') || 'none',
    event_category: 'Lead Generation',
    event_label: 'ROI Calculator',
  });
}

/**
 * Track assessment quiz completion
 */
export function trackAssessmentQuizComplete(params: {
  recommendedServices?: string[];
  score?: number;
}) {
  trackEvent('assessment_quiz_complete', {
    recommended_services: params.recommendedServices?.join(', ') || 'none',
    total_score: params.score || 0,
    event_category: 'Engagement',
    event_label: 'Assessment Quiz',
  });
}

/**
 * Track service page view
 */
export function trackServiceView(params: {
  serviceName: string;
  serviceSlug: string;
  servicePrice?: string;
  serviceCategory?: string;
}) {
  trackEvent('view_service', {
    service_name: params.serviceName,
    service_slug: params.serviceSlug,
    service_price: params.servicePrice || 'varies',
    service_category: params.serviceCategory || 'uncategorized',
    event_category: 'Content',
    event_label: 'Service Page View',
  });
}

/**
 * Track phone click
 */
export function trackPhoneClick(location: string) {
  trackEvent('phone_click', {
    click_location: location,
    event_category: 'Contact Interaction',
    event_label: 'Phone Number Click',
  });
}

/**
 * Track email click
 */
export function trackEmailClick(location: string) {
  trackEvent('email_click', {
    click_location: location,
    event_category: 'Contact Interaction',
    event_label: 'Email Click',
  });
}

/**
 * Track referral program view
 */
export function trackReferralProgramView() {
  trackEvent('referral_program_view', {
    event_category: 'Engagement',
    event_label: 'Referral Program Page',
  });
}

/**
 * Track industry page view
 */
export function trackIndustryView(industry: string) {
  trackEvent('industry_page_view', {
    industry_name: industry,
    event_category: 'Content',
    event_label: 'Industry Page',
  });
}

/**
 * Track location page view
 */
export function trackLocationView(location: string) {
  trackEvent('location_page_view', {
    location_name: location,
    event_category: 'Content',
    event_label: 'Location Page',
  });
}

/**
 * Track blog post view (for future use)
 */
export function trackBlogPostView(params: {
  postTitle: string;
  postSlug: string;
  categories?: string[];
}) {
  trackEvent('blog_post_view', {
    post_title: params.postTitle,
    post_slug: params.postSlug,
    post_categories: params.categories?.join(', ') || 'none',
    event_category: 'Content',
    event_label: 'Blog Post',
  });
}

/**
 * Track resource download (for future use)
 */
export function trackResourceDownload(params: {
  resourceName: string;
  resourceType: string;
}) {
  trackEvent('resource_download', {
    resource_name: params.resourceName,
    resource_type: params.resourceType,
    event_category: 'Engagement',
    event_label: 'Resource Download',
  });
}
