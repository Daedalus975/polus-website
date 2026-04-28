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

// Force dynamic rendering to avoid build-time errors with incomplete Sanity data
export const dynamic = 'force-dynamic';

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
              <h3 className="font-display text-lg font-semibold text-polus-paper mb-2">
                Microsoft 365
              </h3>
              <p className="text-sm text-[rgba(254,255,255,0.78)] leading-relaxed">
                Security, governance, Teams optimization, and getting the most from your M365 investment
              </p>
            </Card>
            <Card>
              <h3 className="font-display text-lg font-semibold text-polus-paper mb-2">
                Backup and DR
              </h3>
              <p className="text-sm text-[rgba(254,255,255,0.78)] leading-relaxed">
                Disaster recovery planning, backup strategies, and business continuity for small businesses
              </p>
            </Card>
            <Card>
              <h3 className="font-display text-lg font-semibold text-polus-paper mb-2">
                Process Optimization
              </h3>
              <p className="text-sm text-[rgba(254,255,255,0.78)] leading-relaxed">
                Streamlining workflows, documentation, and operational efficiency improvements
              </p>
            </Card>
            <Card>
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
