import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { OperatingSystemAnimated } from "@/components/OperatingSystemAnimated";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Polus | Oklahoma IT Consulting for Small Businesses",
  description: "Oklahoma-based IT consulting specializing in Microsoft 365, process optimization, and systems management for small businesses. Clear, supportable systems built to last.",
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
          <div>
            <Image 
              src="/Polus-Logo-RGB.png" 
              alt="Polus LLC Logo" 
              width={400}
              height={133}
              className="w-full h-auto"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </Section>

      <Section title="Our values" className="bg-polus-surface1">
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <h3 className="font-semibold text-xl mb-3 text-polus-mint">Integrity</h3>
            <p className="text-sm text-[rgba(254,255,255,0.78)] leading-relaxed">
              We do what&apos;s right for your business, not what&apos;s easiest for us. Honest recommendations, transparent pricing, no overselling.
            </p>
          </Card>

          <Card>
            <h3 className="font-semibold text-xl mb-3 text-polus-mint">Accountability</h3>
            <p className="text-sm text-[rgba(254,255,255,0.78)] leading-relaxed">
              We own our work and stand behind our recommendations. Clear expectations, documented deliverables, and responsive follow-up.
            </p>
          </Card>

          <Card>
            <h3 className="font-semibold text-xl mb-3 text-polus-mint">Commitment</h3>
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
