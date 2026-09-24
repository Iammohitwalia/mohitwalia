import { Reveal } from "@/src/components/ui/Reveal";
import { ProjectCard } from "@/src/components/projects/ProjectCard";
import { SectionHeading } from "@/src/components/ui/SectionHeading";
import { projects } from "@/src/lib/content";

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
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
