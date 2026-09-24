import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogArchive } from "@/src/components/blog/BlogArchive";
import { getCategories, getCategory, getPostsByCategory } from "@/src/lib/blog";
import { socialMetadata } from "@/src/lib/seo";
import { getSiteOrigin } from "@/src/lib/site";

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getCategories().map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};
  const title = `${category.name} | Blog | Mohit Walia`;
  const origin = await getSiteOrigin();
  const url = origin ? `${origin}/blog/category/${category.slug}` : `/blog/category/${category.slug}`;

  return {
    title,
    description: category.description,
    alternates: { canonical: url },
    ...socialMetadata({ title, description: category.description, url }),
  };
}

export default async function BlogCategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();
  const posts = getPostsByCategory(slug);

  return (
    <BlogArchive
      eyebrow="Category"
      title={category.name}
      description={category.description}
      posts={posts}
      activeCategory={category.slug}
    />
  );
}
