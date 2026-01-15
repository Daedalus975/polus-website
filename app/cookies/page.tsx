import { Section } from "@/components/Section";
import { ResetCookieButton } from "@/components/ResetCookieButton";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy — Polus LLC",
  description: "Information about how we use cookies and similar tracking technologies on our website."
};

export default function CookiesPage() {
  return (
    <>
      <Section title="Cookie Policy" className="pt-20 md:pt-24">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-[rgba(254,255,255,0.78)] leading-relaxed mb-6">
              This Cookie Policy explains how Polus LLC uses cookies and similar tracking technologies when you visit our website.
            </p>

            <h2 className="text-2xl font-semibold text-polus-gold mb-4 mt-8">What Are Cookies?</h2>
            <p className="text-[rgba(254,255,255,0.78)] leading-relaxed mb-6">
              Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit a website. They help websites remember your preferences and improve your browsing experience.
            </p>

            <h2 className="text-2xl font-semibold text-polus-gold mb-4 mt-8">How We Use Cookies</h2>
            <p className="text-[rgba(254,255,255,0.78)] leading-relaxed mb-4">
              We use cookies for the following purposes:
            </p>

            <h3 className="text-xl font-semibold text-polus-mint mb-3 mt-6">Analytics Cookies (Google Analytics 4)</h3>
            <p className="text-[rgba(254,255,255,0.78)] leading-relaxed mb-4">
              We use Google Analytics 4 to understand how visitors interact with our website. This helps us improve our content and user experience. Google Analytics collects information such as:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[rgba(254,255,255,0.78)] mb-6">
              <li>Pages you visit and time spent on each page</li>
              <li>How you arrived at our website (e.g., search engine, direct link)</li>
              <li>Device and browser information</li>
              <li>General location (city/region level, not precise)</li>
              <li>Actions you take (e.g., button clicks, form submissions)</li>
            </ul>
            <p className="text-[rgba(254,255,255,0.78)] leading-relaxed mb-6">
              This data is anonymized and aggregated. We do not track individual users across the web. Google Analytics may set cookies like <code className="text-polus-mint">_ga</code>, <code className="text-polus-mint">_ga_*</code>, and <code className="text-polus-mint">_gid</code>.
            </p>

            <h3 className="text-xl font-semibold text-polus-mint mb-3 mt-6">Functional Cookies</h3>
            <p className="text-[rgba(254,255,255,0.78)] leading-relaxed mb-6">
              We may use cookies to remember your preferences, such as your cookie consent choice, to avoid asking you repeatedly.
            </p>

            <h2 className="text-2xl font-semibold text-polus-gold mb-4 mt-8">Your Cookie Choices</h2>
            <p className="text-[rgba(254,255,255,0.78)] leading-relaxed mb-4">
              You have several options for managing cookies:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[rgba(254,255,255,0.78)] mb-6">
              <li><strong>Decline or Accept:</strong> When you first visit our site, we ask for your consent to use analytics cookies. You can accept or decline at that time.</li>
              <li><strong>Change Your Preference:</strong> You can change your cookie preference at any time by clicking the button below.</li>
              <li><strong>Browser Settings:</strong> Most web browsers allow you to control cookies through their settings. You can set your browser to block cookies or alert you when cookies are being sent.</li>
              <li><strong>Opt-Out Tools:</strong> You can opt out of Google Analytics by installing the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-polus-mint hover:text-polus-gold underline">Google Analytics Opt-out Browser Add-on</a>.</li>
            </ul>

            <div className="bg-polus-surface1 rounded-lg p-6 my-8 border border-[rgba(177,227,199,0.16)]">
              <p className="text-[rgba(254,255,255,0.78)] mb-4">
                To reset your cookie preferences and see the consent banner again:
              </p>
              <ResetCookieButton />
            </div>

            <h2 className="text-2xl font-semibold text-polus-gold mb-4 mt-8">Third-Party Cookies</h2>
            <p className="text-[rgba(254,255,255,0.78)] leading-relaxed mb-6">
              Some cookies may be set by third-party services we use, such as Google Analytics. These third parties have their own privacy policies and cookie policies:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[rgba(254,255,255,0.78)] mb-6">
              <li><strong>Google Analytics:</strong> <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-polus-mint hover:text-polus-gold underline">Google Privacy Policy</a></li>
              <li><strong>Calendly (Booking Widget):</strong> <a href="https://calendly.com/privacy" target="_blank" rel="noopener noreferrer" className="text-polus-mint hover:text-polus-gold underline">Calendly Privacy Notice</a></li>
            </ul>

            <h2 className="text-2xl font-semibold text-polus-gold mb-4 mt-8">Essential Cookies</h2>
            <p className="text-[rgba(254,255,255,0.78)] leading-relaxed mb-6">
              Some cookies are essential for the website to function properly (e.g., remembering your cookie consent choice). These cookies do not require your consent and cannot be disabled.
            </p>

            <h2 className="text-2xl font-semibold text-polus-gold mb-4 mt-8">Do Not Track</h2>
            <p className="text-[rgba(254,255,255,0.78)] leading-relaxed mb-6">
              Some browsers offer a &ldquo;Do Not Track&rdquo; (DNT) signal. Currently, there is no industry standard for how to respond to DNT signals. We honor your cookie consent choice as indicated when you first visit our site.
            </p>

            <h2 className="text-2xl font-semibold text-polus-gold mb-4 mt-8">Changes to This Cookie Policy</h2>
            <p className="text-[rgba(254,255,255,0.78)] leading-relaxed mb-6">
              We may update this Cookie Policy from time to time to reflect changes in technology or legal requirements. When we make changes, we will update the &ldquo;Last Updated&rdquo; date below.
            </p>

            <h2 className="text-2xl font-semibold text-polus-gold mb-4 mt-8">Contact Us</h2>
            <p className="text-[rgba(254,255,255,0.78)] leading-relaxed mb-6">
              If you have questions about our use of cookies, please contact us:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[rgba(254,255,255,0.78)] mb-6">
              <li><strong>Email:</strong> <a href="mailto:jack.washmon@polus-cs.com" className="text-polus-mint hover:text-polus-gold underline">jack.washmon@polus-cs.com</a></li>
              <li><strong>Phone:</strong> <a href="tel:+14053130887" className="text-polus-mint hover:text-polus-gold underline">(405) 313-0887</a></li>
            </ul>

            <div className="bg-polus-surface1 rounded-lg p-6 mt-10 border border-[rgba(177,227,199,0.16)]">
              <p className="text-sm text-[rgba(254,255,255,0.65)]">
                <strong>Last Updated:</strong> January 15, 2026
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
