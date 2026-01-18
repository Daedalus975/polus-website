import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { StructuredData, getOrganizationSchema, getWebSiteSchema } from "@/components/StructuredData";
import AIChatWidget from "@/components/AIChatWidget";
import { CookieConsent } from "@/components/CookieConsent";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Polus LLC — Operations and IT Consulting",
    template: "%s | Polus LLC"
  },
  description: "Oklahoma IT consultant specializing in Microsoft 365, process optimization, backup/DR, and systems management for small businesses. First 10 clients get 20% off. Free discovery call.",
  keywords: ["IT consulting Oklahoma", "Microsoft 365 consultant", "Oklahoma City IT", "Tulsa IT services", "small business IT", "M365 governance", "backup and disaster recovery", "IT operations", "process optimization", "Edmond IT consultant"],
  authors: [{ name: "Jack Washmon", url: "https://www.linkedin.com/in/jackwashmon" }],
  creator: "Polus LLC",
  publisher: "Polus LLC",
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "Polus Consulting",
    title: "Polus LLC — Operations and IT Consulting",
    description: "Oklahoma IT consultant specializing in Microsoft 365, process optimization, backup/DR, and systems management for small businesses. First 10 clients get 20% off.",
    images: [
      {
        url: "/hero/hero-bg.svg",
        width: 1200,
        height: 630,
        alt: "Polus LLC - Oklahoma IT Consulting"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Polus LLC — Operations and IT Consulting",
    description: "Oklahoma IT consultant specializing in Microsoft 365, process optimization, backup/DR, and systems management for small businesses. First 10 clients get 20% off.",
    images: ["/hero/hero-bg.svg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* DNS Prefetch and Preconnect for external resources */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://assets.calendly.com" />
        <link rel="dns-prefetch" href="https://api.openai.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://assets.calendly.com" crossOrigin="anonymous" />
        
        <StructuredData data={getOrganizationSchema()} />
        <StructuredData data={getWebSiteSchema()} />
        {/* Google Analytics loaded conditionally by CookieConsent component after user consent */}
      </head>
      <body className={inter.className}>
        {/* Skip to main content link for keyboard navigation */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-polus-gold focus:text-polus-forest focus:rounded-md focus:font-semibold"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <AIChatWidget />
        <CookieConsent />
      </body>
    </html>
  );
}
