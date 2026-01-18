import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal & Law Firm IT Services | Oklahoma IT Consulting — Polus",
  description: "Secure IT infrastructure for Oklahoma law firms and legal practices. Protect attorney-client privilege, manage confidential case files, and ensure compliance.",
  openGraph: {
    title: "Law Firm IT Services | Oklahoma — Polus",
    description: "Secure IT infrastructure for Oklahoma law firms. Protect client data and ensure compliance."
  }
};

export default function LegalPage() {
  const services = [
    {
      title: "Attorney-Client Privilege Protection",
      description: "Microsoft 365 setup with encryption, MFA, conditional access, and audit trails to protect confidential legal work",
      service: "Microsoft 365 / Entra ID Setup"
    },
    {
      title: "Case File Governance",
      description: "Teams & SharePoint governance with matter-centric file structures, retention policies, and secure client portals",
      service: "Teams & SharePoint Governance"
    },
    {
      title: "Compliance Documentation",
      description: "IT policies and procedures for ethics compliance, data breach response, and audit readiness",
      service: "Compliance Documentation Prep"
    },
    {
      title: "Secure Email & Communication",
      description: "Encrypted email, secure file sharing, and client communication workflows that protect privilege",
      service: "Microsoft 365 / Entra ID Setup"
    },
    {
      title: "Backup & Disaster Recovery",
      description: "Tested backup procedures to prevent case file loss and meet ethical obligations for data protection",
      service: "Backup & Disaster Recovery"
    },
    {
      title: "Process Documentation",
      description: "Document intake procedures, conflict checks, and case management workflows",
      service: "Process Mapping & SOP Development"
    }
  ];

  const challenges = [
    "Protecting attorney-client privilege and confidential case files",
    "Meeting ethical obligations for data security (ABA Model Rules 1.1, 1.6)",
    "Managing document version control and case file organization",
    "Securing remote work and mobile access for depositions/court",
    "Preventing unauthorized access to sensitive legal research and strategy",
    "Ensuring data retention and deletion policies meet compliance requirements"
  ];

  return (
    <>
      <Section title="Law Firm IT Services" eyebrow="Oklahoma" className="pt-20 md:pt-24">
        <p className="text-xl text-[rgba(254,255,255,0.88)] max-w-3xl">
          Secure IT infrastructure for Oklahoma law firms, solo practitioners, and legal practices. Protect attorney-client privilege and meet ethical obligations for data security.
        </p>
      </Section>

      <Section className="bg-polus-surface1">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Legal Challenges We Solve</h2>
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
            <h2 className="text-2xl font-semibold mb-6">Why Law Firms Choose Polus</h2>
            <div className="space-y-4 text-[rgba(254,255,255,0.78)]">
              <p>
                <strong className="text-polus-gold">Ethics-Compliant Infrastructure:</strong> We help law firms meet ABA Model Rules 1.1 (competence in technology) and 1.6 (confidentiality) with encrypted devices, MFA, access controls, and audit trails.
              </p>
              <p>
                <strong className="text-polus-gold">Matter-Centric File Management:</strong> Our Teams & SharePoint governance structures case files with proper permissions, retention policies, and conflict walls to protect attorney-client privilege.
              </p>
              <p>
                <strong className="text-polus-gold">No Bloated Contracts:</strong> Project-based engagements with transparent pricing. No 3-year MSP contracts or forced bundles.
              </p>
              <p>
                <strong className="text-polus-gold">Oklahoma-Based:</strong> Serving OKC, Tulsa, Edmond, and surrounding areas. We understand Oklahoma legal practices.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <h2 className="text-3xl font-semibold mb-8 text-center">Services for Law Firms</h2>
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
          <h2 className="text-2xl font-semibold mb-6">Common Questions from Law Firms</h2>
          <div className="space-y-6">
            <div className="border-b border-[rgba(177,227,199,0.12)] pb-6">
              <h3 className="text-lg font-semibold mb-3 text-polus-mint">Does this meet ABA Model Rules for technology competence?</h3>
              <p className="text-[rgba(254,255,255,0.78)] leading-relaxed">
                Our infrastructure setup (encryption, MFA, access controls, audit trails) addresses the technology security requirements in ABA Model Rules 1.1 (competence) and 1.6 (confidentiality). We&apos;re not attorneys and don&apos;t provide legal advice, but we design systems that help you meet ethical obligations for data protection.
              </p>
            </div>

            <div className="border-b border-[rgba(177,227,199,0.12)] pb-6">
              <h3 className="text-lg font-semibold mb-3 text-polus-mint">Can you integrate with legal practice management software like Clio, MyCase, or PracticePanther?</h3>
              <p className="text-[rgba(254,255,255,0.78)] leading-relaxed">
                Yes. We can set up SSO (single sign-on) with supported practice management platforms, document management systems (NetDocuments, iManage), and research tools (Westlaw, LexisNexis). Base pricing includes up to 3 SSO applications; additional apps are +$500 each.
              </p>
            </div>

            <div className="border-b border-[rgba(177,227,199,0.12)] pb-6">
              <h3 className="text-lg font-semibold mb-3 text-polus-mint">How do you handle conflict walls and information barriers?</h3>
              <p className="text-[rgba(254,255,255,0.78)] leading-relaxed">
                Our Teams & SharePoint Governance service includes permissions architecture to separate case files by matter and attorney team. We can implement information barriers in Microsoft 365 to prevent cross-contamination between matters or practice groups. This is configured during governance setup.
              </p>
            </div>

            <div className="pb-6">
              <h3 className="text-lg font-semibold mb-3 text-polus-mint">What size firms do you work with?</h3>
              <p className="text-[rgba(254,255,255,0.78)] leading-relaxed">
                We&apos;re designed for solo practitioners to 50-person firms. If you&apos;re too small for a full-time IT director but need more than break-fix support, we&apos;re a good fit.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Ready to secure your practice?</h2>
        <p className="text-[rgba(254,255,255,0.78)] mb-6 max-w-2xl mx-auto">
          Book a free discovery call to discuss your data security and compliance needs.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button href="/book" variant="primary">Book Free Discovery Call</Button>
          <Button href="/services" variant="secondary">View All Services</Button>
        </div>
      </Section>
    </>
  );
}
