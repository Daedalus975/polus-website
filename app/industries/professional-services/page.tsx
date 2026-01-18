import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Services IT Solutions | Oklahoma IT Consulting — Polus",
  description: "IT infrastructure for Oklahoma accounting firms, engineering firms, consulting agencies, architects, and professional services. Secure client data and streamline billable operations.",
  openGraph: {
    title: "Professional Services IT | Oklahoma — Polus",
    description: "IT solutions for Oklahoma professional services firms. Secure client data and operational efficiency."
  }
};

export default function ProfessionalServicesPage() {
  const services = [
    {
      title: "Secure Client Data Management",
      description: "Microsoft 365 setup with encrypted devices, MFA, and access controls to protect confidential client information",
      service: "Microsoft 365 / Entra ID Setup"
    },
    {
      title: "Document Governance",
      description: "SharePoint governance with version control, retention policies, and secure client collaboration",
      service: "Teams & SharePoint Governance"
    },
    {
      title: "Process Documentation & SOPs",
      description: "Document your firm's workflows and procedures so knowledge doesn't live in one person's head",
      service: "Process Mapping & SOP Development"
    },
    {
      title: "Strategic IT Advisory",
      description: "Monthly IT strategy and vendor management without hiring a full-time IT director",
      service: "IT Advisory"
    },
    {
      title: "IT Documentation",
      description: "Complete system documentation for audit trails and staff transitions",
      service: "IT Documentation Package"
    },
    {
      title: "Cloud Cost Optimization",
      description: "Audit your M365 and Azure spending to eliminate waste and optimize licenses",
      service: "Cloud Cost Optimization"
    }
  ];

  const challenges = [
    "Protecting confidential client data and work product",
    "Managing document version control and collaboration",
    "Scaling operations during busy season or growth phases",
    "Documenting tribal knowledge before key staff leave",
    "Balancing billable work with IT infrastructure needs",
    "Securing remote/hybrid teams and mobile devices"
  ];

  return (
    <>
      <Section title="Professional Services IT" eyebrow="Oklahoma" className="pt-20 md:pt-24">
        <p className="text-xl text-[rgba(254,255,255,0.88)] max-w-3xl">
          IT infrastructure for Oklahoma accounting firms, engineering firms, consulting agencies, architects, and professional services built for billable hour businesses.
        </p>
      </Section>

      <Section className="bg-polus-surface1">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Challenges We Solve</h2>
            <ul className="space-y-4">
              {challenges.map((challenge, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-polus-mint flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-[rgba(254,255,255,0.78)]">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-6">Why Professional Services Firms Choose Polus</h2>
            <div className="space-y-4 text-[rgba(254,255,255,0.78)]">
              <p>
                <strong className="text-polus-gold">Built for Billable Hour Businesses:</strong> We understand professional services. Your time is valuable—our project-based model means no recurring costs eating into margins unless you want ongoing advisory.
              </p>
              <p>
                <strong className="text-polus-gold">Document-Centric Solutions:</strong> Teams & SharePoint governance, version control, client collaboration, and audit trails designed for firms managing confidential client work.
              </p>
              <p>
                <strong className="text-polus-gold">Scalable Infrastructure:</strong> Cloud-first setup that grows with you during busy season, acquisitions, or rapid growth without upfront hardware costs.
              </p>
              <p>
                <strong className="text-polus-gold">Oklahoma-Based:</strong> Serving OKC, Tulsa, Edmond, and surrounding areas. We get local professional services firms.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <h2 className="text-3xl font-semibold mb-8 text-center">Services for Professional Services Firms</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <Card key={idx} className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-polus-gold">{service.title}</h3>
              <p className="text-[rgba(254,255,255,0.78)] mb-4 leading-relaxed">
                {service.description}
              </p>
              <div className="text-sm text-[rgba(254,255,255,0.58)]">
                Service: {service.service}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="bg-polus-surface1">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">Common Questions from Professional Services Firms</h2>
          <div className="space-y-6">
            <div className="border-b border-[rgba(177,227,199,0.12)] pb-6">
              <h3 className="text-lg font-semibold mb-3 text-polus-mint">Can you integrate with our practice management software?</h3>
              <p className="text-[rgba(254,255,255,0.78)] leading-relaxed">
                Yes. We can set up SSO (single sign-on) with common platforms like Clio, QuickBooks, Sage, Thomson Reuters, CCH, and others. Base pricing includes up to 3 SSO applications; additional apps are +$500 each.
              </p>
            </div>

            <div className="border-b border-[rgba(177,227,199,0.12)] pb-6">
              <h3 className="text-lg font-semibold mb-3 text-polus-mint">We&apos;re drowning in duplicate files and shadow SharePoint sites. Can you fix this?</h3>
              <p className="text-[rgba(254,255,255,0.78)] leading-relaxed">
                Absolutely. Our Teams & SharePoint Governance service audits your current state, cleans up duplicate/inactive sites, establishes naming conventions and lifecycle policies, and sets up templates for future client projects. Most firms see immediate productivity gains.
              </p>
            </div>

            <div className="border-b border-[rgba(177,227,199,0.12)] pb-6">
              <h3 className="text-lg font-semibold mb-3 text-polus-mint">Do you offer ongoing IT support, or just project work?</h3>
              <p className="text-[rgba(254,255,255,0.78)] leading-relaxed">
                Both. Most services are project-based (one-time engagements). If you need ongoing strategic guidance, our IT Advisory service offers 4-10 hours of monthly strategic consulting at $500-$1,000/month. This is NOT helpdesk support—it&apos;s technology strategy, vendor management, and planning.
              </p>
            </div>

            <div className="pb-6">
              <h3 className="text-lg font-semibold mb-3 text-polus-mint">What size firms do you work with?</h3>
              <p className="text-[rgba(254,255,255,0.78)] leading-relaxed">
                We&apos;re designed for 10-50 person firms. If you&apos;re too small for a full-time IT person but need more than break-fix support, we&apos;re a good fit. Solo practitioners to mid-size firms.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Ready to modernize your firm&apos;s IT?</h2>
        <p className="text-[rgba(254,255,255,0.78)] mb-6 max-w-2xl mx-auto">
          Book a free discovery call to discuss your infrastructure needs and operational challenges.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button href="/book" variant="primary">Book Free Discovery Call</Button>
          <Button href="/services" variant="secondary">View All Services</Button>
        </div>
      </Section>
    </>
  );
}
