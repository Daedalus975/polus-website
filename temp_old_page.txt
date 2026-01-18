import { Section } from "@/components/Section";
import { ServicesGrid } from "@/components/ServicesGrid";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Services — Oklahoma IT and Operations | Polus",
  description: "Operations and IT services built for small businesses in Oklahoma. Systems review, M365 governance, backup/DR, process documentation, and more."
};

export default function ServicesPage() {
  const services = [
    {
      title: "IT Assessment",
      description: "Get clarity on what to fix first—fast. 90-minute working session with documented recommendations and priority roadmap delivered within 24 hours.",
      slug: "systems-assessment",
      tag: "Start Here"
    },
    {
      title: "IT Advisory",
      description: "Ongoing monthly strategic guidance—roadmap planning, vendor management, and IT decision support. No support tickets. $500/mo (4 hrs) or $1,000/mo (10 hrs).",
      slug: "strategic-advisory",
      tag: "Recurring Revenue"
    },
    {
      title: "Microsoft 365 / Entra ID Setup",
      description: "Move to modern cloud identity and centralized device management. Includes Microsoft Entra ID (Azure AD), Intune, MFA, SSO, and baseline security policies.",
      slug: "identity-device-foundation",
      tag: "Core Infrastructure"
    },
    {
      title: "Teams & SharePoint Governance",
      description: "Tame Teams/SharePoint sprawl and establish sustainable governance. Naming conventions, retention policies, permissions cleanup, and external sharing controls.",
      slug: "m365-governance",
      tag: "For Growing Teams"
    },
    {
      title: "Onboarding & Offboarding Automation",
      description: "Automate onboarding and offboarding for security and consistency. Workflow automation for account creation, access provisioning, and exit procedures.",
      slug: "employee-lifecycle",
      tag: "HR and Security"
    },
    {
      title: "IT Operations Setup",
      description: "Service desk, asset tracking, and operational foundation. Get structured support workflows, inventory management, and handoff-ready documentation.",
      slug: "it-operations-toolkit",
      tag: "Operational Maturity"
    },
    {
      title: "Backup & Disaster Recovery",
      description: "Know your backups work before you need them. Coverage assessment, restore testing, and disaster recovery playbook with step-by-step procedures.",
      slug: "backup-dr-readiness",
      tag: "Risk Mitigation"
    },
    {
      title: "Process Mapping & SOP Development",
      description: "Document critical workflows so your team stops reinventing the wheel. Visual process maps, written SOPs, and training. Priced per process or as a bundle.",
      slug: "process-clarity-pack",
      tag: "Operational Excellence"
    },
    {
      title: "Web Development",
      description: "Lead-generation websites for small businesses. Fast, secure, SEO-friendly, and designed for conversion. Tiered packages available.",
      slug: "web-development",
      tag: "Digital Presence"
    },
    {
      title: "Product Planning",
      description: "Turn your product idea into a clear, actionable roadmap. 1-day workshop with detailed Product Requirements Document.",
      slug: "mvp-prd",
      tag: "Product Planning"
    },
    {
      title: "Acquisition Integration (Phased)",
      description: "Merge IT systems during a business acquisition—without the chaos. Proven experience with 400+ user integrations. Assessment required.",
      slug: "acquisition-integration",
      tag: "M&A Support"
    },
    {
      title: "IT Foundation Package",
      description: "Complete foundational IT setup: Identity & Security, M365 Governance, and Employee Lifecycle. Save $1,500. Perfect for 10-25 employees.",
      slug: "new-foundation-bundle",
      tag: "Bundle Deal"
    },
    {
      title: "Growth Package",
      description: "Assessment, Identity & Security, and 3 months IT Advisory. Save $1,000. Complete modernization with ongoing guidance.",
      slug: "growth-acceleration-bundle",
      tag: "Bundle Deal"
    },
    {
      title: "Microsoft 365 End-User Training",
      description: "Drive M365 adoption with targeted training. Teams, SharePoint, OneDrive best practices. 2-hour sessions with materials and recordings.",
      slug: "m365-training",
      tag: "Training & Adoption"
    },
    {
      title: "IT Documentation Package",
      description: "Document your entire IT environment: network diagrams, system inventory, runbooks, and configuration standards. Nothing lives in one person's head.",
      slug: "it-documentation",
      tag: "Knowledge Management"
    },
    {
      title: "Disaster Recovery Testing Service",
      description: "Quarterly restore tests to ensure backups work. Recurring service with executive reports and remediation recommendations.",
      slug: "dr-testing-service",
      tag: "Ongoing Assurance"
    },
    {
      title: "Cloud Cost Optimization Review",
      description: "Find waste in Azure and M365 spending. License audits, right-sizing, and cost controls. Most clients save 15-30% annually.",
      slug: "cloud-cost-optimization",
      tag: "Cost Savings"
    },
    {
      title: "Compliance Documentation Prep",
      description: "IT documentation for HIPAA, SOC 2, or CMMC audits. Policies, procedures, and evidence collection aligned to framework requirements.",
      slug: "compliance-documentation",
      tag: "Compliance & Audit"
    },
    {
      title: "Technology Roadmap Workshop",
      description: "Build a 3-5 year technology plan. Full-day workshop with leadership to align technology with business goals and create phased implementation plan.",
      slug: "technology-roadmap-workshop",
    }
  ];

  return (
    <>
      <Section title="Operations and IT services built for small businesses" className="pt-20 md:pt-24">
        <p className="text-lg text-[rgba(254,255,255,0.78)] leading-relaxed max-w-3xl mb-10">
          Pick a service to learn what you get, typical timelines, and starting-at pricing. Need something not listed? <Link href="/contact" className="text-polus-gold hover:text-polus-mint transition underline">Just ask</Link>—we offer additional services beyond what&apos;s shown here.
        </p>
        
        <ServicesGrid services={services} />
      </Section>

      <Section className="bg-polus-surface1">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-polus-gold">
            Need something else?
          </h2>
          <p className="text-lg text-[rgba(254,255,255,0.78)] leading-relaxed mb-8">
            We offer additional services including process mapping, workflow automation, web development, and product kickoff planning. If you don&apos;t see what you need here, reach out—we can likely help or refer you to a trusted partner.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg px-6 py-3 text-base font-semibold bg-polus-gold text-polus-forest hover:brightness-110 transition focus:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(17,98,56,0.40)]"
            >
              Request Custom Quote
            </a>
            <a
              href="/book"
              className="inline-flex items-center justify-center rounded-lg px-6 py-3 text-base font-semibold border-2 border-polus-gold text-polus-gold hover:bg-polus-gold hover:text-polus-forest transition focus:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(17,98,56,0.40)]"
            >
              Book Free Discovery Call
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
