import { Section } from "@/components/Section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer — Polus",
  description: "Legal disclaimers and limitations for Polus IT consulting services."
};

export default function DisclaimerPage() {
  return (
    <Section className="pt-20 md:pt-24 max-w-4xl mx-auto">
      <div className="prose prose-invert prose-polus max-w-none">
        <h1 className="text-4xl font-bold text-polus-gold mb-4">Disclaimer</h1>
        <p className="text-sm text-[rgba(254,255,255,0.62)] mb-8">
          Last updated: January 18, 2026
        </p>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-polus-gold mb-4">Professional Services Disclaimer</h2>
            <p className="text-[rgba(254,255,255,0.78)] leading-relaxed mb-4">
              Polus (&quot;we,&quot; &quot;us,&quot; &quot;our&quot;) provides information technology consulting, operations consulting, and related professional services. The information and services provided are for general guidance purposes only and should not be considered as professional advice in specialized fields outside our expertise.
            </p>
            <p className="text-[rgba(254,255,255,0.78)] leading-relaxed">
              All services are provided on an &quot;as is&quot; and &quot;as available&quot; basis. While we strive to provide high-quality services and accurate information, we make no warranties, express or implied, regarding the completeness, accuracy, reliability, or suitability of our services for any particular purpose.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-polus-gold mb-4">No Guarantee of Results</h2>
            <p className="text-[rgba(254,255,255,0.78)] leading-relaxed mb-4">
              We cannot and do not guarantee specific outcomes, results, or benefits from our services. Business results depend on many factors beyond our control, including but not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[rgba(254,255,255,0.78)]">
              <li>Client implementation and adoption of recommendations</li>
              <li>Existing infrastructure complexity and technical debt</li>
              <li>Third-party service availability and performance</li>
              <li>Market conditions and competitive dynamics</li>
              <li>User behavior and organizational change management</li>
              <li>Accuracy and completeness of information provided by the client</li>
            </ul>
            <p className="text-[rgba(254,255,255,0.78)] leading-relaxed mt-4">
              Past performance, case studies, and testimonials do not guarantee similar results for your business. Each engagement is unique and results will vary.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-polus-gold mb-4">Not Legal, Financial, or Medical Advice</h2>
            <p className="text-[rgba(254,255,255,0.78)] leading-relaxed mb-4">
              Our services are limited to information technology and operations consulting. We do not provide:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[rgba(254,255,255,0.78)]">
              <li><strong>Legal advice:</strong> We are not attorneys. Compliance documentation services prepare technical documentation for your auditor or legal counsel—they do not constitute legal advice or certify legal compliance.</li>
              <li><strong>Financial or accounting advice:</strong> Technology roadmap budgets and cost optimization recommendations are estimates only and should be reviewed by your financial advisors.</li>
              <li><strong>Medical advice:</strong> HIPAA compliance documentation prepares IT policies and procedures—it does not constitute medical advice or HIPAA legal counsel.</li>
              <li><strong>Insurance advice:</strong> Disaster recovery and backup services assess technical readiness—they do not constitute insurance advice or replace cyber insurance requirements.</li>
            </ul>
            <p className="text-[rgba(254,255,255,0.78)] leading-relaxed mt-4">
              For matters requiring specialized professional advice, consult with qualified professionals in those respective fields.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-polus-gold mb-4">Client Responsibilities</h2>
            <p className="text-[rgba(254,255,255,0.78)] leading-relaxed mb-4">
              Successful service delivery requires active client participation and cooperation, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[rgba(254,255,255,0.78)]">
              <li>Providing timely and accurate information about your systems, processes, and business requirements</li>
              <li>Granting necessary access to systems, documentation, and key personnel</li>
              <li>Designating qualified decision-makers and stakeholders for approvals</li>
              <li>Implementing recommendations according to provided documentation and guidance</li>
              <li>Maintaining regular communication and responding to requests within agreed timelines</li>
              <li>Securing appropriate backups before system changes or migrations</li>
              <li>Testing and validating deliverables in your specific environment</li>
            </ul>
            <p className="text-[rgba(254,255,255,0.78)] leading-relaxed mt-4">
              Delays, scope changes, or unsatisfactory outcomes resulting from insufficient client participation or inaccurate information are the client&apos;s responsibility.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-polus-gold mb-4">Third-Party Services and Tools</h2>
            <p className="text-[rgba(254,255,255,0.78)] leading-relaxed mb-4">
              Our services often involve third-party platforms, software, and services (e.g., Microsoft 365, Azure, backup solutions, service desk platforms). We:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[rgba(254,255,255,0.78)]">
              <li>Are not affiliated with or endorsed by these third-party vendors unless explicitly stated</li>
              <li>Do not warrant the performance, availability, security, or reliability of third-party services</li>
              <li>Are not responsible for third-party service outages, data breaches, pricing changes, or service discontinuation</li>
              <li>Do not guarantee compatibility between third-party services or your existing systems</li>
              <li>Recommend but cannot enforce adherence to third-party licensing agreements and terms of service</li>
            </ul>
            <p className="text-[rgba(254,255,255,0.78)] leading-relaxed mt-4">
              <strong>You are responsible for reviewing and accepting third-party service terms, licensing costs, and ongoing subscription management.</strong> For project-based implementation services (e.g., Identity & Device Foundation, M365 Governance, Process Documentation), Polus does not manage, maintain, or assume responsibility for:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[rgba(254,255,255,0.78)] mt-3">
              <li>Ongoing subscription renewals, billing, or license management for third-party services</li>
              <li>Service updates, patches, or version upgrades after initial implementation</li>
              <li>User account provisioning or deprovisioning beyond initial setup automation</li>
              <li>Monitoring, alerting, or incident response for third-party service failures</li>
              <li>Data retention, backup storage costs, or cloud storage capacity management</li>
              <li>Support tickets, SLA enforcement, or vendor escalations for third-party platforms</li>
            </ul>
            <p className="text-[rgba(254,255,255,0.78)] leading-relaxed mt-4">
              <strong>For managed services or ongoing service agreements</strong> (e.g., IT Advisory retainer, Disaster Recovery Testing Service with recurring engagements), Polus responsibilities are explicitly defined in the service agreement and may include monitoring, maintenance, updates, or vendor management as specified. Refer to your specific service agreement for details.
            </p>
            <p className="text-[rgba(254,255,255,0.78)] leading-relaxed mt-4">
              Unless otherwise stated in your service agreement, our services are project-based implementations only. Ongoing operational responsibility for systems, subscriptions, and third-party services remains with the client.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-polus-gold mb-4">Project-Based vs. Managed Services</h2>
            <p className="text-[rgba(254,255,255,0.78)] leading-relaxed mb-4">
              Unless otherwise specified in a separate service agreement, most services are provided on a <strong>project basis</strong> with defined scope and deliverables. This means:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[rgba(254,255,255,0.78)]">
              <li><strong>Project completion does not include ongoing support:</strong> Once deliverables are provided and the project is closed, post-project support is not included unless purchased separately.</li>
              <li><strong>Systems require ongoing maintenance:</strong> IT systems, processes, and documentation require regular updates and maintenance. Clients are responsible for ongoing upkeep of project-based implementations.</li>
              <li><strong>Training does not guarantee adoption:</strong> User training and documentation are provided, but successful adoption depends on organizational change management, which is the client&apos;s responsibility.</li>
              <li><strong>Implementations require testing and validation:</strong> While we test configurations in controlled environments, clients must validate implementations in their specific production environments before relying on them for critical operations.</li>
            </ul>
            <p className="text-[rgba(254,255,255,0.78)] leading-relaxed mt-4">
              <strong>Managed services and recurring engagements</strong> (e.g., IT Advisory retainer, Disaster Recovery Testing Service with quarterly testing) include ongoing responsibilities as explicitly defined in those service agreements. These may include system monitoring, vendor management, regular testing, advisory sessions, or other ongoing activities. Scope and deliverables for managed services are detailed in individual service agreements.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-polus-gold mb-4">Data Security and Backup Responsibility</h2>
            <p className="text-[rgba(254,255,255,0.78)] leading-relaxed mb-4">
              While we implement security and backup solutions, ultimate responsibility for data protection rests with the client:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[rgba(254,255,255,0.78)]">
              <li>Clients must maintain current backups and test recovery procedures regularly</li>
              <li>Clients are responsible for monitoring backup success, storage capacity, and retention policies</li>
              <li>We are not liable for data loss resulting from failed backups, expired retention policies, or insufficient testing</li>
              <li>Security configurations implemented by Polus must be maintained by the client; security posture degrades without ongoing monitoring and updates</li>
              <li>Clients are responsible for incident response, breach notification, and regulatory compliance reporting</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-polus-gold mb-4">Service Availability and Changes</h2>
            <p className="text-[rgba(254,255,255,0.78)] leading-relaxed mb-4">
              We reserve the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[rgba(254,255,255,0.78)]">
              <li>Modify service offerings, pricing, scope, or deliverables at any time</li>
              <li>Discontinue services with reasonable notice</li>
              <li>Decline service engagements that fall outside our expertise or capacity</li>
              <li>Terminate engagements for non-payment, breach of contract, or unworkable client relationships</li>
            </ul>
            <p className="text-[rgba(254,255,255,0.78)] leading-relaxed mt-4">
              Pricing and service details on this website are subject to change. Confirmed pricing is provided in individual quotes or service agreements only.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-polus-gold mb-4">Force Majeure</h2>
            <p className="text-[rgba(254,255,255,0.78)] leading-relaxed">
              We are not liable for delays, non-performance, or service interruptions caused by circumstances beyond our reasonable control, including but not limited to: natural disasters, pandemics, government actions, labor disputes, internet service provider failures, third-party service outages, cyberattacks, or other force majeure events.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-polus-gold mb-4">Limitation of Liability</h2>
            <p className="text-[rgba(254,255,255,0.78)] leading-relaxed mb-4">
              To the fullest extent permitted by law:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[rgba(254,255,255,0.78)]">
              <li>Our total liability for any claims arising from services provided shall not exceed the total fees paid by the client for the specific service engagement giving rise to the claim.</li>
              <li>We are not liable for indirect, incidental, consequential, special, or punitive damages, including but not limited to lost profits, lost data, business interruption, or reputational harm.</li>
              <li>We are not liable for damages resulting from client failure to implement recommendations, backup data, or test changes in production environments.</li>
              <li>We are not liable for third-party service failures, security breaches of third-party platforms, or unauthorized access resulting from client security practices.</li>
            </ul>
            <p className="text-[rgba(254,255,255,0.78)] leading-relaxed mt-4">
              This limitation applies regardless of the legal theory (contract, tort, negligence, strict liability, or otherwise) and whether or not we were advised of the possibility of such damages.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-polus-gold mb-4">Intellectual Property</h2>
            <p className="text-[rgba(254,255,255,0.78)] leading-relaxed">
              Unless otherwise specified in a written agreement, deliverables provided to clients (documentation, configurations, scripts, training materials) are licensed for the client&apos;s internal use only. Templates, frameworks, methodologies, and proprietary tools remain our intellectual property. Clients may not resell, redistribute, or claim ownership of our deliverables without written permission.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-polus-gold mb-4">Confidentiality</h2>
            <p className="text-[rgba(254,255,255,0.78)] leading-relaxed">
              We maintain confidentiality of client information in accordance with our Privacy Policy and applicable service agreements. However, we cannot guarantee absolute security of information transmitted electronically or stored digitally. Clients are responsible for implementing appropriate security measures for sensitive data in their own environments.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-polus-gold mb-4">Testimonials and Case Studies</h2>
            <p className="text-[rgba(254,255,255,0.78)] leading-relaxed">
              Testimonials, case studies, and success stories represent the experiences of specific clients at specific points in time. They are not representative of typical results and should not be construed as guarantees of similar outcomes. Individual results vary based on numerous factors unique to each business.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-polus-gold mb-4">Website Information</h2>
            <p className="text-[rgba(254,255,255,0.78)] leading-relaxed">
              Information on this website is provided for general informational purposes only. While we strive to keep information current and accurate, we make no representations or warranties about the completeness, accuracy, reliability, or timeliness of any content. Any reliance you place on website content is at your own risk.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-polus-gold mb-4">Governing Law and Disputes</h2>
            <p className="text-[rgba(254,255,255,0.78)] leading-relaxed mb-4">
              This disclaimer and all services are governed by the laws of the State of Oklahoma, United States, without regard to conflict of law principles. Any disputes shall be resolved in the state or federal courts located in Oklahoma County, Oklahoma.
            </p>
            <p className="text-[rgba(254,255,255,0.78)] leading-relaxed">
              For informal dispute resolution, clients agree to contact us directly to attempt good-faith resolution before pursuing formal legal action.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-polus-gold mb-4">Changes to This Disclaimer</h2>
            <p className="text-[rgba(254,255,255,0.78)] leading-relaxed">
              We may update this disclaimer at any time. Changes are effective when posted on this page with an updated &quot;Last updated&quot; date. Continued use of our services after changes constitutes acceptance of the updated disclaimer.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-polus-gold mb-4">Severability</h2>
            <p className="text-[rgba(254,255,255,0.78)] leading-relaxed">
              If any provision of this disclaimer is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that the remainder of this disclaimer remains in full force and effect.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-polus-gold mb-4">Contact Us</h2>
            <p className="text-[rgba(254,255,255,0.78)] leading-relaxed mb-4">
              If you have questions about this disclaimer or our services, please contact us:
            </p>
            <ul className="list-none space-y-2 text-[rgba(254,255,255,0.78)]">
              <li><strong>Email:</strong> <a href="mailto:jack.washmon@polus-cs.com" className="text-polus-mint hover:text-polus-gold transition">jack.washmon@polus-cs.com</a></li>
              <li><strong>Website:</strong> <a href="https://polus-cs.com" className="text-polus-mint hover:text-polus-gold transition">polus-cs.com</a></li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
