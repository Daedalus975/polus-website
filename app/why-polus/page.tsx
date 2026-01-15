import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Polus? | Compare IT Options & Calculate ROI",
  description: "See how Polus compares to DIY IT and traditional MSPs. Calculate your potential ROI and find the right fit for your Oklahoma business."
};

export default function WhyPolusPage() {
  return (
    <>
      <Section title="Why Polus?" eyebrow="How We're Different" className="pt-20 md:pt-24">
        <p className="text-lg text-[rgba(254,255,255,0.78)] leading-relaxed max-w-3xl mx-auto text-center mb-10">
          We fit between doing it yourself and hiring a traditional MSP. You get expert implementation without the overhead.
        </p>
        
        <div className="max-w-5xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-[rgba(177,227,199,0.16)]">
                  <th className="text-left py-4 px-4 text-sm font-semibold text-[rgba(254,255,255,0.62)]"></th>
                  <th className="text-center py-4 px-4 text-base font-semibold text-polus-text">DIY</th>
                  <th className="text-center py-4 px-4 text-base font-semibold text-polus-mint bg-polus-emerald/10 rounded-t-lg">Polus</th>
                  <th className="text-center py-4 px-4 text-base font-semibold text-polus-text">Traditional MSP</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-[rgba(177,227,199,0.08)]">
                  <td className="py-4 px-4 font-medium">Starting Cost</td>
                  <td className="py-4 px-4 text-center text-[rgba(254,255,255,0.78)]">Free (your time)</td>
                  <td className="py-4 px-4 text-center text-polus-text bg-polus-emerald/5">$500–$15k<br/><span className="text-xs text-[rgba(254,255,255,0.62)]">Fixed scope</span></td>
                  <td className="py-4 px-4 text-center text-[rgba(254,255,255,0.78)]">$1,500–$5k/mo<br/><span className="text-xs text-[rgba(254,255,255,0.62)]">Ongoing contract</span></td>
                </tr>
                <tr className="border-b border-[rgba(177,227,199,0.08)]">
                  <td className="py-4 px-4 font-medium">Expertise Level</td>
                  <td className="py-4 px-4 text-center text-[rgba(254,255,255,0.78)]">Learning as you go</td>
                  <td className="py-4 px-4 text-center text-polus-text bg-polus-emerald/5">Deep specialist<br/><span className="text-xs text-[rgba(254,255,255,0.62)]">M365, security, ops</span></td>
                  <td className="py-4 px-4 text-center text-[rgba(254,255,255,0.78)]">Generalist team<br/><span className="text-xs text-[rgba(254,255,255,0.62)]">Multi-client focus</span></td>
                </tr>
                <tr className="border-b border-[rgba(177,227,199,0.08)]">
                  <td className="py-4 px-4 font-medium">Time to Results</td>
                  <td className="py-4 px-4 text-center text-[rgba(254,255,255,0.78)]">Weeks to months</td>
                  <td className="py-4 px-4 text-center text-polus-text bg-polus-emerald/5">1–6 weeks<br/><span className="text-xs text-[rgba(254,255,255,0.62)]">Most projects</span></td>
                  <td className="py-4 px-4 text-center text-[rgba(254,255,255,0.78)]">Ongoing/variable<br/><span className="text-xs text-[rgba(254,255,255,0.62)]">Queue dependent</span></td>
                </tr>
                <tr className="border-b border-[rgba(177,227,199,0.08)]">
                  <td className="py-4 px-4 font-medium">Documentation</td>
                  <td className="py-4 px-4 text-center text-[rgba(254,255,255,0.78)]">If you remember</td>
                  <td className="py-4 px-4 text-center text-polus-text bg-polus-emerald/5">✓ Included<br/><span className="text-xs text-[rgba(254,255,255,0.62)]">SOPs, runbooks, diagrams</span></td>
                  <td className="py-4 px-4 text-center text-[rgba(254,255,255,0.78)]">Sometimes<br/><span className="text-xs text-[rgba(254,255,255,0.62)]">Varies by provider</span></td>
                </tr>
                <tr className="border-b border-[rgba(177,227,199,0.08)]">
                  <td className="py-4 px-4 font-medium">Ongoing Commitment</td>
                  <td className="py-4 px-4 text-center text-[rgba(254,255,255,0.78)]">Your time forever</td>
                  <td className="py-4 px-4 text-center text-polus-text bg-polus-emerald/5">None required<br/><span className="text-xs text-[rgba(254,255,255,0.62)]">Advisory optional</span></td>
                  <td className="py-4 px-4 text-center text-[rgba(254,255,255,0.78)]">12–36 month contracts</td>
                </tr>
                <tr className="border-b border-[rgba(177,227,199,0.08)]">
                  <td className="py-4 px-4 font-medium">Support Model</td>
                  <td className="py-4 px-4 text-center text-[rgba(254,255,255,0.78)]">Google + trial/error</td>
                  <td className="py-4 px-4 text-center text-polus-text bg-polus-emerald/5">30-day handoff support<br/><span className="text-xs text-[rgba(254,255,255,0.62)]">Then advisory if needed</span></td>
                  <td className="py-4 px-4 text-center text-[rgba(254,255,255,0.78)]">24/7 helpdesk<br/><span className="text-xs text-[rgba(254,255,255,0.62)]">All issues included</span></td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-medium">Best For</td>
                  <td className="py-4 px-4 text-center text-[rgba(254,255,255,0.78)]">1–5 employees</td>
                  <td className="py-4 px-4 text-center text-polus-text bg-polus-emerald/5 rounded-b-lg">10–100 employees<br/><span className="text-xs text-[rgba(254,255,255,0.62)]">Project-based work</span></td>
                  <td className="py-4 px-4 text-center text-[rgba(254,255,255,0.78)]">50+ employees<br/><span className="text-xs text-[rgba(254,255,255,0.62)]">Full IT outsourcing</span></td>
                </tr>
              </tbody>
            </table>
          </div>

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
      </Section>

      <Section className="bg-gradient-to-b from-polus-surface1 to-polus-forest text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            Ready to make the switch?
          </h2>
          <p className="text-lg text-[rgba(254,255,255,0.78)] mb-8">
            Book a free discovery call and see if Polus is the right fit for your business.
          </p>
          <Button href="/book" variant="primary" className="rounded-lg text-base px-6 py-3">
            Book a Free Discovery Call
          </Button>
        </div>
      </Section>
    </>
  );
}
