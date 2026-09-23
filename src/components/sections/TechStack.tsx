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
import { Reveal } from "@/src/components/ui/Reveal";
import { ScriptNote, SectionHeading } from "@/src/components/ui/SectionHeading";

interface TechItem {
  name: string;
  icon: ComponentType<{ className?: string }>;
}

const technologies: TechItem[] = [
  { name: "Next.js", icon: NextIcon },
  { name: "React", icon: ReactIcon },
  { name: "Node.js", icon: NodeIcon },
  { name: "TypeScript", icon: TypeScriptIcon },
  { name: "JavaScript", icon: JavaScriptIcon },
  { name: "OpenAI", icon: OpenAiIcon },
  { name: "Claude", icon: ClaudeIcon },
  { name: "MongoDB", icon: MongoIcon },
  { name: "PostgreSQL", icon: PostgresIcon },
  { name: "PHP", icon: PhpIcon },
  { name: "Vue.js", icon: VueIcon },
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
              <Reveal key={tech.name} delay={Math.min(index * 0.04, 0.28)}>
                <div className="flex h-full flex-col items-center gap-3 rounded-[1.25rem] border border-line bg-white px-3 py-5 text-center shadow-[0_16px_36px_-28px_rgba(15,23,42,0.55)]">
                  <span className="flex h-12 w-12 items-center justify-center">
                    <Icon className="h-8 w-8" />
                  </span>
                  <span className="text-[13px] leading-tight font-semibold whitespace-nowrap text-foreground">
                    {tech.name}
                  </span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
