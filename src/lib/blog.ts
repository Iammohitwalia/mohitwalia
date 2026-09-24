import { posts } from "@/src/data/blog/posts";
import type { BlogPost } from "@/src/data/blog/posts";

export type { BlogPost, BlogSection } from "@/src/data/blog/posts";

const categoryDescriptions: Record<string, string> = {
  "Next.js":
    "How I scope, structure, and ship Next.js sites so the pages stay fast and the content stays editable.",
  "Product engineering":
    "Notes on rebuilds, integrations, and the data model behind a product that has to keep changing.",
  Automation:
    "Where I add AI and small operational automations, and where I leave the decision with a person.",
  Freelance:
    "How a project actually runs: scope, the week, and the paths a client uses to start a conversation.",
  Commerce:
    "Choosing between Shopify and a custom storefront, and what has to be true either way.",
};

export function toSlug(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function formatBlogDate(iso: string) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${iso}T00:00:00.000Z`));
}

export function readingMinutes(post: BlogPost) {
  const words = [post.excerpt, ...post.sections.flatMap((section) => [section.heading, ...section.paragraphs, ...(section.points ?? [])])]
    .join(" ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(3, Math.round(words / 200));
}

export function getAllPosts() {
  return [...posts].sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
}

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug) ?? null;
}

export function getCategories() {
  const all = getAllPosts();
  return [...new Set(all.map((post) => post.category))]
    .map((name) => ({
      name,
      slug: toSlug(name),
      description: categoryDescriptions[name] ?? `Notes on ${name}.`,
      count: all.filter((post) => post.category === name).length,
    }))
    .sort((a, b) => a.name.localeCompare(b.name));
}

export function getCategory(slug: string) {
  return getCategories().find((category) => category.slug === slug) ?? null;
}

export function getPostsByCategory(slug: string) {
  const category = getCategory(slug);
  if (!category) return [];
  return getAllPosts().filter((post) => post.category === category.name);
}

export function getTags() {
  const all = getAllPosts();
  return [...new Set(all.flatMap((post) => post.tags))]
    .map((name) => ({
      name,
      slug: toSlug(name),
      count: all.filter((post) => post.tags.includes(name)).length,
    }))
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
}

export function getTag(slug: string) {
  return getTags().find((tag) => tag.slug === slug) ?? null;
}

export function getPostsByTag(slug: string) {
  const tag = getTag(slug);
  if (!tag) return [];
  return getAllPosts().filter((post) => post.tags.includes(tag.name));
}

export function getRecentPosts(limit = 4, excludeSlug?: string) {
  return getAllPosts()
    .filter((post) => post.slug !== excludeSlug)
    .slice(0, limit);
}
