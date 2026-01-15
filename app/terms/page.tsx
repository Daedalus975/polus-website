import { Section } from "@/components/Section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Polus LLC",
  description: "Terms of service, service agreements, and conditions for Polus LLC consulting services."
};

export default function TermsPage() {
  return (
    <>
      <Section title="Terms of Service" className="pt-20 md:pt-24">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-[rgba(254,255,255,0.78)] leading-relaxed mb-6">
              These Terms of Service (&quot;Terms&quot;) govern your use of services provided by Polus LLC (&quot;Polus,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). By engaging our services, you agree to these Terms.
            </p>
            <p className="text-[rgba(254,255,255,0.78)] leading-relaxed mb-6">
              If you do not agree to these Terms, please do not engage our services or use our website.
            </p>

            <h2 className="text-2xl font-semibold text-polus-gold mb-4 mt-8">Services Provided</h2>
            <p className="text-[rgba(254,255,255,0.78)] leading-relaxed mb-4">
              Polus LLC provides IT and operations consulting services, including but not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[rgba(254,255,255,0.78)] mb-4">
              <li>Systems assessment and IT advisory</li>
              <li>Process documentation and workflow optimization</li>
              <li>Microsoft 365 governance and configuration</li>
              <li>Identity, security, and compliance consulting</li>
              <li>Backup and disaster recovery planning</li>
              <li>Web development and product planning</li>
              <li>IT operations setup and employee lifecycle management</li>
            </ul>
            <p className="text-[rgba(254,255,255,0.78)] leading-relaxed mb-6">
              Specific services, deliverables, timelines, and pricing are detailed in individual service agreements or statements of work.
            </p>

            <h2 className="text-2xl font-semibold text-polus-gold mb-4 mt-8">Service Agreements</h2>
            <p className="text-[rgba(254,255,255,0.78)] leading-relaxed mb-4">
              Before work begins, we will provide:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[rgba(254,255,255,0.78)] mb-4">
              <li><strong>Statement of Work (SOW):</strong> Defines scope, deliverables, timeline, and cost</li>
              <li><strong>Quote or Proposal:</strong> Outlines pricing and service details</li>
              <li><strong>Payment Terms:</strong> Specifies deposit requirements and payment schedule</li>
            </ul>
            <p className="text-[rgba(254,255,255,0.78)] leading-relaxed mb-6">
              Work begins only after mutual agreement and receipt of any required deposits.
            </p>

            <h2 className="text-2xl font-semibold text-polus-gold mb-4 mt-8">Pricing and Payment</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3 text-polus-mint">
              Fixed-Scope Services
            </h3>
            <p className="text-[rgba(254,255,255,0.78)] leading-relaxed mb-4">
              Most services are fixed-scope with defined deliverables and pricing. Prices listed on our website are starting prices and may vary based on complexity.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-polus-mint">
              Deposits
            </h3>
            <p className="text-[rgba(254,255,255,0.78)] leading-relaxed mb-4">
              A 50% deposit may be required to secure project start dates. Deposits are non-refundable once work begins.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-polus-mint">
              Payment Methods
            </h3>
            <p className="text-[rgba(254,255,255,0.78)] leading-relaxed mb-4">
              We accept payment via Stripe (credit card, ACH). Invoices are due upon receipt unless otherwise agreed in writing.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-polus-mint">
              Late Payment
            </h3>
            <p className="text-[rgba(254,255,255,0.78)] leading-relaxed mb-6">
              Accounts unpaid 30 days after invoice date may be subject to a 1.5% monthly late fee and suspension of services.
            </p>

            <h2 className="text-2xl font-semibold text-polus-gold mb-4 mt-8">Cancellation and Refunds</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3 text-polus-mint">
              Before Work Begins
            </h3>
            <p className="text-[rgba(254,255,255,0.78)] leading-relaxed mb-4">
              If you cancel before work begins, deposits are fully refundable minus any completed discovery or planning work.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-polus-mint">
              After Work Begins
            </h3>
            <p className="text-[rgba(254,255,255,0.78)] leading-relaxed mb-4">
              If you cancel after work begins, you will be invoiced for work completed to date. Deposits are non-refundable.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-polus-mint">
              Discovery Calls
            </h3>
            <p className="text-[rgba(254,255,255,0.78)] leading-relaxed mb-4">
              Free discovery calls can be rescheduled with 24-hour notice. No-shows may forfeit future discovery calls.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-polus-mint">
              Dissatisfaction
            </h3>
            <p className="text-[rgba(254,255,255,0.78)] leading-relaxed mb-6">
              If you&apos;re unhappy with deliverables, we will work with you to address concerns. Refunds are considered on a case-by-case basis for incomplete or unsatisfactory work.
            </p>

            <h2 className="text-2xl font-semibold text-polus-gold mb-4 mt-8">Client Responsibilities</h2>
            <p className="text-[rgba(254,255,255,0.78)] leading-relaxed mb-4">
              To ensure successful project completion, clients must:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[rgba(254,255,255,0.78)] mb-6">
              <li>Provide timely access to necessary systems, personnel, and information</li>
              <li>Respond to requests for feedback or approvals within agreed timeframes</li>
              <li>Review deliverables and provide feedback within 7 business days</li>
              <li>Ensure appropriate personnel are available for training sessions</li>
              <li>Maintain backups of critical data before implementation work</li>
            </ul>

            <h2 className="text-2xl font-semibold text-polus-gold mb-4 mt-8">Service Level and Warranties</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3 text-polus-mint">
              Quality Commitment
            </h3>
            <p className="text-[rgba(254,255,255,0.78)] leading-relaxed mb-4">
              We provide services with reasonable care and professional expertise. All deliverables are reviewed for quality before delivery.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-polus-mint">
              Post-Delivery Support
            </h3>
            <p className="text-[rgba(254,255,255,0.78)] leading-relaxed mb-4">
              Most services include 30 days of post-delivery support for clarifications and minor adjustments. Major scope changes require a new agreement.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-polus-mint">
              No Outcome Guarantee
            </h3>
            <p className="text-[rgba(254,255,255,0.78)] leading-relaxed mb-6">
              While we strive for excellence, we cannot guarantee specific business outcomes, system performance, or adoption rates. We provide consulting and implementation services based on industry best practices.
            </p>

            <h2 className="text-2xl font-semibold text-polus-gold mb-4 mt-8">Limitation of Liability</h2>
            <p className="text-[rgba(254,255,255,0.78)] leading-relaxed mb-4">
              To the maximum extent permitted by law:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[rgba(254,255,255,0.78)] mb-4">
              <li>Our total liability is limited to the fees paid for the specific service in question</li>
              <li>We are not liable for indirect, incidental, or consequential damages</li>
              <li>We are not liable for data loss if client did not maintain proper backups</li>
              <li>We are not liable for third-party service failures or integrations</li>
            </ul>
            <p className="text-[rgba(254,255,255,0.78)] leading-relaxed mb-6">
              Clients are responsible for testing implementations in non-production environments before deployment.
            </p>

            <h2 className="text-2xl font-semibold text-polus-gold mb-4 mt-8">Intellectual Property</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3 text-polus-mint">
              Client Ownership
            </h3>
            <p className="text-[rgba(254,255,255,0.78)] leading-relaxed mb-4">
              Upon full payment, clients own all deliverables created specifically for them, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[rgba(254,255,255,0.78)] mb-4">
              <li>Process documentation and SOPs</li>
              <li>Custom configurations and scripts</li>
              <li>Training materials and guides</li>
              <li>Web development work and designs</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-polus-mint">
              Polus Retention
            </h3>
            <p className="text-[rgba(254,255,255,0.78)] leading-relaxed mb-4">
              We retain the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[rgba(254,255,255,0.78)] mb-6">
              <li>Use anonymized case studies and outcomes for marketing</li>
              <li>Reuse frameworks, templates, and methodologies</li>
              <li>Reference project types (not specifics) in portfolio</li>
            </ul>

            <h2 className="text-2xl font-semibold text-polus-gold mb-4 mt-8">Confidentiality</h2>
            <p className="text-[rgba(254,255,255,0.78)] leading-relaxed mb-4">
              We treat all client information as confidential. We will not disclose:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[rgba(254,255,255,0.78)] mb-4">
              <li>Business processes, strategies, or financials</li>
              <li>System credentials or access information</li>
              <li>Personnel information or internal challenges</li>
              <li>Any information marked as confidential</li>
            </ul>
            <p className="text-[rgba(254,255,255,0.78)] leading-relaxed mb-6">
              For sensitive engagements, we can execute a separate Non-Disclosure Agreement (NDA).
            </p>

            <h2 className="text-2xl font-semibold text-polus-gold mb-4 mt-8">Dispute Resolution</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3 text-polus-mint">
              Good Faith Negotiation
            </h3>
            <p className="text-[rgba(254,255,255,0.78)] leading-relaxed mb-4">
              If disputes arise, both parties agree to negotiate in good faith for 30 days before pursuing other remedies.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-polus-mint">
              Governing Law
            </h3>
            <p className="text-[rgba(254,255,255,0.78)] leading-relaxed mb-4">
              These Terms are governed by the laws of the State of Oklahoma. Any legal action must be brought in Tulsa County, Oklahoma.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-polus-mint">
              Mediation
            </h3>
            <p className="text-[rgba(254,255,255,0.78)] leading-relaxed mb-6">
              If negotiation fails, both parties agree to attempt mediation before litigation.
            </p>

            <h2 className="text-2xl font-semibold text-polus-gold mb-4 mt-8">Termination</h2>
            <p className="text-[rgba(254,255,255,0.78)] leading-relaxed mb-4">
              Either party may terminate services with written notice. Upon termination:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[rgba(254,255,255,0.78)] mb-6">
              <li>Client will be invoiced for work completed to date</li>
              <li>We will deliver all completed deliverables upon payment</li>
              <li>Client access to Polus systems or tools will be revoked</li>
              <li>Confidentiality obligations survive termination</li>
            </ul>

            <h2 className="text-2xl font-semibold text-polus-gold mb-4 mt-8">Changes to Terms</h2>
            <p className="text-[rgba(254,255,255,0.78)] leading-relaxed mb-6">
              We may update these Terms periodically. Changes will be posted on this page with an updated &quot;Last updated&quot; date. Existing service agreements are governed by the Terms in effect when the agreement was signed.
            </p>

            <h2 className="text-2xl font-semibold text-polus-gold mb-4 mt-8">Contact Us</h2>
            <p className="text-[rgba(254,255,255,0.78)] leading-relaxed mb-4">
              Questions about these Terms? Contact us:
            </p>
            <div className="text-[rgba(254,255,255,0.78)] mb-6">
              <p className="font-semibold">Polus LLC</p>
              <p>Tulsa, Oklahoma</p>
              <p>
                Email:{" "}
                <a href="mailto:jack.washmon@polus-cs.com" className="text-polus-mint hover:text-polus-gold underline">
                  jack.washmon@polus-cs.com
                </a>
              </p>
            </div>

            <div className="mt-10 p-6 bg-polus-surface1 rounded-lg border border-[rgba(177,227,199,0.16)]">
              <p className="text-sm text-[rgba(254,255,255,0.62)]">
                <strong>Last Updated:</strong> January 15, 2026
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
