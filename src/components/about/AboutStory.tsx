import { aboutImages } from "@/src/lib/about";
import { Reveal } from "@/src/components/ui/Reveal";

export function AboutStory() {
  return (
    <section className="bg-surface px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div className="relative mx-auto w-full max-w-[460px]">
            <div
              className="absolute top-8 -right-6 -bottom-6 -left-6 -z-10 rounded-[40px] bg-[radial-gradient(circle_at_30%_30%,rgba(34,197,94,0.2),transparent_70%)]"
              aria-hidden="true"
            />
            <figure className="overflow-hidden rounded-[28px] border border-line bg-white shadow-[0_30px_70px_-36px_rgba(15,23,42,0.45)]">
              {/* Replace public/about/story.svg to swap this photo. The frame stays the same. */}
              <img
                src={aboutImages.story}
                alt=""
                width={800}
                height={1000}
                className="aspect-[4/5] h-auto w-full object-cover"
              />
            </figure>
            <p className="absolute bottom-5 left-5 max-w-[14rem] rounded-2xl border border-line bg-white px-4 py-3 text-sm leading-5 font-semibold text-foreground shadow-[0_16px_40px_-24px_rgba(15,23,42,0.45)]">
              Passionate about building products
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-[11px] font-semibold tracking-[0.14em] text-muted uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_0_3px_rgba(34,197,94,0.18)]" aria-hidden="true" />
            My story
          </p>
          <h2 className="mt-5 max-w-xl text-[2.15rem] leading-[1.05] font-black tracking-[-0.04em] text-foreground sm:text-5xl">
            From Curiosity to a <span className="text-accent">Career in Tech</span>
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-muted lg:text-[17px] lg:leading-8">
            My journey into technology started with a simple curiosity about how websites and apps
            work. What began as a hobby gradually turned into a career, and today I get to work on
            existing products, solve real-world problems, and build software that people rely on.
          </p>
          <p className="mt-4 max-w-xl text-base leading-7 text-muted lg:text-[17px] lg:leading-8">
            Over the years I&apos;ve had the opportunity to work with start-ups, agencies, and
            established businesses across the US, UK, Australia, and India, helping them design,
            develop, and scale their digital products.
          </p>
          <p className="mt-4 max-w-xl text-base leading-7 text-muted lg:text-[17px] lg:leading-8">
            I continuously learn, explore new technologies, and focus on delivering clean,
            maintainable, and high-quality solutions that help businesses grow.
          </p>
          <p className="font-hand mt-8 text-4xl leading-none font-bold text-foreground">Mohit Walia</p>
        </Reveal>
      </div>
    </section>
  );
}
