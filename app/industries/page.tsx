import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries We Help — Oklahoma IT and Operations | Polus",
  description: "Tailored systems for construction, nonprofits, and startups in Oklahoma."
};

export default function IndustriesPage() {
  const industries = [
    {
      title: "Construction",
      description: "Reduce rework, standardize handoffs, and keep projects moving.",
      slug: "construction"
    },
    {
      title: "Nonprofits",
      description: "Less admin overhead. More mission impact. Cleaner systems.",
      slug: "nonprofits"
    },
    {
      title: "Startups",
      description: "Build the foundation now so you can scale later.",
      slug: "startups"
    }
  ];

  return (
    <>
      <Section title="Industries we help" className="pt-20 md:pt-24">
        <p className="text-lg text-[rgba(254,255,255,0.78)] leading-relaxed max-w-3xl mb-10">
          We tailor systems to your reality—without overcomplicating it.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {industries.map((industry) => (
            <Link key={industry.slug} href={`/industries/${industry.slug}`}>
              <Card className="h-full hover:shadow-cardHover hover:border-polus-gold/50 transition-all cursor-pointer">
                <h3 className="font-semibold text-xl mb-3">{industry.title}</h3>
                <p className="text-sm text-[rgba(254,255,255,0.78)] leading-relaxed">
                  {industry.description}
                </p>
                <div className="mt-4 text-sm text-polus-gold flex items-center gap-1">
                  Learn more
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="bg-gradient-to-b from-polus-surface1 to-polus-forest text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            Don&apos;t see your industry?
          </h2>
          <p className="text-lg text-[rgba(254,255,255,0.78)] mb-8">
            We work with all types of small businesses. Book a call to discuss your specific needs.
          </p>
          <a
            href="/book"
            className="inline-flex items-center justify-center rounded-lg px-6 py-3 text-base font-semibold bg-polus-gold text-polus-forest hover:brightness-110 transition focus:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(17,98,56,0.40)]"
          >
            Book a Free Discovery Call
          </a>
        </div>
      </Section>
    </>
  );
}
