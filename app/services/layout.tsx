import type { ReactNode } from "react";
import { Footer } from "@/src/components/layout/Footer";
import { Navbar } from "@/src/components/layout/Navbar";

export default function ServicesLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="overflow-x-clip">{children}</main>
      <Footer />
    </>
  );
}
