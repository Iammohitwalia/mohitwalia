import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import type { ProjectItem } from "@/src/lib/content";

export function ProjectCard({ project }: { project: ProjectItem }) {
  return (
    <article className="group flex h-full flex-col rounded-[24px] border border-line bg-white p-3 shadow-[0_20px_50px_-34px_rgba(15,23,42,0.45)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_28px_60px_-32px_rgba(15,23,42,0.35)]">
      <div className="relative aspect-[16/10] overflow-hidden rounded-[18px] bg-[#0F172A]">
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} website`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 400px"
            className="object-contain object-center"
          />
        ) : null}
      </div>
      <div className="flex flex-1 flex-col px-3 pt-4 pb-3">
        <span className="w-fit rounded-full bg-surface px-2.5 py-1 text-[11px] font-semibold text-foreground">
          {project.category}
        </span>
        <h3 className="mt-3 text-lg font-bold tracking-[-0.02em] text-foreground">{project.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-6 text-muted">{project.description}</p>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex w-fit items-center gap-1 text-sm font-semibold text-accent transition-colors hover:text-[#16a34a]"
        >
          View Project
          <ArrowUpRight
            className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            strokeWidth={2.25}
            aria-hidden="true"
          />
        </a>
      </div>
    </article>
  );
}
