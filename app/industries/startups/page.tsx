import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { FEATURE_FLAGS } from "@/src/config/featureFlags";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Startup IT and Operations — Polus LLC",
  description: "Build the foundation now so you can scale later. Systems for Oklahoma startups."
};

export default function StartupsPage() {
  return (
    <>
      <Section title="Startups" className="pt-20 md:pt-24">
        <p className="text-2xl text-polus-mint font-medium mb-6">
          Build the foundation now so you can scale later.
        </p>
        <p className="text-lg text-[rgba(254,255,255,0.78)] leading-relaxed max-w-3xl">
          Startups move fast. But skipping foundational systems creates chaos at scale. We help you implement lightweight, scalable processes and IT structure so you can grow without breaking.
        </p>
      </Section>

      <Section title="Common challenges we solve" className="bg-polus-surface1">
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <h3 className="font-semibold text-lg mb-2">MVP planning paralysis</h3>
            <p className="text-sm text-[rgba(254,255,255,0.78)] leading-relaxed">
              Too many features, not enough clarity. We run PRD kickoffs to prioritize ruthlessly and get to launch faster.
            </p>
          </Card>

          <Card>
            <h3 className="font-semibold text-lg mb-2">No documented processes</h3>
            <p className="text-sm text-[rgba(254,255,255,0.78)] leading-relaxed">
              Everything lives in people&apos;s heads. We document core workflows and create SOPs so new hires can ramp quickly.
            </p>
          </Card>

          <Card>
            <h3 className="font-semibold text-lg mb-2">Tool sprawl</h3>
            <p className="text-sm text-[rgba(254,255,255,0.78)] leading-relaxed">
              Too many disconnected tools. We rationalize your stack, integrate workflows, and reduce subscription costs.
            </p>
          </Card>

          <Card>
            <h3 className="font-semibold text-lg mb-2">Security gaps</h3>
            <p className="text-sm text-[rgba(254,255,255,0.78)] leading-relaxed">
              No MFA, shared passwords, unclear access controls. We implement identity and access baselines so you&apos;re secure from day one.
            </p>
          </Card>
        </div>
      </Section>

      <Section title="What we build for startups">
        <div className="max-w-3xl">
          <ul className="space-y-3 text-[rgba(254,255,255,0.78)] list-disc pl-5">
            <li>MVP/PRD kickoff (prioritization and first iteration plan)</li>
            <li>Core workflow SOPs (sales, onboarding, support)</li>
            <li>Microsoft 365 tenant setup and governance</li>
            <li>Identity and access baseline (MFA, admin separation, access review)</li>
            <li>Lead-generation website (built for conversions)</li>
          </ul>
        </div>
      </Section>

      {FEATURE_FLAGS.INDUSTRY_MODULES_ENABLED && (
        <>
          {/* Fast Fixes */}
          <Section title="Fast fixes for startups" eyebrow="Quick wins" className="bg-polus-surface1">
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Card className="p-6">
                <h3 className="font-semibold text-lg mb-3 text-polus-gold">Week 1: Identity Baseline</h3>
                <ul className="space-y-2 text-sm text-[rgba(254,255,255,0.78)] list-disc pl-5">
                  <li>Enable MFA on all Microsoft 365 accounts</li>
                  <li>Separate admin accounts from daily-use accounts</li>
                  <li>Block legacy authentication protocols</li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold text-lg mb-3 text-polus-gold">Week 2: File Structure</h3>
                <ul className="space-y-2 text-sm text-[rgba(254,255,255,0.78)] list-disc pl-5">
                  <li>Create logical Teams/SharePoint structure</li>
                  <li>Set default permissions and sharing policies</li>
                  <li>Establish naming conventions</li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold text-lg mb-3 text-polus-gold">Week 3: Core SOPs</h3>
                <ul className="space-y-2 text-sm text-[rgba(254,255,255,0.78)] list-disc pl-5">
                  <li>Document onboarding process</li>
                  <li>Write customer support workflow</li>
                  <li>Create backup/recovery checklist</li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold text-lg mb-3 text-polus-gold">Week 4: Backup Strategy</h3>
                <ul className="space-y-2 text-sm text-[rgba(254,255,255,0.78)] list-disc pl-5">
                  <li>Verify Microsoft 365 backup coverage</li>
                  <li>Set up version control for code</li>
                  <li>Test recovery procedures</li>
                </ul>
              </Card>
            </div>
          </Section>
        </>
      )}

      <Section className="bg-gradient-to-b from-polus-surface1 to-polus-forest text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            Let&apos;s talk about your roadmap
          </h2>
          <p className="text-lg text-[rgba(254,255,255,0.78)] mb-8">
            Book a free discovery call and we&apos;ll help you prioritize the right next step.
          </p>
          <Button href="/book" variant="primary" className="rounded-lg text-base px-6 py-3">
            Book a Free Discovery Call
          </Button>
        </div>
      </Section>
    </>
  );
}
