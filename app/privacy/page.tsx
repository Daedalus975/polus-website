import { Section } from "@/components/Section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Polus LLC",
  description: "Polus LLC privacy policy and data handling practices."
};

export default function PrivacyPage() {
  return (
    <Section title="Privacy Policy" className="pt-20 md:pt-24">
      <div className="max-w-3xl prose prose-invert">
        <p className="text-[rgba(254,255,255,0.78)] mb-6">
          <strong>Last updated:</strong> January 2026
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">Information We Collect</h2>
        <p className="text-[rgba(254,255,255,0.78)] leading-relaxed mb-4">
          We collect information you provide directly to us through contact forms, discovery call bookings, quote requests, and lead magnet downloads. This may include your name, email address, company name, phone number, and project details.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">How We Use Your Information</h2>
        <p className="text-[rgba(254,255,255,0.78)] leading-relaxed mb-4">
          We use the information we collect to:
        </p>
        <ul className="list-disc pl-6 text-[rgba(254,255,255,0.78)] space-y-2 mb-4">
          <li>Respond to your inquiries and provide requested services</li>
          <li>Send you the materials you requested (e.g., checklists, resources)</li>
          <li>Schedule and conduct discovery calls</li>
          <li>Provide quotes and proposals</li>
          <li>Communicate about our services</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">Data Security</h2>
        <p className="text-[rgba(254,255,255,0.78)] leading-relaxed mb-4">
          We implement reasonable security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">Third-Party Services</h2>
        <p className="text-[rgba(254,255,255,0.78)] leading-relaxed mb-4">
          We may use third-party services for analytics, payment processing (Stripe), and scheduling (Calendly). These services have their own privacy policies.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">Your Rights</h2>
        <p className="text-[rgba(254,255,255,0.78)] leading-relaxed mb-4">
          You have the right to access, correct, or delete your personal information. Contact us at the email below to exercise these rights.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">Contact Us</h2>
        <p className="text-[rgba(254,255,255,0.78)] leading-relaxed">
          For questions about this privacy policy, contact us at{" "}
          <a href="mailto:contact@polusllc.com" className="text-polus-mint hover:text-polus-gold underline">
            contact@polusllc.com
          </a>
        </p>
      </div>
    </Section>
  );
}
