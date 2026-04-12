import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Stories from the coast — local guides, whale watching tips, coastal walks, and everything we love about Shoal Bay and Port Stephens.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      {/* Header */}
      <section className="bg-warm-white pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-deep-sage">
            Stories from the Coast
          </p>
          <h1 className="mt-3 font-heading text-4xl font-bold text-bark sm:text-5xl">
            The Soul Bliss Journal
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            Local guides, coastal walks, whale watching tips, and everything we
            love about Shoal Bay and Port Stephens.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="bg-warm-white pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group overflow-hidden rounded-2xl bg-cream transition-shadow hover:shadow-xl"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="rounded-full bg-warm-white/90 px-3 py-1 text-xs font-medium text-deep-sage backdrop-blur-sm">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-xs font-medium text-muted">{post.date}</p>
                  <h2 className="mt-2 font-heading text-xl font-bold text-bark leading-snug">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-deep-sage transition-colors hover:text-bark"
                  >
                    Read more
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
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
