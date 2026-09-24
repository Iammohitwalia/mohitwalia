import { ArrowUpRight } from "lucide-react";
import { SiteLink } from "@/src/components/layout/SiteLink";
import { Button } from "@/src/components/ui/Button";
import { formatBlogDate, getCategories, getRecentPosts, getTags } from "@/src/lib/blog";
import { contact } from "@/src/lib/contact";

export function BlogSidebar({
  activeCategory,
  activeTag,
  excludeSlug,
}: {
  activeCategory?: string;
  activeTag?: string;
  excludeSlug?: string;
}) {
  const categories = getCategories();
  const tags = getTags();
  const recent = getRecentPosts(4, excludeSlug);

  return (
    <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
      <section className="rounded-[24px] border border-line bg-white p-5">
        <h2 className="text-[11px] font-semibold tracking-[0.16em] text-muted uppercase">Categories</h2>
        <ul className="mt-4 space-y-2">
          {categories.map((category) => {
            const active = category.slug === activeCategory;
            return (
              <li key={category.slug}>
                <SiteLink
                  href={`/blog/category/${category.slug}`}
                  className={`flex items-center justify-between gap-3 rounded-2xl px-3 py-2 text-sm font-semibold transition-colors ${
                    active ? "bg-accent text-white" : "text-foreground hover:bg-surface hover:text-accent"
                  }`}
                >
                  <span>{category.name}</span>
                  <span className={active ? "text-white/80" : "text-muted"}>{category.count}</span>
                </SiteLink>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="rounded-[24px] border border-line bg-white p-5">
        <h2 className="text-[11px] font-semibold tracking-[0.16em] text-muted uppercase">Tags</h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => {
            const active = tag.slug === activeTag;
            return (
              <li key={tag.slug}>
                <SiteLink
                  href={`/blog/tag/${tag.slug}`}
                  className={`inline-flex rounded-full border px-3 py-1 text-[12px] font-semibold transition-colors ${
                    active
                      ? "border-accent bg-accent text-white"
                      : "border-line text-foreground hover:border-accent hover:text-accent"
                  }`}
                >
                  {tag.name}
                </SiteLink>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="rounded-[24px] border border-line bg-white p-5">
        <h2 className="text-[11px] font-semibold tracking-[0.16em] text-muted uppercase">Recent</h2>
        <ul className="mt-4 space-y-4">
          {recent.map((post) => (
            <li key={post.slug}>
              <SiteLink href={`/blog/${post.slug}`} className="group block">
                <p className="text-sm leading-5 font-bold tracking-[-0.02em] text-foreground transition-colors group-hover:text-accent">
                  {post.title}
                </p>
                <p className="mt-1 text-[12px] font-semibold text-muted">{formatBlogDate(post.publishedAt)}</p>
              </SiteLink>
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-[24px] bg-[#0B1220] p-5 text-white">
        <p className="text-[11px] font-semibold tracking-[0.16em] text-white/60 uppercase">Start a project</p>
        <p className="mt-3 text-[17px] leading-snug font-bold tracking-[-0.02em]">Tell me what you want to build.</p>
        <Button
          href={contact.talkHref}
          variant="inverted"
          shape="pill"
          className="mt-5 h-11 w-full px-4 text-sm"
          trailingIcon={<ArrowUpRight className="h-4 w-4" aria-hidden="true" />}
        >
          Let&apos;s Talk
        </Button>
      </section>
    </aside>
  );
}
