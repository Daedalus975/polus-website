import { Section } from "@/components/Section";
import { ServicesGrid } from "@/components/ServicesGrid";
import { SERVICES } from "@/lib/serviceData";
import Link from "next/link";
import type { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  title: "All Services — Oklahoma IT and Operations | Polus",
  description: "Complete IT consulting services for Oklahoma small businesses. Microsoft 365 setup & governance, backup/DR, IT operations, process documentation. Tiered pricing from $799-$11,000.",
  keywords: ["IT consulting services Oklahoma", "Microsoft 365 consulting", "M365 governance", "IT operations management", "backup and disaster recovery", "process documentation", "IT assessment", "small business IT services"],
  alternates: {
    canonical: `${baseUrl}/services`,
  },
  openGraph: {
    title: "All Services — Oklahoma IT and Operations | Polus",
    description: "Complete IT consulting services for Oklahoma small businesses. M365, backup/DR, operations, and process documentation.",
    url: `${baseUrl}/services`,
  }
};

export default function ServicesPage() {

  return (
    <>
      <Section title="Operations and IT services built for small businesses" className="pt-20 md:pt-24">
        <p className="text-lg text-[rgba(254,255,255,0.78)] leading-relaxed max-w-3xl mb-10">
          Pick a service to learn what you get, typical timelines, and starting-at pricing. Need something not listed? <Link href="/contact" className="text-polus-gold hover:text-polus-mint transition underline">Just ask</Link>—we offer additional services beyond what&apos;s shown here.
        </p>
        
        <ServicesGrid services={SERVICES} />
      </Section>

      <Section className="bg-polus-surface1">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-polus-gold">
            Need something else?
          </h2>
          <p className="text-lg text-[rgba(254,255,255,0.78)] leading-relaxed mb-8">
            We offer additional services including process mapping, workflow automation, web development, and product kickoff planning. If you don&apos;t see what you need here, reach out—we can likely help or refer you to a trusted partner.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg px-6 py-3 text-base font-semibold bg-polus-gold text-polus-forest hover:brightness-110 transition focus:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(17,98,56,0.40)]"
            >
              Request Custom Quote
            </a>
            <a
              href="/book"
              className="inline-flex items-center justify-center rounded-lg px-6 py-3 text-base font-semibold border-2 border-polus-gold text-polus-gold hover:bg-polus-gold hover:text-polus-forest transition focus:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(17,98,56,0.40)]"
            >
              Book Free Discovery Call
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
