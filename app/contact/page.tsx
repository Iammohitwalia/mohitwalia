import type { Metadata } from "next";
import { CTA } from "@/src/components/contact/CTA";
import { ContactForm } from "@/src/components/contact/ContactForm";
import { ContactHero } from "@/src/components/contact/ContactHero";
import { ContactInfo } from "@/src/components/contact/ContactInfo";
import { FAQ } from "@/src/components/contact/FAQ";
import { Footer } from "@/src/components/layout/Footer";
import { Navbar } from "@/src/components/layout/Navbar";
import { socialMetadata } from "@/src/lib/seo";

const title = "Contact | Mohit Walia";
const description =
  "Start a freelance project, SaaS build, AI solution, automation, or technical consulting engagement with Mohit Walia.";

export const metadata: Metadata = {
  title,
  description,
  ...socialMetadata({ title, description, url: "/contact" }),
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-clip">
        <ContactHero />
        <section className="px-5 pb-16 sm:px-6 lg:px-8 lg:pb-24">
          <div className="mx-auto grid w-full max-w-7xl items-start gap-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-12">
            <ContactInfo />
            <ContactForm />
          </div>
        </section>
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
