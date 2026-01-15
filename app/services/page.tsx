"use client";

import { Section } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
// import { DeliverableGallery } from "@/components/DeliverableGallery";
import { FEATURE_FLAGS } from "@/src/config/featureFlags";
import { useState } from "react";

export default function ServicesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const services = [
    {
      title: "Systems Snapshot Assessment",
      description: "Get clarity on what to fix first—fast. 90-minute working session with documented recommendations and priority roadmap delivered within 24 hours.",
      slug: "systems-assessment",
      tag: "Start Here"
    },
    {
      title: "Strategic IT Advisory",
      description: "Ongoing monthly strategic guidance—roadmap planning, vendor management, and IT decision support. No support tickets. $500/mo (4 hrs) or $1,000/mo (10 hrs).",
      slug: "strategic-advisory",
      tag: "Recurring Revenue"
    },
    {
      title: "Cloud Identity & Security Setup",
      description: "Move to modern cloud identity and centralized device management. Includes Microsoft Entra ID (Azure AD), Intune, MFA, SSO, and baseline security policies.",
      slug: "identity-device-foundation",
      tag: "Core Infrastructure"
    },
    {
      title: "M365 Cleanup & Governance",
      description: "Tame Teams/SharePoint sprawl and establish sustainable governance. Naming conventions, retention policies, permissions cleanup, and external sharing controls.",
      slug: "m365-governance",
      tag: "For Growing Teams"
    },
    {
      title: "Employee Lifecycle System",
      description: "Automate onboarding and offboarding for security and consistency. Workflow automation for account creation, access provisioning, and exit procedures.",
      slug: "employee-lifecycle",
      tag: "HR and Security"
    },
    {
      title: "IT Operations Toolkit",
      description: "Service desk, asset tracking, and operational foundation. Get structured support workflows, inventory management, and handoff-ready documentation.",
      slug: "it-operations-toolkit",
      tag: "Operational Maturity"
    },
    {
      title: "Backup Verification & DR Readiness",
      description: "Know your backups work before you need them. Coverage assessment, restore testing, and disaster recovery playbook with step-by-step procedures.",
      slug: "backup-dr-readiness",
      tag: "Risk Mitigation"
    },
    {
      title: "Process Clarity Pack",
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
      title: "MVP / PRD Kickoff",
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
      title: "New Foundation Bundle",
      description: "Complete foundational IT setup: Cloud Identity & Security Setup, M365 Governance, and Employee Lifecycle. Save $2,000. Perfect for 10-25 employees.",
      slug: "new-foundation-bundle",
      tag: "Bundle Deal"
    },
    {
      title: "Growth Acceleration Bundle",
      description: "Assessment, Cloud Identity & Security Setup, and 3 months Strategic IT Advisory. Save $1,299. Complete modernization with ongoing guidance.",
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
      tag: "Strategic Planning"
    }
  ];

  // Filter services based on search query
  const filteredServices = services.filter((service) => {
    if (!searchQuery) return true;
    
    const query = searchQuery.toLowerCase();
    const titleMatch = service.title.toLowerCase().includes(query);
    const descriptionMatch = service.description.toLowerCase().includes(query);
    const tagMatch = service.tag?.toLowerCase().includes(query);
    
    return titleMatch || descriptionMatch || tagMatch;
  });

  return (
    <>
      <Section className="pt-20 md:pt-24">
        <h1 className="font-display text-4xl font-bold tracking-tight text-polus-paper mb-6">Operations and IT services built for small businesses</h1>
        <p className="text-lg text-[rgba(254,255,255,0.78)] leading-relaxed max-w-3xl mb-10">
          Pick a service to learn what you get, typical timelines, and starting-at pricing. Need something not listed? <a href="/contact" className="text-polus-gold hover:text-polus-mint transition underline">Just ask</a>—we offer additional services beyond what's shown here.
        </p>
        
        {/* Search Input */}
        <div className="max-w-2xl mx-auto mb-10">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
              <svg 
                className="w-5 h-5 text-[rgba(254,255,255,0.48)]" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search services... (e.g., 'backup', 'M365', 'training')"
              className="w-full pl-12 pr-4 py-4 bg-polus-surface1 border border-[rgba(177,227,199,0.16)] rounded-lg text-polus-paper placeholder:text-[rgba(254,255,255,0.48)] focus:outline-none focus:border-polus-gold focus:ring-4 focus:ring-[rgba(194,163,25,0.20)] transition"
              aria-label="Search services"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute inset-y-0 right-0 flex items-center pr-4 text-[rgba(254,255,255,0.62)] hover:text-polus-gold transition"
                aria-label="Clear search"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
          {searchQuery && (
            <p className="mt-3 text-sm text-[rgba(254,255,255,0.62)] text-center">
              {filteredServices.length === 0 
                ? `No services found for "${searchQuery}"`
                : `Found ${filteredServices.length} service${filteredServices.length === 1 ? '' : 's'}`
              }
            </p>
          )}
        </div>

        {filteredServices.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <ServiceCard key={service.slug} {...service} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-[rgba(254,255,255,0.78)] mb-4">
              No services match your search.
            </p>
            <p className="text-sm text-[rgba(254,255,255,0.62)] mb-6">
              Try different keywords or browse all services below.
            </p>
            <button
              onClick={() => setSearchQuery("")}
              className="inline-flex items-center justify-center rounded-lg px-6 py-3 text-base font-semibold bg-polus-gold text-polus-forest hover:brightness-110 transition focus:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(17,98,56,0.40)]"
            >
              Clear Search
            </button>
          </div>
        )}
      </Section>

      <Section className="bg-polus-surface1">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-polus-gold">
            Need something else?
          </h2>
          <p className="text-lg text-[rgba(254,255,255,0.78)] leading-relaxed mb-8">
            We offer additional services including process mapping, workflow automation, web development, and product kickoff planning. If you don't see what you need here, reach out—we can likely help or refer you to a trusted partner.
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

      {FEATURE_FLAGS.DELIVERABLES_GALLERY_ENABLED && (
        <Section title="Sample Deliverables" eyebrow="What you receive">
          <p className="text-lg text-[rgba(254,255,255,0.78)] leading-relaxed max-w-3xl mb-10">
            Every engagement includes clear, actionable deliverables. Here are examples of what you'll receive (sanitized for confidentiality).
          </p>
          {/* <DeliverableGallery /> */}
        </Section>
      )}

      <Section className="bg-gradient-to-b from-polus-surface1 to-polus-forest text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            Not sure where to start?
          </h2>
          <p className="text-lg text-[rgba(254,255,255,0.78)] mb-8">
            Book a free discovery call and we'll recommend the best first step.
          </p>
          <a
            href="/book"
            className="inline-flex items-center justify-center rounded-lg px-6 py-3 text-base font-semibold bg-polus-gold text-polus-forest hover:brightness-110 transition focus:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(17,98,56,0.40)]"
          >
            Book a Free Discovery Call
          </a>
        </div>
      </Section>
    </>
  );
}
