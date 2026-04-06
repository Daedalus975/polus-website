import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { ComparisonTable } from "@/components/ComparisonTable";
import type { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  title: "Why Polus? | Compare IT Options for Oklahoma Businesses",
  description: "See how Polus compares to DIY IT and traditional MSPs. Project-based approach, transparent tiered pricing ($799-$11,000), Microsoft 365 expertise, no long-term contracts.",
  keywords: ["IT consulting Oklahoma", "project-based IT services", "no contract IT consultant", "Microsoft 365 expert", "small business IT consultant", "transparent IT pricing", "vs MSP"],
  alternates: {
    canonical: `${baseUrl}/why-polus`,
  },
  openGraph: {
    title: "Why Polus? | Compare IT Options for Oklahoma Businesses",
    description: "Project-based IT consulting for Oklahoma small businesses. Transparent pricing, M365 expertise, no long-term contracts.",
    url: `${baseUrl}/why-polus`,
  }
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
