import { Section } from "@/components/Section";
import { ROICalculator } from "@/components/ROICalculator";
import { Button } from "@/components/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ROI Calculator | Polus LLC",
  description: "Calculate the potential return on investment for improving your IT systems and operations. See what stronger IT could mean for your Oklahoma business."
};

export default function ROICalculatorPage() {
  return (
    <>
      <Section title="Calculate Your IT ROI" eyebrow="ROI Calculator" className="pt-20 md:pt-24">
        <p className="text-lg text-[rgba(254,255,255,0.78)] leading-relaxed max-w-3xl mx-auto text-center mb-10">
          See what stronger IT systems and operations could mean for your business. Adjust the inputs based on your current reality and project potential savings.
        </p>
        <ROICalculator />
      </Section>

      <Section className="bg-polus-surface1">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
            Want help making these improvements?
          </h2>
          <p className="text-lg text-[rgba(254,255,255,0.78)] mb-6 leading-relaxed">
            We can help you identify where to start, build the systems you need, and train your team to maintain them.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button href="/book" variant="primary" className="rounded-lg text-base px-6 py-3">
              Book a Free Discovery Call
            </Button>
            <Button href="/services" variant="secondary" className="rounded-lg text-base px-6 py-3">
              View Our Services
            </Button>
          </div>
        </div>
      </Section>

      <Section className="bg-gradient-to-b from-polus-surface1 to-polus-forest">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-semibold mb-6 text-center">Understanding the Calculator</h2>
          <div className="space-y-6 text-[rgba(254,255,255,0.78)]">
            <div>
              <h3 className="font-semibold text-polus-mint mb-2">How It Works</h3>
              <p className="leading-relaxed">
                This calculator estimates potential savings and productivity gains from improving your IT infrastructure and operations. 
                The numbers are based on common scenarios we see with Oklahoma small businesses.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-polus-mint mb-2">Assumptions</h3>
              <ul className="space-y-2 list-disc list-inside">
                <li>Downtime costs include both direct revenue loss and employee productivity impact</li>
                <li>Security improvements reduce incident likelihood and response time</li>
                <li>Process automation saves 2-8 hours per week per affected employee</li>
                <li>Better documentation reduces training time by 30-50%</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-polus-mint mb-2">Your Actual Results May Vary</h3>
              <p className="leading-relaxed">
                Every business is different. These estimates provide a directional sense of value, not a guarantee. 
                Book a discovery call to get specific recommendations for your situation.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
