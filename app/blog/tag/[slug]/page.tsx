import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogArchive } from "@/src/components/blog/BlogArchive";
import { getPostsByTag, getTag, getTags } from "@/src/lib/blog";
import { socialMetadata } from "@/src/lib/seo";
import { getSiteOrigin } from "@/src/lib/site";

interface TagPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getTags().map((tag) => ({ slug: tag.slug }));
}

export async function generateMetadata({ params }: TagPageProps): Promise<Metadata> {
  const { slug } = await params;
  const tag = getTag(slug);
  if (!tag) return {};
  const title = `${tag.name} | Blog | Mohit Walia`;
  const description = `${tag.count} ${tag.count === 1 ? "article" : "articles"} tagged ${tag.name}.`;
  const origin = await getSiteOrigin();
  const url = origin ? `${origin}/blog/tag/${tag.slug}` : `/blog/tag/${tag.slug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    ...socialMetadata({ title, description, url }),
  };
}

export default async function BlogTagPage({ params }: TagPageProps) {
  const { slug } = await params;
  const tag = getTag(slug);
  if (!tag) notFound();

  return (
    <BlogArchive
      eyebrow="Tag"
      title={tag.name}
      description={`${tag.count} ${tag.count === 1 ? "article" : "articles"} filed under ${tag.name}.`}
      posts={getPostsByTag(slug)}
      activeTag={tag.slug}
    />
  );
}
