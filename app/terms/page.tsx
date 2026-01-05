import { Section } from "@/components/Section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Polus LLC",
  description: "Polus LLC terms of service and conditions."
};

export default function TermsPage() {
  return (
    <Section title="Terms of Service" className="pt-20 md:pt-24">
      <div className="max-w-3xl prose prose-invert">
        <p className="text-[rgba(254,255,255,0.78)] mb-6">
          <strong>Last updated:</strong> January 2026
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">Services</h2>
        <p className="text-[rgba(254,255,255,0.78)] leading-relaxed mb-4">
          Polus LLC provides IT and operations consulting services, including but not limited to systems assessment, process mapping, Microsoft 365 governance, backup/DR planning, web development, and managed IT services.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">Engagement Terms</h2>
        <p className="text-[rgba(254,255,255,0.78)] leading-relaxed mb-4">
          Services are provided under the terms specified in individual service agreements or statements of work. Fixed-scope packages have defined deliverables and timelines. Hourly engagements are billed based on time and materials.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">Payment</h2>
        <p className="text-[rgba(254,255,255,0.78)] leading-relaxed mb-4">
          Deposits may be required to secure project start dates. Invoices are due upon receipt unless otherwise agreed. We accept payment via Stripe (credit card, ACH) with guest checkout supported.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">Cancellation</h2>
        <p className="text-[rgba(254,255,255,0.78)] leading-relaxed mb-4">
          Cancellation terms vary by service type and are outlined in individual agreements. Discovery calls can be rescheduled with 24-hour notice.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">Limitation of Liability</h2>
        <p className="text-[rgba(254,255,255,0.78)] leading-relaxed mb-4">
          Polus LLC provides consulting services and recommendations. Implementation is performed with reasonable care, but we cannot guarantee specific outcomes. Our liability is limited to the fees paid for the specific service in question.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">Intellectual Property</h2>
        <p className="text-[rgba(254,255,255,0.78)] leading-relaxed mb-4">
          Deliverables created for clients (SOPs, documentation, configurations) become client property upon full payment. Polus LLC retains the right to use anonymized case studies and outcomes for marketing purposes.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">Contact</h2>
        <p className="text-[rgba(254,255,255,0.78)] leading-relaxed">
          Questions about these terms? Contact us at{" "}
          <a href="mailto:contact@polusllc.com" className="text-polus-mint hover:text-polus-gold underline">
            contact@polusllc.com
          </a>
        </p>
      </div>
    </Section>
  );
}
