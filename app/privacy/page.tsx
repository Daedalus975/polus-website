import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { ResetCookieButton } from "@/components/ResetCookieButton";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Polus LLC",
  description: "Learn how Polus LLC collects, uses, and protects your personal information. We respect your privacy and comply with applicable data protection laws."
};

export default function PrivacyPage() {
  return (
    <>
      <Section title="Privacy Policy" className="pt-20 md:pt-24">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm text-[rgba(254,255,255,0.65)] mb-8">
            Last updated: January 15, 2026
          </p>

          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p className="text-[rgba(254,255,255,0.78)] leading-relaxed mb-4">
              Polus LLC (&quot;Polus,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website at polus-cs.com (the &quot;Site&quot;).
            </p>
            <p className="text-[rgba(254,255,255,0.78)] leading-relaxed">
              By using our Site, you consent to the practices described in this Privacy Policy.
            </p>
          </Card>

          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            
            <h3 className="text-lg font-semibold mt-6 mb-3 text-polus-mint">
              Information You Provide
            </h3>
            <p className="text-[rgba(254,255,255,0.78)] leading-relaxed mb-4">
              When you contact us, request a quote, book a discovery call, or download resources, we may collect:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[rgba(254,255,255,0.78)] mb-6">
              <li>Name</li>
              <li>Email address</li>
              <li>Company name</li>
              <li>Phone number (optional)</li>
              <li>Information about your business needs and challenges</li>
            </ul>

            <h3 className="text-lg font-semibold mt-6 mb-3 text-polus-mint">
              Automatically Collected Information
            </h3>
            <p className="text-[rgba(254,255,255,0.78)] leading-relaxed mb-4">
              When you visit our Site, we automatically collect:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[rgba(254,255,255,0.78)]">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Pages you visit and time spent on pages</li>
              <li>Referring website</li>
              <li>Device information</li>
            </ul>
          </Card>

          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4">How We Use Cookies</h2>
            <p className="text-[rgba(254,255,255,0.78)] leading-relaxed mb-4">
              We use cookies and similar technologies to improve your experience and understand how our Site is used.
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-3 text-polus-mint">
              Google Analytics
            </h3>
            <p className="text-[rgba(254,255,255,0.78)] leading-relaxed mb-4">
              With your consent, we use Google Analytics to track:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[rgba(254,255,255,0.78)] mb-6">
              <li>Page views and traffic sources</li>
              <li>User behavior and session duration</li>
              <li>Geographic location (city/state level)</li>
              <li>Device and browser information</li>
            </ul>
            <p className="text-[rgba(254,255,255,0.78)] leading-relaxed mb-4">
              Google Analytics sets cookies including <code className="text-polus-gold">_ga</code>, <code className="text-polus-gold">_gid</code>, and <code className="text-polus-gold">_gat</code>. These cookies expire after 2 years, 24 hours, and 1 minute respectively.
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-3 text-polus-mint">
              Managing Your Cookie Preferences
            </h3>
            <p className="text-[rgba(254,255,255,0.78)] leading-relaxed mb-4">
              You can manage your cookie preferences at any time:
            </p>
            <ResetCookieButton />
          </Card>

          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <p className="text-[rgba(254,255,255,0.78)] leading-relaxed mb-4">
              We use collected information to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[rgba(254,255,255,0.78)]">
              <li>Respond to inquiries and provide requested information</li>
              <li>Schedule discovery calls and consultations</li>
              <li>Prepare proposals and quotes</li>
              <li>Improve our website and services</li>
              <li>Analyze site usage and trends</li>
              <li>Send relevant resources (only if you opt in)</li>
            </ul>
          </Card>

          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Data Sharing and Disclosure</h2>
            <p className="text-[rgba(254,255,255,0.78)] leading-relaxed mb-4">
              We do not sell, rent, or trade your personal information. We may share information with:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[rgba(254,255,255,0.78)]">
              <li><strong>Service Providers:</strong> Google Analytics (with your consent), email providers, and calendar scheduling tools</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
            </ul>
          </Card>

          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
            <p className="text-[rgba(254,255,255,0.78)] leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[rgba(254,255,255,0.78)]">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt out of analytics cookies</li>
              <li>Withdraw consent at any time</li>
            </ul>
            <p className="text-[rgba(254,255,255,0.78)] leading-relaxed mt-4">
              To exercise these rights, contact us at{" "}
              <a href="mailto:jack.washmon@polus-cs.com" className="text-polus-mint hover:text-polus-gold underline">
                jack.washmon@polus-cs.com
              </a>
            </p>
          </Card>

          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
            <p className="text-[rgba(254,255,255,0.78)] leading-relaxed">
              We implement reasonable security measures to protect your information. However, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security but take data protection seriously.
            </p>
          </Card>

          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Children&apos;s Privacy</h2>
            <p className="text-[rgba(254,255,255,0.78)] leading-relaxed">
              Our Site is not intended for children under 13. We do not knowingly collect information from children.
            </p>
          </Card>

          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
            <p className="text-[rgba(254,255,255,0.78)] leading-relaxed">
              We may update this Privacy Policy periodically. Changes will be posted on this page with an updated &quot;Last updated&quot; date. Continued use of the Site after changes constitutes acceptance.
            </p>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-[rgba(254,255,255,0.78)] leading-relaxed mb-4">
              If you have questions about this Privacy Policy, contact:
            </p>
            <div className="text-[rgba(254,255,255,0.78)]">
              <p className="font-semibold">Polus LLC</p>
              <p>Tulsa, Oklahoma</p>
              <p>
                Email:{" "}
                <a href="mailto:jack.washmon@polus-cs.com" className="text-polus-mint hover:text-polus-gold underline">
                  jack.washmon@polus-cs.com
                </a>
              </p>
            </div>
          </Card>
        </div>
      </Section>
    </>
  );
}
