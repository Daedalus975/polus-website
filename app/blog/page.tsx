import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IT Insights & Resources | Polus LLC Blog",
  description: "Expert insights on Microsoft 365, IT operations, backup strategy, and systems management for Oklahoma small businesses. Practical guides and best practices.",
  openGraph: {
    title: "IT Insights & Resources | Polus LLC Blog",
    description: "Expert insights on Microsoft 365, IT operations, backup strategy, and systems management for Oklahoma small businesses."
  }
};

export default function BlogPage() {
  return (
    <>
      <Section width="default" className="py-20 lg:py-32">
        <div className="max-w-3xl">
          <h1 className="font-display text-4xl font-bold tracking-tight text-neutral-950 [text-wrap:balance] sm:text-5xl">
            IT Insights & Resources
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            Practical guides, best practices, and expert insights for Oklahoma small businesses navigating IT, Microsoft 365, and operations.
          </p>
        </div>
      </Section>

      <Section width="default" className="pb-20 lg:pb-32">
        <Card className="text-center py-16">
          <div className="max-w-2xl mx-auto">
            <div className="mb-6">
              <svg
                className="w-16 h-16 mx-auto text-neutral-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h2 className="font-display text-2xl font-bold tracking-tight text-neutral-950 mb-4">
              Blog Coming Soon
            </h2>
            <p className="text-lg text-neutral-600 mb-8">
              We're working on publishing helpful content about IT management, Microsoft 365 best practices, backup strategies, and more for Oklahoma small businesses.
            </p>
            <p className="text-neutral-600 mb-8">
              In the meantime, have questions about IT or operations? Let's talk.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/book" variant="primary">
                Book Free Discovery Call
              </Button>
              <Button href="/services" variant="secondary">
                View Our Services
              </Button>
            </div>
          </div>
        </Card>
      </Section>

      <Section width="default" className="pb-20 lg:pb-32">
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl font-bold tracking-tight text-neutral-950 mb-6">
            Topics We'll Cover
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <Card>
              <h3 className="font-display text-lg font-semibold text-neutral-950 mb-2">
                Microsoft 365
              </h3>
              <p className="text-sm text-neutral-600">
                Security, governance, Teams optimization, and getting the most from your M365 investment
              </p>
            </Card>
            <Card>
              <h3 className="font-display text-lg font-semibold text-neutral-950 mb-2">
                Backup & DR
              </h3>
              <p className="text-sm text-neutral-600">
                Disaster recovery planning, backup strategies, and business continuity for small businesses
              </p>
            </Card>
            <Card>
              <h3 className="font-display text-lg font-semibold text-neutral-950 mb-2">
                Process Optimization
              </h3>
              <p className="text-sm text-neutral-600">
                Streamlining workflows, documentation, and operational efficiency improvements
              </p>
            </Card>
            <Card>
              <h3 className="font-display text-lg font-semibold text-neutral-950 mb-2">
                IT Best Practices
              </h3>
              <p className="text-sm text-neutral-600">
                Security fundamentals, systems management, and practical IT guidance for growing teams
              </p>
            </Card>
          </div>
        </div>
      </Section>
    </>
  );
}
