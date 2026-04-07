import { notFound } from "next/navigation";
import { getBlogPost, urlFor } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import Image from "next/image";
import type { Metadata } from "next";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getBlogPost(params.slug);
  
  if (!post) {
    return {
      title: "Post Not Found — Polus Blog",
    };
  }

  return {
    title: `${post.title} — Polus Blog`,
    description: post.excerpt || post.seo?.metaDescription || `Read ${post.title} on the Polus blog`,
    openGraph: {
      title: post.seo?.ogTitle || post.title,
      description: post.seo?.ogDescription || post.excerpt || `Read ${post.title} on the Polus blog`,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author || "Polus Team"],
      images: post.featuredImage ? [urlFor(post.featuredImage).width(1200).height(630).url()] : [],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const post = await getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Section className="pt-20 md:pt-24">
        <article className="max-w-3xl mx-auto">
          {/* Featured Image */}
          {post.featuredImage && (
            <div className="mb-8 rounded-lg overflow-hidden">
              <Image
                src={urlFor(post.featuredImage).width(1200).height(630).url()}
                alt={post.title}
                width={1200}
                height={630}
                className="w-full h-auto"
                priority
              />
            </div>
          )}

          {/* Title */}
          <h1 className="font-display text-4xl font-bold tracking-tight text-polus-paper [text-wrap:balance] sm:text-5xl mb-6">
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="flex items-center gap-4 text-sm text-[rgba(254,255,255,0.78)] mb-8 pb-8 border-b border-polus-mint/20">
            <span className="font-semibold text-polus-gold">
              {post.author || "Polus Team"}
            </span>
            <span>•</span>
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            {post.categories && post.categories.length > 0 && (
              <>
                <span>•</span>
                <div className="flex gap-2">
                  {post.categories.map((category: string, idx: number) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-polus-emerald/20 text-polus-mint rounded text-xs font-medium"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Excerpt */}
          {post.excerpt && (
            <p className="text-xl text-[rgba(254,255,255,0.88)] leading-relaxed mb-8">
              {post.excerpt}
            </p>
          )}

          {/* Body Content */}
          <div className="prose prose-invert prose-lg max-w-none">
            <PortableText
              value={post.body}
              components={{
                block: {
                  normal: ({ children }) => (
                    <p className="text-[rgba(254,255,255,0.78)] leading-relaxed mb-6">
                      {children}
                    </p>
                  ),
                  h2: ({ children }) => (
                    <h2 className="text-2xl font-bold text-polus-paper mt-12 mb-4">
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-xl font-semibold text-polus-paper mt-8 mb-3">
                      {children}
                    </h3>
                  ),
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-4 border-polus-gold pl-6 my-6 italic text-[rgba(254,255,255,0.88)]">
                      {children}
                    </blockquote>
                  ),
                },
                list: {
                  bullet: ({ children }) => (
                    <ul className="list-disc list-outside ml-6 mb-6 space-y-2 text-[rgba(254,255,255,0.78)]">
                      {children}
                    </ul>
                  ),
                  number: ({ children }) => (
                    <ol className="list-decimal list-outside ml-6 mb-6 space-y-2 text-[rgba(254,255,255,0.78)]">
                      {children}
                    </ol>
                  ),
                },
                marks: {
                  link: ({ children, value }) => (
                    <a
                      href={value?.href}
                      className="text-polus-gold hover:text-polus-mint underline transition"
                      target={value?.href?.startsWith("http") ? "_blank" : undefined}
                      rel={value?.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      {children}
                    </a>
                  ),
                  strong: ({ children }) => (
                    <strong className="font-semibold text-polus-paper">{children}</strong>
                  ),
                  em: ({ children }) => <em className="italic">{children}</em>,
                  code: ({ children }) => (
                    <code className="bg-polus-surface1 px-1.5 py-0.5 rounded text-sm text-polus-mint">
                      {children}
                    </code>
                  ),
                },
              }}
            />
          </div>
        </article>
      </Section>

      {/* CTA Section */}
      <Section className="bg-polus-surface1">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Need help with your IT systems?
          </h2>
          <p className="text-lg text-[rgba(254,255,255,0.78)] leading-relaxed mb-8">
            Let&apos;s talk about what&apos;s holding you back and build a plan to fix it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/book" variant="primary" className="rounded-lg text-base px-6 py-3">
              Schedule Free Consultation
            </Button>
            <Button href="/blog" variant="secondary" className="rounded-lg text-base px-6 py-3">
              ← Back to Blog
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
