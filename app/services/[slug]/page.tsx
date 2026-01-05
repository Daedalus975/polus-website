import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type ServiceData = {
  slug: string;
  title: string;
  description: string;
  overview: string;
  startingPrice: string;
  timeline: string;
  deliverables: string[];
  idealFor: string[];
};

const services: ServiceData[] = [
  {
    slug: "systems-assessment",
    title: "Business + IT Systems Assessment",
    description: "A comprehensive 90-minute deep dive with a documented priority roadmap",
    overview: "Go beyond a quick conversation. This paid assessment includes hands-on review of your systems, documented findings, prioritized recommendations, and a clear roadmap with effort estimates and pricing. Perfect for teams ready to move from 'what's wrong?' to 'what do we fix first?'",
    startingPrice: "$249",
    timeline: "90-minute session + detailed written report within 24 hours",
    deliverables: [
      "90-minute working session reviewing systems, workflows, and pain points",
      "Documented findings report with specific issues and root causes",
      "Priority roadmap with quick wins vs. long-term improvements",
      "Effort estimates and recommended packages with transparent pricing",
      "Written Next Steps recap delivered within 24 hours"
    ],
    idealFor: [
      "Teams who've had the free discovery call and want deeper analysis",
      "Business owners ready to invest in planning before execution",
      "Companies needing documentation for leadership buy-in or budgeting"
    ]
  },
  {
    slug: "process-mapping-sops",
    title: "Process Mapping + SOP Starter Pack",
    description: "Map workflows, create SOPs, and reduce day-to-day chaos",
    overview: "Document your core workflows and build Standard Operating Procedures that your team will actually use. Includes process mapping, SOP templates, and adoption support.",
    startingPrice: "$1,250",
    timeline: "2-4 weeks depending on scope",
    deliverables: [
      "Visual process maps for 2-4 core workflows",
      "Written SOPs in accessible format (Google Docs or SharePoint)",
      "SOP template library for future documentation",
      "Team training session on using and maintaining SOPs"
    ],
    idealFor: [
      "Teams with tribal knowledge that needs to be documented",
      "Businesses preparing for growth or delegation",
      "Companies with high staff turnover or inconsistent execution"
    ]
  },
  {
    slug: "onboarding-offboarding",
    title: "Onboarding + Offboarding Automation",
    description: "Streamline employee lifecycle with consistent, secure workflows",
    overview: "Automate new hire provisioning and departure procedures to ensure security, consistency, and a better employee experience. Reduce manual work and ensure nothing falls through the cracks.",
    startingPrice: "$1,750",
    timeline: "3-5 weeks",
    deliverables: [
      "Automated onboarding workflow (account creation, access provisioning, welcome emails)",
      "Automated offboarding workflow (access revocation, license recovery, exit checklists)",
      "Integration with Microsoft 365 and HR systems",
      "Documentation and admin training"
    ],
    idealFor: [
      "Growing teams with frequent hiring",
      "Companies concerned about security and access control",
      "HR teams looking to reduce manual provisioning work"
    ]
  },
  {
    slug: "m365-governance",
    title: "Microsoft 365 Governance Setup",
    description: "Clean structure, clear policies, and secure collaboration",
    overview: "Establish naming conventions, retention policies, external sharing controls, and governance frameworks for Teams, SharePoint, and OneDrive. Keep your Microsoft 365 environment organized and secure.",
    startingPrice: "$2,500",
    timeline: "4-6 weeks",
    deliverables: [
      "Governance policy documentation",
      "Naming conventions and organizational structure",
      "Retention and deletion policies configured",
      "External sharing and guest access controls",
      "Admin and end-user training"
    ],
    idealFor: [
      "Organizations with uncontrolled Teams/SharePoint sprawl",
      "Companies handling sensitive data or compliance requirements",
      "Businesses preparing for audits or certifications"
    ]
  },
  {
    slug: "endpoint-standardization",
    title: "Endpoint Standardization + Management",
    description: "Consistent device setup, security baselines, and centralized control",
    overview: "Standardize laptops, desktops, and mobile devices with security policies, software deployment, and centralized management through Microsoft Intune or similar MDM tools.",
    startingPrice: "$2,000",
    timeline: "3-5 weeks",
    deliverables: [
      "Device enrollment and MDM setup (Intune or equivalent)",
      "Security baseline policies (encryption, passwords, updates)",
      "Application deployment automation",
      "Device compliance monitoring and reporting"
    ],
    idealFor: [
      "Remote or hybrid teams needing centralized device management",
      "Companies replacing manual device setup processes",
      "Organizations with security or compliance requirements"
    ]
  },
  {
    slug: "backup-disaster-recovery",
    title: "Backup + Disaster Recovery Planning",
    description: "Verify backups, reduce downtime risk, and document recovery steps",
    overview: "Assess your current backup status, implement or improve backup solutions, document recovery procedures, and test restoration processes to ensure business continuity.",
    startingPrice: "$399",
    timeline: "1-2 weeks for assessment; 3-4 weeks for full implementation",
    deliverables: [
      "Backup coverage assessment and gap analysis",
      "Backup solution recommendation or configuration",
      "Disaster recovery runbook with step-by-step procedures",
      "Test restoration report"
    ],
    idealFor: [
      "Businesses without documented recovery procedures",
      "Teams unsure if their backups actually work",
      "Companies facing compliance or insurance requirements"
    ]
  },
  {
    slug: "managed-it",
    title: "Managed IT (Essentials & Plus)",
    description: "Ongoing support, monitoring, and maintenance for your systems",
    overview: "Monthly IT support packages with helpdesk access, proactive monitoring, patch management, and regular check-ins. Available in Essentials and Plus tiers based on your needs.",
    startingPrice: "$750/month",
    timeline: "Ongoing monthly service",
    deliverables: [
      "Helpdesk support (email and phone)",
      "Proactive system monitoring and alerts",
      "Monthly patch management and updates",
      "Quarterly business review meetings",
      "Plus tier includes priority response and after-hours support"
    ],
    idealFor: [
      "Small businesses without in-house IT staff",
      "Growing teams needing predictable IT costs",
      "Companies wanting proactive maintenance vs reactive firefighting"
    ]
  },
  {
    slug: "service-desk-setup",
    title: "Service Desk + Ticketing Setup",
    description: "Implement structured IT support with ticket tracking and workflows",
    overview: "Set up a ticketing system (platform-agnostic: Zendesk, Freshdesk, osTicket, or similar) with workflows, categories, SLAs, and user training. Bring structure to IT support requests.",
    startingPrice: "$1,500",
    timeline: "2-3 weeks",
    deliverables: [
      "Ticketing platform setup and configuration",
      "Ticket categories, priorities, and workflows",
      "SLA definitions and escalation procedures",
      "End-user and admin training",
      "Knowledge base starter templates"
    ],
    idealFor: [
      "IT teams drowning in email or Slack requests",
      "Companies needing audit trails for support",
      "Growing teams establishing formal support processes"
    ]
  },
  {
    slug: "web-development",
    title: "Web Development + Digital Presence",
    description: "Professional websites and digital tools for small businesses",
    overview: "Custom website development, landing pages, or web applications built with modern frameworks. Fast, secure, SEO-friendly, and designed for conversion.",
    startingPrice: "$2,500",
    timeline: "4-8 weeks depending on scope",
    deliverables: [
      "Custom website or web application",
      "Responsive design (mobile, tablet, desktop)",
      "SEO optimization and performance tuning",
      "Content management system or admin panel",
      "Hosting setup and deployment support"
    ],
    idealFor: [
      "Businesses needing a professional web presence",
      "Companies replacing outdated or DIY websites",
      "Teams wanting custom tools or client portals"
    ]
  },
  {
    slug: "mvp-prd",
    title: "MVP Scoping + PRD Development",
    description: "Turn your product idea into a clear, actionable roadmap",
    overview: "Work with you to scope your Minimum Viable Product, define features, prioritize development phases, and create a detailed Product Requirements Document (PRD) ready for development.",
    startingPrice: "$1,200",
    timeline: "2-3 weeks",
    deliverables: [
      "MVP feature list and prioritization",
      "User stories and acceptance criteria",
      "Technical architecture recommendations",
      "Detailed Product Requirements Document (PRD)",
      "Cost and timeline estimates for development"
    ],
    idealFor: [
      "Founders with product ideas but unclear next steps",
      "Startups preparing to hire developers or agencies",
      "Teams needing structured planning before building"
    ]
  },
  {
    slug: "automation-no-code",
    title: "Workflow Automation (Low-Code/No-Code)",
    description: "Automate repetitive tasks with Power Automate, Zapier, or similar tools",
    overview: "Identify repetitive manual tasks and build automations using low-code/no-code platforms like Power Automate, Zapier, or Make. Save time and reduce human error.",
    startingPrice: "$750",
    timeline: "1-3 weeks depending on complexity",
    deliverables: [
      "Workflow analysis and automation opportunities",
      "2-5 automated workflows built and tested",
      "Documentation and error handling setup",
      "Team training on managing automations"
    ],
    idealFor: [
      "Teams spending hours on manual data entry or transfers",
      "Businesses connecting multiple apps without custom code",
      "Operations teams looking for quick efficiency wins"
    ]
  }
];

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = services.find(s => s.slug === params.slug);
  if (!service) return { title: "Service Not Found" };
  
  return {
    title: `${service.title} — Polus Services`,
    description: service.description
  };
}

