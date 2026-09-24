import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogArticle } from "@/src/components/blog/BlogArticle";
import { getAllPosts, getPost } from "@/src/lib/blog";
import { socialMetadata } from "@/src/lib/seo";
import { getSiteOrigin } from "@/src/lib/site";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const title = `${post.title} | Mohit Walia`;
  const origin = await getSiteOrigin();
  const url = origin ? `${origin}/blog/${post.slug}` : `/blog/${post.slug}`;

  return {
    title,
    description: post.excerpt,
    keywords: [post.category, ...post.tags],
    alternates: { canonical: url },
    ...socialMetadata({ title, description: post.excerpt, url }),
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const origin = await getSiteOrigin();
  const url = origin ? `${origin}/blog/${post.slug}` : `/blog/${post.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    articleSection: post.category,
    keywords: post.tags.join(", "),
    url,
    author: {
      "@type": "Person",
      name: "Mohit Walia",
      ...(origin ? { url: origin } : {}),
    },
    publisher: {
      "@type": "Person",
      name: "Mohit Walia",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <BlogArticle post={post} />
    </>
  );
}
