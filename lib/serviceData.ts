// Single source of truth for all services across the site
// Used by: services page, contact forms, quote forms, quiz recommendations

export type ServiceCategory = 
  | "all"
  | "infrastructure" 
  | "operations"
  | "security"
  | "advisory"
  | "bundles";

export type Service = {
  title: string;
  description: string;
  slug: string;
  category: ServiceCategory;
  checkboxLabel: string; // Label used in contact/quote forms
  tag?: string;
  featured?: boolean;
};

export const SERVICE_CATEGORIES = {
  all: { label: "All Services", count: 0 },
  infrastructure: { label: "Core Infrastructure", count: 0 },
  operations: { label: "Operations & Process", count: 0 },
  security: { label: "Security & Risk", count: 0 },
  advisory: { label: "Advisory & Planning", count: 0 },
  bundles: { label: "Package Deals", count: 0 }
};

export const SERVICES: Service[] = [
  // Infrastructure (4)
  {
    title: "Systems Review",
    description: "Get clarity on what to fix first—fast. 90-minute working session with documented recommendations and priority roadmap delivered within 24 hours.",
    slug: "systems-assessment",
    category: "infrastructure",
    checkboxLabel: "Systems review",
    tag: "Start Here",
    featured: true
  },
  {
    title: "Identity & Security",
    description: "Move to modern cloud identity and centralized device management. Includes Microsoft Entra ID (Azure AD), Intune, MFA, SSO, and baseline security policies.",
    slug: "identity-device-foundation",
    category: "infrastructure",
    checkboxLabel: "Identity & Security",
    tag: "Core Infrastructure"
  },
  {
    title: "M365 Governance",
    description: "Tame Teams/SharePoint sprawl and establish sustainable governance. Naming conventions, retention policies, permissions cleanup, and external sharing controls.",
    slug: "m365-governance",
    category: "infrastructure",
    checkboxLabel: "M365 governance",
    tag: "For Growing Teams"
  },
  {
    title: "IT Operations Setup",
    description: "Service desk, asset tracking, and operational foundation. Get structured support workflows, inventory management, and handoff-ready documentation.",
    slug: "it-operations-toolkit",
    category: "infrastructure",
    checkboxLabel: "IT operations setup",
    tag: "Operational Maturity"
  },

  // Operations & Process (5)
  {
    title: "Process Documentation",
    description: "Document critical workflows so your team stops reinventing the wheel. Visual process maps, written SOPs, and training. Priced per process or as a bundle.",
    slug: "process-clarity-pack",
    category: "operations",
    checkboxLabel: "Process Documentation",
    tag: "Operational Excellence"
  },
  {
    title: "Employee Lifecycle",
    description: "Automate onboarding and offboarding for security and consistency. Workflow automation for account creation, access provisioning, and exit procedures.",
    slug: "employee-lifecycle",
    category: "operations",
    checkboxLabel: "Employee lifecycle (onboarding/offboarding)",
    tag: "HR and Security"
  },
  {
    title: "Microsoft 365 End-User Training",
    description: "Drive M365 adoption with targeted training. Teams, SharePoint, OneDrive best practices. 2-hour sessions with materials and recordings.",
    slug: "m365-training",
    category: "operations",
    checkboxLabel: "Microsoft 365 training",
    tag: "Training & Adoption"
  },
  {
    title: "IT Documentation Package",
    description: "Document your entire IT environment: network diagrams, system inventory, runbooks, and configuration standards. Nothing lives in one person's head.",
    slug: "it-documentation",
    category: "operations",
    checkboxLabel: "IT documentation",
    tag: "Knowledge Management"
  },
  {
    title: "Web Development",
    description: "Lead-generation websites for small businesses. Fast, secure, SEO-friendly, and designed for conversion. Tiered packages available.",
    slug: "web-development",
    category: "operations",
    checkboxLabel: "Web development",
    tag: "Digital Presence"
  },

  // Security & Risk (4)
  {
    title: "Backup & DR",
    description: "Know your backups work before you need them. Coverage assessment, restore testing, and disaster recovery playbook with step-by-step procedures.",
    slug: "backup-dr-readiness",
    category: "security",
    checkboxLabel: "Backup / DR",
    tag: "Risk Mitigation"
  },
  {
    title: "Disaster Recovery Testing Service",
    description: "Quarterly restore tests to ensure backups work. Recurring service with executive reports and remediation recommendations.",
    slug: "dr-testing-service",
    category: "security",
    checkboxLabel: "DR testing service",
    tag: "Ongoing Assurance"
  },
  {
    title: "Compliance Documentation Prep",
    description: "IT documentation for HIPAA, SOC 2, or CMMC audits. Policies, procedures, and evidence collection aligned to framework requirements.",
    slug: "compliance-documentation",
    category: "security",
    checkboxLabel: "Compliance documentation",
    tag: "Compliance & Audit"
  },
  {
    title: "Cloud Cost Optimization Review",
    description: "Find waste in Azure and M365 spending. License audits, right-sizing, and cost controls. Most clients save 15-30% annually.",
    slug: "cloud-cost-optimization",
    category: "security",
    checkboxLabel: "Cloud cost optimization",
    tag: "Cost Savings"
  },

  // Advisory & Planning (4)
  {
    title: "IT Advisory",
    description: "Ongoing monthly strategic guidance—roadmap planning, vendor management, and IT decision support. No support tickets. $500/mo (4 hrs) or $1,000/mo (10 hrs).",
    slug: "strategic-advisory",
    category: "advisory",
    checkboxLabel: "IT Advisory",
    tag: "Recurring Revenue"
  },
  {
    title: "Product Planning",
    description: "Turn your product idea into a clear, actionable roadmap. 1-day workshop with detailed Product Requirements Document.",
    slug: "mvp-prd",
    category: "advisory",
    checkboxLabel: "Product planning",
    tag: "Product Planning"
  },
  {
    title: "Technology Roadmap Workshop",
    description: "Build a 3-5 year technology plan. Full-day workshop with leadership to align technology with business goals and create phased implementation plan.",
    slug: "technology-roadmap-workshop",
    category: "advisory",
    checkboxLabel: "Technology roadmap workshop"
  },
  {
    title: "Acquisition Integration (Phased)",
    description: "Merge IT systems during a business acquisition—without the chaos. Proven experience with 400+ user integrations. Assessment required.",
    slug: "acquisition-integration",
    category: "advisory",
    checkboxLabel: "Acquisition integration",
    tag: "M&A Support"
  },

  // Bundles (3)
  {
    title: "IT Foundation Package",
    description: "Complete foundational IT setup: Identity & Security, M365 Governance, and Employee Lifecycle. Save $1,500. Perfect for 10-25 employees.",
    slug: "new-foundation-bundle",
    category: "bundles",
    checkboxLabel: "IT Foundation Package",
    tag: "Bundle Deal"
  },
  {
    title: "Growth Package",
    description: "Assessment, Identity & Security, and 3 months IT Advisory. Save $1,000. Complete modernization with ongoing guidance.",
    slug: "growth-acceleration-bundle",
    category: "bundles",
    checkboxLabel: "Growth Package",
    tag: "Bundle Deal"
  }
];

// Calculate category counts
SERVICE_CATEGORIES.all.count = SERVICES.length;
SERVICE_CATEGORIES.infrastructure.count = SERVICES.filter(s => s.category === "infrastructure").length;
SERVICE_CATEGORIES.operations.count = SERVICES.filter(s => s.category === "operations").length;
SERVICE_CATEGORIES.security.count = SERVICES.filter(s => s.category === "security").length;
SERVICE_CATEGORIES.advisory.count = SERVICES.filter(s => s.category === "advisory").length;
SERVICE_CATEGORIES.bundles.count = SERVICES.filter(s => s.category === "bundles").length;

// Helper functions
export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find(s => s.slug === slug);
}

export function getServicesByCategory(category: ServiceCategory): Service[] {
  if (category === "all") return SERVICES;
  return SERVICES.filter(s => s.category === category);
}

export function getCheckboxLabels(): string[] {
  return [...SERVICES.map(s => s.checkboxLabel), "Other / Not sure yet"];
}

export function mapServiceSlugToCheckboxLabel(slug: string): string {
  const service = getServiceBySlug(slug);
  return service?.checkboxLabel || "Systems review";
}
