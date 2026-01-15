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
  pricingTiers?: Array<{
    name: string;
    price: string;
    description: string;
  }>;
  isBundle?: boolean;
};

const services: ServiceData[] = [
  {
    slug: "systems-assessment",
    title: "Systems Assessment",
    description: "Get clarity on what to fix first—fast",
    overview: "Go beyond a quick conversation. This paid assessment includes hands-on review of your systems, documented findings, prioritized recommendations, and a clear roadmap with effort estimates and pricing. Perfect for teams ready to move from 'what's wrong?' to 'what do we fix first?'",
    startingPrice: "$299",
    timeline: "1 week (scheduling + report delivery within 24 hours)",
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
    ],
    isBundle: false
  },
  {
    slug: "strategic-advisory",
    title: "IT Advisory",
    description: "Monthly strategic guidance without support tickets",
    overview: "Get consistent IT leadership without hiring full-time. Monthly subscription includes strategic planning, vendor management, technology roadmap guidance, and executive decision support. This is advisory and planning work—not reactive support tickets or helpdesk services.",
    startingPrice: "$500/month",
    timeline: "Ongoing monthly",
    deliverables: [
      "Monthly strategic planning sessions (4 hours Essentials, 10 hours Plus)",
      "Technology roadmap development and updates",
      "Vendor evaluation and contract review",
      "Budget planning and prioritization guidance",
      "Ad-hoc strategic questions via email between meetings"
    ],
    idealFor: [
      "Growing businesses needing IT strategy without full-time staff",
      "Leadership teams making technology investment decisions",
      "Companies managing multiple vendors and need coordination"
    ],
    pricingTiers: [
      {
        name: "Essentials",
        price: "$500/month",
        description: "4 hours monthly strategic consulting"
      },
      {
        name: "Plus",
        price: "$1,000/month",
        description: "10 hours monthly strategic consulting"
      }
    ],
    isBundle: false
  },
  {
    slug: "identity-device-foundation",
    title: "Identity & Security",
    description: "Move to modern cloud identity and centralized device management",
    overview: "Move to modern cloud identity and centralized device management. Get your team set up with Microsoft Entra ID (Azure AD), Intune device management, multi-factor authentication, single sign-on for up to 3 apps, BitLocker encryption, and automated Windows updates. This package combines identity migration with endpoint management for a complete modern infrastructure foundation.",
    startingPrice: "$6,500",
    timeline: "4-6 weeks (depends on device count and complexity)",
    deliverables: [
      "Azure AD Connect setup (hybrid identity configuration)",
      "Intune enrollment and baseline device policies",
      "MFA rollout (Microsoft Authenticator or similar)",
      "Conditional access policies (location, device compliance, MFA)",
      "SSO setup for up to 3 core applications",
      "BitLocker encryption enforcement",
      "Windows Update rings configuration",
      "Admin training and handoff documentation"
    ],
    idealFor: [
      "Businesses moving from on-prem to cloud-first infrastructure",
      "Remote/hybrid teams needing centralized device control",
      "Companies tired of local admin chaos and password resets"
    ],
    pricingTiers: [
      {
        name: "Tier 1",
        price: "$6,500",
        description: "10-15 users/devices"
      },
      {
        name: "Tier 2",
        price: "$8,500",
        description: "16-35 users/devices"
      },
      {
        name: "Tier 3",
        price: "$11,000",
        description: "36-50 users/devices"
      }
    ],
    isBundle: true
  },
  {
    slug: "acquisition-integration",
    title: "Acquisition Integration (Phased)",
    description: "Merge IT systems during a business acquisition—without the chaos",
    overview: "Merge IT systems during a business acquisition with a proven phased approach. Phase A ($3,500): Pre-acquisition assessment and integration planning. Phase B (starting at $12,000 for 10-25 users): Identity migration, system consolidation, and user onboarding. Phase C ($2,500): Stabilization and handoff. Pricing scales based on user count, tenant complexity, and timeline. Proven experience with 400+ user integrations.",
    startingPrice: "$18,000",
    timeline: "Phase A: 2 weeks | Phase B: 6-12 weeks | Phase C: 2-4 weeks",
    deliverables: [
      "Phase A: Pre-acquisition IT assessment and integration roadmap",
      "Phase A: Risk analysis and go/no-go recommendation",
      "Phase B: Identity migration (AD, Azure AD, email accounts)",
      "Phase B: M365 tenant consolidation or co-management",
      "Phase B: User communication and training materials",
      "Phase C: Post-migration validation and issue resolution",
      "Phase C: Documentation and 30-day stabilization support"
    ],
    idealFor: [
      "Companies acquiring another business (10-50 employee range)",
      "Leadership needing expert guidance through IT merger",
      "Buyers wanting to avoid 'integration hell'"
    ],
    pricingTiers: [
      {
        name: "Phase A",
        price: "$3,500",
        description: "Integration assessment & planning (2 weeks)"
      },
      {
        name: "Phase B (10-25 users)",
        price: "$12,000",
        description: "Identity migration & system consolidation (6-12 weeks)"
      },
      {
        name: "Phase B (26-50 users)",
        price: "$18,000",
        description: "Identity migration & system consolidation (6-12 weeks)"
      },
      {
        name: "Phase C",
        price: "$2,500",
        description: "Stabilization & handoff (2-4 weeks)"
      }
    ],
    isBundle: true
  },
  {
    slug: "m365-governance",
    title: "M365 Governance",
    description: "Tame Teams/SharePoint sprawl and establish sustainable governance",
    overview: "Tame Teams/SharePoint sprawl and establish sustainable governance. Current state audit, governance policy documentation, permissions cleanup, external sharing controls, retention policies, and template library for new sites. Tiered pricing: $3,500 (1-25 sites/Teams), $5,500 (26-75 sites), $8,500 (76-150 sites).",
    startingPrice: "$3,500",
    timeline: "4-6 weeks",
    deliverables: [
      "Current state audit (sites, Teams, permissions sprawl)",
      "Governance policy documentation (naming, lifecycle, ownership)",
      "Permissions cleanup and baseline configuration",
      "External sharing and guest access controls",
      "Retention and deletion policies setup",
      "Template library for new Teams/SharePoint sites",
      "Admin and end-user training session"
    ],
    idealFor: [
      "Organizations drowning in duplicate Teams and shadow sites",
      "Companies with compliance requirements (client data handling)",
      "Businesses preparing for audits or rapid growth"
    ],
    pricingTiers: [
      {
        name: "Tier 1",
        price: "$3,500",
        description: "1-25 sites/Teams"
      },
      {
        name: "Tier 2",
        price: "$5,500",
        description: "26-75 sites/Teams"
      },
      {
        name: "Tier 3",
        price: "$8,500",
        description: "76-150 sites/Teams"
      }
    ],
    isBundle: true
  },
  {
    slug: "process-mapping-sops",
    title: "Process Mapping and SOP Starter Pack",
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
    slug: "employee-lifecycle",
    title: "Employee Lifecycle",
    description: "Automate onboarding and offboarding for security and consistency",
    overview: "Automate onboarding and offboarding for security and consistency. Workflow automation for account creation, group memberships, welcome emails, access revocation, license recovery, and exit checklists. Integration with Microsoft 365 and supported HR systems. Tiered pricing: $2,500 (10-25 employees), $3,500 (26-50 employees).",
    startingPrice: "$2,500",
    timeline: "3-4 weeks",
    deliverables: [
      "Onboarding workflow automation (accounts, groups, welcome emails)",
      "Offboarding workflow automation (access revocation, licenses, checklists)",
      "Integration with Microsoft 365 and HR systems (if supported)",
      "Security group and role templates",
      "Manager approval workflows",
      "Documentation and admin training"
    ],
    idealFor: [
      "Growing teams with frequent hiring",
      "Companies with security or compliance concerns",
      "HR teams tired of manual provisioning work"
    ],
    pricingTiers: [
      {
        name: "Tier 1",
        price: "$2,500",
        description: "10-25 employees"
      },
      {
        name: "Tier 2",
        price: "$3,500",
        description: "26-50 employees"
      }
    ],
    isBundle: true
  },
  {
    slug: "it-operations-toolkit",
    title: "Operations Toolkit",
    description: "Service desk, asset tracking, and operational foundation",
    overview: "Service desk, asset tracking, and operational foundation. Essentials tier ($4,500): Service desk setup, asset management platform, initial inventory, admin training, and KB templates. Plus tier ($7,500): Everything in Essentials plus 2-3 PowerShell automation scripts, IT operations runbook, MSP transition package, and 30-day post-implementation support.",
    startingPrice: "$4,500",
    timeline: "3-5 weeks (Essentials), 5-7 weeks (Plus)",
    deliverables: [
      "Service desk platform selection and setup (Jira, Zendesk, Freshdesk, osTicket)",
      "Ticket categories, priorities, workflows, and SLA definitions",
      "Asset management platform setup (Jira Asset Manager, Snipe-IT, etc.)",
      "Initial asset inventory import (up to 50 assets)",
      "Admin training and knowledge base starter templates",
      "Plus tier: 2-3 PowerShell automation scripts",
      "Plus tier: IT operations runbook and SOPs",
      "Plus tier: MSP partner transition package and 30-day support"
    ],
    idealFor: [
      "IT teams drowning in email/Slack support requests",
      "Companies needing audit trails and accountability",
      "Businesses formalizing operations before scaling"
    ],
    pricingTiers: [
      {
        name: "Essentials",
        price: "$4,500",
        description: "Service desk and asset management"
      },
      {
        name: "Plus",
        price: "$7,500",
        description: "Essentials, automation, and MSP transition"
      }
    ],
    isBundle: true
  },
  {
    slug: "backup-dr-readiness",
    title: "Backup & DR",
    description: "Know your backups work before you need them",
    overview: "Know your backups work before you need them. Verification Package ($1,500): Coverage assessment, backup config review, gap analysis, and disaster recovery checklist. Full DR Package ($3,500): Everything in Verification plus live restore test (1-2 critical systems), detailed DR playbook with step-by-step procedures, RTO/RPO analysis, recovery contact list, and quarterly backup verification checklist.",
    startingPrice: "$1,500",
    timeline: "1-2 weeks (Verification), 2-3 weeks (Full DR)",
    deliverables: [
      "Backup coverage assessment (systems, data, apps)",
      "Backup configuration review (retention, frequency, offsite)",
      "Gap analysis and risk documentation",
      "Disaster recovery checklist (high-level procedures)",
      "Full DR: Live restore test (1-2 critical systems)",
      "Full DR: Detailed recovery playbook with step-by-step procedures",
      "Full DR: RTO/RPO analysis and documentation",
      "Full DR: Recovery contact list and quarterly verification checklist"
    ],
    idealFor: [
      "Businesses unsure if their backups actually work",
      "Companies facing compliance or insurance requirements",
      "Organizations that have never tested a restore"
    ],
    pricingTiers: [
      {
        name: "Verification Package",
        price: "$1,500",
        description: "Coverage assessment and gap analysis"
      },
      {
        name: "Full DR Package",
        price: "$3,500",
        description: "Verification, restore testing, and playbook"
      }
    ],
    isBundle: false
  },
  {
    slug: "process-clarity-pack",
    title: "Process Documentation",
    description: "Document critical workflows so your team stops reinventing the wheel",
    overview: "Document critical workflows so your team stops reinventing the wheel. Each process includes visual process mapping (swimlane or flowchart), written SOP document, decision trees for common variations, SOP template for future use, and team training session. Available per-process or as a cost-saving bundle.",
    startingPrice: "$1,500",
    timeline: "1-2 weeks per process",
    deliverables: [
      "Visual process map (swimlane or flowchart format)",
      "Written standard operating procedure (SOP) document",
      "Decision trees for common variations",
      "SOP template for future documentation",
      "Team training session on using and maintaining SOPs"
    ],
    idealFor: [
      "Teams with tribal knowledge that needs documentation",
      "Businesses preparing for growth or key employee departures",
      "Companies with high turnover or inconsistent execution"
    ],
    pricingTiers: [
      {
        name: "Single Process",
        price: "$1,500",
        description: "1 critical process documented"
      },
      {
        name: "3-Process Bundle",
        price: "$3,500",
        description: "Save $1,000 on 3 processes"
      },
      {
        name: "Additional Processes",
        price: "$1,000 each",
        description: "After purchasing bundle"
      }
    ],
    isBundle: false
  },
  {
    slug: "web-development",
    title: "Web Development",
    description: "Professional websites and digital tools for small businesses",
    overview: "Lead-generation websites built for small businesses. Custom website development, landing pages, or web applications built with modern frameworks. Fast, secure, SEO-friendly, and designed for conversion. Tiered packages available: Starter ($3,500), Standard ($5,500), Growth ($8,500).",
    startingPrice: "$3,500",
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
    ],
    pricingTiers: [
      {
        name: "Starter",
        price: "$3,500",
        description: "5-page website, basic SEO, contact forms"
      },
      {
        name: "Standard",
        price: "$5,500",
        description: "10-page website, advanced SEO, analytics integration"
      },
      {
        name: "Growth",
        price: "$8,500",
        description: "Custom features, integrations, CMS training"
      }
    ],
    isBundle: false
  },
  {
    slug: "mvp-prd",
    title: "MVP Kickoff",
    description: "Turn your product idea into a clear, actionable roadmap",
    overview: "Work with you to scope your Minimum Viable Product, define features, prioritize development phases, and create a detailed Product Requirements Document (PRD) ready for development. 1-day workshop format with comprehensive deliverables.",
    startingPrice: "$2,000",
    timeline: "1-day workshop + 1 week documentation",
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
    ],
    isBundle: false
  },
  {
    slug: "new-foundation-bundle",
    title: "New Foundation Bundle",
    description: "Complete foundational IT setup for growing businesses",
    overview: "Get your entire IT foundation built right from the start. This bundle combines Identity & Security, M365 Governance, and Employee Lifecycle to give you a complete, modern IT infrastructure. Perfect for companies starting fresh or completely rebuilding. Save $2,000 compared to purchasing separately. Bundle includes everything from cloud identity migration to governance policies to automated onboarding/offboarding systems.",
    startingPrice: "$13,500",
    timeline: "8-12 weeks for complete implementation",
    deliverables: [
      "Complete Azure AD/Entra ID setup with MFA and Conditional Access",
      "Device enrollment in Microsoft Intune with security policies",
      "M365 Teams/SharePoint cleanup and governance framework",
      "Automated employee onboarding and offboarding workflows",
      "Documentation package: runbooks, policies, and admin guides",
      "Training sessions for IT admins and end users"
    ],
    idealFor: [
      "Companies with 10-25 employees starting fresh",
      "Businesses moving from on-premises to cloud",
      "Organizations rebuilding IT infrastructure after acquisition"
    ],
    pricingTiers: [
      {
        name: "Bundle Package",
        price: "$13,500",
        description: "Complete foundation for 10-25 employees (save $2,000 vs. separate)"
      }
    ],
    isBundle: true
  },
  {
    slug: "growth-acceleration-bundle",
    title: "Growth Acceleration Bundle",
    description: "Assessment, implementation, and ongoing guidance",
    overview: "The complete path from assessment to modernization to ongoing strategic support. Starts with a Systems Assessment to identify priorities, implements your Identity & Security foundation, then includes 3 months of IT Advisory for ongoing guidance. Save $1,299 compared to purchasing separately. This package ensures you have expert guidance through the entire modernization journey.",
    startingPrice: "$8,500",
    timeline: "Assessment: 1 week | Implementation: 6-8 weeks | Advisory: 3 months",
    deliverables: [
      "Systems Assessment with prioritized roadmap",
      "Identity & Security implementation (Tier 1)",
      "3 months Strategic IT Advisory (Essentials tier: 4 hours/month)",
      "Monthly strategic planning sessions",
      "Technology roadmap development",
      "Vendor evaluation and contract review support"
    ],
    idealFor: [
      "Companies ready to modernize but unsure where to start",
      "Businesses wanting expert guidance through transformation",
      "Teams needing ongoing strategic support after implementation"
    ],
    pricingTiers: [
      {
        name: "Bundle Package",
        price: "$8,500",
        description: "Assessment, implementation, and 3 months advisory (save $1,299)"
      }
    ],
    isBundle: true
  },
  {
    slug: "m365-training",
    title: "Microsoft 365 End-User Training",
    description: "Help your team actually use the tools you've invested in",
    overview: "Drive adoption of Microsoft 365 with targeted training sessions. Cover Teams, SharePoint, OneDrive, Outlook best practices, and collaborative workflows. Training can be delivered in-person or remote, with custom focus areas based on your needs. Includes training materials, quick reference guides, and recorded sessions for future onboarding.",
    startingPrice: "$1,200",
    timeline: "1-2 weeks from booking to delivery",
    deliverables: [
      "2-hour training session (in-person or remote)",
      "Custom training materials and quick reference guides",
      "Recorded session for future reference",
      "Q&A session and follow-up support (2 weeks)",
      "Adoption tips and best practices documentation"
    ],
    idealFor: [
      "Teams underutilizing M365 features",
      "Companies after M365 governance or migration projects",
      "Organizations with low collaboration tool adoption"
    ],
    pricingTiers: [
      {
        name: "Single Session",
        price: "$1,200",
        description: "2-hour training for up to 25 people"
      },
      {
        name: "3-Session Package",
        price: "$2,500",
        description: "3 training sessions (different topics or audiences)"
      }
    ],
    isBundle: false
  },
  {
    slug: "it-documentation",
    title: "IT Documentation Package",
    description: "Document your entire IT environment so nothing lives in one person's head",
    overview: "Comprehensive IT documentation including network diagrams, system inventory, configuration standards, and operational runbooks. Perfect for companies with undocumented infrastructure or preparing for IT staff transitions. Deliverables are organized in SharePoint or your preferred platform with version control and update procedures.",
    startingPrice: "$2,000",
    timeline: "3-4 weeks",
    deliverables: [
      "Network topology diagrams (physical and logical)",
      "Complete system inventory (servers, devices, licenses)",
      "Application and service catalog with owners",
      "Configuration standards and baselines",
      "Operational runbooks for common tasks",
      "Disaster recovery documentation",
      "SharePoint or wiki site setup for ongoing maintenance"
    ],
    idealFor: [
      "Companies with no IT documentation",
      "Organizations preparing for IT staff transitions",
      "Businesses facing audit or compliance requirements"
    ],
    pricingTiers: [
      {
        name: "Standard Package",
        price: "$2,000",
        description: "Up to 25 devices and 5 core systems"
      },
      {
        name: "Comprehensive Package",
        price: "$4,000",
        description: "26-50 devices and complex environments"
      }
    ],
    isBundle: false
  },
  {
    slug: "dr-testing-service",
    title: "Disaster Recovery Testing Service",
    description: "Quarterly restore tests to ensure your backups actually work",
    overview: "Don't wait for a disaster to find out your backups don't work. Recurring quarterly service that tests restore procedures, validates backup coverage, updates recovery documentation, and provides executive-ready reports. This is a subscription service that provides ongoing confidence in your disaster recovery capabilities.",
    startingPrice: "$1,500/quarter",
    timeline: "Ongoing quarterly service",
    deliverables: [
      "Quarterly restore testing (1-2 critical systems per quarter)",
      "Backup coverage validation and gap analysis",
      "Updated disaster recovery playbook",
      "RTO/RPO validation and documentation",
      "Executive summary report with pass/fail status",
      "Remediation recommendations for any issues found"
    ],
    idealFor: [
      "Organizations with compliance requirements",
      "Companies managing critical business data",
      "Businesses wanting ongoing DR confidence"
    ],
    pricingTiers: [
      {
        name: "Quarterly Service",
        price: "$1,500/quarter",
        description: "Recurring DR testing (annual commitment)"
      }
    ],
    isBundle: false
  },
  {
    slug: "cloud-cost-optimization",
    title: "Cloud Cost Optimization Review",
    description: "Find waste in your Azure and Microsoft 365 spending",
    overview: "Comprehensive audit of your Azure and Microsoft 365 licensing and usage. Identify unused licenses, right-size resources, eliminate redundant services, and implement cost controls. Most clients save 15-30% on their annual cloud spend. One-time engagement with ongoing monitoring recommendations.",
    startingPrice: "$1,200",
    timeline: "1-2 weeks",
    deliverables: [
      "License utilization audit (M365, Azure, Dynamics)",
      "Cost analysis and waste identification",
      "Right-sizing recommendations for Azure resources",
      "Unused license and redundant service report",
      "Cost-saving implementation roadmap",
      "Ongoing monitoring and alerting setup"
    ],
    idealFor: [
      "Companies with growing cloud costs",
      "Organizations with 25+ M365 licenses",
      "Businesses using Azure without cost controls"
    ],
    pricingTiers: [
      {
        name: "Standard Review",
        price: "$1,200",
        description: "M365 and basic Azure analysis"
      }
    ],
    isBundle: false
  },
  {
    slug: "compliance-documentation",
    title: "Compliance Documentation Prep",
    description: "Prepare IT documentation for HIPAA, SOC 2, or CMMC audits",
    overview: "Get your IT documentation audit-ready. We help you prepare policies, procedures, system documentation, and evidence collection for HIPAA, SOC 2, CMMC, or other compliance frameworks. This is documentation preparation only—not legal advice or certification services. Work is performed in collaboration with your compliance auditor or consultant.",
    startingPrice: "$3,500",
    timeline: "4-6 weeks depending on scope",
    deliverables: [
      "IT policy documentation aligned to framework requirements",
      "System security documentation and diagrams",
      "Access control and user management procedures",
      "Incident response and disaster recovery documentation",
      "Evidence collection and organization",
      "Gap analysis with remediation roadmap"
    ],
    idealFor: [
      "Healthcare organizations pursuing HIPAA compliance",
      "SaaS companies preparing for SOC 2",
      "Government contractors needing CMMC documentation"
    ],
    pricingTiers: [
      {
        name: "Basic Prep",
        price: "$3,500",
        description: "Core IT documentation for compliance"
      },
      {
        name: "Comprehensive Prep",
        price: "$7,500",
        description: "Full policy suite and evidence collection"
      }
    ],
    isBundle: false
  },
  {
    slug: "technology-roadmap-workshop",
    title: "Technology Roadmap Workshop",
    description: "Build a 3-5 year technology plan aligned to business goals",
    overview: "Full-day workshop with leadership to develop a strategic technology roadmap. We'll assess current state, identify business goals, evaluate technology gaps, prioritize initiatives, and create a phased implementation plan with budget estimates. Perfect for annual planning or preparing for growth/funding rounds. Delivered as a facilitated workshop with executive-ready deliverables.",
    startingPrice: "$2,000",
    timeline: "1-day workshop + 1 week documentation",
    deliverables: [
      "Current state technology assessment",
      "Business goal and technology gap analysis",
      "3-5 year technology roadmap with phases",
      "Initiative prioritization and dependencies",
      "Budget estimates and resource requirements",
      "Executive presentation deck",
      "Quarterly milestone tracking framework"
    ],
    idealFor: [
      "Growing businesses planning for scale",
      "Companies preparing for funding rounds",
      "Leadership teams making multi-year technology decisions"
    ],
    pricingTiers: [
      {
        name: "Workshop Package",
        price: "$2,000",
        description: "1-day workshop + roadmap documentation"
      }
    ],
    isBundle: false
  }
];

