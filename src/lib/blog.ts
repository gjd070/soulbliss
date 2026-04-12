import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface BlogPost {
  title: string;
  date: string;
  category: string;
  image: string;
  excerpt: string;
  slug: string;
  content: string;
}

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

/**
 * Read all markdown blog posts from content/blog/.
 * Runs at BUILD TIME (static export).
 * Returns posts sorted newest-first by date field.
 */
export function getAllPosts(): BlogPost[] {
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md"));

  const posts: BlogPost[] = files.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const raw = fs.readFileSync(path.join(BLOG_DIR, filename), "utf-8");
    const { data, content } = matter(raw);

    return {
      title: data.title,
      date: data.date,
      category: data.category,
      image: data.image,
      excerpt: data.excerpt,
      slug,
      content,
    };
  });

  // Sort newest first. Dates are "YYYY-MM" strings so lexicographic sort works.
  posts.sort((a, b) => b.date.localeCompare(a.date));

  return posts;
}

/**
 * Get a single post by slug. Returns undefined if not found.
 */
export function getPostBySlug(slug: string): BlogPost | undefined {
  const filePath = path.join(BLOG_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return undefined;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    title: data.title,
    date: data.date,
    category: data.category,
    image: data.image,
    excerpt: data.excerpt,
    slug,
    content,
  };
}

/**
 * Return all slugs (for generateStaticParams).
 */
export function getAllSlugs(): string[] {
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}
