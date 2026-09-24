import { ServiceCard } from "@/src/components/services/ServiceCard";
import type { ServiceCardData } from "@/src/components/services/ServiceCard";

export function ServicesGrid({ services }: { services: ServiceCardData[] }) {
  if (services.length === 0) {
    return <p className="mt-8 text-sm text-muted">No services match that search.</p>;
  }

  return (
    <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => (
        <ServiceCard key={service.slug} service={service} />
      ))}
    </div>
  );
}
