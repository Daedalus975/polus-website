type TrackProps = Record<string, unknown>;

/**
 * Generic event tracking function
 * For specific events, prefer using functions from lib/analytics.ts
 */
export function track(event: string, props: TrackProps = {}) {
  if (typeof window === 'undefined') return;
  
  if (window.gtag) {
    window.gtag('event', event, props);
    
    if (process.env.NODE_ENV !== 'production') {
      console.log('[GA4 Event]', event, props);
    }
  } else if (process.env.NODE_ENV !== 'production') {
    console.log('[GA4 Not Loaded]', event, props);
  }
}

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}
