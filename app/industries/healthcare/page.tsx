import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Healthcare & Medical Practice IT Services | Oklahoma IT Consulting — Polus",
  description: "HIPAA-compliant IT solutions for Oklahoma medical practices, clinics, and healthcare providers. Secure patient data, automated compliance documentation, and modern cloud infrastructure.",
  openGraph: {
    title: "Healthcare IT Services | Oklahoma — Polus",
    description: "HIPAA-compliant IT solutions for Oklahoma medical practices. Secure patient data with modern cloud infrastructure."
  }
};

export default function HealthcarePage() {
  const services = [
    {
      title: "HIPAA-Compliant Infrastructure",
      description: "Microsoft 365 setup with encryption, MFA, and conditional access policies aligned to HIPAA requirements",
      service: "Microsoft 365 / Entra ID Setup"
    },
    {
      title: "Compliance Documentation Prep",
      description: "IT policies, procedures, and evidence collection templates for HIPAA audits and certification",
      service: "Compliance Documentation Prep"
    },
    {
      title: "Secure Patient Data Governance",
      description: "Teams & SharePoint governance with retention policies, external sharing controls, and audit trails",
      service: "Teams & SharePoint Governance"
    },
    {
      title: "Employee Lifecycle Automation",
      description: "Automated onboarding/offboarding to ensure departing staff lose access immediately and audit logs are maintained",
      service: "Employee Lifecycle Automation"
    },
    {
      title: "Backup & Disaster Recovery",
      description: "Tested backup procedures and documented recovery playbooks to prevent data loss",
      service: "Backup & Disaster Recovery"
    },
    {
      title: "IT Documentation Package",
      description: "Complete system documentation for compliance audits and staff transitions",
      service: "IT Documentation Package"
    }
  ];

  const challenges = [
    "Protecting patient data and maintaining HIPAA compliance",
    "Managing staff access to sensitive medical records",
    "Documenting IT systems and procedures for audits",
    "Securing mobile devices for remote or traveling providers",
    "Transitioning from paper charts to digital workflows",
    "Responding to ransomware threats in healthcare"
  ];

  return (
    <>
      <Section title="Healthcare IT Services" eyebrow="Oklahoma" className="pt-20 md:pt-24">
        <p className="text-xl text-[rgba(254,255,255,0.88)] max-w-3xl">
          HIPAA-compliant IT infrastructure for medical practices, clinics, dental offices, therapy practices, and healthcare providers across Oklahoma.
        </p>
      </Section>

      <Section className="bg-polus-surface1">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Healthcare Challenges We Solve</h2>
            <ul className="space-y-4 list-disc pl-5">
              {challenges.map((challenge, idx) => (
                <li key={idx} className="text-[rgba(254,255,255,0.78)]">{challenge}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-6">Why Healthcare Providers Choose Polus</h2>
            <div className="space-y-4 text-[rgba(254,255,255,0.78)]">
              <p>
                <strong className="text-polus-gold">HIPAA-Ready Infrastructure:</strong> We help healthcare practices secure patient data with encrypted devices, MFA, conditional access policies, and audit-ready documentation.
              </p>
              <p>
                <strong className="text-polus-gold">Compliance Documentation:</strong> Our Compliance Documentation Prep service provides policy templates, SOPs, and evidence collection systems aligned to HIPAA requirements.
              </p>
              <p>
                <strong className="text-polus-gold">No Bloated Contracts:</strong> Project-based engagements with transparent pricing. No 3-year MSP contracts or surprise fees.
              </p>
              <p>
                <strong className="text-polus-gold">Oklahoma-Based:</strong> Serving OKC, Tulsa, Edmond, and surrounding areas. We understand local healthcare businesses.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <h2 className="text-3xl font-semibold mb-8 text-center">Services for Healthcare Practices</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
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
          <h2 className="text-2xl font-semibold mb-6">Common Questions from Healthcare Practices</h2>
          <div className="space-y-6">
            <div className="border-b border-[rgba(177,227,199,0.12)] pb-6">
              <h3 className="text-lg font-semibold mb-3 text-polus-mint">Will this make us HIPAA-compliant?</h3>
              <p className="text-[rgba(254,255,255,0.78)] leading-relaxed">
                We prepare your IT infrastructure and documentation for HIPAA compliance, but we don&apos;t certify compliance (that requires a compliance auditor). Our Compliance Documentation Prep service provides the IT policies, procedures, and evidence collection you need for audits. We work alongside your compliance consultant or auditor.
              </p>
            </div>

            <div className="border-b border-[rgba(177,227,199,0.12)] pb-6">
              <h3 className="text-lg font-semibold mb-3 text-polus-mint">Do you work with EHR systems like Epic, Cerner, or Athenahealth?</h3>
              <p className="text-[rgba(254,255,255,0.78)] leading-relaxed">
                We focus on the IT infrastructure around your EHR (identity management, device security, backups, governance) rather than EHR configuration itself. We can integrate SSO with supported EHR platforms and ensure your infrastructure meets security requirements for EHR vendors.
              </p>
            </div>

            <div className="border-b border-[rgba(177,227,199,0.12)] pb-6">
              <h3 className="text-lg font-semibold mb-3 text-polus-mint">How quickly can we get started?</h3>
              <p className="text-[rgba(254,255,255,0.78)] leading-relaxed">
                Most projects start within 1-2 weeks of booking. A typical Identity & Security setup takes 4-6 weeks, while Compliance Documentation Prep takes 4-6 weeks. We can expedite for urgent compliance deadlines.
              </p>
            </div>

            <div className="pb-6">
              <h3 className="text-lg font-semibold mb-3 text-polus-mint">What size practices do you work with?</h3>
              <p className="text-[rgba(254,255,255,0.78)] leading-relaxed">
                We&apos;re designed for small to midsize practices: solo practitioners to 50-person clinics. If you have 5-50 staff members and need modern IT without hiring full-time IT staff, we&apos;re a good fit.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Ready to secure your practice?</h2>
        <p className="text-[rgba(254,255,255,0.78)] mb-6 max-w-2xl mx-auto">
          Book a free discovery call to discuss your HIPAA compliance needs and IT infrastructure.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button href="/book" variant="primary">Book Free Discovery Call</Button>
          <Button href="/services" variant="secondary">View All Services</Button>
        </div>
      </Section>
    </>
  );
}
