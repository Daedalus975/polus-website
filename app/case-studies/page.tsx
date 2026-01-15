import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies — Polus LLC",
  description: "Real results from Oklahoma businesses. See how Polus has helped companies improve their IT systems, processes, and operations."
};

type CaseStudy = {
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  services: string[];
  timeline: string;
  teamSize: string;
};

// Placeholder case studies - replace with real client work
const caseStudies: CaseStudy[] = [
  {
    title: "Coming Soon",
    client: "Oklahoma Business",
    industry: "Construction",
    challenge: "This section will showcase real client results once we complete initial engagements. We prioritize client confidentiality and will only publish case studies with explicit permission.",
    solution: "Each case study will detail the challenges faced, solutions implemented, and measurable results achieved.",
    results: [
      "Real metrics from client engagements",
      "Before/after comparisons",
      "Documented ROI and time savings",
      "Client testimonials (with permission)"
    ],
    services: ["Systems Assessment", "M365 Governance", "Process Documentation"],
    timeline: "Available after first client projects complete",
    teamSize: "TBD"
  }
];

export default function CaseStudiesPage() {
  return (
    <>
      <Section title="Case Studies" eyebrow="Real Results" className="pt-20 md:pt-24">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl text-[rgba(254,255,255,0.88)] leading-relaxed mb-8">
            We&apos;re building this section as we complete client engagements. Check back soon for detailed case studies 
            showing how Oklahoma businesses improved their IT systems and operations with Polus.
          </p>
          
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-polus-gold/10 border border-polus-gold/30">
            <svg className="w-5 h-5 text-polus-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm font-semibold text-polus-gold">
              First case studies publishing Q1 2026
            </span>
          </div>
        </div>
      </Section>

      <Section className="bg-polus-surface1">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold mb-8 text-center">What to Expect</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-3 text-polus-mint">
                Detailed Implementation Stories
              </h3>
              <ul className="space-y-2 text-sm text-[rgba(254,255,255,0.78)]">
                <li className="flex items-start gap-2">
                  <span className="text-polus-mint mt-0.5">✓</span>
                  <span>Initial challenges and pain points</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-polus-mint mt-0.5">✓</span>
                  <span>Solutions designed and implemented</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-polus-mint mt-0.5">✓</span>
                  <span>Timeline and team involvement</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-polus-mint mt-0.5">✓</span>
                  <span>Technical approach and tools used</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-3 text-polus-mint">
                Measurable Results
              </h3>
              <ul className="space-y-2 text-sm text-[rgba(254,255,255,0.78)]">
                <li className="flex items-start gap-2">
                  <span className="text-polus-mint mt-0.5">✓</span>
                  <span>Time savings achieved</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-polus-mint mt-0.5">✓</span>
                  <span>Cost reductions or efficiency gains</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-polus-mint mt-0.5">✓</span>
                  <span>Security or compliance improvements</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-polus-mint mt-0.5">✓</span>
                  <span>ROI and payback period</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-gradient-to-br from-polus-forest/40 to-polus-emerald/10 border-polus-mint/20">
            <h2 className="text-2xl font-semibold mb-4 text-center text-polus-mint">
              Want Your Success Story Featured?
            </h2>
            <p className="text-[rgba(254,255,255,0.78)] leading-relaxed mb-6 text-center max-w-2xl mx-auto">
              We only publish case studies with explicit client permission. If you&apos;ve worked with Polus and would like to 
              share your results, we&apos;d be honored to showcase your story. We handle all writing, editing, and review.
            </p>
            
            <div className="bg-polus-surface1 rounded-lg p-6 mb-6">
              <h3 className="font-semibold mb-3">Your Benefits:</h3>
              <ul className="space-y-2 text-sm text-[rgba(254,255,255,0.78)]">
                <li className="flex items-start gap-2">
                  <span className="text-polus-mint mt-0.5">•</span>
                  <span>Professional documentation of your IT improvements</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-polus-mint mt-0.5">•</span>
                  <span>Recognition as an innovative Oklahoma business</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-polus-mint mt-0.5">•</span>
                  <span>10% discount on your next Polus project</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-polus-mint mt-0.5">•</span>
                  <span>Full approval before publication (no surprises)</span>
                </li>
              </ul>
            </div>
            
            <div className="text-center">
              <Button href="/contact" variant="primary" className="px-8 py-3 text-base">
                Discuss a Case Study
              </Button>
            </div>
          </Card>
        </div>
      </Section>

      <Section className="bg-polus-surface1">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-4">
            In the meantime...
          </h2>
          <p className="text-[rgba(254,255,255,0.78)] leading-relaxed mb-8">
            Want to see what we can do for your business? Our discovery calls are free and you&apos;ll leave with a clear plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/book" variant="primary" className="px-6 py-3 text-base">
              Book Free Discovery Call
            </Button>
            <Button href="/services" variant="secondary" className="px-6 py-3 text-base">
              View Our Services
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
