import { Card } from "./Card";

type Deliverable = {
  title: string;
  category: string;
  description: string;
  icon: React.ReactNode;
};

export function DeliverableGallery() {
  const deliverables: Deliverable[] = [
    {
      title: "SOP Document",
      category: "Process",
      description: "Step-by-step standard operating procedure with screenshots, decision trees, and owner assignments.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: "Process Map (Swimlane)",
      category: "Workflow",
      description: "Visual flowchart showing handoffs, decision points, and ownership across departments.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: "Onboarding Checklist",
      category: "HR/IT",
      description: "Day-by-day new hire checklist with IT provisioning, manager touchpoints, and first-week training.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      )
    },
    {
      title: "Disaster Recovery Runbook",
      category: "Backup/DR",
      description: "Step-by-step recovery procedures with contact info, RTO/RPO targets, and validation steps.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: "Service Desk Intake Form",
      category: "IT Support",
      description: "Standardized ticket intake with priority levels, categorization, and routing rules.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      )
    },
    {
      title: "Weekly Operations Review Agenda",
      category: "Management",
      description: "Recurring meeting template with KPIs, blockers review, and action item tracking.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {deliverables.map((item, index) => (
        <Card key={index} className="p-6">
          <div className="flex items-start gap-4 mb-3">
            <div className="w-12 h-12 rounded-lg bg-polus-emerald/20 flex items-center justify-center flex-shrink-0 text-polus-mint">
              {item.icon}
            </div>
            <div className="flex-1">
              <div className="text-xs font-semibold text-polus-gold uppercase tracking-wide mb-1">
                {item.category}
              </div>
              <h3 className="font-semibold text-lg">{item.title}</h3>
            </div>
          </div>
          <p className="text-sm text-[rgba(254,255,255,0.78)] leading-relaxed">
            {item.description}
          </p>
        </Card>
      ))}
    </div>
  );
}
