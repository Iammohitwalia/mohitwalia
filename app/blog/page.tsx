import type { Metadata } from "next";
import { BlogArchive } from "@/src/components/blog/BlogArchive";
import { getAllPosts } from "@/src/lib/blog";
import { socialMetadata } from "@/src/lib/seo";

const title = "Blog | Mohit Walia";
const description =
  "Notes from Mohit Walia on Next.js rebuilds, product scope, automation, commerce, and how freelance projects actually ship.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/blog" },
  ...socialMetadata({ title, description, url: "/blog" }),
};

export default function BlogPage() {
  return (
    <BlogArchive
      eyebrow="Blog"
      title="Notes from the work."
      description="Practical writing on rebuilds, scope, automation, and the systems behind a product that ships. Twelve articles, grouped by category and tag."
      posts={getAllPosts()}
    />
  );
}
