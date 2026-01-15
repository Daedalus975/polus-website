import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { OperatingSystem } from "@/components/OperatingSystem";
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

      <Section title="How we work" eyebrow="Our Operating System" className="bg-polus-surface1">
        <p className="text-lg text-[rgba(254,255,255,0.78)] leading-relaxed max-w-3xl mx-auto text-center mb-10">
          Every engagement follows a clear four-phase framework: assess, plan, implement, adopt. You&apos;ll always know what&apos;s happening and what you&apos;re getting.
        </p>
        <OperatingSystem variant="full" />
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
