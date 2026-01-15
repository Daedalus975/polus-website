import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { FEATURE_FLAGS } from "@/src/config/featureFlags";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Construction IT and Operations — Polus LLC",
  description: "Reduce rework, standardize handoffs, and keep construction projects moving with better systems."
};

export default function ConstructionPage() {
  return (
    <>
      <Section title="Construction" className="pt-20 md:pt-24">
        <p className="text-2xl text-polus-mint font-medium mb-6">
          Reduce rework, standardize handoffs, and keep projects moving.
        </p>
        <p className="text-lg text-[rgba(254,255,255,0.78)] leading-relaxed max-w-3xl">
          Construction projects live or die on communication and handoffs. We help you document processes, reduce rework, and keep teams aligned—without adding overhead.
        </p>
      </Section>

      <Section title="Common challenges we solve" className="bg-polus-surface1">
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <h3 className="font-semibold text-lg mb-2">Handoff chaos</h3>
            <p className="text-sm text-[rgba(254,255,255,0.78)] leading-relaxed">
              Missing details between estimating, project management, and field teams lead to rework and delays. We map workflows and create handoff checklists.
            </p>
          </Card>

          <Card>
            <h3 className="font-semibold text-lg mb-2">Document sprawl</h3>
            <p className="text-sm text-[rgba(254,255,255,0.78)] leading-relaxed">
              Files scattered across email, texts, and drives. We implement SharePoint structure and governance so everyone knows where to find what they need.
            </p>
          </Card>

          <Card>
            <h3 className="font-semibold text-lg mb-2">Onboarding delays</h3>
            <p className="text-sm text-[rgba(254,255,255,0.78)] leading-relaxed">
              New hires take weeks to get up to speed. We build onboarding SOPs and checklists to reduce ramp time and improve consistency.
            </p>
          </Card>

          <Card>
            <h3 className="font-semibold text-lg mb-2">Tool overload</h3>
            <p className="text-sm text-[rgba(254,255,255,0.78)] leading-relaxed">
              Too many tools, not enough integration. We rationalize your stack and automate workflows between systems using Power Automate or Zapier.
            </p>
          </Card>
        </div>
      </Section>

      <Section title="What we build for construction">
        <div className="max-w-3xl">
          <ul className="space-y-3 text-[rgba(254,255,255,0.78)]">
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-polus-mint flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Estimating-to-PM-to-field handoff checklists</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-polus-mint flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>SharePoint structure for project documentation and RFIs</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-polus-mint flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Field onboarding SOPs (safety, tools, reporting)</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-polus-mint flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Workflow automation (e.g., PO approvals, change orders)</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-polus-mint flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Mobile device management and endpoint security</span>
            </li>
          </ul>
        </div>
      </Section>

      {FEATURE_FLAGS.INDUSTRY_MODULES_ENABLED && (
        <>
          {/* Fast Fixes for Construction */}
          <Section title="Fast fixes for construction teams" eyebrow="Quick wins" className="bg-polus-surface1">
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
              <Card className="p-6">
                <h3 className="font-semibold text-lg mb-3 text-polus-gold">Handoff Checklist</h3>
                <p className="text-sm text-[rgba(254,255,255,0.78)] mb-3">
                  Reduce rework by standardizing what gets handed off between estimating, PM, and field.
                </p>
                <ul className="space-y-2 text-sm text-[rgba(254,255,255,0.78)]">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-polus-mint flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Create a handoff form template
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-polus-mint flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Require sign-off at each stage
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-polus-mint flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Store in SharePoint project folder
                  </li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold text-lg mb-3 text-polus-gold">RFI Response Workflow</h3>
                <p className="text-sm text-[rgba(254,255,255,0.78)] mb-3">
                  Stop losing RFIs in email. Create a simple intake and tracking system.
                </p>
                <ul className="space-y-2 text-sm text-[rgba(254,255,255,0.78)]">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-polus-mint flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Use Forms for RFI intake
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-polus-mint flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Auto-route to PM or estimator
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-polus-mint flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Track in a shared list or board
                  </li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold text-lg mb-3 text-polus-gold">Project Folder Template</h3>
                <p className="text-sm text-[rgba(254,255,255,0.78)] mb-3">
                  Standardize where docs live so teams don&apos;t waste time searching.
                </p>
                <ul className="space-y-2 text-sm text-[rgba(254,255,255,0.78)]">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-polus-mint flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Create a template structure in SharePoint
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-polus-mint flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Auto-create for each new project
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-polus-mint flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Include folders for contracts, submittals, photos, RFIs
                  </li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold text-lg mb-3 text-polus-gold">Daily Report Automation</h3>
                <p className="text-sm text-[rgba(254,255,255,0.78)] mb-3">
                  Stop chasing field reports. Use a simple form that auto-compiles.
                </p>
                <ul className="space-y-2 text-sm text-[rgba(254,255,255,0.78)]">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-polus-mint flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Mobile-friendly Forms template
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-polus-mint flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Auto-send to PM and site manager
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-polus-mint flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Archive responses for each project
                  </li>
                </ul>
              </Card>
            </div>
          </Section>
        </>
      )}

      <Section className="bg-gradient-to-b from-polus-surface1 to-polus-forest text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            Let&apos;s talk about your projects
          </h2>
          <p className="text-lg text-[rgba(254,255,255,0.78)] mb-8">
            Book a free discovery call and we&apos;ll map out a practical next step.
          </p>
          <Button href="/book" variant="primary" className="rounded-lg text-base px-6 py-3">
            Book a Free Discovery Call
          </Button>
        </div>
      </Section>
    </>
  );
}
