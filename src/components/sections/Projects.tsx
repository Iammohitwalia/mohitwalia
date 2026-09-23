import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { Reveal } from "@/src/components/ui/Reveal";
import { SectionHeading } from "@/src/components/ui/SectionHeading";
import { projects } from "@/src/lib/content";
import type { ProjectItem } from "@/src/lib/content";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 bg-surface px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
      <div className="mx-auto w-full max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="Featured projects"
            title="Some of My Recent Work"
            action={
              <Link
                href="/#projects"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors hover:text-[#16a34a]"
              >
                View All Projects
                <ArrowUpRight className="h-4 w-4" strokeWidth={2.25} aria-hidden="true" />
              </Link>
            }
          />
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:mt-14 xl:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.08} className="h-full">
              <article className="group flex h-full flex-col rounded-[24px] border border-line bg-white p-3 shadow-[0_20px_50px_-34px_rgba(15,23,42,0.45)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_28px_60px_-32px_rgba(15,23,42,0.35)]">
                <ProjectArtwork project={project} />
                <div className="flex flex-1 flex-col px-3 pt-4 pb-3">
                  <span className="w-fit rounded-full bg-surface px-2.5 py-1 text-[11px] font-semibold whitespace-nowrap text-foreground">
                    {project.category}
                  </span>
                  <h3 className="mt-3 text-lg font-bold tracking-[-0.02em] text-foreground">{project.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-6 text-muted">{project.description}</p>
                  <Link
                    href="/#projects"
                    className="mt-5 inline-flex w-fit items-center gap-1 text-sm font-semibold text-accent transition-colors hover:text-[#16a34a]"
                  >
                    View Project
                    <ArrowUpRight
                      className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      strokeWidth={2.25}
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectArtwork({ project }: { project: ProjectItem }) {
  return (
    <div className="relative aspect-[16/11] overflow-hidden rounded-[18px]">
      {project.tone === "paw" ? <PawPreview /> : null}
      {project.tone === "legal" ? <LegalPreview /> : null}
      {project.tone === "restaurant" ? <RestaurantPreview /> : null}
    </div>
  );
}

function BrowserChrome({
  dark = false,
  children,
}: {
  dark?: boolean;
  children: ReactNode;
}) {
  return (
    <div className={`flex h-full flex-col ${dark ? "bg-[#0E1726]" : "bg-[#F4FBF7]"}`}>
      <div className={`flex items-center gap-1.5 px-3 py-2 ${dark ? "bg-white/5" : "bg-white/80"}`}>
        <span className="h-2 w-2 rounded-full bg-[#FB7185]" />
        <span className="h-2 w-2 rounded-full bg-[#FBBF24]" />
        <span className="h-2 w-2 rounded-full bg-[#4ADE80]" />
        <span className={`ml-2 h-4 flex-1 rounded-full ${dark ? "bg-white/10" : "bg-[#E2E8F0]"}`} />
      </div>
      <div className="min-h-0 flex-1">{children}</div>
    </div>
  );
}

function PawPreview() {
  return (
    <BrowserChrome>
      <div className="flex h-full flex-col px-4 pt-3 pb-3">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold text-foreground">myPawPair</span>
          <span className="rounded-full bg-accent px-2 py-0.5 text-[10px] font-semibold text-white">Join</span>
        </div>
        <p className="mt-3 max-w-[11rem] text-[15px] leading-tight font-black tracking-[-0.03em] text-foreground">
          Care for every pet, in one place.
        </p>
        <div className="mt-auto grid grid-cols-3 gap-2">
          {[
            { name: "Buddy", tone: "bg-[#FDE68A]" },
            { name: "Luna", tone: "bg-[#86EFAC]" },
            { name: "Milo", tone: "bg-[#93C5FD]" },
          ].map((pet) => (
            <div
              key={pet.name}
              className="rounded-xl bg-white px-2 py-2.5 text-center shadow-[0_8px_16px_-12px_rgba(15,23,42,0.45)]"
            >
              <span className={`mx-auto block h-8 w-8 rounded-full ${pet.tone}`} />
              <span className="mt-1.5 block text-[10px] font-semibold text-foreground">{pet.name}</span>
            </div>
          ))}
        </div>
      </div>
    </BrowserChrome>
  );
}

function LegalPreview() {
  return (
    <BrowserChrome dark>
      <div className="flex h-full gap-3 px-4 pt-3 pb-3">
        <div className="flex min-w-0 flex-1 flex-col">
          <span className="text-[9px] font-semibold tracking-[0.16em] text-white/45 uppercase">
            The Meehan Law Firm
          </span>
          <p className="mt-2 text-[15px] leading-[1.15] font-black tracking-[-0.03em] text-white">
            Justice Drives Us Forward
          </p>
          <span className="mt-auto w-fit rounded-full border border-white/20 px-2.5 py-1 text-[10px] font-semibold text-white">
            Speak with us
          </span>
        </div>
        <div className="flex w-[38%] flex-col justify-center gap-1.5">
          {["Litigation", "Counsel", "Advisory"].map((item) => (
            <div
              key={item}
              className="rounded-lg border border-white/10 bg-white/5 px-2 py-1.5 text-[10px] font-medium text-white/80"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </BrowserChrome>
  );
}

function RestaurantPreview() {
  const dishes = [
    { name: "Butter chicken", price: "$18" },
    { name: "Garlic naan", price: "$5" },
    { name: "Mango lassi", price: "$6" },
  ];

  return (
    <BrowserChrome dark>
      <div className="flex h-full flex-col bg-[#1A120C] px-4 pt-3 pb-3">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold tracking-[0.12em] text-white uppercase">Maharaja</span>
          <span className="rounded-full bg-[#DC2626] px-2 py-0.5 text-[10px] font-semibold text-white">Order</span>
        </div>
        <div className="mt-3 space-y-1.5">
          {dishes.map((dish) => (
            <div key={dish.name} className="flex items-center gap-2 rounded-lg bg-white/5 px-2 py-1.5">
              <span className="h-6 w-6 shrink-0 rounded-md bg-[linear-gradient(180deg,#F59E0B,#7C2D12)]" />
              <span className="min-w-0 flex-1 truncate text-[11px] font-medium text-white">{dish.name}</span>
              <span className="text-[11px] font-semibold text-[#FDBA74]">{dish.price}</span>
            </div>
          ))}
        </div>
      </div>
    </BrowserChrome>
  );
}
