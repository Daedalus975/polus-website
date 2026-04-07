import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";

type MetroArea = {
  title: string;
  description: string;
};

type Benefit = {
  title: string;
  description: string;
};

export type LocationData = {
  cityName: string;
  heroTitle: string;
  heroDescription: string;
  sectionTitle: string;
  metroAreas: [MetroArea, MetroArea, MetroArea];
  whyChooseTitle: string;
  benefits: [Benefit, Benefit, Benefit];
};

export function LocationTemplate({ data }: { data: LocationData }) {
  return (
    <>
      <Section title={data.heroTitle} className="pt-20 md:pt-24">
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-[rgba(254,255,255,0.78)] leading-relaxed mb-6">
            {data.heroDescription}
          </p>
        </div>
      </Section>

      <Section className="bg-polus-surface1">
        <h2 className="text-2xl font-semibold mb-6 text-center">{data.sectionTitle}</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {data.metroAreas.map((area, index) => (
            <Card key={index}>
              <h3 className="font-semibold text-lg mb-2">{area.title}</h3>
              <p className="text-sm text-[rgba(254,255,255,0.78)] leading-relaxed">
                {area.description}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">{data.whyChooseTitle}</h2>
          <div className="space-y-4">
            {data.benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <svg className="w-6 h-6 text-polus-mint flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <div className="font-semibold mb-1">{benefit.title}</div>
                  <p className="text-sm text-[rgba(254,255,255,0.78)] leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-polus-surface1">
        <h2 className="text-2xl font-semibold mb-6 text-center">Popular Services for {data.cityName} Businesses</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card>
            <h3 className="font-semibold text-lg mb-2">IT Assessment — $799</h3>
            <p className="text-sm text-[rgba(254,255,255,0.78)] leading-relaxed mb-4">
              90-minute IT systems assessment with documented recommendations and roadmap. Ideal starting point for {data.cityName} businesses.
            </p>
            <Button href="/services/systems-assessment" variant="secondary" className="w-full">
              Learn More
            </Button>
          </Card>
          <Card>
            <h3 className="font-semibold text-lg mb-2">Identity & Security — $6,499</h3>
            <p className="text-sm text-[rgba(254,255,255,0.78)] leading-relaxed mb-4">
              Microsoft Entra ID setup, multi-factor authentication, and device management (Intune). Complete identity foundation for {data.cityName} teams.
            </p>
            <Button href="/services/identity-device-foundation" variant="secondary" className="w-full">
              Learn More
            </Button>
          </Card>
          <Card>
            <h3 className="font-semibold text-lg mb-2">M365 Governance — $3,499</h3>
            <p className="text-sm text-[rgba(254,255,255,0.78)] leading-relaxed mb-4">
              Teams and SharePoint governance structure with naming standards, access controls, and lifecycle policies.
            </p>
            <Button href="/services/m365-governance" variant="secondary" className="w-full">
              Learn More
            </Button>
          </Card>
          <Card>
            <h3 className="font-semibold text-lg mb-2">Backup & DR — $1,499</h3>
            <p className="text-sm text-[rgba(254,255,255,0.78)] leading-relaxed mb-4">
              Backup verification and disaster recovery planning. Ensure business continuity for your {data.cityName} operations.
            </p>
            <Button href="/services/backup-dr-readiness" variant="secondary" className="w-full">
              Learn More
            </Button>
          </Card>
        </div>
      </Section>

      <Section>
        <Card className="max-w-2xl mx-auto text-center p-8">
          <h2 className="text-2xl font-semibold mb-4">Ready to Get Started?</h2>
          <p className="text-[rgba(254,255,255,0.78)] leading-relaxed mb-6">
            Schedule a free 30-minute consultation. We&apos;ll review your current IT environment and recommend next steps.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/book" variant="primary" className="rounded-lg text-base px-6 py-3">
              Book Free Call
            </Button>
            <Button href="/contact" variant="secondary" className="rounded-lg text-base px-6 py-3">
              Request Quote
            </Button>
          </div>
        </Card>
      </Section>
    </>
  );
}
