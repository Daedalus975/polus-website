import { Section } from "@/components/Section";
import { CalendlyEmbed } from "@/components/CalendlyEmbed";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Free Discovery Call — Polus LLC",
  description: "Free • 30 minutes • You'll leave with next steps. Book your discovery call today."
};

export default function BookPage() {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/jack-washmon-polus-cs/30min";

  return (
    <Section title="Book a Free Discovery Call" className="pt-20 md:pt-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-lg text-[rgba(254,255,255,0.78)] leading-relaxed mb-4">
            Free • 30 minutes • You&apos;ll leave with next steps
          </p>
          <p className="text-[rgba(254,255,255,0.62)]">
            We&apos;ll talk about your goals, current challenges, and what success looks like. Then we&apos;ll recommend the best next step—with no obligation.
          </p>
        </div>

        <div className="bg-polus-surface1 rounded-lg border border-[rgba(177,227,199,0.16)] p-2 md:p-4 overflow-hidden">
          <CalendlyEmbed url={calendlyUrl} />
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-[rgba(254,255,255,0.62)] mb-2">
            Prefer email?
          </p>
          <a href="/contact" className="text-polus-mint hover:text-polus-gold underline">
            Send us a message instead
          </a>
        </div>
      </div>
    </Section>
  );
}
