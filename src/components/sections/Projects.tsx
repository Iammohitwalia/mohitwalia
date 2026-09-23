import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Reveal } from "@/src/components/ui/Reveal";
import { SectionHeading } from "@/src/components/ui/SectionHeading";
import { projects } from "@/src/lib/content";
import type { ProjectItem } from "@/src/lib/content";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 bg-surface px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
      <div className="mx-auto w-full max-w-7xl">
        <Reveal>
          <SectionHeading eyebrow="Featured projects" title="Some of My Recent Work" />
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:mt-14 xl:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={Math.min(index * 0.06, 0.24)} className="h-full">
              <article className="group flex h-full flex-col rounded-[24px] border border-line bg-white p-3 shadow-[0_20px_50px_-34px_rgba(15,23,42,0.45)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_28px_60px_-32px_rgba(15,23,42,0.35)]">
                <ProjectShot project={project} />
                <div className="flex flex-1 flex-col px-3 pt-4 pb-3">
                  <span className="w-fit rounded-full bg-surface px-2.5 py-1 text-[11px] font-semibold whitespace-nowrap text-foreground">
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
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectShot({ project }: { project: ProjectItem }) {
  return (
    <div className="relative aspect-[16/10] overflow-hidden rounded-[18px] bg-[#0F172A]">
      {project.image ? (
        <Image
          src={project.image}
          alt={`${project.title} website`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 400px"
          className="object-contain object-center"
        />
      ) : (
        <div className="flex h-full flex-col justify-end bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.28),transparent_55%),linear-gradient(160deg,#111827,#0B1220)] p-5">
          <span className="text-[11px] font-semibold tracking-[0.16em] text-white/55 uppercase">
            {project.url.replace("https://", "")}
          </span>
          <span className="mt-2 text-2xl font-black tracking-[-0.04em] text-white">{project.title}</span>
        </div>
      )}
    </div>
  );
}
