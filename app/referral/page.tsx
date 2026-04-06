import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Referral Program — Polus LLC",
  description: "Earn 10% off for every business you refer. Stackable rewards, unlimited referrals, and exclusive benefits for Oklahoma business partners."
};

export default function ReferralPage() {
  return (
    <>
      <Section title="Refer & Earn" eyebrow="Referral Program" className="pt-20 md:pt-24">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl text-[rgba(254,255,255,0.88)] leading-relaxed mb-8">
            Know another Oklahoma business that needs better IT systems or processes? 
            Refer them to Polus and you both get <span className="text-polus-mint font-semibold">10% off your next project</span>.
          </p>
        </div>
      </Section>

      <Section title="How It Works" className="bg-polus-surface1">
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-polus-emerald/20 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-polus-mint">1</span>
            </div>
            <h3 className="font-semibold text-lg mb-3">Refer a Business</h3>
            <p className="text-[rgba(254,255,255,0.78)] leading-relaxed">
              Know someone struggling with IT or operations? Send them our way—use the form below or just give them our info.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-polus-emerald/20 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-polus-mint">2</span>
            </div>
            <h3 className="font-semibold text-lg mb-3">They Book & Start</h3>
            <p className="text-[rgba(254,255,255,0.78)] leading-relaxed">
              When they book a discovery call and mention your name, they get 10% off their first project.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-polus-emerald/20 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-polus-mint">3</span>
            </div>
            <h3 className="font-semibold text-lg mb-3">You Get Rewarded</h3>
            <p className="text-[rgba(254,255,255,0.78)] leading-relaxed">
              Once their project starts, you get a 10% discount code for your next engagement with us. No limits.
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-polus-surface1">
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card className="p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-lg bg-polus-mint/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-polus-mint" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Simple Rewards</h3>
                <p className="text-sm text-[rgba(254,255,255,0.78)] leading-relaxed">
                  Both you and your referral get 10% off your next project. No complicated tiers or limits.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-lg bg-polus-mint/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-polus-mint" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Unlimited Referrals</h3>
                <p className="text-sm text-[rgba(254,255,255,0.78)] leading-relaxed">
                  There&apos;s no cap. Refer 3 businesses, get 3 discount codes. Each valid for one project.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-lg bg-polus-mint/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-polus-mint" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">No Minimum Project Size</h3>
                <p className="text-sm text-[rgba(254,255,255,0.78)] leading-relaxed">
                  Any paid project qualifies—from a $500 assessment to a $15,000 integration. Both parties benefit.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-lg bg-polus-mint/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-polus-mint" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Applied Automatically</h3>
                <p className="text-sm text-[rgba(254,255,255,0.78)] leading-relaxed">
                  We track referrals and send discount codes via email. No chasing needed—you&apos;ll get it once the project starts.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      <Section title="Submit a Referral">
        <div className="max-w-2xl mx-auto">
          <Card className="p-8">
            <p className="text-[rgba(254,255,255,0.78)] mb-6 text-center">
              Fill out the form below, or just have them mention your name when they book their discovery call.
            </p>

            <form action="/api/contact" method="POST" className="space-y-6">
              <input type="hidden" name="formType" value="referral" />

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="referrerName" className="block text-sm font-medium mb-2">
                    Your Name <span className="text-polus-ember">*</span>
                  </label>
                  <input
                    id="referrerName"
                    name="referrerName"
                    type="text"
                    required
                    className="w-full px-4 py-2 bg-polus-surface1 border border-[rgba(177,227,199,0.16)] rounded-lg text-polus-text focus:outline-none focus:border-polus-mint"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="referrerEmail" className="block text-sm font-medium mb-2">
                    Your Email <span className="text-polus-ember">*</span>
                  </label>
                  <input
                    id="referrerEmail"
                    name="referrerEmail"
                    type="email"
                    required
                    className="w-full px-4 py-2 bg-polus-surface1 border border-[rgba(177,227,199,0.16)] rounded-lg text-polus-text focus:outline-none focus:border-polus-mint"
                    placeholder="you@company.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="refereeName" className="block text-sm font-medium mb-2">
                    Their Name <span className="text-polus-ember">*</span>
                  </label>
                  <input
                    id="refereeName"
                    name="refereeName"
                    type="text"
                    required
                    className="w-full px-4 py-2 bg-polus-surface1 border border-[rgba(177,227,199,0.16)] rounded-lg text-polus-text focus:outline-none focus:border-polus-mint"
                    placeholder="Contact person"
                  />
                </div>

                <div>
                  <label htmlFor="refereeEmail" className="block text-sm font-medium mb-2">
                    Their Email <span className="text-polus-ember">*</span>
                  </label>
                  <input
                    id="refereeEmail"
                    name="refereeEmail"
                    type="email"
                    required
                    className="w-full px-4 py-2 bg-polus-surface1 border border-[rgba(177,227,199,0.16)] rounded-lg text-polus-text focus:outline-none focus:border-polus-mint"
                    placeholder="them@company.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="refereeCompany" className="block text-sm font-medium mb-2">
                  Their Company
                </label>
                <input
                  id="refereeCompany"
                  name="refereeCompany"
                  type="text"
                  className="w-full px-4 py-2 bg-polus-surface1 border border-[rgba(177,227,199,0.16)] rounded-lg text-polus-text focus:outline-none focus:border-polus-mint"
                  placeholder="Company name"
                />
              </div>

              <div>
                <label htmlFor="referralNotes" className="block text-sm font-medium mb-2">
                  Why are you referring them? (Optional)
                </label>
                <textarea
                  id="referralNotes"
                  name="referralNotes"
                  rows={3}
                  className="w-full px-4 py-2 bg-polus-surface1 border border-[rgba(177,227,199,0.16)] rounded-lg text-polus-text focus:outline-none focus:border-polus-mint resize-none"
                  placeholder="What challenges are they facing? This helps us prepare for their discovery call."
                />
              </div>

              <Button type="submit" variant="primary" className="w-full px-6 py-3 text-base">
                Submit Referral
              </Button>
            </form>
          </Card>
        </div>
      </Section>

      <Section className="bg-polus-surface1">
        <Card className="max-w-3xl mx-auto p-8 bg-gradient-to-br from-polus-forest/40 to-polus-emerald/10 border-polus-mint/20">
          <h2 className="text-2xl font-semibold mb-4 text-polus-mint text-center">
            Program Terms
          </h2>
          <div className="space-y-3 text-sm text-[rgba(254,255,255,0.78)]">
            <div className="flex items-start gap-2">
              <span className="text-polus-mint mt-0.5">•</span>
              <p>Referral discount (10%) applies to referred business&apos;s first project only.</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-polus-mint mt-0.5">•</span>
              <p>Referrer receives 10% discount code after referred business pays initial deposit and project begins.</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-polus-mint mt-0.5">•</span>
              <p>Discount codes are valid for 12 months from issue date and apply to one future project.</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-polus-mint mt-0.5">•</span>
              <p>No minimum project size—any paid engagement qualifies (assessments, implementations, advisory).</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-polus-mint mt-0.5">•</span>
              <p>Unlimited referrals allowed. Each successful referral earns a new 10% discount code.</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-polus-mint mt-0.5">•</span>
              <p>Self-referrals and referrals from current active projects are not eligible.</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-polus-mint mt-0.5">•</span>
              <p>Polus LLC reserves the right to modify or discontinue the referral program at any time.</p>
            </div>
          </div>
        </Card>
      </Section>

      <Section className="bg-gradient-to-b from-polus-surface1 to-polus-forest text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            Questions about referrals?
          </h2>
          <p className="text-lg text-[rgba(254,255,255,0.78)] mb-8">
            Reach out and we&apos;ll explain how it works—or just send someone our way and we&apos;ll handle the rest.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="primary" className="px-6 py-3 text-base">
              Ask a Question
            </Button>
            <Button href="/book" variant="secondary" className="px-6 py-3 text-base">
              Book Discovery Call
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
