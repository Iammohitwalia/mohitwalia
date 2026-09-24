import { BlogSidebar } from "@/src/components/blog/BlogSidebar";
import { SiteLink } from "@/src/components/layout/SiteLink";
import { formatBlogDate, readingMinutes, toSlug } from "@/src/lib/blog";
import type { BlogPost } from "@/src/lib/blog";

export function BlogArticle({ post }: { post: BlogPost }) {
  const minutes = readingMinutes(post);

  return (
    <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 py-12 sm:px-6 lg:grid-cols-[minmax(0,1fr)_20rem] lg:px-8 lg:py-16">
      <article className="min-w-0">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-muted">
            <li>
              <SiteLink href="/" className="transition-colors hover:text-foreground">
                Home
              </SiteLink>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <SiteLink href="/blog" className="transition-colors hover:text-foreground">
                Blog
              </SiteLink>
            </li>
            <li aria-hidden="true">/</li>
            <li className="font-medium text-foreground">{post.title}</li>
          </ol>
        </nav>

        <p className="mt-8">
          <SiteLink
            href={`/blog/category/${toSlug(post.category)}`}
            className="inline-flex rounded-full bg-[#F1F5F9] px-3 py-1.5 text-[11px] font-semibold tracking-[0.14em] text-foreground uppercase transition-colors hover:text-accent"
          >
            {post.category}
          </SiteLink>
        </p>
        <h1 className="mt-5 max-w-3xl text-[2.4rem] leading-[1.05] font-black tracking-[-0.045em] text-foreground sm:text-5xl">
          {post.title}
        </h1>
        <p className="mt-4 text-sm font-semibold text-muted">
          {formatBlogDate(post.publishedAt)} · {minutes} min read
        </p>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">{post.excerpt}</p>

        <div className="mt-10 max-w-3xl space-y-10">
          {post.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-2xl font-black tracking-[-0.03em] text-foreground sm:text-3xl">{section.heading}</h2>
              <div className="mt-4 space-y-4">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-base leading-7 text-muted">
                    {paragraph}
                  </p>
                ))}
              </div>
              {section.points?.length ? (
                <ul className="mt-5 grid gap-3">
                  {section.points.map((point) => (
                    <li key={point} className="rounded-2xl border border-line bg-surface px-4 py-3 text-sm leading-6 text-foreground">
                      {point}
                    </li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>

        <div className="mt-12 border-t border-line pt-6">
          <h2 className="text-[11px] font-semibold tracking-[0.16em] text-muted uppercase">Tags</h2>
          <ul className="mt-4 flex flex-wrap gap-2">
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
        </div>
      </article>
      <BlogSidebar activeCategory={toSlug(post.category)} excludeSlug={post.slug} />
    </div>
  );
}
