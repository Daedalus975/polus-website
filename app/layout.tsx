import "./globals.css";
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { StructuredData, getOrganizationSchema, getWebSiteSchema } from "@/components/StructuredData";
import AIChatWidget from "@/components/AIChatWidget";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Polus LLC — Operations + IT Consulting (Oklahoma)",
  description: "Fix processes. Strengthen Microsoft 365 + IT reliability. Book a free discovery call.",
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "Polus LLC",
    title: "Polus LLC — Operations + IT Consulting (Oklahoma)",
    description: "Fix processes. Strengthen Microsoft 365 + IT reliability. Book a free discovery call."
  },
  twitter: {
    card: "summary_large_image",
    title: "Polus LLC — Operations + IT Consulting (Oklahoma)",
    description: "Fix processes. Strengthen Microsoft 365 + IT reliability. Book a free discovery call."
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <StructuredData data={getOrganizationSchema()} />
        <StructuredData data={getWebSiteSchema()} />
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
