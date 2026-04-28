import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Readiness Checklist — Polus LLC",
  description: "Download the Polus Client Readiness & Intake Checklist to prepare for your discovery call or project kickoff.",
};

export default function ChecklistPage() {
  return (
    <>
      <Section title="Client Readiness Checklist" eyebrow="Resources" className="pt-20 md:pt-24">
        <div className="max-w-3xl mx-auto">
          <Card className="p-8">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-4">Prepare for Your Discovery Call</h2>
              <p className="text-[rgba(254,255,255,0.78)] leading-relaxed mb-4">
                This comprehensive checklist helps you clarify what you need, reduce discovery time, and get a faster, more accurate recommendation from Polus.
              </p>
              <p className="text-[rgba(254,255,255,0.78)] leading-relaxed">
                <strong>Time to complete:</strong> 10–15 minutes<br />
                <strong>Best used:</strong> Before or after booking your free discovery call
              </p>
            </div>

            <div className="border-t border-[rgba(177,227,199,0.16)] pt-6 mb-6">
              <h3 className="text-lg font-semibold mb-3">What&apos;s included:</h3>
              <ul className="space-y-2 text-sm text-[rgba(254,255,255,0.78)] list-disc pl-5">
                <li>15 sections covering operations, IT, and business context</li>
                <li>Process pain points and priorities assessment</li>
                <li>Microsoft 365 and IT infrastructure review</li>
                <li>Backup, security, and disaster recovery checklist</li>
                <li>Budget and timeline planning guidance</li>
              </ul>
            </div>

            <div className="bg-polus-surface2 border border-polus-mint/20 rounded-lg p-6 mb-6">
              <p className="text-sm text-[rgba(254,255,255,0.78)] mb-4">
                <strong className="text-polus-mint">Note:</strong> You don&apos;t need to answer every question. Fill out what you can, and leave the rest blank. We&apos;ll work through it together during your discovery call.
              </p>
            </div>

            <div className="bg-polus-surface2 border border-polus-gold/20 rounded-lg p-6 mb-6">
              <p className="text-sm text-[rgba(254,255,255,0.78)]">
                <strong className="text-polus-gold">Privacy Notice:</strong> This checklist helps you prepare for your consultation. No personal data is collected when you download it. If you email your completed checklist to us, your information will be handled according to our{" "}
                <a href="/privacy" className="text-polus-mint hover:text-polus-gold underline">
                  Privacy Policy
                </a>.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-semibold text-polus-mint mb-3">Choose your format:</h3>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    href="/checklists/Polus_Client_Readiness_Intake_Checklist_v1.pdf"
                    variant="primary"
                    className="flex-1"
                  >
                    Download PDF (View/Print)
                  </Button>
                  <Button
                    href="/checklists/Polus_Client_Readiness_Intake_Checklist_v1.xlsx"
                    variant="primary"
                    className="flex-1"
                  >
                    Download Excel (Editable)
                  </Button>
                </div>
              </div>

              <div className="pt-4 border-t border-[rgba(177,227,199,0.16)]">
                <Button
                  href="/book"
                  variant="secondary"
                  className="w-full"
                >
                  Or Book a Discovery Call First
                </Button>
              </div>
            </div>

            <p className="text-xs text-[rgba(254,255,255,0.65)] mt-6 text-center">
              Already filled it out? Email it to <a href="mailto:jack.washmon@polus-cs.com" className="text-polus-mint hover:text-polus-gold transition">jack.washmon@polus-cs.com</a>
            </p>
          </Card>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-b from-polus-surface1 to-polus-forest text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            Ready to get started?
          </h2>
          <p className="text-lg text-[rgba(254,255,255,0.78)] mb-8">
            Book a free 30-minute discovery call. You&apos;ll leave with clear next steps and a recommended starting point.
          </p>
          <Button href="/book" variant="primary" className="px-8 py-3">
            Book a Free Discovery Call
          </Button>
        </div>
      </Section>
    </>
  );
}
