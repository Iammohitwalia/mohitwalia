import type { Metadata } from "next";
import { Benefits } from "@/src/components/services/Benefits";
import { CTA } from "@/src/components/services/CTA";
import { FAQ } from "@/src/components/services/FAQ";
import { Hero } from "@/src/components/services/Hero";
import { ServicesCatalog } from "@/src/components/services/ServicesCatalog";
import { Timeline } from "@/src/components/services/Timeline";
import { socialMetadata } from "@/src/lib/seo";
import { getAllServices, getServicesIndex } from "@/src/lib/services";
import { getSiteOrigin } from "@/src/lib/site";

export async function generateMetadata(): Promise<Metadata> {
  const index = getServicesIndex();
  const origin = await getSiteOrigin();
  const url = origin ? `${origin}/services` : "/services";

  return {
    title: index.seo.title,
    description: index.seo.description,
    keywords: index.seo.keywords,
    alternates: { canonical: url },
    ...socialMetadata({
      title: index.seo.title,
      description: index.seo.description,
      url,
    }),
  };
}

export default async function ServicesPage() {
  const index = getServicesIndex();
  const services = getAllServices();
  const origin = await getSiteOrigin();
  const url = origin ? `${origin}/services` : "/services";
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: origin || "/" },
          { "@type": "ListItem", position: 2, name: "Services", item: url },
        ],
      },
      {
        "@type": "ItemList",
        name: index.seo.title,
        itemListElement: services.map((service, position) => ({
          "@type": "ListItem",
          position: position + 1,
          name: service.title,
          url: origin ? `${origin}/services/${service.slug}` : `/services/${service.slug}`,
        })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <Hero index={index} />
      <ServicesCatalog services={services} />
      <Timeline
        eyebrow={index.process.eyebrow}
        heading={index.process.heading}
        description={index.process.description}
        steps={index.process.steps}
      />
      <Benefits
        eyebrow={index.why.eyebrow}
        heading={index.why.heading}
        description={index.why.description}
        items={index.why.items}
      />
      <FAQ
        eyebrow={index.faqs.eyebrow}
        heading={index.faqs.heading}
        description={index.faqs.description}
        items={index.faqs.items}
      />
      <CTA cta={index.cta} />
    </>
  );
}
