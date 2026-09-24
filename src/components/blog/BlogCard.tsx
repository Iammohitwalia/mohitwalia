import { SiteLink } from "@/src/components/layout/SiteLink";
import { formatBlogDate, readingMinutes, toSlug } from "@/src/lib/blog";
import type { BlogPost } from "@/src/lib/blog";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="flex h-full flex-col rounded-[24px] border border-line bg-white p-5 shadow-[0_18px_40px_-32px_rgba(15,23,42,0.45)] sm:p-6">
      <div className="flex flex-wrap items-center gap-2">
        <SiteLink
          href={`/blog/category/${toSlug(post.category)}`}
          className="rounded-full bg-[#F1F5F9] px-3 py-1 text-[11px] font-semibold tracking-[0.12em] text-foreground uppercase transition-colors hover:text-accent"
        >
          {post.category}
        </SiteLink>
        <p className="text-[13px] font-semibold text-muted">
          {formatBlogDate(post.publishedAt)} · {readingMinutes(post)} min
        </p>
      </div>
      <h2 className="mt-4 text-[1.35rem] leading-snug font-black tracking-[-0.03em] text-foreground">
        <SiteLink href={`/blog/${post.slug}`} className="transition-colors hover:text-accent">
          {post.title}
        </SiteLink>
      </h2>
      <p className="mt-3 flex-1 text-sm leading-6 text-muted">{post.excerpt}</p>
      <ul className="mt-5 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <li key={tag}>
            <SiteLink
              href={`/blog/tag/${toSlug(tag)}`}
              className="rounded-full border border-line px-3 py-1 text-[12px] font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              {tag}
            </SiteLink>
          </li>
        ))}
      </ul>
    </article>
  );
}
