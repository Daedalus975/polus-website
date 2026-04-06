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
      description: "Serving OKC, Edmond, Norman, Moore, and surrounding communities",
      href: "/locations/oklahoma-city"
    },
    {
      name: "Tulsa Metro",
      description: "Supporting Tulsa, Broken Arrow, Owasso, Bixby, and nearby areas",
      href: "/locations/tulsa"
    },
    {
      name: "Edmond",
      description: "Dedicated service for Edmond and north OKC metro businesses",
      href: "/locations/edmond"
    }
  ];

  return (
    <>
      <Section className="pt-20 md:pt-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-polus-paper mb-6">
            IT Consulting for Oklahoma Small Businesses
          </h1>
          <p className="text-xl text-[rgba(254,255,255,0.88)] leading-relaxed mb-4">
            Polus LLC provides expert IT consulting and operations services to small businesses throughout Oklahoma—with deep expertise in Microsoft 365, process optimization, backup/disaster recovery, and systems management.
          </p>
          <p className="text-lg text-[rgba(254,255,255,0.78)] leading-relaxed">
            Whether you&apos;re in Oklahoma City, Tulsa, or anywhere else in the state, we help Oklahoma businesses strengthen their IT infrastructure and optimize their operations.
          </p>
        </div>
      </Section>

      <Section className="bg-polus-surface1">
        <h2 className="text-3xl font-bold tracking-tight text-polus-paper mb-8">
          Service Areas
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {serviceAreas.map((area) => (
            <Card key={area.name} className="p-6">
              <h3 className="text-xl font-semibold text-polus-mint mb-2">
                {area.name}
              </h3>
              <p className="text-[rgba(254,255,255,0.78)] mb-4">{area.description}</p>
              <Button href={area.href} variant="secondary" className="w-full">
                Learn More
              </Button>
            </Card>
          ))}
        </div>
        <p className="text-[rgba(254,255,255,0.62)] text-center mt-8">
          Remote IT consulting available throughout Oklahoma
        </p>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-polus-paper mb-6">
              Why Oklahoma Businesses Choose Polus
            </h2>
            <ul className="space-y-4 text-[rgba(254,255,255,0.78)]">
              <li className="flex gap-3">
                <span className="text-polus-mint font-semibold">✓</span>
                <span><strong className="text-polus-paper">Local understanding:</strong> We understand the unique needs of Oklahoma small businesses</span>
              </li>
              <li className="flex gap-3">
                <span className="text-polus-mint font-semibold">✓</span>
                <span><strong className="text-polus-paper">Remote-first expertise:</strong> Serve clients statewide with secure remote support</span>
              </li>
              <li className="flex gap-3">
                <span className="text-polus-mint font-semibold">✓</span>
                <span><strong className="text-polus-paper">Microsoft 365 specialists:</strong> Deep expertise in the tools Oklahoma businesses use daily</span>
              </li>
              <li className="flex gap-3">
                <span className="text-polus-mint font-semibold">✓</span>
                <span><strong className="text-polus-paper">Fair pricing:</strong> Transparent pricing designed for small business budgets</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold tracking-tight text-polus-paper mb-6">
              Services We Provide
            </h2>
            <p className="text-[rgba(254,255,255,0.78)] mb-4 leading-relaxed">
              From Microsoft 365 optimization to backup strategy and systems management, we help Oklahoma businesses:
            </p>
            <ul className="space-y-3 text-[rgba(254,255,255,0.78)]">
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

      <Section className="bg-gradient-to-b from-polus-surface1 to-polus-forest">
        <Card className="text-center p-8">
          <h2 className="text-3xl font-bold tracking-tight text-polus-paper mb-4">
            Ready to Strengthen Your IT?
          </h2>
          <p className="text-xl text-[rgba(254,255,255,0.78)] mb-8 max-w-2xl mx-auto leading-relaxed">
            Book a free 30-minute discovery call to discuss your IT challenges. No obligation—just clarity on what needs fixing and what it would cost.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/book" variant="primary">
              Book Free Discovery Call
            </Button>
            <Button href="/contact" variant="secondary">
              Contact Us
            </Button>
          </div>
        </Card>
      </Section>
    </>
  );
}
