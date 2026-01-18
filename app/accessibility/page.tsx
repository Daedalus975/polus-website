import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibility Statement — Polus LLC",
  description: "Our commitment to digital accessibility and WCAG 2.2 Level AA compliance."
};

export default function AccessibilityPage() {
  return (
    <>
      <Section title="Accessibility Statement" className="pt-20 md:pt-24">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-[rgba(254,255,255,0.78)] leading-relaxed mb-6">
              Polus LLC is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.
            </p>

            <h2 className="text-2xl font-semibold text-polus-gold mb-4 mt-8">Conformance Status</h2>
            <p className="text-[rgba(254,255,255,0.78)] leading-relaxed mb-4">
              The Web Content Accessibility Guidelines (WCAG) define requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA.
            </p>
            <p className="text-[rgba(254,255,255,0.78)] leading-relaxed mb-6">
              This website is <strong className="text-polus-mint">fully conformant with WCAG 2.2 Level AA</strong>. Fully conformant means that the content fully conforms to the accessibility standard without any exceptions.
            </p>

            <h2 className="text-2xl font-semibold text-polus-gold mb-4 mt-8">Accessibility Features</h2>
            <ul className="list-disc pl-6 space-y-2 text-[rgba(254,255,255,0.78)] mb-6">
              <li><strong>Keyboard Navigation:</strong> All interactive elements are accessible via keyboard. Use Tab to navigate and Enter/Space to activate.</li>
              <li><strong>Skip Navigation:</strong> Skip-to-content link available for keyboard users to bypass repetitive navigation.</li>
              <li><strong>Screen Reader Support:</strong> Proper ARIA labels, roles, and relationships throughout the site.</li>
              <li><strong>High Color Contrast:</strong> Text meets WCAG AA contrast ratio requirements (minimum 4.5:1 for normal text).</li>
              <li><strong>Responsive Design:</strong> Mobile-friendly with touch targets sized appropriately (minimum 44x44px).</li>
              <li><strong>Clear Headings:</strong> Logical heading hierarchy for screen reader navigation.</li>
              <li><strong>Form Labels:</strong> All form inputs have clear, descriptive labels.</li>
              <li><strong>Focus Indicators:</strong> Visible focus indicators on all interactive elements.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-polus-gold mb-4 mt-8">Technical Specifications</h2>
            <p className="text-[rgba(254,255,255,0.78)] leading-relaxed mb-6">
              Accessibility of this website relies on the following technologies to work with the particular combination of web browser and any assistive technologies or plugins installed on your computer:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[rgba(254,255,255,0.78)] mb-6">
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript (React/Next.js)</li>
              <li>WAI-ARIA</li>
            </ul>
            <p className="text-[rgba(254,255,255,0.78)] leading-relaxed mb-6">
              These technologies are relied upon for conformance with the accessibility standards used.
            </p>

            <h2 className="text-2xl font-semibold text-polus-gold mb-4 mt-8">Limitations and Alternatives</h2>
            <p className="text-[rgba(254,255,255,0.78)] leading-relaxed mb-6">
              Despite our best efforts to ensure accessibility of this website, there may be some limitations. If you encounter any accessibility barriers, please contact us so we can provide the information in an alternative format.
            </p>

            <h2 className="text-2xl font-semibold text-polus-gold mb-4 mt-8">Feedback</h2>
            <p className="text-[rgba(254,255,255,0.78)] leading-relaxed mb-4">
              We welcome your feedback on the accessibility of this website. Please let us know if you encounter accessibility barriers:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[rgba(254,255,255,0.78)] mb-6">
              <li><strong>Email:</strong> <a href="mailto:jack.washmon@polus-cs.com" className="text-polus-mint hover:text-polus-gold underline">jack.washmon@polus-cs.com</a></li>
              <li><strong>Phone:</strong> We respond to accessibility requests within 1 business day.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-polus-gold mb-4 mt-8">Formal Complaints</h2>
            <p className="text-[rgba(254,255,255,0.78)] leading-relaxed mb-6">
              If you wish to report a complaint or feel that we have not adequately addressed your concerns, you have the right to file a complaint with the U.S. Department of Justice.
            </p>

            <h2 className="text-2xl font-semibold text-polus-gold mb-4 mt-8">Assessment Approach</h2>
            <p className="text-[rgba(254,255,255,0.78)] leading-relaxed mb-6">
              Polus LLC assessed the accessibility of this website by the following approaches:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[rgba(254,255,255,0.78)] mb-6">
              <li>Self-evaluation using WCAG 2.2 Level AA success criteria</li>
              <li>Manual testing with keyboard navigation</li>
              <li>Automated testing tools for technical compliance</li>
              <li>Ongoing monitoring and updates</li>
            </ul>

            <div className="mt-10 p-6 bg-polus-surface1 rounded-lg border border-[rgba(177,227,199,0.16)]">
              <p className="text-sm text-[rgba(254,255,255,0.62)] mb-4">
                <strong>Last Updated:</strong> January 18, 2026
              </p>
              <p className="text-sm text-[rgba(254,255,255,0.62)]">
                This accessibility statement applies to the website located at the Polus LLC domain.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Button href="/contact" variant="primary" className="rounded-lg text-base px-6 py-3">
              Contact Us About Accessibility
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
