import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { getBlogPosts, urlFor } from "@/lib/sanity";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IT Insights & Resources | Polus LLC Blog",
  description: "Expert insights on Microsoft 365, IT operations, backup strategy, and systems management for Oklahoma small businesses. Practical guides and best practices.",
  openGraph: {
    title: "IT Insights & Resources | Polus LLC Blog",
    description: "Expert insights on Microsoft 365, IT operations, backup strategy, and systems management for Oklahoma small businesses."
  }
};

// Revalidate every 60 seconds
export const revalidate = 60;

export default async function BlogPage() {
  const posts = await getBlogPosts();
  return (
    <>
      <Section className="pt-20 md:pt-24">
        <div className="max-w-3xl">
          <h1 className="font-display text-4xl font-bold tracking-tight text-polus-paper [text-wrap:balance] sm:text-5xl">
            IT Insights & Resources
          </h1>
          <p className="mt-6 text-xl text-[rgba(254,255,255,0.78)] leading-relaxed">
            Practical guides, best practices, and expert insights for Oklahoma small businesses navigating IT, Microsoft 365, and operations.
          </p>
        </div>
      </Section>

      {/* Blog Posts Grid */}
      {posts && posts.length > 0 ? (
        <Section className="bg-polus-surface1">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post: any) => (
              <Link
                key={post._id}
                href={`/blog/${post.slug.current}`}
                className="group"
              >
                <Card className="h-full flex flex-col hover:shadow-cardHover hover:border-polus-gold/50 transition-all">
                  {post.featuredImage?.asset && (
                    <div className="mb-4 rounded-lg overflow-hidden">
                      <Image
                        src={urlFor(post.featuredImage).width(600).height(400).url()}
                        alt={post.title}
                        width={600}
                        height={400}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="flex-grow">
                    {post.categories && post.categories.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-3">
                        {post.categories.slice(0, 2).map((category: string, idx: number) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-polus-emerald/20 text-polus-mint rounded text-xs font-medium"
                          >
                            {category}
                          </span>
                        ))}
                      </div>
                    )}
                    <h3 className="font-display text-xl font-semibold text-polus-paper mb-2 group-hover:text-polus-gold transition">
                      {post.title}
                    </h3>
                    {post.excerpt && (
                      <p className="text-sm text-[rgba(254,255,255,0.78)] leading-relaxed mb-4">
                        {post.excerpt}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center gap-3 text-xs text-[rgba(254,255,255,0.78)] pt-4 border-t border-polus-mint/20">
                    <span className="font-medium">{post.author || "Polus Team"}</span>
                    <span>•</span>
                    <time dateTime={post.publishedAt}>
                      {new Date(post.publishedAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </time>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </Section>
      ) : (
        <Section className="bg-polus-surface1">
          <Card className="text-center py-16">
            <div className="max-w-2xl mx-auto">
              <div className="mb-6">
                <svg
                  className="w-16 h-16 mx-auto text-polus-mint/40"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h2 className="font-display text-2xl font-bold tracking-tight text-polus-paper mb-4">
                No posts yet
              </h2>
              <p className="text-lg text-[rgba(254,255,255,0.78)] leading-relaxed mb-8">
                We&apos;re working on publishing helpful content about IT management, Microsoft 365 best practices, backup strategies, and more for Oklahoma small businesses.
              </p>
              <p className="text-[rgba(254,255,255,0.78)] leading-relaxed mb-8">
                In the meantime, have questions about IT or operations? Let&apos;s talk.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/book" variant="primary" className="rounded-lg text-base px-6 py-3">
                  Schedule Free Consultation
                </Button>
                <Button href="/services" variant="secondary" className="rounded-lg text-base px-6 py-3">
                  View Our Services
                </Button>
              </div>
            </div>
          </Card>
        </Section>
      )}

      <Section>
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl font-bold tracking-tight text-polus-paper mb-6">
            Topics We&apos;ll Cover
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <Card>
              <div className="w-12 h-12 rounded-lg bg-polus-emerald/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-polus-mint" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="font-display text-lg font-semibold text-polus-paper mb-2">
                Microsoft 365
              </h3>
              <p className="text-sm text-[rgba(254,255,255,0.78)] leading-relaxed">
                Security, governance, Teams optimization, and getting the most from your M365 investment
              </p>
            </Card>
            <Card>
              <div className="w-12 h-12 rounded-lg bg-polus-emerald/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-polus-mint" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              </div>
              <h3 className="font-display text-lg font-semibold text-polus-paper mb-2">
                Backup and DR
              </h3>
              <p className="text-sm text-[rgba(254,255,255,0.78)] leading-relaxed">
                Disaster recovery planning, backup strategies, and business continuity for small businesses
              </p>
            </Card>
            <Card>
              <div className="w-12 h-12 rounded-lg bg-polus-emerald/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-polus-mint" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="font-display text-lg font-semibold text-polus-paper mb-2">
                Process Optimization
              </h3>
              <p className="text-sm text-[rgba(254,255,255,0.78)] leading-relaxed">
                Streamlining workflows, documentation, and operational efficiency improvements
              </p>
            </Card>
            <Card>
              <div className="w-12 h-12 rounded-lg bg-polus-emerald/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-polus-mint" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-display text-lg font-semibold text-polus-paper mb-2">
                IT Best Practices
              </h3>
              <p className="text-sm text-[rgba(254,255,255,0.78)] leading-relaxed">
                Security fundamentals, systems management, and practical IT guidance for growing teams
              </p>
            </Card>
          </div>
        </div>
      </Section>
    </>
  );
}