// Helper function to calculate discounted price
function calculateDiscount(priceString: string): { original: string; discounted: string } {
  // Extract number from price string (e.g., "$299" -> 299, "$1,500/month" -> 1500)
  const numMatch = priceString.match(/[\d,]+/);
  if (!numMatch) return { original: priceString, discounted: priceString };
  
  const priceNum = parseInt(numMatch[0].replace(/,/g, ''));
  const discountedNum = Math.round(priceNum * 0.8); // 20% off
  
  // Format back with commas if needed
  const formattedDiscounted = discountedNum.toLocaleString();
  
  // Preserve the original format (with $ and any suffix like /month, /quarter)
  const prefix = priceString.match(/^\$/) ? '$' : '';
  const suffix = priceString.match(/\/\w+$/) ? priceString.match(/\/\w+$/)?.[0] : '';
  
  return {
    original: priceString,
    discounted: `${prefix}${formattedDiscounted}${suffix || ''}`
  };
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = services.find(s => s.slug === params.slug);
  if (!service) return { title: "Service Not Found" };
  
  // Add Oklahoma keyword for better local SEO
  const metaDescription = `${service.description}. Oklahoma IT consulting for small businesses. ${service.startingPrice} starting price. 20% off for first 10 clients.`;
  
  return {
    title: `${service.title} | Oklahoma IT Consulting — Polus`,
    description: metaDescription,
    openGraph: {
      title: `${service.title} | Oklahoma IT Consulting — Polus`,
      description: metaDescription
    }
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
              {/* Limited Offer Badge */}
              <div className="mb-4 bg-polus-gold/10 border border-polus-gold/30 text-polus-gold px-3 py-2 rounded-lg text-center">
                <div className="text-xs uppercase font-semibold tracking-wide mb-0.5">Limited Time Offer</div>
                <div className="text-sm font-bold">20% Off • First 10 Businesses</div>
              </div>

              <div className="space-y-6">
                {service.pricingTiers && service.pricingTiers.length > 0 ? (
                  <>
                    <div>
                      <div className="text-sm text-[rgba(254,255,255,0.62)] mb-3">Pricing Tiers</div>
                      <div className="space-y-3">
                        {service.pricingTiers.map((tier, idx) => {
                          const pricing = calculateDiscount(tier.price);
                          return (
                            <div key={idx} className="border border-[rgba(177,227,199,0.16)] rounded-lg p-4 hover:border-polus-gold/40 transition">
                              <div className="flex items-baseline justify-between mb-1">
                                <div className="font-semibold text-polus-gold">{tier.name}</div>
                                <div className="flex flex-col items-end">
                                  <div className="text-sm text-[rgba(254,255,255,0.48)] line-through">{pricing.original}</div>
                                  <div className="text-xl font-bold text-polus-mint">{pricing.discounted}</div>
                                </div>
                              </div>
                              <div className="text-sm text-[rgba(254,255,255,0.62)]">{tier.description}</div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </>
                ) : (
                  <div>
                    <div className="text-sm text-[rgba(254,255,255,0.62)] mb-1">Starting at</div>
                    {(() => {
                      const pricing = calculateDiscount(service.startingPrice);
                      return (
                        <div className="flex flex-col">
                          <div className="text-2xl text-[rgba(254,255,255,0.48)] line-through mb-1">{pricing.original}</div>
                          <div className="text-4xl font-bold text-polus-mint">{pricing.discounted}</div>
                          <div className="text-sm text-polus-gold font-semibold mt-2">Save 20%</div>
                        </div>
                      );
                    })()}
                  </div>
                )}

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
