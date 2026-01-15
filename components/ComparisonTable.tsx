'use client';

import { useState } from "react";
import { Card } from "./Card";

type ComparisonRow = {
  category: string;
  description: string;
  diy: string;
  diyDetail?: string;
  polus: string;
  polusDetail?: string;
  msp: string;
  mspDetail?: string;
};

const comparisons: ComparisonRow[] = [
  {
    category: "Starting Cost",
    description: "Upfront investment to get started",
    diy: "Free (your time)",
    diyDetail: "No direct costs, but significant time investment from you or your team",
    polus: "$500–$15k",
    polusDetail: "Fixed-scope projects with clear deliverables and timeline. No ongoing contracts required.",
    msp: "$1,500–$5k/mo",
    mspDetail: "Monthly recurring fee with 12-36 month contract commitments"
  },
  {
    category: "Expertise Level",
    description: "Depth of knowledge and experience",
    diy: "Learning as you go",
    diyDetail: "You'll research solutions and learn through trial and error. Great for learning, risky for critical systems.",
    polus: "Deep specialist",
    polusDetail: "Microsoft 365 expert, security-focused, operations optimization specialist. We've done this hundreds of times.",
    msp: "Generalist team",
    mspDetail: "Broad coverage across many technologies and clients. Jack of all trades approach."
  },
  {
    category: "Time to Results",
    description: "How fast you'll see value",
    diy: "Weeks to months",
    diyDetail: "Learning curve, research time, and implementation all add up. Often interrupted by day-to-day work.",
    polus: "1–6 weeks",
    polusDetail: "Most projects complete within this timeframe. We start immediately and focus on deliverables.",
    msp: "Ongoing/variable",
    mspDetail: "Work gets queued behind other clients. Timeline depends on their capacity and priorities."
  },
  {
    category: "Documentation",
    description: "Knowledge transfer and runbooks",
    diy: "If you remember",
    diyDetail: "Documentation often skipped when you're busy. Becomes tribal knowledge that leaves when people do.",
    polus: "✓ Included",
    polusDetail: "SOPs, runbooks, diagrams, and decision logs included in every project. You own the knowledge.",
    msp: "Sometimes",
    mspDetail: "Documentation quality varies by provider. Often kept internally rather than handed to you."
  },
  {
    category: "Ongoing Commitment",
    description: "What happens after initial setup",
    diy: "Your time forever",
    diyDetail: "You're responsible for maintenance, updates, and troubleshooting indefinitely.",
    polus: "None required",
    polusDetail: "30-day handoff support included. Optional IT Advisory available if you want ongoing guidance.",
    msp: "12–36 month contracts",
    mspDetail: "Long-term contracts with early termination fees. You're locked in even if needs change."
  },
  {
    category: "Support Model",
    description: "How you get help when stuck",
    diy: "Google + trial/error",
    diyDetail: "Stack Overflow, Reddit, Microsoft docs. Hope you find the right answer before something breaks.",
    polus: "30-day handoff support",
    polusDetail: "Direct access during handoff period, then optional Advisory retainer for ongoing questions.",
    msp: "24/7 helpdesk",
    mspDetail: "Ticket system for all issues, covered by your monthly fee. Great for constant support needs."
  },
  {
    category: "Best For",
    description: "Ideal business size and situation",
    diy: "1–5 employees",
    diyDetail: "Very small teams where everyone wears multiple hats and budget is tight.",
    polus: "10–100 employees",
    polusDetail: "Project-based work, one-time modernization, or specific problem-solving. You want control, not outsourcing.",
    msp: "50+ employees",
    mspDetail: "Full IT outsourcing needs. Ongoing helpdesk, monitoring, and comprehensive support."
  }
];

