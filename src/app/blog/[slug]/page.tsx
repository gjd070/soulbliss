import type { Metadata } from "next";
import Link from "next/link";
import { marked } from "marked";
import { notFound } from "next/navigation";
import { getAllSlugs, getPostBySlug } from "@/lib/blog";

// Static export: only pre-generated slugs are valid
export const dynamicParams = false;

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      images: [{ url: post.image }],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const html = await marked(post.content);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-bark/50" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-3xl px-4 pb-12 sm:px-6">
            <span className="mb-3 inline-block rounded-full bg-warm-white/90 px-3 py-1 text-xs font-medium text-deep-sage backdrop-blur-sm">
              {post.category}
            </span>
            <h1 className="font-heading text-3xl font-bold text-warm-white sm:text-4xl lg:text-5xl leading-tight">
              {post.title}
            </h1>
            <p className="mt-3 text-sm text-warm-white/80">{post.date}</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-warm-white py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <article
            className="prose prose-lg max-w-none
              prose-headings:font-heading prose-headings:text-bark
              prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-muted prose-p:leading-relaxed
              prose-li:text-muted
              prose-strong:text-bark
              prose-a:text-deep-sage hover:prose-a:text-bark"
            dangerouslySetInnerHTML={{ __html: html }}
          />

          {/* Back link */}
          <div className="mt-16 border-t border-sage/30 pt-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-deep-sage transition-colors hover:text-bark"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
              Back to all posts
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
