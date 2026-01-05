import { Section } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
// import { DeliverableGallery } from "@/components/DeliverableGallery";
import { FEATURE_FLAGS } from "@/src/config/featureFlags";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — Oklahoma IT + Operations Consulting | Polus",
  description: "Fixed-scope packages and flexible support for Microsoft 365, process mapping, SOPs, backups, and more.",
  openGraph: {
    title: "Services — Oklahoma IT + Operations Consulting | Polus",
    description: "Fixed-scope packages and flexible support for Microsoft 365, process mapping, SOPs, backups, and more.",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Services — Oklahoma IT + Operations Consulting | Polus",
    description: "Fixed-scope packages and flexible support for Microsoft 365, process mapping, SOPs, backups, and more."
  }
};

export default function ServicesPage() {
  const services = [
    {
      title: "Business + IT Systems Assessment",
      description: "90-minute deep dive into your operations and IT. Walk away with prioritized recommendations and next steps.",
      slug: "systems-assessment"
    },
    {
      title: "Process Mapping + SOPs",
      description: "Document workflows, create standard operating procedures, and reduce day-to-day operational chaos.",
      slug: "process-mapping-sops"
    },
    {
      title: "Onboarding / Offboarding Systems",
      description: "Build repeatable checklists and access maps so new hires and departures are smooth and secure.",
      slug: "onboarding-offboarding"
    },
    {
      title: "Microsoft 365 Governance",
      description: "Clean up Teams/SharePoint structure, set permissions baselines, and establish sustainable governance.",
      slug: "m365-governance"
    },
    {
      title: "Endpoint Standardization",
      description: "Policy baselines, compliance approach, and standard app sets for consistent device management.",
      slug: "endpoint-standardization"
    },
    {
      title: "Backup + Disaster Recovery",
      description: "Verify backups, document recovery procedures, and reduce downtime risk with tested runbooks.",
      slug: "backup-disaster-recovery"
    },
    {
      title: "Managed IT Services",
      description: "Ongoing support packages (Essentials / Plus) for help desk, monitoring, and proactive maintenance.",
      slug: "managed-it"
    },
    {
      title: "Service Desk Setup",
      description: "Platform-agnostic service desk implementation: intake, categories, SLAs, knowledge base, and reporting.",
      slug: "service-desk-setup"
    },
    {
      title: "Web Development",
      description: "Lead-generation websites built for small businesses—clear, fast, and optimized for conversions.",
      slug: "web-development"
    },
    {
      title: "MVP / PRD Kickoff",
      description: "Planning and first-iteration execution for startups building their first product.",
      slug: "mvp-prd"
    },
    {
      title: "Automation / No-Code",
      description: "Workflow automation using Power Automate, Zapier, or similar—forms to tasks to reporting.",
      slug: "automation-no-code"
    }
  ];

  return (
    <>
      <Section title="Services built for small business: operations + IT" className="pt-20 md:pt-24">
        <p className="text-lg text-[rgba(254,255,255,0.78)] leading-relaxed max-w-3xl mb-10">
          Pick a service to learn what you get, typical timelines, and starting-at pricing. Need something not listed? <a href="/contact" className="text-polus-gold hover:text-polus-mint transition underline">Just ask</a>—we offer additional services beyond what's shown here.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.slug} {...service} />
          ))}
        </div>
      </Section>

      {FEATURE_FLAGS.DELIVERABLES_GALLERY_ENABLED && (
        <Section title="Sample Deliverables" eyebrow="What you receive" className="bg-polus-surface1">
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
