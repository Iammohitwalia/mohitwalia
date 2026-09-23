import { Footer } from "@/src/components/layout/Footer";
import { Navbar } from "@/src/components/layout/Navbar";
import { About } from "@/src/components/sections/About";
import { Cta } from "@/src/components/sections/Cta";
import { Hero } from "@/src/components/sections/Hero";
import { Projects } from "@/src/components/sections/Projects";
import { Schedule } from "@/src/components/sections/Schedule";
import { Services } from "@/src/components/sections/Services";
import { TechStack } from "@/src/components/sections/TechStack";
import { Testimonials } from "@/src/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-clip">
        <Hero />
        <About />
        <Services />
        <Projects />
        <Schedule />
        <TechStack />
        <Testimonials />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
