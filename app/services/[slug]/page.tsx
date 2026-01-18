import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { ServiceDetailClient } from "@/components/ServiceDetailClient";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { StructuredData, getFAQSchema, getServiceSchema, getBreadcrumbSchema } from "@/components/StructuredData";

type ServiceData = {
  slug: string;
  title: string;
  description: string;
  overview: string;
  startingPrice: string;
  timeline: string;
  deliverables: string[];
  idealFor: string[];
  faqs?: Array<{
    question: string;
    answer: string;
  }>;
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
    title: "IT Assessment",
    description: "Get clarity on what to fix first—fast",
    overview: "Strategic IT assessment with hands-on systems review, documented findings, prioritized recommendations, and actionable roadmap with effort estimates and pricing. This is a focused 90-minute working session plus 3-4 hours of analysis and documentation—real strategic work, not just a conversation.",
    startingPrice: "$799",
    timeline: "1-2 weeks (scheduling + report delivery within 48-72 hours)",
    deliverables: [
      "90-minute working session reviewing systems, workflows, and pain points",
      "Documented findings report with specific issues and root causes",
      "Priority roadmap with quick wins vs. long-term improvements",
      "Effort estimates for each recommendation with transparent pricing",
      "Written Next Steps recap with implementation priorities delivered within 48-72 hours"
    ],
    idealFor: [
      "Teams who've had the free discovery call and want deeper analysis",
      "Business owners ready to invest in planning before execution",
      "Companies needing documentation for leadership buy-in or budgeting"
    ],
    faqs: [
      {
        question: "How is this different from the free discovery call?",
        answer: "The free discovery call is a 30-minute conversation about your business and pain points. The Systems Review is a paid, hands-on 90-minute working session where we actually look at your systems, document specific findings, and provide a prioritized roadmap with pricing. You get a comprehensive written report within 48-72 hours."
      },
      {
        question: "What do I need to prepare before the session?",
        answer: "We'll send a prep checklist before the session, but generally: admin access to your key systems (M365, backup tools, etc.), a list of your current pain points, and any budget or timeline constraints you're working with."
      },
      {
        question: "Do I have to hire you for implementation afterward?",
        answer: "No. The assessment is valuable on its own. You'll get documented recommendations and pricing that you can use however you want—implement yourself, use another vendor, or hire us. No pressure."
      }
    ],
    isBundle: false
  },
  {
    slug: "strategic-advisory",
    title: "IT Advisory",
    description: "Monthly strategic guidance without support tickets",
    overview: "Get consistent IT leadership without hiring full-time. Monthly subscription includes strategic planning, vendor management, technology roadmap guidance, and executive decision support. This is advisory and planning work—not reactive support tickets or helpdesk services. Structured engagement with clear boundaries to ensure you get strategic value, not unlimited email support.",
    startingPrice: "$500/month",
    timeline: "Ongoing monthly",
    deliverables: [
      "Monthly strategic planning sessions (4 hours Essentials, 10 hours Plus)",
      "Meeting includes prep, facilitation, and follow-up documentation",
      "Technology roadmap development and quarterly updates",
      "Vendor evaluation and contract review support",
      "Budget planning and prioritization guidance",
      "Monthly agenda and decision log (you set priorities, we provide guidance)",
      "Email support for strategic questions (15 minutes total per month for quick answers)",
      "Response time: Within 2 business days for email questions"
    ],
    idealFor: [
      "Growing businesses needing IT strategy without full-time staff (10-50 employees)",
      "Leadership teams making technology investment decisions",
      "Companies managing multiple vendors and need coordination",
      "Businesses with limited IT budget who need strategic guidance, not helpdesk"
    ],
    pricingTiers: [
      {
        name: "Essentials",
        price: "$500/month",
        description: "4 hours monthly strategic consulting + limited email support"
      },
      {
        name: "Plus",
        price: "$1,000/month",
        description: "10 hours monthly strategic consulting + limited email support"
      }
    ],
    faqs: [
      {
        question: "Is this a helpdesk or support service?",
        answer: "No. This is strategic planning and advisory work—not reactive IT support. We help with technology strategy, vendor decisions, budgeting, and roadmap planning. If you need helpdesk or ticket-based support, that's a different service."
      },
      {
        question: "What about email questions between meetings?",
        answer: "Email support is limited to strategic questions that can be answered in 15 minutes or less per month (quick clarifications or guidance). If questions require research, analysis, or more time, we'll address them in the next monthly meeting or recommend a project engagement."
      },
      {
        question: "Can I cancel anytime?",
        answer: "Yes. This is a month-to-month subscription with no long-term contract. Cancel anytime with 30 days notice. We recommend staying engaged for at least 3-6 months to see strategic progress."
      },
      {
        question: "What if I don't use all my hours in a month?",
        answer: "Unused hours don't roll over. This service is designed for consistent monthly engagement—strategic planning, vendor reviews, and technology decisions. If you only need occasional help, consider project-based services instead."
      }
    ],
    isBundle: false
  },
  {
    slug: "identity-device-foundation",
    title: "Microsoft 365 / Entra ID Setup",
    description: "Move to modern cloud identity and centralized device management",
    overview: "Move to modern cloud identity and centralized device management. Get your team set up with Microsoft Entra ID (Azure AD), Intune device management, multi-factor authentication, single sign-on for up to 3 apps, BitLocker encryption, and automated Windows updates. This package combines identity migration with endpoint management for a complete modern infrastructure foundation. Pricing assumes Microsoft 365 Business Premium (or equivalent) licensing. SSO limited to 3 applications; additional apps +$500 each. Additional locations beyond primary office: +$1,000 per location for on-site coordination.",
    startingPrice: "$6,500",
    timeline: "4-6 weeks (depends on device count and complexity)",
    deliverables: [
      "Azure AD Connect setup (hybrid identity configuration if needed)",
      "Intune enrollment and baseline device policies",
      "MFA rollout (Microsoft Authenticator or similar)",
      "Conditional access policies (location, device compliance, MFA enforcement)",
      "SSO setup for up to 3 core applications (additional apps +$500 each)",
      "BitLocker encryption enforcement across all devices",
      "Windows Update rings configuration (Pilot, Production, Critical)",
      "Admin training and handoff documentation",
      "Assumes Microsoft 365 Business Premium (or equivalent) licensing",
      "Additional locations beyond primary office: +$1,000 per location"
    ],
    idealFor: [
      "Businesses moving from on-prem to cloud-first infrastructure",
      "Remote/hybrid teams needing centralized device control",
      "Companies tired of local admin chaos and password resets (10-50 employees)"
    ],
    faqs: [
      {
        question: "Do we need on-premise servers for this to work?",
        answer: "No. While we can set up hybrid identity (Azure AD Connect) if you have on-prem Active Directory, this package is designed for cloud-first or cloud-only businesses. If you're fully cloud, we'll configure everything in Microsoft Entra ID (Azure AD) directly."
      },
      {
        question: "Will MFA disrupt our team's workflow?",
        answer: "We design the rollout to minimize disruption. Users typically authenticate once per device with the Microsoft Authenticator app, then stay signed in. We'll train your team and provide documentation to make the transition smooth."
      },
      {
        question: "What if we have more than 50 devices?",
        answer: "This package is designed for 10-50 devices. For larger deployments (51+ devices), we'll provide custom pricing based on your specific needs. Contact us for a quote."
      },
      {
        question: "What if we need SSO for more than 3 applications?",
        answer: "Base pricing includes up to 3 SSO applications. Additional apps are +$500 each (includes configuration, testing, and user training). Common SSO apps: Salesforce, Dropbox, QuickBooks Online, Zoom, etc."
      }
    ],
    pricingTiers: [
      {
        name: "Tier 1",
        price: "$6,500",
        description: "10-15 users/devices, up to 3 SSO apps, single location"
      },
      {
        name: "Tier 2",
        price: "$8,500",
        description: "16-35 users/devices, up to 3 SSO apps, single location"
      },
      {
        name: "Tier 3",
        price: "$11,000",
        description: "36-50 users/devices, up to 3 SSO apps, single location"
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
    faqs: [
      {
        question: "Do I have to commit to all phases upfront?",
        answer: "No. Start with Phase A (assessment). After you see the integration plan and risk analysis, you decide whether to proceed with Phases B and C. Phase A is valuable on its own for understanding what you're getting into."
      },
      {
        question: "What if we have more than 50 users to integrate?",
        answer: "We have experience with integrations up to 400+ users. For larger deployments (50+ users), we'll provide custom pricing based on your specific complexity, timeline, and requirements. Contact us for a quote."
      },
      {
        question: "How long does the actual migration take?",
        answer: "Phase B typically takes 6-12 weeks depending on tenant complexity, user count, and your preferred timeline. We work around your business operations to minimize disruption and can phase the migration by department if needed."
      }
    ],
    isBundle: true
  },
  {
    slug: "m365-governance",
    title: "Teams & SharePoint Governance",
    description: "Tame Teams/SharePoint sprawl and establish sustainable governance",
    overview: "Tame Teams/SharePoint sprawl and establish sustainable governance. Current state audit, governance policy documentation, permissions cleanup, external sharing controls, retention policies, and template library for new sites. Tiered pricing based on active Teams/SharePoint site count. Tier 1: 1-25 sites ($3,500), Tier 2: 26-75 sites ($5,500), Tier 3: 76-150 sites ($8,500). Additional sites beyond tier caps: +$50 per site. Includes cleanup of up to 50% inactive sites (archival and documentation).",
    startingPrice: "$3,500",
    timeline: "4-6 weeks",
    deliverables: [
      "Current state audit (active and inactive sites, Teams, permissions sprawl analysis)",
      "Governance policy documentation (naming conventions, lifecycle management, ownership requirements)",
      "Permissions cleanup and baseline configuration (external sharing, guest access, member vs. owner roles)",
      "External sharing and guest access controls (tenant-wide and site-specific)",
      "Retention and deletion policies setup (auto-archive inactive sites after X days)",
      "Template library for new Teams/SharePoint sites (pre-approved structures)",
      "Cleanup of up to 50% inactive sites (archival or deletion with approval)",
      "Admin and end-user training session (governance adoption and ongoing maintenance)",
      "Additional sites beyond tier cap: +$50 per site"
    ],
    idealFor: [
      "Organizations drowning in duplicate Teams and shadow sites",
      "Companies with compliance requirements (client data handling, retention policies)",
      "Businesses preparing for audits or rapid growth (need governance before chaos)"
    ],
    faqs: [
      {
        question: "Will this delete any of our existing Teams or SharePoint sites?",
        answer: "Not without your approval. We'll audit your current state, identify inactive or duplicate sites, and provide recommendations. You'll review and approve any cleanup actions before we make changes."
      },
      {
        question: "How do you determine which tier we need?",
        answer: "We count your active Teams and SharePoint sites. Tier 1 covers 1-25 sites, Tier 2 covers 26-75, and Tier 3 covers 76-150. If you're not sure, we can do a quick count during your discovery call. Additional sites beyond tier caps are +$50 per site."
      },
      {
        question: "Will this prevent users from creating new Teams?",
        answer: "We'll work with you to define the right balance. Some organizations restrict Team creation to IT or specific approvers, while others allow it but enforce naming conventions and lifecycle policies. You choose what makes sense for your culture."
      },
      {
        question: "What if we have more than 150 sites?",
        answer: "For very large environments (150+ sites), we'll provide custom pricing. Tier 3 covers up to 150 sites with +$50 per additional site. Beyond 200 sites, we recommend a discovery call to scope the work properly."
      }
    ],
    pricingTiers: [
      {
        name: "Tier 1",
        price: "$3,500",
        description: "1-25 active sites/Teams. Cleanup up to 12 inactive sites."
      },
      {
        name: "Tier 2",
        price: "$5,500",
        description: "26-75 active sites/Teams. Cleanup up to 37 inactive sites."
      },
      {
        name: "Tier 3",
        price: "$8,500",
        description: "76-150 active sites/Teams. Cleanup up to 75 inactive sites. +$50 per additional site."
      }
    ],
    isBundle: true
  },
  {
    slug: "employee-lifecycle",
    title: "Onboarding & Offboarding Automation",
    description: "Automate onboarding and offboarding for security and consistency",
    overview: "Automate onboarding and offboarding for security and consistency. Workflow automation for account creation, group memberships, welcome emails, access revocation, license recovery, and exit checklists. Integration with Microsoft 365 and supported HR systems. Tiered pricing: $2,500 (10-25 employees), $4,200 (26-50 employees). Includes up to 5 role-based templates (e.g., Sales, Finance, Operations, Executive, Contractor). Additional role templates: +$300 each. Additional users beyond 50: contact for custom pricing.",
    startingPrice: "$2,500",
    timeline: "3-4 weeks",
    deliverables: [
      "Onboarding workflow automation (accounts, security groups, email distribution lists, welcome emails)",
      "Offboarding workflow automation (access revocation, license recovery, exit checklists, archive procedures)",
      "Integration with Microsoft 365 and HR systems (if API/webhook supported: BambooHR, Workday, ADP)",
      "Security group and role templates (up to 5 role-based templates included)",
      "Additional role templates: +$300 each (e.g., Sales, Finance, Operations, Executive, Contractor, Intern)",
      "Manager approval workflows (request, approve, execute)",
      "Documentation and admin training"
    ],
    idealFor: [
      "Growing teams with frequent hiring (5+ new employees per year)",
      "Companies with security or compliance concerns (access controls, audit trails)",
      "HR teams tired of manual provisioning work and Excel checklists"
    ],
    pricingTiers: [
      {
        name: "Tier 1",
        price: "$2,500",
        description: "10-25 employees, up to 5 role templates"
      },
      {
        name: "Tier 2",
        price: "$4,200",
        description: "26-50 employees, up to 5 role templates (+$300 per additional role)"
      }
    ],
    faqs: [
      {
        question: "Does this integrate with our HR system?",
        answer: "It depends. We integrate with common HR platforms like BambooHR, Workday, and ADP if they support webhooks or APIs. If your HR system doesn't support automation, we can set up manual triggers (e.g., email or form submission) to start workflows."
      },
      {
        question: "What happens if someone is offboarded but needs to come back?",
        answer: "The workflow can be reversed or adjusted. We build in flexibility for scenarios like contractors returning, employees taking leave, or rehires. Manager approval workflows ensure nothing happens automatically without review."
      },
      {
        question: "Will this work with our existing IT setup?",
        answer: "This service is designed for Microsoft 365 environments (Azure AD, Intune, Exchange). If you use different identity systems (Google Workspace, Okta, etc.), contact us—we may be able to accommodate with custom pricing."
      },
      {
        question: "What if we need more than 5 role templates?",
        answer: "Base pricing includes up to 5 role-based templates (e.g., Sales, Finance, Operations, Executive, Contractor). Additional role templates are +$300 each. Most clients start with 3-5 core roles and add more later as needed."
      }
    ],
    isBundle: true
  },
  {
    slug: "it-operations-toolkit",
    title: "IT Operations Setup",
    description: "Service desk, asset tracking, and operational foundation",
    overview: "Service desk, asset tracking, and operational foundation. Essentials tier ($4,500): Service desk setup, asset management platform, initial inventory (up to 50 assets), admin training, and KB templates. Plus tier ($7,500): Everything in Essentials plus 2-3 PowerShell automation scripts, IT operations runbook, MSP transition package, and 30-day post-implementation support. Asset import limited to 50 assets; additional assets +$50 per 10 assets.",
    startingPrice: "$4,500",
    timeline: "3-5 weeks (Essentials), 5-7 weeks (Plus)",
    deliverables: [
      "Service desk platform selection and setup (Jira, Zendesk, Freshdesk, osTicket)",
      "Ticket categories, priorities, workflows, and SLA definitions",
      "Asset management platform setup (Jira Asset Manager, Snipe-IT, etc.)",
      "Initial asset inventory import (up to 50 assets; +$50 per additional 10 assets)",
      "Admin training and knowledge base starter templates",
      "Plus tier: 2-3 PowerShell automation scripts (user provisioning, backup verification, or license audits)",
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
        description: "Service desk and asset management (up to 50 assets)"
      },
      {
        name: "Plus",
        price: "$7,500",
        description: "Essentials, automation, and MSP transition (up to 50 assets, +$50 per 10 additional)"
      }
    ],
    faqs: [
      {
        question: "What service desk platforms do you support?",
        answer: "We work with Jira Service Management, Zendesk, Freshdesk, and osTicket. If you already have a platform, we can configure it. If not, we'll recommend one based on your budget and needs (free open-source to enterprise)."
      },
      {
        question: "Will you manage the service desk after setup?",
        answer: "No. This is a setup and configuration service. We'll train your team to manage it ongoing. If you need ongoing service desk management, ask about our Managed IT packages or consider the MSP transition package in Plus tier."
      },
      {
        question: "What kind of automation scripts are included in Plus tier?",
        answer: "Common examples: user provisioning scripts, backup verification automation, license audit reports, or asset inventory updates. We'll work with you to identify 2-3 repetitive tasks that would benefit most from automation."
      },
      {
        question: "What if we have more than 50 assets to import?",
        answer: "Base pricing includes up to 50 assets. Additional assets are +$50 per 10 assets (e.g., 60 assets = base + $50, 100 assets = base + $250). This ensures we scope the work accurately for larger environments."
      }
    ],
    isBundle: true
  },
  {
    slug: "backup-dr-readiness",
    title: "Backup & Disaster Recovery",
    description: "Know your backups work before you need them",
    overview: "Know your backups work before you need them. Verification Package ($1,500): Coverage assessment, backup config review, gap analysis, and disaster recovery checklist. Full DR Package ($3,500): Everything in Verification plus live restore test (up to 2 systems), detailed DR playbook with step-by-step procedures, RTO/RPO analysis, recovery contact list, and quarterly backup verification checklist. System = one application/data store (file server, database, M365 tenant, single VM). Additional systems +$500 each.",
    startingPrice: "$1,500",
    timeline: "1-2 weeks (Verification), 2-3 weeks (Full DR)",
    deliverables: [
      "Backup coverage assessment (systems, data, apps)",
      "Backup configuration review (retention, frequency, offsite)",
      "Gap analysis and risk documentation",
      "Disaster recovery checklist (high-level procedures)",
      "Full DR: Live restore test (up to 2 critical systems)",
      "Full DR: System = one application or data store (e.g., file server, database, M365 tenant, single VM)",
      "Full DR: Additional systems tested: +$500 per system",
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
        description: "Coverage assessment and gap analysis only (no restore testing)"
      },
      {
        name: "Full DR Package",
        price: "$3,500",
        description: "Verification, restore testing (up to 2 systems), and playbook. +$500 per additional system."
      }
    ],
    faqs: [
      {
        question: "Do you provide the backup solution itself?",
        answer: "No. This service verifies and tests your existing backup solution. We assess what you have, test if it works, and document recovery procedures. If you need a new backup solution, we can recommend options, but implementation is separate."
      },
      {
        question: "What counts as a 'system' for restore testing?",
        answer: "A system is one application or data store. Examples: file server (1 system), SQL database (1 system), M365 tenant (1 system), single VM (1 system). If you have a complex environment with 3-4 critical systems, we'll test up to 2 in the base package, and charge +$500 per additional system."
      },
      {
        question: "What if the restore test fails?",
        answer: "We'll document what failed and why, then provide remediation recommendations. Fixing the backup configuration or implementing a new solution would be a separate engagement—but at least you'll know before a real disaster."
      },
      {
        question: "How often should we do this?",
        answer: "At minimum, annually. For critical businesses or compliance requirements, quarterly testing is recommended. We offer a recurring DR Testing Service ($1,500/quarter) for ongoing confidence."
      }
    ],
    isBundle: false
  },
  {
    slug: "process-clarity-pack",
    title: "Process Mapping & SOP Development",
    description: "Document critical workflows so your team stops reinventing the wheel",
    overview: "Document critical workflows and build Standard Operating Procedures your team will actually use. Each process includes visual process mapping (swimlane or flowchart), written SOP document with decision trees, template library for future documentation, and team training on adoption and maintenance. Complexity tiers ensure you pay for what you need—simple linear processes vs. complex multi-branch workflows. Choose single process or multi-process packages for better value.",
    startingPrice: "$1,200",
    timeline: "1-2 weeks per process",
    deliverables: [
      "Visual process map (swimlane or flowchart format)",
      "Written standard operating procedure (SOP) document",
      "Decision trees for common variations and exceptions",
      "SOP template library for future documentation",
      "Team training session on using and maintaining SOPs",
      "30-day post-delivery support for refinements"
    ],
    idealFor: [
      "Teams with tribal knowledge that needs documentation",
      "Businesses preparing for growth or key employee departures",
      "Companies with high turnover or inconsistent execution"
    ],
    pricingTiers: [
      {
        name: "Simple Process",
        price: "$1,200",
        description: "Linear process, 3-5 steps, single department (e.g., expense approval, time-off request)"
      },
      {
        name: "Standard Process",
        price: "$1,800",
        description: "Multi-step process, 6-10 steps, some cross-functional work (e.g., customer onboarding, project intake)"
      },
      {
        name: "Complex Process",
        price: "$3,000",
        description: "Multi-branch logic, 10+ steps, multiple departments, integrations (e.g., contract approval, incident response)"
      },
      {
        name: "5-Process Package",
        price: "$7,500",
        description: "5 standard processes (save $1,500 vs. individual)"
      }
    ],
    faqs: [
      {
        question: "How do you determine if my process is simple, standard, or complex?",
        answer: "Simple: Linear flow, few steps, one department. Standard: Some branching, multiple steps, light cross-functional work. Complex: Heavy branching logic, many stakeholders, system integrations, exception handling. During discovery, we'll assess your process and recommend the right tier."
      },
      {
        question: "How do you choose which processes to document?",
        answer: "We work with you to identify the highest-impact processes—typically those with the most pain, dependencies on key people, or risk if done incorrectly. Common choices include customer onboarding, project handoffs, month-end close, or critical IT procedures."
      },
      {
        question: "Can you document technical IT processes or just business processes?",
        answer: "Both. We document business workflows (sales, onboarding, project management) and technical procedures (server patching, backup verification, incident response). The deliverables are the same—process maps and written SOPs."
      },
      {
        question: "Who needs to be involved from our team?",
        answer: "The person who currently owns the process (the expert) and ideally a manager or stakeholder who approves the final documentation. We'll interview the expert, observe the workflow, then draft the documentation for review."
      }
    ],
    isBundle: false
  },
  {
    slug: "web-development",
    title: "Web Development",
    description: "Professional websites and digital tools for small businesses",
    overview: "Lead-generation websites built for small businesses. Custom website development, landing pages, or web applications built with modern frameworks (Next.js, React). Fast, secure, mobile-responsive, and designed for conversion. Includes technical SEO (meta tags, sitemaps, performance optimization)—not content strategy or ongoing SEO campaigns. Tiered packages available based on complexity and page count.",
    startingPrice: "$3,500",
    timeline: "4-8 weeks depending on scope",
    deliverables: [
      "Custom website or web application (modern frameworks: Next.js, React, or WordPress for simpler sites)",
      "Responsive design (mobile, tablet, desktop)",
      "Technical SEO optimization: meta tags, sitemap.xml, page speed optimization, mobile-friendly configuration",
      "On-page SEO basics: proper heading structure, alt text, internal linking (content strategy and link building are separate services)",
      "Content management system or admin panel (CMS training included)",
      "Hosting setup and deployment support (ongoing hosting costs separate: $10-50/month typical)"
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
        description: "5-page website, basic SEO, contact forms, 1 round of revisions"
      },
      {
        name: "Standard",
        price: "$5,500",
        description: "10-page website, advanced SEO, analytics integration, 2 rounds of revisions"
      },
      {
        name: "Growth",
        price: "$8,500",
        description: "Custom features, CRM/tool integrations, advanced CMS, 3 rounds of revisions, training"
      }
    ],
    faqs: [
      {
        question: "Do you provide content and images, or do we?",
        answer: "You provide the content (text, images, branding). We handle site structure, design implementation, and optimization. If you need help with content writing or professional photography, we can recommend partners, but that's separate from web development pricing."
      },
      {
        question: "What platform do you build on?",
        answer: "We primarily build with modern frameworks (Next.js, React) for performance and flexibility. For simpler sites needing easy content updates, we may recommend WordPress or similar CMS platforms. We'll suggest the best fit for your needs and technical comfort."
      },
      {
        question: "Is hosting included?",
        answer: "Hosting setup is included—we'll deploy your site to Vercel, Netlify, or your preferred host. Ongoing hosting costs are separate and typically $10-50/month depending on your platform and traffic."
      },
      {
        question: "What's included in 'SEO optimization'?",
        answer: "Technical SEO: meta tags, structured data, sitemap, page speed optimization, mobile-friendly configuration. On-page SEO: proper heading structure, alt text, internal linking. NOT included: content strategy, keyword research, link building, or ongoing SEO campaigns—those are separate services."
      }
    ],
    isBundle: false
  },
  {
    slug: "mvp-prd",
    title: "Product Planning",
    description: "Turn your product idea into a clear, actionable roadmap",
    overview: "Work with you to scope your Minimum Viable Product, define features, prioritize development phases, and create a detailed Product Requirements Document (PRD) ready for development. 1-day workshop format with comprehensive deliverables.",
    startingPrice: "$2,000",
    timeline: "1-day workshop + 1-2 weeks documentation",
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
    faqs: [
      {
        question: "Do you build the product after the PRD is complete?",
        answer: "Not typically. This is a planning and scoping service. We deliver the PRD and recommendations so you can hire developers, agencies, or build in-house with clarity. If you want us to build it, we can discuss that separately."
      },
      {
        question: "What if my product idea changes during the workshop?",
        answer: "That's normal and expected. The workshop process often reveals new insights or priorities. We'll help you refine the scope and ensure the PRD reflects your best thinking by the end."
      },
      {
        question: "How technical do I need to be to participate?",
        answer: "Not very. We facilitate the workshop for founders and business stakeholders. You bring the product vision and business requirements—we'll translate that into technical architecture and development requirements in the PRD."
      }
    ],
    isBundle: false
  },
  {
    slug: "new-foundation-bundle",
    title: "IT Foundation Package",
    description: "Complete foundational IT setup for growing businesses",
    overview: "Get your entire IT foundation built right from the start. This bundle combines Identity & Security (Tier 1), M365 Governance (Tier 1), and Employee Lifecycle (Tier 1) to give you a complete, modern IT infrastructure. Perfect for companies starting fresh or completely rebuilding. Bundle includes integrated implementation with coordinated planning across all three services—normally $12,700 separate + $2,800 integration overhead = $15,500 value. Bundle price: $14,500. Bundle includes everything from cloud identity migration to governance policies to automated onboarding/offboarding systems. Assumes 10-25 employees, 1-25 Teams/SharePoint sites, Microsoft 365 Business Premium licensing, up to 5 role templates, single office location, up to 3 SSO apps.",
    startingPrice: "$14,500",
    timeline: "8-12 weeks for complete implementation",
    deliverables: [
      "Complete Azure AD/Entra ID setup with MFA and Conditional Access",
      "Device enrollment in Microsoft Intune with security policies",
      "M365 Teams/SharePoint cleanup and governance framework (1-25 sites)",
      "Automated employee onboarding and offboarding workflows (up to 5 role templates)",
      "SSO setup for up to 3 core applications",
      "Documentation package: runbooks, policies, and admin guides",
      "Training sessions for IT admins and end users",
      "Assumes: 10-25 employees, M365 Business Premium, single location, 1-25 sites"
    ],
    idealFor: [
      "Companies with 10-25 employees starting fresh",
      "Businesses moving from on-premises to cloud",
      "Organizations rebuilding IT infrastructure after acquisition"
    ],
    pricingTiers: [
      {
        name: "Bundle Package",
        price: "$14,500",
        description: "Complete foundation for 10-25 employees ($15,500 value with integrated delivery)"
      }
    ],
    faqs: [
      {
        question: "Can I purchase just one part of this bundle instead of the whole thing?",
        answer: "Yes. Each component is available separately: Identity & Security ($6,500), M365 Governance ($3,500), and Employee Lifecycle ($2,500). The bundle saves you $1,500 if you need all three. We recommend the bundle for companies starting fresh."
      },
      {
        question: "What if we have more than 25 employees?",
        answer: "The individual services have tiered pricing that goes up to 50 employees. For 26-50 employees, expect $18,500-$22,000 for the bundle. For larger organizations (50+ employees), we'll provide custom bundle pricing. Contact us for a quote."
      },
      {
        question: "Do we need to have Microsoft 365 already?",
        answer: "Yes. This bundle assumes you have M365 Business Premium or equivalent licenses. If you're not on M365 yet, we can help you get set up, but licensing costs are separate from this bundle."
      },
      {
        question: "What's included vs. not included?",
        answer: "Included: 10-25 users, 1-25 Teams/SharePoint sites, up to 5 role templates, single office location, up to 3 SSO apps. NOT included: Additional users beyond 25, additional sites beyond 25, additional role templates beyond 5, multi-location setups (+$1,000 per location), additional SSO apps beyond 3 (+$500 each)."
      }
    ],
    isBundle: true
  },
  {
    slug: "growth-acceleration-bundle",
    title: "Growth Package",
    description: "Assessment, implementation, and ongoing guidance",
    overview: "The complete path from assessment to modernization to ongoing strategic support. Starts with a Systems Review ($799) to identify priorities, implements your Identity & Security foundation (Tier 1: $6,500), then includes 3 months of IT Advisory ($500/month × 3 = $1,500) for ongoing guidance. Total value: $8,799. Bundle price: $7,999—saving you $800. This package ensures you have expert guidance through the entire modernization journey, from strategic planning to implementation to ongoing optimization.",
    startingPrice: "$7,999",
    timeline: "Assessment: 1 week | Implementation: 6-8 weeks | Advisory: 3 months",
    deliverables: [
      "Systems Review with prioritized roadmap ($799 value)",
      "Identity & Security implementation (Tier 1: 10-15 users, $6,500 value)",
      "3 months Strategic IT Advisory (Essentials tier: 4 hours/month, $1,500 value)",
      "Monthly strategic planning sessions during advisory period",
      "Technology roadmap development and quarterly updates",
      "Vendor evaluation and contract review support",
      "Total component value: $8,799 | Bundle savings: $1,000"
    ],
    idealFor: [
      "Companies ready to modernize but unsure where to start (10-25 employees)",
      "Businesses wanting expert guidance through transformation",
      "Teams needing ongoing strategic support after implementation"
    ],
    pricingTiers: [
      {
        name: "Bundle Package",
        price: "$7,999",
        description: "Assessment + Tier 1 implementation + 3 months advisory (save $800)"
      }
    ],
    faqs: [
      {
        question: "What happens after the 3 months of advisory end?",
        answer: "You can continue the IT Advisory on a month-to-month basis ($500/month Essentials or $1,000/month Plus), or you can stop. There's no long-term contract. Many clients continue because they value the ongoing strategic guidance."
      },
      {
        question: "Can I skip the assessment and just do implementation?",
        answer: "Yes, but we don't recommend it. The Systems Review ensures we're implementing the right priorities for your business. If you're certain about what you need, you can purchase services individually instead of the bundle."
      },
      {
        question: "Is this bundle only for the Identity & Security implementation, or can I choose a different service?",
        answer: "This specific bundle includes Identity & Security (Tier 1: 10-15 users) for $7,999 (save $800 vs. $8,799 separate). If you want a different service implemented (M365 Governance, Employee Lifecycle, etc.), we can create a custom bundle. The standard Growth Package is designed for the most common modernization path: assessment → identity/security → ongoing strategy."
      },
      {
        question: "What if I have more than 15 users?",
        answer: "This bundle includes Identity & Security Tier 1 (10-15 users). For 16-35 users (Tier 2: $8,500) or 36-50 users (Tier 3: $11,000), the bundle price increases accordingly. Contact us for a quote on larger implementations."
      }
    ],
    isBundle: true
  },
  {
    slug: "m365-training",
    title: "Microsoft 365 End-User Training",
    description: "Help your team actually use the tools you've invested in",
    overview: "Drive adoption of Microsoft 365 with targeted training sessions. Cover Teams, SharePoint, OneDrive, Outlook best practices, and collaborative workflows. Training can be delivered in-person or remote, with custom focus areas based on your needs. Includes training materials, quick reference guides, and recorded sessions for future onboarding. Follow-up support is capped to ensure value delivery and prevent unlimited scope creep.",
    startingPrice: "$1,200",
    timeline: "1-2 weeks from booking to delivery",
    deliverables: [
      "2-hour training session (in-person or remote)",
      "Custom training materials and quick reference guides",
      "Recorded session for future reference and onboarding",
      "Follow-up support: Up to 30 minutes or 5 email questions per session (within 2 weeks)",
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
        description: "2-hour training for up to 25 people + capped follow-up"
      },
      {
        name: "3-Session Package",
        price: "$2,500",
        description: "3 training sessions (different topics or audiences) + capped follow-up per session"
      }
    ],
    faqs: [
      {
        question: "Can training be delivered remotely, or does it have to be in-person?",
        answer: "Both options are available. Remote training via Teams or Zoom is most common and included in the pricing. In-person training in the Oklahoma City or Tulsa metro areas is available—travel fees may apply for locations outside those areas."
      },
      {
        question: "What topics do you cover in the training?",
        answer: "We customize based on your needs, but common topics include: Teams fundamentals, SharePoint collaboration, OneDrive best practices, Outlook calendar/task management, and security awareness (MFA, phishing). Tell us your pain points and we'll design the session accordingly."
      },
      {
        question: "Will you record the session for employees who can't attend?",
        answer: "Yes. All training sessions are recorded (with your permission) and delivered to you for future onboarding or reference. You'll also receive quick reference guides and documentation."
      },
      {
        question: "What if we need more follow-up support after the 2 weeks?",
        answer: "Follow-up support is capped at 30 minutes or 5 email questions per session to ensure focused value delivery. If you need ongoing support beyond that, consider the IT Advisory service or book an additional training session to address remaining questions."
      }
    ],
    isBundle: false
  },
  {
    slug: "it-documentation",
    title: "IT Documentation Package",
    description: "Document your entire IT environment so nothing lives in one person's head",
    overview: "Comprehensive IT documentation including network diagrams, system inventory, configuration standards, and operational runbooks. Perfect for companies with undocumented infrastructure or preparing for IT staff transitions. Deliverables are organized in SharePoint or your preferred platform with version control and update procedures. Clear scope caps prevent scope creep.",
    startingPrice: "$3,500",
    timeline: "3-4 weeks (Standard), 4-6 weeks (Comprehensive)",
    deliverables: [
      "Network topology diagrams (physical and logical)",
      "Complete system inventory with owners and support contacts",
      "Application and service catalog with dependencies",
      "Configuration standards and security baselines",
      "Operational runbooks for common IT tasks (patching, backups, incident response)",
      "Disaster recovery procedures documentation",
      "Vendor contact list with contracts and renewal dates",
      "SharePoint or wiki site setup for ongoing maintenance with update procedures"
    ],
    idealFor: [
      "Companies with no IT documentation or outdated documentation",
      "Organizations preparing for IT staff transitions or MSP onboarding",
      "Businesses facing audit or compliance requirements (SOC 2, ISO 27001)"
    ],
    pricingTiers: [
      {
        name: "Standard Package",
        price: "$3,500",
        description: "Up to 25 devices, 5 core systems, 10 applications. Ideal for small businesses."
      },
      {
        name: "Comprehensive Package",
        price: "$6,000",
        description: "26-50 devices, 10 systems, 20 applications. Includes detailed runbooks and advanced network documentation."
      }
    ],
    faqs: [
      {
        question: "How do we keep the documentation up to date after you finish?",
        answer: "We'll set up a SharePoint site or wiki with version control and provide update procedures. You'll own the maintenance going forward. The key is establishing a process where changes to infrastructure trigger documentation updates—we'll help you design that workflow."
      },
      {
        question: "What if we don't know all the details about our current setup?",
        answer: "That's common and exactly why documentation is valuable. We'll help you discover what you have through interviews, system scans, and configuration reviews. If we find gaps or missing information, we'll document what we can and flag unknowns for investigation."
      },
      {
        question: "Can you include our vendor contacts and support information?",
        answer: "Absolutely. The documentation includes vendor contact lists, support procedures, license keys (stored securely), renewal dates, and escalation paths. This is critical for incident response and staff transitions."
      },
      {
        question: "What if we have more than 50 devices?",
        answer: "For larger environments (50+ devices), we'll provide custom pricing based on complexity. The tiered packages are designed for most small-to-midsize Oklahoma businesses. Contact us for a quote if you're beyond these caps."
      }
    ],
    isBundle: false
  },
  {
    slug: "dr-testing-service",
    title: "Disaster Recovery Testing Service",
    description: "Quarterly restore tests to ensure your backups actually work",
    overview: "Don't wait for a disaster to find out your backups don't work. Recurring quarterly service that tests restore procedures (up to 2 systems per quarter), validates backup coverage, updates recovery documentation, and provides executive-ready reports. System = one application or data store (file server, database, M365 tenant, single VM). Additional systems +$250 each. Annual subscription ensures consistent validation and trend tracking.",
    startingPrice: "$1,500/quarter",
    timeline: "Ongoing quarterly service",
    deliverables: [
      "Quarterly restore testing (up to 2 critical systems per quarter)",
      "System definition: One application or data store (file server, database, M365 tenant, single VM)",
      "Additional systems tested: +$250 per system per quarter",
      "Backup coverage validation and gap analysis",
      "Updated disaster recovery playbook",
      "RTO/RPO validation and documentation",
      "Executive summary report with pass/fail status",
      "Remediation recommendations for any issues found"
    ],
    idealFor: [
      "Organizations with compliance requirements (SOC 2, HIPAA, ISO 27001)",
      "Companies managing critical business data",
      "Businesses wanting ongoing DR confidence without surprises"
    ],
    pricingTiers: [
      {
        name: "Quarterly Service",
        price: "$1,500/quarter",
        description: "Recurring DR testing (up to 2 systems per quarter, annual commitment). +$250 per additional system."
      }
    ],
    faqs: [
      {
        question: "Do I have to commit to a full year?",
        answer: "Yes. This is an annual subscription service with quarterly testing. The annual commitment ensures consistent DR validation and allows us to track trends and improvements over time. Cancel with 30 days notice before renewal."
      },
      {
        question: "What counts as a 'system' for quarterly testing?",
        answer: "A system is one application or data store. Examples: file server (1 system), SQL database (1 system), M365 tenant (1 system), single VM (1 system). Base price includes testing up to 2 systems per quarter. Need more? +$250 per additional system per quarter."
      },
      {
        question: "What happens if a test fails?",
        answer: "We document the failure, root cause, and provide remediation recommendations. Fixing the issue is a separate engagement. The value of this service is finding problems before a real disaster—not during one."
      },
      {
        question: "Can you test different systems each quarter, or is it always the same?",
        answer: "We can rotate systems or test the same critical systems every quarter—your choice. Most clients test their 1-2 most critical systems (domain controller, database, file server) every quarter to ensure consistent recovery capability."
      }
    ],
    isBundle: false
  },
  {
    slug: "cloud-cost-optimization",
    title: "Cloud Cost Optimization Review",
    description: "Find waste in your Azure and Microsoft 365 spending",
    overview: "Comprehensive audit of your Azure and Microsoft 365 licensing and usage. Identify unused licenses, right-size resources, eliminate redundant services, and implement cost controls. Most clients save 15-30% on their annual cloud spend. One-time engagement with ongoing monitoring recommendations. Standard review covers one Azure subscription and one M365 tenant (up to 100 users). Additional subscriptions or tenants: +$500 each.",
    startingPrice: "$1,200",
    timeline: "1-2 weeks",
    deliverables: [
      "License utilization audit (M365, Azure, Dynamics) for one tenant (up to 100 users)",
      "Cost analysis and waste identification for one Azure subscription",
      "Right-sizing recommendations for Azure resources (VMs, storage, databases)",
      "Unused license and redundant service report",
      "Cost-saving implementation roadmap with priority and effort estimates",
      "Ongoing monitoring and alerting setup (budget alerts, anomaly detection)",
      "Additional subscriptions or tenants: +$500 each"
    ],
    idealFor: [
      "Companies with growing cloud costs and unclear usage",
      "Organizations with 25+ M365 licenses",
      "Businesses using Azure without cost controls or governance"
    ],
    pricingTiers: [
      {
        name: "Standard Review",
        price: "$1,200",
        description: "M365 (1 tenant, up to 100 users) and Azure (1 subscription) analysis. +$500 per additional."
      }
    ],
    faqs: [
      {
        question: "How much money will we actually save?",
        answer: "It varies. Most clients save 15-30% on annual cloud spend by eliminating unused licenses, right-sizing resources, and removing redundant services. Savings depend on your current waste and implementation of our recommendations."
      },
      {
        question: "Do you implement the cost-saving changes, or do we?",
        answer: "We provide the analysis and recommendations with implementation steps. You can implement them yourself, have your IT team do it, or hire us for implementation (separate engagement). Most recommendations are simple license removals or configuration changes."
      },
      {
        question: "Will cost-cutting impact our service quality or user experience?",
        answer: "No. We only recommend removing unused or redundant services. If a license or resource is actively used, we leave it. The goal is to eliminate waste, not degrade service. If right-sizing is needed, we explain the tradeoffs clearly."
      },
      {
        question: "What if we have multiple Azure subscriptions or M365 tenants?",
        answer: "Base pricing covers one Azure subscription and one M365 tenant (up to 100 users). Additional subscriptions or tenants are +$500 each. For complex multi-tenant environments, contact us for custom pricing."
      }
    ],
    isBundle: false
  },
  {
    slug: "compliance-documentation",
    title: "Compliance Documentation Prep",
    description: "Prepare IT documentation for HIPAA, SOC 2, or CMMC audits",
    overview: "Get your IT documentation audit-ready. We help you prepare policies, procedures, system documentation, and evidence collection for HIPAA, SOC 2, CMMC, or other compliance frameworks. This is documentation preparation only—not legal advice or certification services. Work is performed in collaboration with your compliance auditor or consultant. Basic Prep: 10 policy templates, network diagram, asset inventory, access controls. Comprehensive Prep: All Basic plus 20 detailed SOPs, evidence templates, gap analysis, remediation roadmap.",
    startingPrice: "$3,500",
    timeline: "4-6 weeks depending on scope",
    deliverables: [
      "Basic Prep: 10 IT policy templates aligned to framework requirements (Acceptable Use, Access Control, Incident Response, etc.)",
      "Basic Prep: Network topology diagram and system security documentation",
      "Basic Prep: Asset inventory with owners and access levels",
      "Basic Prep: Access control and user management procedures",
      "Comprehensive Prep: All Basic deliverables plus 20 detailed Standard Operating Procedures (SOPs)",
      "Comprehensive Prep: Evidence collection templates and organization system",
      "Comprehensive Prep: Gap analysis with control mappings",
      "Comprehensive Prep: Remediation roadmap with priority and effort estimates"
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
        description: "10 policy templates + core IT documentation for compliance"
      },
      {
        name: "Comprehensive Prep",
        price: "$9,000",
        description: "Full policy suite (10 policies + 20 SOPs) + evidence collection + gap analysis"
      }
    ],
    faqs: [
      {
        question: "Does this service make us compliant, or just prepare documentation?",
        answer: "Documentation only. We prepare policies, procedures, and evidence for your auditor. We don't certify compliance or provide legal advice. You'll still need a compliance auditor or consultant to certify your organization meets the framework requirements."
      },
      {
        question: "Do we need to have a compliance auditor already lined up?",
        answer: "Ideally, yes. We work best when coordinating with your auditor or consultant to ensure our documentation aligns with their requirements. If you don't have one yet, we can recommend partners, but this service assumes you're already pursuing compliance."
      },
      {
        question: "Which compliance frameworks do you support?",
        answer: "We primarily support HIPAA (healthcare), SOC 2 (SaaS/tech companies), and CMMC (government contractors). We can also help with ISO 27001, PCI-DSS, or custom frameworks—contact us to discuss your specific needs."
      }
    ],
    isBundle: false
  },
  {
    slug: "technology-roadmap-workshop",
    title: "Technology Roadmap Workshop",
    description: "Build a 3-5 year technology plan aligned to business goals",
    overview: "Strategic technology roadmap workshop for leadership teams. Full-day facilitated session to assess current state, identify business goals, evaluate technology gaps, and create an executive-ready multi-year plan. Includes comprehensive documentation, budget modeling, and phased implementation roadmap. This is board-ready strategic planning, not a brainstorming session.",
    startingPrice: "$5,000",
    timeline: "1-day workshop + 1-2 weeks documentation",
    deliverables: [
      "Pre-workshop discovery (current state technology assessment)",
      "Full-day facilitated workshop with leadership team",
      "Business goal and technology gap analysis",
      "3-5 year technology roadmap with detailed phases",
      "Initiative prioritization matrix with dependencies and risks",
      "Budget estimates and resource requirements by phase",
      "Executive presentation deck (board-ready)",
      "Quarterly milestone tracking framework with KPIs",
      "30-day follow-up session to refine and adjust roadmap"
    ],
    idealFor: [
      "Growing businesses planning for scale (25-100 employees)",
      "Companies preparing for funding rounds or major investments",
      "Leadership teams making multi-year technology decisions",
      "Businesses facing technology debt or infrastructure rebuilds"
    ],
    pricingTiers: [
      {
        name: "Comprehensive Package",
        price: "$5,000",
        description: "Full workshop, executive deliverables, and 30-day follow-up"
      }
    ],
    faqs: [
      {
        question: "Who from our team should attend the workshop?",
        answer: "Key stakeholders who make technology decisions: typically the CEO/owner, CFO or finance lead, and any heads of department affected by technology. The ideal group is 3-6 people who can speak to business goals and operational needs."
      },
      {
        question: "Do we need to know what technology we want before the workshop?",
        answer: "No. The workshop process helps you identify what you need. You bring business goals and pain points—we'll facilitate discussion, evaluate technology options, and create the roadmap together. Come with problems, not predetermined solutions."
      },
      {
        question: "Will you implement the roadmap after the workshop?",
        answer: "That's separate. This service delivers the strategic plan. Implementation can be done by your team, other vendors, or us (separate engagement). Many clients use the roadmap for budgeting and phased implementation over 1-3 years."
      },
      {
        question: "Why is this more expensive than the Systems Review?",
        answer: "This is executive-level strategic planning with board-ready deliverables—budget modeling, multi-year phasing, ROI analysis, and risk assessment. It's a full-day workshop plus 8-12 hours of documentation work. Many consultants charge $7,500-$10,000 for this level of strategic deliverable. We price it to be accessible to growing Oklahoma businesses while ensuring quality work."
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
      {/* Service Schema Markup */}
      <StructuredData data={getServiceSchema(
        service.title,
        service.description,
        service.startingPrice
      )} />
      
      <Section title={service.title} className="pt-20 md:pt-24">
        <p className="text-xl text-[rgba(254,255,255,0.88)] max-w-3xl">
          {service.description}
        </p>
      </Section>

      <Section className="bg-polus-surface1">
        <ServiceDetailClient
          overview={service.overview}
          deliverables={service.deliverables}
          idealFor={service.idealFor}
          timeline={service.timeline}
          startingPrice={service.startingPrice}
          pricingTiers={service.pricingTiers}
        />
      </Section>

      {service.faqs && service.faqs.length > 0 && (
        <>
          <StructuredData data={getFAQSchema(service.faqs)} />
          <Section>
            <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6 max-w-3xl">
              {service.faqs.map((faq, idx) => (
                <div key={idx} className="border-b border-[rgba(177,227,199,0.12)] pb-6 last:border-0">
                  <h3 className="text-lg font-semibold mb-3 text-polus-mint">{faq.question}</h3>
                  <p className="text-[rgba(254,255,255,0.78)] leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </Section>
        </>
      )}

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
