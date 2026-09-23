import type { ComponentType } from "react";
import {
  ClaudeIcon,
  JavaScriptIcon,
  LinuxIcon,
  MongoIcon,
  NextIcon,
  NodeIcon,
  OpenAiIcon,
  PhpIcon,
  PostgresIcon,
  ReactIcon,
  TypeScriptIcon,
  VueIcon,
} from "@/src/components/icons/brand-icons";
import { StackMarkIcon } from "@/src/components/icons/stack-marks";
import type { StackMarkName } from "@/src/components/icons/stack-marks";
import { Reveal } from "@/src/components/ui/Reveal";
import { ScriptNote, SectionHeading } from "@/src/components/ui/SectionHeading";

interface TechItem {
  name: string;
  icon: ComponentType<{ className?: string }>;
}

function mark(name: StackMarkName) {
  function Icon({ className }: { className?: string }) {
    return <StackMarkIcon name={name} className={className ?? "h-8 w-8"} />;
  }
  return Icon;
}

const technologies: TechItem[] = [
  { name: "Next.js", icon: NextIcon },
  { name: "React", icon: ReactIcon },
  { name: "TypeScript", icon: TypeScriptIcon },
  { name: "JavaScript", icon: JavaScriptIcon },
  { name: "Node.js", icon: NodeIcon },
  { name: "Express", icon: mark("express") },
  { name: "Tailwind CSS", icon: mark("tailwindcss") },
  { name: "Vercel", icon: mark("vercel") },
  { name: "Stripe", icon: mark("stripe") },
  { name: "PostgreSQL", icon: PostgresIcon },
  { name: "MongoDB", icon: MongoIcon },
  { name: "Prisma", icon: mark("prisma") },
  { name: "Redis", icon: mark("redis") },
  { name: "Supabase", icon: mark("supabase") },
  { name: "Firebase", icon: mark("firebase") },
  { name: "GraphQL", icon: mark("graphql") },
  { name: "Docker", icon: mark("docker") },
  { name: "AWS", icon: mark("amazonaws") },
  { name: "Git", icon: mark("git") },
  { name: "WordPress", icon: mark("wordpress") },
  { name: "PHP", icon: PhpIcon },
  { name: "Vue.js", icon: VueIcon },
  { name: "Figma", icon: mark("figma") },
  { name: "OpenAI", icon: OpenAiIcon },
  { name: "Claude", icon: ClaudeIcon },
  { name: "Linux", icon: LinuxIcon },
];

export function TechStack() {
  return (
    <section id="stack" className="relative scroll-mt-24 overflow-x-clip px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
      <div className="relative mx-auto w-full max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="Tech stack"
            align="start"
            title="Technologies I Work With"
            action={<ScriptNote lines={["Always", "Learning"]} className="hidden lg:block" />}
          />
        </Reveal>
        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <Reveal key={tech.name} delay={Math.min(index * 0.03, 0.24)}>
                <div className="group flex h-full flex-col items-center gap-3 rounded-[1.25rem] border border-line bg-white px-3 py-5 text-center shadow-[0_16px_36px_-28px_rgba(15,23,42,0.55)] transition duration-200 hover:-translate-y-1 hover:border-[#86EFAC] hover:shadow-[0_18px_36px_-16px_rgba(34,197,94,0.55)]">
                  <span className="flex h-12 w-12 items-center justify-center transition duration-200 group-hover:scale-110">
                    <Icon className="h-8 w-8" />
                  </span>
                  <span className="text-[13px] leading-tight font-semibold text-foreground">{tech.name}</span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
