import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resource Library — Polus LLC",
  description: "Free IT and operations resources for Oklahoma small businesses. Checklists, templates, guides, and tools to improve your workflows and technology."
};

type Resource = {
  title: string;
  description: string;
  category: "Checklist" | "Template" | "Guide" | "Tool";
  downloadUrl?: string;
  pageUrl?: string;
  icon: string;
};

const resources: Resource[] = [
  {
    title: "Client Readiness Checklist",
    description: "15-point checklist to prepare for your first IT consulting session. Know what access, information, and documentation you'll need.",
    category: "Checklist",
    pageUrl: "/checklist",
    icon: "clipboard"
  },
  {
    title: "M365 Security Audit Checklist",
    description: "70+ security items for Microsoft 365. Identity, email, SharePoint, Teams, endpoint security, monitoring, and compliance. Includes scoring system.",
    category: "Checklist",
    downloadUrl: "/checklists/m365-security-audit-checklist.md",
    icon: "shield"
  },
  {
    title: "Backup & DR Verification Checklist",
    description: "50+ backup verification items. Ensure your backups work before you need them. Includes RTO/RPO documentation and restore testing procedures.",
    category: "Checklist",
    downloadUrl: "/checklists/backup-verification-checklist.md",
    icon: "server"
  }
];

const iconSvgs = {
  clipboard: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />,
  shield: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
  calculator: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />,
  users: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />,
  lock: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />,
  server: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />,
  workflow: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />,
  alert: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
};

export default function ResourcesPage() {
  const categories = ["All", "Checklist", "Template", "Guide", "Tool"] as const;

  return (
    <>
      <Section title="Resource Library" className="pt-20 md:pt-24">
        <p className="text-xl text-[rgba(254,255,255,0.88)] max-w-3xl mb-8">
          Free tools, templates, and guides to help Oklahoma small businesses improve their IT and operations.
        </p>

        <div className="bg-polus-mint/10 border border-polus-mint/30 rounded-lg p-6 mb-10">
          <div className="flex items-start gap-4">
            <svg className="w-6 h-6 text-polus-mint flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <h3 className="font-semibold text-polus-mint mb-2">More Resources Coming Soon</h3>
              <p className="text-[rgba(254,255,255,0.78)] text-sm">
                We&apos;re actively creating more checklists, templates, and guides. 
                Want a specific resource? <a href="/contact" className="text-polus-gold hover:underline">Let us know</a>.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-polus-surface1">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, idx) => (
            <Card key={idx} className="flex flex-col">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-polus-emerald/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-polus-mint" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {iconSvgs[resource.icon as keyof typeof iconSvgs]}
                  </svg>
                </div>
                <div>
                  <div className="inline-block text-xs font-semibold text-polus-gold bg-polus-gold/10 px-2 py-1 rounded mb-2">
                    {resource.category}
                  </div>
                  <h3 className="text-lg font-semibold">{resource.title}</h3>
                </div>
              </div>

              <p className="text-[rgba(254,255,255,0.78)] mb-6 flex-grow">
                {resource.description}
              </p>

              {resource.pageUrl ? (
                <Button href={resource.pageUrl} variant="secondary" className="w-full">
                  View Checklist
                </Button>
              ) : resource.downloadUrl ? (
                <a 
                  href={resource.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg font-semibold text-[15px] transition-all duration-200 border-2 border-polus-mint text-polus-mint hover:bg-polus-mint hover:text-polus-surface1 w-full"
                >
                  View Checklist
                </a>
              ) : (
                <Button 
                  href="#" 
                  variant="secondary" 
                  className="w-full opacity-50 cursor-not-allowed"
                  disabled
                >
                  Coming Soon
                </Button>
              )}
            </Card>
          ))}
        </div>
      </Section>

      <Section className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Need something specific?</h2>
        <p className="text-[rgba(254,255,255,0.78)] mb-6 max-w-2xl mx-auto">
          Don&apos;t see what you need? Let us know what resources would be most helpful for your business.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button href="/contact" variant="primary">Request a Resource</Button>
          <Button href="/book" variant="secondary">Book Discovery Call</Button>
        </div>
      </Section>
    </>
  );
}
