"use client";

import { useState, useEffect } from "react";
import { Button } from "./Button";

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Small delay for smooth animation
      setTimeout(() => {
        setShowBanner(true);
        setTimeout(() => setIsVisible(true), 100);
      }, 1000);
    } else if (consent === "accepted") {
      // User previously accepted - load GA now
      loadGoogleAnalytics();
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
    setTimeout(() => setShowBanner(false), 300);
    
    // Load Google Analytics
    loadGoogleAnalytics();
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
    setTimeout(() => setShowBanner(false), 300);
  };

  const loadGoogleAnalytics = () => {
    // Prevent duplicate loading
    if (window.gtag) {
      console.log('[GA4] Already loaded, skipping');
      return;
    }
    
    const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-RMS0FPEQPD';
    
    console.log('[GA4] Loading analytics with ID:', measurementId);
    
    // Dynamically load Google Analytics
    const script1 = document.createElement("script");
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script1);

    const script2 = document.createElement("script");
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${measurementId}');
      console.log('[GA4] Analytics initialized');
    `;
    document.head.appendChild(script2);
  };

  if (!showBanner) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="bg-polus-surface1 border-t border-polus-mint/20 shadow-2xl">
        <div className="container mx-auto px-4 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex-1">
              <h3 className="font-semibold text-polus-paper mb-1">
                Cookie Preferences
              </h3>
              <p className="text-sm text-[rgba(254,255,255,0.78)] leading-relaxed">
                We use cookies to understand how you use our site and improve your experience. 
                This includes analytics via Google Analytics. You can choose to accept or decline.{" "}
                <a
                  href="/privacy"
                  className="text-polus-mint hover:text-polus-gold underline"
                >
                  Learn more
                </a>
              </p>
            </div>
            <div className="flex gap-3 w-full sm:w-auto">
              <button
                onClick={handleDecline}
                className="flex-1 sm:flex-none px-4 py-2 text-sm font-semibold text-[rgba(254,255,255,0.78)] hover:text-polus-paper border border-polus-mint/30 hover:border-polus-mint/50 rounded-lg transition"
              >
                Decline
              </button>
              <button
                onClick={handleAccept}
                className="flex-1 sm:flex-none px-4 py-2 text-sm font-semibold bg-polus-gold text-polus-forest hover:brightness-110 rounded-lg transition"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper function to check if analytics should be loaded
export function hasAnalyticsConsent(): boolean {
  if (typeof window === "undefined") return false;
  return localStorage.getItem("cookie-consent") === "accepted";
}

// Function to revoke consent (for privacy page)
export function revokeAnalyticsConsent() {
  localStorage.setItem("cookie-consent", "declined");
  // Clear Google Analytics cookies
  document.cookie.split(";").forEach((c) => {
    const cookie = c.trim();
    if (cookie.startsWith("_ga") || cookie.startsWith("_gid")) {
      const name = cookie.split("=")[0];
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
    }
  });
  window.location.reload();
}