export default function ServiceDetail({ params }: { params: { slug: string } }) {
  const service = services.find(s => s.slug === params.slug);
  
  if (!service) {
    notFound();
  }

  return (
    <>
      <Section title={service.title} className="pt-20 md:pt-24">
        <p className="text-xl text-[rgba(254,255,255,0.88)] max-w-3xl">
          {service.description}
        </p>
      </Section>

      <Section className="bg-polus-surface1">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p className="text-[rgba(254,255,255,0.78)] leading-relaxed mb-8">
              {service.overview}
            </p>

            <h3 className="text-xl font-semibold mb-4">What you'll get</h3>
            <ul className="space-y-3 mb-8">
              {service.deliverables.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-polus-mint flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[rgba(254,255,255,0.78)]">{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold mb-4">Ideal for</h3>
            <ul className="space-y-3">
              {service.idealFor.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-polus-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  <span className="text-[rgba(254,255,255,0.78)]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Card className="sticky top-24">
              <div className="space-y-6">
                <div>
                  <div className="text-sm text-[rgba(254,255,255,0.62)] mb-1">Starting at</div>
                  <div className="text-4xl font-bold text-polus-mint">{service.startingPrice}</div>
                </div>

                <div>
                  <div className="text-sm text-[rgba(254,255,255,0.62)] mb-1">Timeline</div>
                  <div className="text-sm text-[rgba(254,255,255,0.88)]">{service.timeline}</div>
                </div>

                <div className="space-y-3 pt-4">
                  <Button href="/book" variant="primary" className="w-full">
                    Book Free Discovery Call
                  </Button>
                  <Button href="/contact" variant="secondary" className="w-full">
                    Request a Quote
                  </Button>
                </div>

                <div className="pt-4 border-t border-[rgba(177,227,199,0.12)] text-sm text-[rgba(254,255,255,0.62)]">
                  Free • 30 minutes • You'll leave with next steps
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      <Section className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Ready to get started?</h2>
        <p className="text-[rgba(254,255,255,0.78)] mb-6 max-w-2xl mx-auto">
          Book a free discovery call to discuss your needs, or request a detailed quote.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button href="/book" variant="primary">Book Free Discovery Call</Button>
          <Button href="/contact" variant="secondary">Request a Quote</Button>
        </div>
      </Section>
    </>
  );
}
