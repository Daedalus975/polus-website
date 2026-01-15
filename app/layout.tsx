import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { StructuredData, getOrganizationSchema, getWebSiteSchema } from "@/components/StructuredData";
import AIChatWidget from "@/components/AIChatWidget";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Polus LLC — Operations and IT Consulting",
  description: "Oklahoma IT consultant specializing in Microsoft 365, process optimization, backup/DR, and systems management for small businesses. First 10 clients get 20% off. Free discovery call.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "Polus Consulting",
    title: "Polus LLC — Operations and IT Consulting",
    description: "Oklahoma IT consultant specializing in Microsoft 365, process optimization, backup/DR, and systems management for small businesses. First 10 clients get 20% off."
  },
  twitter: {
    card: "summary_large_image",
    title: "Polus LLC — Operations and IT Consulting",
    description: "Oklahoma IT consultant specializing in Microsoft 365, process optimization, backup/DR, and systems management for small businesses. First 10 clients get 20% off."
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <StructuredData data={getOrganizationSchema()} />
        <StructuredData data={getWebSiteSchema()} />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-RMS0FPEQPD"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-RMS0FPEQPD');
            `,
          }}
        />
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
      </body>
    </html>
  );
}
