import type { Metadata } from "next";
import { Footer } from "@/src/components/layout/Footer";
import { Navbar } from "@/src/components/layout/Navbar";
import { Cta } from "@/src/components/sections/Cta";
import { TestimonialMasonry, TestimonialsHero } from "@/src/components/testimonials/TestimonialsPage";
import { socialMetadata } from "@/src/lib/seo";

const title = "Testimonials | Mohit Walia";
const description = "Upwork reviews from completed contracts with Mohit Walia.";

export const metadata: Metadata = {
  title,
  description,
  ...socialMetadata({ title, description, url: "/testimonials" }),
};

export default function TestimonialsPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-clip">
        <TestimonialsHero />
        <TestimonialMasonry />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
