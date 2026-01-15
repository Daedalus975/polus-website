import { Section } from "@/components/Section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Free Discovery Call — Polus LLC",
  description: "Free • 30 minutes • You'll leave with next steps. Book your discovery call today."
};

export default function BookPage() {
  const bookingUrl = process.env.BOOKING_URL || "https://calendly.com/your-link-here";

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

        <div className="bg-polus-surface1 rounded-lg border border-[rgba(177,227,199,0.16)] p-8 md:p-10">
          {/* Calendar embed would go here */}
          <div className="text-center">
            <div className="w-20 h-20 rounded-full bg-polus-emerald/20 flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-polus-mint" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">Ready to schedule?</h3>
            <p className="text-[rgba(254,255,255,0.78)] mb-6">
              Click below to view available times and book your call.
            </p>
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg px-6 py-3 text-base font-semibold bg-polus-gold text-polus-forest hover:brightness-110 transition focus:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(17,98,56,0.40)]"
            >
              View Calendar & Book
            </a>
            <p className="mt-6 text-sm text-[rgba(254,255,255,0.62)]">
              You&apos;ll receive a calendar invite and reminder before the call.
            </p>
          </div>
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
