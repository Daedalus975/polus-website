import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import { FAQAccordion } from "@/components/FAQAccordion";
import { TrustBadgeStrip } from "@/components/TrustBadgeStrip";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { OperatingSystemAnimated } from "@/components/OperatingSystemAnimated";
import { StructuredData, getLocalBusinessSchema, getFAQSchema } from "@/components/StructuredData";
import { FEATURE_FLAGS } from "@/src/config/featureFlags";
import { track } from "@/lib/track";
import Image from "next/image";

export default function HomePage() {
  const faqs = [
    {
      question: "How is Polus different from a traditional MSP?",
      answer: "We focus on project-based consulting rather than break-fix support. Our approach addresses root causes through Microsoft 365 optimization, process documentation, and system improvements. You receive enterprise-quality work at fair project pricing without long-term contracts."
    },
    {
      question: "What happens after the initial consultation?",
      answer: "Within 24 hours, you'll receive a written summary including identified priorities, recommended services, and transparent pricing. There's no obligation—you'll have the information needed to make an informed decision."
    },
    {
      question: "Do I need to sign a long-term contract?",
      answer: "No. Most services are delivered as one-time projects. Our IT Advisory service is available on a month-to-month basis for ongoing strategic guidance, but requires no long-term commitment."
    },
    {
      question: "My team is only 5-10 people. Are we too small?",
      answer: "Organizations with 5-50 employees are our primary focus. At this size, you need professional IT infrastructure but may not require a full-time IT staff member or traditional MSP contract. We specialize in serving Oklahoma small businesses at this stage."
    },
    {
      question: "Can you help with Microsoft 365 and Teams setup?",
      answer: "Yes. Microsoft 365 is our core expertise. We provide governance frameworks, identity and access management (Entra ID, MFA), endpoint security (Intune), Teams and SharePoint architecture, email migrations, license optimization, and backup protection for M365 environments."
    },
    {
      question: "How quickly can you start?",
      answer: "Most projects begin within 1-2 weeks following the initial consultation. IT assessments can often be scheduled within the same week. Larger implementations (M365 governance, process documentation) require additional discovery, but we maintain efficient timelines once you approve the scope."
    }
  ];

  return (
    <>
      <StructuredData data={getLocalBusinessSchema()} />
      <StructuredData data={getFAQSchema(faqs)} />
      {/* Hero Section */}
      <section 
        className="relative overflow-hidden"
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
          <div className="flex flex-col items-center">            
            {/* Logo and text content side by side */}
            <div className="flex items-start justify-center gap-8 mb-6">
              <Image 
                src="/Polus-Logo-RGB.png" 
                alt="Polus" 
                width={400} 
                height={133}
                priority
                className="h-[180px] md:h-[200px] lg:h-[220px] w-auto flex-shrink-0"
              />
              <div className="flex flex-col">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading tracking-tight leading-[1.05] text-polus-paper mb-6">
                  Fix your processes. Strengthen your IT. Get more time back.
                </h1>
                <p className="text-lg md:text-xl text-polus-paper/90 leading-relaxed max-w-2xl">
                  Professional IT consulting for Oklahoma small businesses. Project-based services without long-term MSP contracts.
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 mb-6">
              <Button
                href="/book"
                variant="primary"
                className="rounded-lg text-base px-6 py-3"
                trackEvent={{
                  name: 'calendly_booking_click',
                  params: { button_location: 'hero', event_category: 'Lead Generation' }
                }}
              >
                Book a Free Discovery Call
              </Button>
              <Button href="/contact" variant="secondary" className="rounded-lg text-base px-6 py-3">
                Request a Quote
              </Button>
            </div>
            <p className="text-sm text-polus-paper/70">
              30-minute consultation • No obligation
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
                <div className="font-semibold text-lg text-polus-paper mb-2">Clear pricing</div>
                <div className="text-sm text-polus-paper/80 leading-relaxed">
                  Fixed-scope projects with transparent pricing. No hourly billing surprises.
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
                <div className="font-semibold text-lg text-polus-paper mb-2">Implementation support</div>
                <div className="text-sm text-polus-paper/80 leading-relaxed">
                  Documentation and training to ensure your team adopts new systems successfully.
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
                <div className="font-semibold text-lg text-polus-paper mb-2">Enterprise-grade security</div>
                <div className="text-sm text-polus-paper/80 leading-relaxed">
                  Cloud identity management, device controls, and verified backup systems.
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
        <OperatingSystemAnimated variant="condensed" />
      </Section>

      {/* Packages Preview */}
      <Section title="Start with a fixed-scope package" eyebrow="Packages">
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="hover:shadow-cardHover flex flex-col">
            <div className="font-semibold text-lg">Systems Review</div>
            <div className="mt-3 text-sm text-[rgba(254,255,255,0.78)] leading-relaxed flex-grow">
              A clear priority plan and next steps in 90 minutes.
            </div>
            <div className="mt-5">
              <div className="text-2xl font-semibold text-polus-gold">$799</div>
            </div>
            <div className="mt-4">
              <Button href="/services/systems-assessment" variant="secondary" className="w-full">
                Learn more
              </Button>
            </div>
          </Card>
          <Card className="hover:shadow-cardHover border-polus-gold/40 flex flex-col">
            <div className="font-semibold text-lg">Identity & Security</div>
            <div className="mt-3 text-sm text-[rgba(254,255,255,0.78)] leading-relaxed flex-grow">
              Set up cloud identity, MFA, and device management for your team.
            </div>
            <div className="mt-5">
              <div className="text-2xl font-semibold text-polus-gold">$6,499</div>
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
              <div className="text-2xl font-semibold text-polus-gold">$1,499</div>
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
              Not sure where to start? <a href="/start" className="text-polus-mint hover:text-polus-gold underline">Take our 2-minute assessment</a> for a personalized recommendation.
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
