import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tulsa IT Consulting — Polus LLC",
  description: "IT consulting for Tulsa small businesses. Microsoft 365, cloud identity, backup/DR, and process optimization. Serving Tulsa metro: Broken Arrow, Owasso, Bixby, Jenks, Sand Springs. First 10 clients get 20% off.",
  openGraph: {
    title: "Tulsa IT Consulting — Polus LLC",
    description: "Expert IT consulting for Tulsa small businesses. M365, security, backup, and operations help.",
  }
};

export default function TulsaPage() {
  return (
    <>
      <Section title="IT Consulting for Tulsa Small Businesses" className="pt-20 md:pt-24">
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-[rgba(254,255,255,0.78)] leading-relaxed mb-6">
            Serving small businesses across the Tulsa metro area—from downtown Tulsa to Broken Arrow, Owasso, Bixby, Jenks, Sand Springs, and beyond. Get expert IT help without the enterprise price tag.
          </p>
          <div className="inline-flex items-center gap-2 bg-polus-gold/20 text-polus-gold border border-polus-gold/40 px-4 py-2 rounded-full font-semibold text-sm mb-6">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            Limited Time: 20% off for first 10 Tulsa businesses
          </div>
        </div>
      </Section>

      <Section className="bg-polus-surface1">
        <h2 className="text-2xl font-semibold mb-6 text-center">Tulsa Metro Areas We Serve</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card>
            <h3 className="font-semibold text-lg mb-2">Tulsa Proper</h3>
            <p className="text-sm text-[rgba(254,255,255,0.78)] leading-relaxed">
              Downtown, Cherry Street, Brookside, Blue Dome District, and all Tulsa neighborhoods
            </p>
          </Card>
          <Card>
            <h3 className="font-semibold text-lg mb-2">South Metro</h3>
            <p className="text-sm text-[rgba(254,255,255,0.78)] leading-relaxed">
              Broken Arrow, Bixby, Jenks, Glenpool, and southern suburbs
            </p>
          </Card>
          <Card>
            <h3 className="font-semibold text-lg mb-2">North & West Metro</h3>
            <p className="text-sm text-[rgba(254,255,255,0.78)] leading-relaxed">
              Owasso, Collinsville, Sand Springs, Sapulpa, and surrounding communities
            </p>
          </Card>
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">Why Tulsa Businesses Choose Polus</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-polus-mint flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <div className="font-semibold mb-1">Tulsa-Based Expertise</div>
                <p className="text-sm text-[rgba(254,255,255,0.78)] leading-relaxed">
                  We understand Tulsa businesses and the unique challenges facing Green Country companies. Local knowledge, expert execution.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-polus-mint flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <div className="font-semibold mb-1">No Surprise Pricing</div>
                <p className="text-sm text-[rgba(254,255,255,0.78)] leading-relaxed">
                  Fixed-scope projects with clear starting prices. From $239 Systems Review to complete IT infrastructure packages.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-polus-mint flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <div className="font-semibold mb-1">Microsoft 365 Depth</div>
                <p className="text-sm text-[rgba(254,255,255,0.78)] leading-relaxed">
                  Specialists in M365, Entra ID, Intune, Teams, SharePoint—the Microsoft tools Tulsa businesses rely on daily.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-polus-surface1">
        <h2 className="text-2xl font-semibold mb-6 text-center">Popular Services for Tulsa Businesses</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card>
            <div className="flex items-center gap-2 mb-3">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-polus-gold/10 border border-polus-gold/30 text-polus-gold text-xs font-semibold uppercase tracking-wide">
                20% Off
              </div>
            </div>
            <h3 className="font-semibold text-lg mb-2">Systems Review — $239</h3>
            <p className="text-sm text-[rgba(254,255,255,0.78)] leading-relaxed mb-4">
              90-minute assessment with documented recommendations. Perfect starting point for any Tulsa business.
            </p>
            <Button href="/services/systems-assessment" variant="secondary" className="w-full">
              Learn More
            </Button>
          </Card>
          <Card>
            <div className="flex items-center gap-2 mb-3">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-polus-gold/10 border border-polus-gold/30 text-polus-gold text-xs font-semibold uppercase tracking-wide">
                20% Off
              </div>
            </div>
            <h3 className="font-semibold text-lg mb-2">Identity & Security — $5,200</h3>
            <p className="text-sm text-[rgba(254,255,255,0.78)] leading-relaxed mb-4">
              Cloud identity, MFA, device management setup. Secure your Tulsa team with modern access controls.
            </p>
            <Button href="/services/identity-device-foundation" variant="secondary" className="w-full">
              Learn More
            </Button>
          </Card>
          <Card>
            <div className="flex items-center gap-2 mb-3">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-polus-gold/10 border border-polus-gold/30 text-polus-gold text-xs font-semibold uppercase tracking-wide">
                20% Off
              </div>
            </div>
            <h3 className="font-semibold text-lg mb-2">M365 Governance — $3,400</h3>
            <p className="text-sm text-[rgba(254,255,255,0.78)] leading-relaxed mb-4">
              Tame Teams and SharePoint sprawl. Get control of your Microsoft 365 environment.
            </p>
            <Button href="/services/m365-governance" variant="secondary" className="w-full">
              Learn More
            </Button>
          </Card>
          <Card>
            <div className="flex items-center gap-2 mb-3">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-polus-gold/10 border border-polus-gold/30 text-polus-gold text-xs font-semibold uppercase tracking-wide">
                20% Off
              </div>
            </div>
            <h3 className="font-semibold text-lg mb-2">Backup & DR — $2,400</h3>
            <p className="text-sm text-[rgba(254,255,255,0.78)] leading-relaxed mb-4">
              Verify backups work and build disaster recovery plan. Peace of mind for your Tulsa business.
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
            Book a free 30-minute discovery call. We&apos;ll discuss your needs and recommend the right next step—no obligation.
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