export function ComparisonTable() {
  const [hoveredCell, setHoveredCell] = useState<string | null>(null);
  const [selectedOption, setSelectedOption] = useState<'diy' | 'polus' | 'msp' | null>(null);

  return (
    <div className="max-w-5xl mx-auto">
      {/* Mobile: Option Selector */}
      <div className="md:hidden mb-6">
        <div className="flex gap-2">
          {[
            { key: 'diy' as const, label: 'DIY' },
            { key: 'polus' as const, label: 'Polus', highlight: true },
            { key: 'msp' as const, label: 'MSP' }
          ].map(option => (
            <button
              key={option.key}
              onClick={() => setSelectedOption(selectedOption === option.key ? null : option.key)}
              className={`flex-1 px-4 py-3 rounded-lg font-semibold transition ${
                selectedOption === option.key
                  ? option.highlight
                    ? 'bg-polus-mint text-polus-forest'
                    : 'bg-polus-gold text-polus-forest'
                  : option.highlight
                  ? 'bg-polus-emerald/10 text-polus-mint border border-polus-mint/30'
                  : 'bg-polus-surface1 text-polus-text border border-[rgba(177,227,199,0.16)]'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
        {selectedOption && (
          <p className="text-xs text-[rgba(254,255,255,0.62)] mt-2 text-center">
            Tap again to compare all options
          </p>
        )}
      </div>

      {/* Desktop: Full Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-[rgba(177,227,199,0.16)]">
              <th className="text-left py-4 px-4 text-sm font-semibold text-[rgba(254,255,255,0.62)] w-1/4"></th>
              <th className="text-center py-4 px-4 text-base font-semibold text-polus-text w-1/4">DIY</th>
              <th className="text-center py-4 px-4 text-base font-semibold text-polus-mint bg-polus-emerald/10 rounded-t-lg w-1/4">
                Polus
              </th>
              <th className="text-center py-4 px-4 text-base font-semibold text-polus-text w-1/4">Traditional MSP</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {comparisons.map((row, idx) => (
              <tr key={row.category} className={idx < comparisons.length - 1 ? "border-b border-[rgba(177,227,199,0.08)]" : ""}>
                <td className="py-4 px-4">
                  <div>
                    <div className="font-medium">{row.category}</div>
                    <div className="text-xs text-[rgba(254,255,255,0.45)] mt-1">{row.description}</div>
                  </div>
                </td>
                
                {/* DIY Column */}
                <td
                  className="py-4 px-4 text-center text-[rgba(254,255,255,0.78)] relative group cursor-help"
                  onMouseEnter={() => setHoveredCell(`diy-${idx}`)}
                  onMouseLeave={() => setHoveredCell(null)}
                >
                  <div dangerouslySetInnerHTML={{ __html: row.diy }} />
                  {row.diyDetail && hoveredCell === `diy-${idx}` && (
                    <div className="absolute z-10 bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-64 p-3 bg-polus-forest border border-polus-gold/30 rounded-lg shadow-xl text-xs text-left">
                      <div className="text-polus-gold font-semibold mb-1">DIY Approach</div>
                      <div className="text-[rgba(254,255,255,0.78)]">{row.diyDetail}</div>
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1 w-2 h-2 bg-polus-forest border-r border-b border-polus-gold/30 rotate-45"></div>
                    </div>
                  )}
                </td>

                {/* Polus Column */}
                <td
                  className={`py-4 px-4 text-center text-polus-text bg-polus-emerald/5 relative group cursor-help ${
                    idx === comparisons.length - 1 ? 'rounded-b-lg' : ''
                  }`}
                  onMouseEnter={() => setHoveredCell(`polus-${idx}`)}
                  onMouseLeave={() => setHoveredCell(null)}
                >
                  <div dangerouslySetInnerHTML={{ __html: row.polus }} />
                  {row.polusDetail && (
                    <div className="text-xs text-[rgba(254,255,255,0.62)] mt-1">{row.polusDetail.split('.')[0]}.</div>
                  )}
                  {row.polusDetail && hoveredCell === `polus-${idx}` && (
                    <div className="absolute z-10 bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-64 p-3 bg-polus-forest border border-polus-mint/30 rounded-lg shadow-xl text-xs text-left">
                      <div className="text-polus-mint font-semibold mb-1">Polus Approach</div>
                      <div className="text-[rgba(254,255,255,0.78)]">{row.polusDetail}</div>
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1 w-2 h-2 bg-polus-forest border-r border-b border-polus-mint/30 rotate-45"></div>
                    </div>
                  )}
                </td>

                {/* MSP Column */}
                <td
                  className="py-4 px-4 text-center text-[rgba(254,255,255,0.78)] relative group cursor-help"
                  onMouseEnter={() => setHoveredCell(`msp-${idx}`)}
                  onMouseLeave={() => setHoveredCell(null)}
                >
                  <div dangerouslySetInnerHTML={{ __html: row.msp }} />
                  {row.mspDetail && hoveredCell === `msp-${idx}` && (
                    <div className="absolute z-10 bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-64 p-3 bg-polus-forest border border-polus-gold/30 rounded-lg shadow-xl text-xs text-left">
                      <div className="text-polus-gold font-semibold mb-1">MSP Approach</div>
                      <div className="text-[rgba(254,255,255,0.78)]">{row.mspDetail}</div>
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1 w-2 h-2 bg-polus-forest border-r border-b border-polus-gold/30 rotate-45"></div>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile: Card View */}
      <div className="md:hidden space-y-4">
        {comparisons.map((row) => {
          const showDiy = !selectedOption || selectedOption === 'diy';
          const showPolus = !selectedOption || selectedOption === 'polus';
          const showMsp = !selectedOption || selectedOption === 'msp';

          return (
            <Card key={row.category} className="p-4">
              <div className="font-semibold text-polus-mint mb-1">{row.category}</div>
              <div className="text-xs text-[rgba(254,255,255,0.45)] mb-3">{row.description}</div>
              
              <div className="space-y-3">
                {showDiy && (
                  <div>
                    <div className="text-xs text-[rgba(254,255,255,0.62)] mb-1">DIY</div>
                    <div className="text-sm text-[rgba(254,255,255,0.88)]">{row.diy}</div>
                    {row.diyDetail && (
                      <div className="text-xs text-[rgba(254,255,255,0.62)] mt-1 pl-3 border-l-2 border-[rgba(177,227,199,0.16)]">
                        {row.diyDetail}
                      </div>
                    )}
                  </div>
                )}

                {showPolus && (
                  <div className="bg-polus-emerald/10 p-3 rounded-lg border border-polus-mint/20">
                    <div className="text-xs text-polus-mint mb-1">Polus</div>
                    <div className="text-sm font-semibold text-polus-text">{row.polus}</div>
                    {row.polusDetail && (
                      <div className="text-xs text-[rgba(254,255,255,0.78)] mt-1">
                        {row.polusDetail}
                      </div>
                    )}
                  </div>
                )}

                {showMsp && (
                  <div>
                    <div className="text-xs text-[rgba(254,255,255,0.62)] mb-1">Traditional MSP</div>
                    <div className="text-sm text-[rgba(254,255,255,0.88)]">{row.msp}</div>
                    {row.mspDetail && (
                      <div className="text-xs text-[rgba(254,255,255,0.62)] mt-1 pl-3 border-l-2 border-[rgba(177,227,199,0.16)]">
                        {row.mspDetail}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </Card>
          );
        })}
      </div>

      {/* Sweet Spot Card */}
      <Card className="mt-8 p-6 bg-polus-forest/20 border-polus-mint/20">
        <div className="text-center">
          <h3 className="font-semibold text-lg mb-3 text-polus-mint">Our Sweet Spot</h3>
          <p className="text-[rgba(254,255,255,0.78)] leading-relaxed mb-4">
            We&apos;re ideal for businesses that need expert implementation of specific IT projects—like modernizing identity management, 
            establishing M365 governance, or documenting critical processes—without the overhead of a full MSP contract.
          </p>
          <p className="text-sm text-[rgba(254,255,255,0.62)]">
            You keep control. We build the foundation. Your team runs with it.
          </p>
        </div>
      </Card>
    </div>
  );
}
