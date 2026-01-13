import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import { FAQAccordion } from "@/components/FAQAccordion";
import { TrustBadgeStrip } from "@/components/TrustBadgeStrip";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { OperatingSystem } from "@/components/OperatingSystem";
import { StructuredData, getLocalBusinessSchema } from "@/components/StructuredData";
import { FEATURE_FLAGS } from "@/src/config/featureFlags";
import { track } from "@/lib/track";

export default function HomePage() {
  const faqs = [
    {
      question: "What happens after the free discovery call?",
      answer: "You'll get a 1-page Next Steps recap within 24 hours. It includes what we heard, top priorities, and recommended packages with starting-at pricing. No obligation—just clarity."
    },
    {
      question: "Do you work with Microsoft 365?",
      answer: "Yes! Microsoft 365 is our primary ecosystem. We help with governance, identity/access, endpoint management, Teams/SharePoint structure, and more."
    },
    {
      question: "Do you offer monthly support?",
      answer: "Yes. We offer Managed IT packages (Essentials and Plus) for ongoing support, or you can book one-time projects and hourly work as needed."
    },
    {
      question: "Can I pay as a guest?",
      answer: "Absolutely. Our payment links support guest checkout—no account required. Just use our secure Stripe links to pay deposits or invoices."
    }
  ];

  return (
    <>
      <StructuredData data={getLocalBusinessSchema()} />
      {/* Hero Section */}
      <section 
        className="relative overflow-hidden min-h-[600px] md:min-h-[700px]"
        style={{ 
          backgroundImage: "url(/hero/hero-bg.svg)", 
          backgroundSize: "cover", 
          backgroundPosition: "center" 
        }}
      >
        {/* Readability overlay */}
        <div className="absolute inset-0 bg-polus-forest/30" />

        {/* Hero content */}
        <Section className="relative z-20 pt-32 md:pt-40 pb-20 md:pb-28">
          <div className="max-w-4xl">
            <div className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading text-polus-gold mb-6">
              Polus
            </div>
            <div className="inline-flex items-center gap-2 bg-polus-gold/20 text-polus-gold border border-polus-gold/40 px-4 py-2 rounded-full font-semibold text-sm mb-4">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              Limited Time: 20% off for first 10 businesses
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading tracking-tight leading-[1.05] text-polus-paper mb-6">
              Fix your processes. Strengthen your IT. Get more time back.
            </h1>
            <p className="text-lg md:text-xl text-polus-paper/90 leading-relaxed max-w-2xl mb-8">
              Stop wasting time on IT chaos and scattered processes. Get expert help for Oklahoma small businesses—without the MSP price tag.
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              <Button
                href="/book"
                variant="primary"
                className="rounded-lg text-base px-6 py-3"
                onClick={() => track("cta_book_click", { from: "home_hero" })}
              >
                Book a Free Discovery Call
              </Button>
              <Button href="/contact" variant="secondary" className="rounded-lg text-base px-6 py-3">
                Request a Quote
              </Button>
            </div>
            <p className="text-sm text-polus-paper/70">
              Free • 30 minutes • You'll leave with next steps
            </p>
          </div>
        </Section>
      </section>

      {/* Value Props */}
      <Section className="bg-polus-surface1">
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="hover:shadow-cardHover">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-polus-emerald/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-polus-mint" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <div className="font-semibold text-lg text-polus-paper mb-2">Plain-English clarity</div>
                <div className="text-sm text-polus-paper/80 leading-relaxed">
                  Clear scope and starting-at pricing—straightforward and transparent.
                </div>
              </div>
            </div>
          </Card>
          <Card className="hover:shadow-cardHover">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-polus-emerald/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-polus-mint" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <div>
                <div className="font-semibold text-lg text-polus-paper mb-2">Systems that stick</div>
                <div className="text-sm text-polus-paper/80 leading-relaxed">
                  SOPs + training + adoption support—built to last.
                </div>
              </div>
            </div>
          </Card>
          <Card className="hover:shadow-cardHover">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-polus-emerald/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-polus-mint" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <div className="font-semibold text-lg text-polus-paper mb-2">Reliability</div>
                <div className="text-sm text-polus-paper/80 leading-relaxed">
                  Identity, endpoints, backups/DR—stability by design.
                </div>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* How It Works */}
      <Section title="How we work" eyebrow="Our approach" className="bg-polus-surface1">
        <p className="text-lg text-[rgba(254,255,255,0.78)] leading-relaxed max-w-3xl mx-auto text-center mb-10">
          Clear phases, clear deliverables. No surprises.
        </p>
        <OperatingSystem variant="condensed" />
      </Section>

      {/* Packages Preview */}
      <Section title="Start with a fixed-scope package" eyebrow="Packages">
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="hover:shadow-cardHover flex flex-col">
            <div className="font-semibold text-lg">Systems Snapshot Assessment</div>
            <div className="mt-3 text-sm text-[rgba(254,255,255,0.78)] leading-relaxed flex-grow">
              A clear priority plan and next steps in 90 minutes.
            </div>
            <div className="mt-5">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-polus-gold/10 border border-polus-gold/30 text-polus-gold text-xs font-semibold uppercase tracking-wide mb-2">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                20% Off
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-[rgba(254,255,255,0.48)] text-sm line-through">$299</span>
                <span className="text-2xl font-semibold text-polus-gold">$239</span>
              </div>
            </div>
            <div className="mt-4">
              <Button href="/services/systems-assessment" variant="secondary" className="w-full">
                Learn more
              </Button>
            </div>
          </Card>
          <Card className="hover:shadow-cardHover border-polus-gold/40 flex flex-col">
            <div className="font-semibold text-lg">Identity & Device Foundation</div>
            <div className="mt-3 text-sm text-[rgba(254,255,255,0.78)] leading-relaxed flex-grow">
              Modern cloud identity and centralized device management.
            </div>
            <div className="mt-5">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-polus-gold/10 border border-polus-gold/30 text-polus-gold text-xs font-semibold uppercase tracking-wide mb-2">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                20% Off
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-[rgba(254,255,255,0.48)] text-sm line-through">$6,500</span>
                <span className="text-2xl font-semibold text-polus-gold">$5,200</span>
              </div>
            </div>
            <div className="mt-4">
              <Button href="/services/identity-device-foundation" variant="secondary" className="w-full">
                Learn more
              </Button>
            </div>
          </Card>
          <Card className="hover:shadow-cardHover flex flex-col">
            <div className="font-semibold text-lg">Backup Verification & DR</div>
            <div className="mt-3 text-sm text-[rgba(254,255,255,0.78)] leading-relaxed flex-grow">
              Know your backups work before you need them.
            </div>
            <div className="mt-5">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-polus-gold/10 border border-polus-gold/30 text-polus-gold text-xs font-semibold uppercase tracking-wide mb-2">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                20% Off
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-[rgba(254,255,255,0.48)] text-sm line-through">$1,500</span>
                <span className="text-2xl font-semibold text-polus-gold">$1,200</span>
              </div>
            </div>
            <div className="mt-4">
              <Button href="/services/backup-dr-readiness" variant="secondary" className="w-full">
                Learn more
              </Button>
            </div>
          </Card>
        </div>
        <div className="mt-8 text-center">
          <Button href="/services" variant="link" className="text-base">
            View all services →
          </Button>
        </div>
      </Section>

      {/* FAQ */}
      <Section title="Frequently asked questions" eyebrow="FAQ">
        <div className="max-w-3xl mx-auto">
          <FAQAccordion items={faqs} />
        </div>
      </Section>

      {/* Final CTA */}
      <Section className="bg-gradient-to-b from-polus-surface1 to-polus-forest text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Ready to get started?
          </h2>
          <p className="mt-4 text-lg text-[rgba(254,255,255,0.78)]">
            Book a free discovery call and leave with clear next steps.
          </p>
          {FEATURE_FLAGS.STARTING_POINT_QUIZ_ENABLED && (
            <p className="mt-3 text-sm text-[rgba(254,255,255,0.65)]">
              Not sure where to start? <a href="/start" className="text-polus-mint hover:text-polus-gold underline">Take our 2-minute quiz</a> for a personalized recommendation.
            </p>
          )}
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Button
              href="/book"
              variant="primary"
              className="rounded-lg text-base px-6 py-3"
              onClick={() => track("cta_book_click", { from: "home_bottom" })}
            >
              Book a Free Discovery Call
            </Button>
            <Button href="/contact" variant="secondary" className="rounded-lg text-base px-6 py-3">
              Request a Quote
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
