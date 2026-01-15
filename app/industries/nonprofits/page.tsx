import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { FEATURE_FLAGS } from "@/src/config/featureFlags";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nonprofit IT and Operations — Polus LLC",
  description: "Less admin overhead. More mission impact. Cleaner systems for nonprofit organizations."
};

export default function NonprofitsPage() {
  return (
    <>
      <Section title="Nonprofits" className="pt-20 md:pt-24">
        <p className="text-2xl text-polus-mint font-medium mb-6">
          Less admin overhead. More mission impact. Cleaner systems.
        </p>
        <p className="text-lg text-[rgba(254,255,255,0.78)] leading-relaxed max-w-3xl">
          Nonprofits operate lean. Every hour spent on admin is an hour not spent on mission. We help you streamline operations, reduce tech overhead, and build sustainable processes.
        </p>
      </Section>

      <Section title="Common challenges we solve" className="bg-polus-surface1">
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <h3 className="font-semibold text-lg mb-2">Volunteer coordination</h3>
            <p className="text-sm text-[rgba(254,255,255,0.78)] leading-relaxed">
              High turnover and inconsistent processes. We build onboarding SOPs and volunteer management workflows so transitions are smooth.
            </p>
          </Card>

          <Card>
            <h3 className="font-semibold text-lg mb-2">Grant reporting overhead</h3>
            <p className="text-sm text-[rgba(254,255,255,0.78)] leading-relaxed">
              Manual data collection and reporting. We automate workflows and centralize data so reporting takes minutes, not days.
            </p>
          </Card>

          <Card>
            <h3 className="font-semibold text-lg mb-2">Donor data management</h3>
            <p className="text-sm text-[rgba(254,255,255,0.78)] leading-relaxed">
              Scattered donor info and duplicate records. We implement CRM structure and governance to keep data clean and actionable.
            </p>
          </Card>

          <Card>
            <h3 className="font-semibold text-lg mb-2">Limited IT budget</h3>
            <p className="text-sm text-[rgba(254,255,255,0.78)] leading-relaxed">
              Can&apos;t afford full-time IT. We provide fixed-scope packages and flexible support so you get expert help without the overhead.
            </p>
          </Card>
        </div>
      </Section>

      <Section title="What we build for nonprofits">
        <div className="max-w-3xl">
          <ul className="space-y-3 text-[rgba(254,255,255,0.78)]">
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-polus-mint flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Volunteer onboarding checklists and training materials</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-polus-mint flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Grant reporting automation (forms → database → reports)</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-polus-mint flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Microsoft 365 for Nonprofits setup and governance</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-polus-mint flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Donor CRM cleanup and data migration</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-polus-mint flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Backup and disaster recovery planning</span>
            </li>
          </ul>
        </div>
      </Section>

      {FEATURE_FLAGS.INDUSTRY_MODULES_ENABLED && (
        <>
          {/* Fast Fixes for Nonprofits */}
          <Section title="Fast fixes for nonprofits" eyebrow="Quick wins" className="bg-polus-surface1">
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
              <Card className="p-6">
                <h3 className="font-semibold text-lg mb-3 text-polus-gold">Volunteer Onboarding SOP</h3>
                <p className="text-sm text-[rgba(254,255,255,0.78)] mb-3">
                  Reduce onboarding time and improve consistency with a simple checklist.
                </p>
                <ul className="space-y-2 text-sm text-[rgba(254,255,255,0.78)]">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-polus-mint flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Create welcome packet template
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-polus-mint flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Document role-specific training
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-polus-mint flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Store in SharePoint with version history
                  </li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold text-lg mb-3 text-polus-gold">Grant Reporting Automation</h3>
                <p className="text-sm text-[rgba(254,255,255,0.78)] mb-3">
                  Reduce reporting time from days to minutes with simple automation.
                </p>
                <ul className="space-y-2 text-sm text-[rgba(254,255,255,0.78)]">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-polus-mint flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Use Forms to collect program data
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-polus-mint flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Auto-populate Excel report templates
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-polus-mint flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Schedule reminders before deadlines
                  </li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold text-lg mb-3 text-polus-gold">Donor Database Cleanup</h3>
                <p className="text-sm text-[rgba(254,255,255,0.78)] mb-3">
                  Clean up duplicates and missing data so your CRM is actually useful.
                </p>
                <ul className="space-y-2 text-sm text-[rgba(254,255,255,0.78)]">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-polus-mint flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Identify and merge duplicates
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-polus-mint flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Standardize naming and tagging
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-polus-mint flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Set data entry rules going forward
                  </li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold text-lg mb-3 text-polus-gold">Microsoft 365 for Nonprofits</h3>
                <p className="text-sm text-[rgba(254,255,255,0.78)] mb-3">
                  Get discounted (or free) M365 licenses and set up properly from day one.
                </p>
                <ul className="space-y-2 text-sm text-[rgba(254,255,255,0.78)]">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-polus-mint flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Apply for nonprofit pricing
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-polus-mint flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Set up Teams, SharePoint, Planner
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-polus-mint flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Establish governance policies
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
            Let&apos;s talk about your mission
          </h2>
          <p className="text-lg text-[rgba(254,255,255,0.78)] mb-8">
            Book a free discovery call and we&apos;ll find ways to reduce overhead and increase impact.
          </p>
          <Button href="/book" variant="primary" className="rounded-lg text-base px-6 py-3">
            Book a Free Discovery Call
          </Button>
        </div>
      </Section>
    </>
  );
}
