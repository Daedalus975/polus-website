import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { ComparisonTable } from "@/components/ComparisonTable";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Polus? | Compare IT Options for Oklahoma Businesses",
  description: "See how Polus compares to DIY IT and traditional MSPs. Find the right IT solution for your Oklahoma small business."
};

export default function WhyPolusPage() {
  return (
    <>
      <Section title="Why Polus?" eyebrow="How We're Different" className="pt-20 md:pt-24">
        <p className="text-lg text-[rgba(254,255,255,0.78)] leading-relaxed max-w-3xl mx-auto text-center mb-10">
          We fit between doing it yourself and hiring a traditional MSP. You get expert implementation without the overhead.
        </p>
        
        <ComparisonTable />
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
