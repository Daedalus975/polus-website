import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Oklahoma IT Consulting | Serving Small Businesses Statewide",
  description: "Polus LLC provides IT consulting and operations services throughout Oklahoma. Specializing in Microsoft 365, backup/DR, and systems management for small businesses in OKC, Tulsa, and beyond.",
  openGraph: {
    title: "Oklahoma IT Consulting | Serving Small Businesses Statewide",
    description: "Polus LLC provides IT consulting and operations services throughout Oklahoma. Specializing in Microsoft 365, backup/DR, and systems management for small businesses in OKC, Tulsa, and beyond."
  }
};

export default function LocationsPage() {
  const serviceAreas = [
    {
      name: "Oklahoma City Metro",
      description: "Serving OKC, Edmond, Norman, Moore, and surrounding communities"
    },
    {
      name: "Tulsa Metro",
      description: "Supporting Tulsa, Broken Arrow, Owasso, Bixby, and nearby areas"
    },
    {
      name: "Statewide Coverage",
      description: "Remote IT consulting available throughout Oklahoma"
    }
  ];

  return (
    <>
      <Section className="py-20 lg:py-32">
        <div className="max-w-3xl">
          <h1 className="font-display text-4xl font-bold tracking-tight text-neutral-950 [text-wrap:balance] sm:text-5xl">
            IT Consulting for Oklahoma Small Businesses
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            Polus LLC provides expert IT consulting and operations services to small businesses throughout Oklahoma—with deep expertise in Microsoft 365, process optimization, backup/disaster recovery, and systems management.
          </p>
          <p className="mt-4 text-lg text-neutral-600">
            Whether you're in Oklahoma City, Tulsa, or anywhere else in the state, we help Oklahoma businesses strengthen their IT infrastructure and optimize their operations.
          </p>
        </div>
      </Section>

      <Section className="pb-20 lg:pb-32">
        <h2 className="font-display text-3xl font-bold tracking-tight text-neutral-950 mb-8">
          Service Areas
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {serviceAreas.map((area) => (
            <Card key={area.name}>
              <h3 className="font-display text-xl font-semibold text-neutral-950 mb-2">
                {area.name}
              </h3>
              <p className="text-neutral-600">{area.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="pb-20 lg:pb-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-neutral-950 mb-6">
              Why Oklahoma Businesses Choose Polus
            </h2>
            <ul className="space-y-4 text-neutral-600">
              <li className="flex gap-3">
                <span className="text-neutral-950 font-semibold">✓</span>
                <span><strong>Local understanding:</strong> We understand the unique needs of Oklahoma small businesses</span>
              </li>
              <li className="flex gap-3">
                <span className="text-neutral-950 font-semibold">✓</span>
                <span><strong>Remote-first expertise:</strong> Serve clients statewide with secure remote support</span>
              </li>
              <li className="flex gap-3">
                <span className="text-neutral-950 font-semibold">✓</span>
                <span><strong>Microsoft 365 specialists:</strong> Deep expertise in the tools Oklahoma businesses use daily</span>
              </li>
              <li className="flex gap-3">
                <span className="text-neutral-950 font-semibold">✓</span>
                <span><strong>Fair pricing:</strong> Transparent pricing designed for small business budgets</span>
              </li>
              <li className="flex gap-3">
                <span className="text-neutral-950 font-semibold">✓</span>
                <span><strong>First 10 clients get 20% off:</strong> New business promotion for early customers</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-neutral-950 mb-6">
              Services We Provide
            </h2>
            <p className="text-neutral-600 mb-4">
              From Microsoft 365 optimization to backup strategy and systems management, we help Oklahoma businesses:
            </p>
            <ul className="space-y-3 text-neutral-600">
              <li>• Secure and optimize Microsoft 365 environments</li>
              <li>• Implement reliable backup and disaster recovery</li>
              <li>• Streamline business processes and workflows</li>
              <li>• Manage IT systems proactively</li>
              <li>• Plan technology strategy and roadmaps</li>
              <li>• Provide ongoing managed IT support</li>
            </ul>
            <div className="mt-8">
              <Button href="/services" variant="primary">
                View All Services
              </Button>
            </div>
          </div>
        </div>
      </Section>

      <Section className="pb-20 lg:pb-32">
        <Card className="text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-neutral-950 mb-4">
            Ready to Strengthen Your IT?
          </h2>
          <p className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">
            Book a free 30-minute discovery call to discuss your IT challenges. No obligation—just clarity on what needs fixing and what it would cost.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/book" variant="primary" size="large">
              Book Free Discovery Call
            </Button>
            <Button href="/contact" variant="secondary" size="large">
              Contact Us
            </Button>
          </div>
        </Card>
      </Section>
    </>
  );
}
