import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { OperatingSystemAnimated } from "@/components/OperatingSystemAnimated";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Polus | Oklahoma IT Consulting for Small Businesses",
  description: "Oklahoma-based IT consulting specializing in Microsoft 365, process optimization, and systems management for small businesses. Clear, supportable systems built to last. First 10 clients get 20% off.",
  openGraph: {
    title: "About Polus | Oklahoma IT Consulting for Small Businesses",
    description: "Oklahoma-based IT consulting specializing in Microsoft 365, process optimization, and systems management for small businesses. Clear, supportable systems built to last.",
    type: "website"
  },
  twitter: {
    card: "summary",
    title: "About Polus | Oklahoma IT Consulting for Small Businesses",
    description: "Oklahoma-based IT consulting specializing in Microsoft 365, process optimization, and systems management for small businesses."
  }
};

export default function AboutPage() {
  return (
    <>
      <Section title="Meet Polus" className="pt-20 md:pt-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-lg text-[rgba(254,255,255,0.78)] leading-relaxed mb-6">
              Polus is a Tulsa, Oklahoma-based IT consulting firm built around one idea: small businesses deserve systems that are clear, supportable, and built to last.
            </p>
            <p className="text-lg text-[rgba(254,255,255,0.78)] leading-relaxed">
              We help Oklahoma startups and small businesses strengthen their operations and IT through practical, straightforward consulting. Whether you need clearer workflows, better Microsoft 365 governance, or a plan to reduce downtime risk, we build solutions that fit your reality.
            </p>
          </div>
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-cardHover border border-[rgba(177,227,199,0.12)]">
            <Image 
              src="/about/workspace.jpg" 
              alt="Professional workspace with code editor and coffee" 
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </Section>

      <Section title="Our values" className="bg-polus-surface1">
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <div className="w-12 h-12 rounded-lg bg-polus-emerald/20 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-polus-mint" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-2">Integrity</h3>
            <p className="text-sm text-[rgba(254,255,255,0.78)] leading-relaxed">
              We do what&apos;s right for your business, not what&apos;s easiest for us. Honest recommendations, transparent pricing, no overselling.
            </p>
          </Card>

          <Card>
            <div className="w-12 h-12 rounded-lg bg-polus-emerald/20 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-polus-mint" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-2">Accountability</h3>
            <p className="text-sm text-[rgba(254,255,255,0.78)] leading-relaxed">
              We own our work and stand behind our recommendations. Clear expectations, documented deliverables, and responsive follow-up.
            </p>
          </Card>

          <Card>
            <div className="w-12 h-12 rounded-lg bg-polus-emerald/20 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-polus-mint" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-2">Commitment</h3>
            <p className="text-sm text-[rgba(254,255,255,0.78)] leading-relaxed">
              We finish what we start and support what we build. Implementation, training, documentation—we see it through to adoption.
            </p>
          </Card>
        </div>
      </Section>

      <Section title="Why Polus?" eyebrow="How We're Different">
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

      <Section title="How we work" eyebrow="Our Operating System" className="bg-polus-surface1">
        <p className="text-lg text-[rgba(254,255,255,0.78)] leading-relaxed max-w-3xl mx-auto text-center mb-10">
          Every engagement follows a clear four-phase framework: assess, plan, implement, adopt. You&apos;ll always know what&apos;s happening and what you&apos;re getting.
        </p>
        <OperatingSystemAnimated variant="full" />
      </Section>

      <Section className="bg-gradient-to-b from-polus-surface1 to-polus-forest text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            Let&apos;s talk about your systems
          </h2>
          <p className="text-lg text-[rgba(254,255,255,0.78)] mb-8">
            Book a free 30-minute discovery call and leave with clear next steps.
          </p>
          <Button href="/book" variant="primary" className="rounded-lg text-base px-6 py-3">
            Book a Free Discovery Call
          </Button>
        </div>
      </Section>
    </>
  );
}
