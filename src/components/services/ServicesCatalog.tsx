"use client";

import { useMemo, useState } from "react";
import { CategoryFilter } from "@/src/components/services/CategoryFilter";
import { Search } from "@/src/components/services/Search";
import { ServicesGrid } from "@/src/components/services/ServicesGrid";
import type { ServiceCardData } from "@/src/components/services/ServiceCard";

export function ServicesCatalog({ services }: { services: ServiceCardData[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const categories = useMemo(
    () => [...new Set(services.map((service) => service.category))],
    [services],
  );
  const visible = services.filter((service) => {
    const matchesCategory = category === "All" || service.category === category;
    const haystack = `${service.title} ${service.excerpt} ${service.tags.join(" ")}`.toLowerCase();
    return matchesCategory && haystack.includes(query.trim().toLowerCase());
  });

  return (
    <section id="services-grid" className="scroll-mt-24 px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <CategoryFilter categories={categories} active={category} onChange={setCategory} />
          <Search value={query} onChange={setQuery} />
        </div>
        <ServicesGrid services={visible} />
      </div>
    </section>
  );
}
