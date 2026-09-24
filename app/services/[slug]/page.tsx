import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Benefits } from "@/src/components/services/Benefits";
import { CTA } from "@/src/components/services/CTA";
import { FAQ } from "@/src/components/services/FAQ";
import { FeatureGrid } from "@/src/components/services/FeatureGrid";
import { Hero } from "@/src/components/services/Hero";
import { RelatedServices } from "@/src/components/services/RelatedServices";
import { Sidebar } from "@/src/components/services/Sidebar";
import { TechnologyStack } from "@/src/components/services/TechnologyStack";
import { Timeline } from "@/src/components/services/Timeline";
import { socialMetadata } from "@/src/lib/seo";
import { getAllServices, getRelatedServices, getService, getServicesIndex } from "@/src/lib/services";
import { getSiteOrigin } from "@/src/lib/site";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllServices().map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  const origin = await getSiteOrigin();
  const url = origin ? `${origin}/services/${service.slug}` : `/services/${service.slug}`;

  return {
    title: service.seo.title,
    description: service.seo.description,
    keywords: service.seo.keywords,
    alternates: { canonical: url },
    ...socialMetadata({
      title: service.seo.title,
      description: service.seo.description,
      url,
    }),
  };
}

function Prose({ title, body }: { title: string; body: string }) {
  if (!body.trim()) return null;

  return (
    <section>
      <h2 className="text-2xl font-black tracking-[-0.03em] text-foreground sm:text-3xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-muted">{body}</p>
    </section>
  );
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const index = getServicesIndex();
  const related = getRelatedServices(service);
  const origin = await getSiteOrigin();
  const url = origin ? `${origin}/services/${service.slug}` : `/services/${service.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: origin || "/" },
          { "@type": "ListItem", position: 2, name: "Services", item: origin ? `${origin}/services` : "/services" },
          { "@type": "ListItem", position: 3, name: service.title, item: url },
        ],
      },
      {
        "@type": "Service",
        name: service.hero.heading,
        serviceType: service.title,
        description: service.seo.description,
        category: service.category,
        url,
        provider: {
          "@type": "Person",
          name: "Mohit Walia",
          ...(origin ? { url: origin } : {}),
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <Hero index={index} service={service} />
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 py-16 sm:px-6 lg:grid-cols-[minmax(0,1fr)_22rem] lg:px-8 lg:py-20">
        <article className="min-w-0 space-y-16">
          <Prose title="Overview" body={service.overview} />
          <Prose title="Problem" body={service.problem} />
          <Prose title="Solution" body={service.solution} />
          <FeatureGrid items={service.features} />
          <Timeline compact stacked heading="Development process" steps={service.process} />
          <TechnologyStack items={service.stack} />
          <Benefits compact heading="Benefits" items={service.benefits} />
          {service.deliverables.length > 0 ? (
            <section>
              <h2 className="text-2xl font-black tracking-[-0.03em] text-foreground sm:text-3xl">Deliverables</h2>
              <ul className="mt-5 grid gap-3">
                {service.deliverables.map((item) => (
                  <li key={item} className="rounded-2xl border border-line bg-surface px-4 py-3 text-sm leading-6 text-foreground">
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          ) : null}
          <Timeline compact heading="Timeline" phases={service.timeline} />
          <FAQ plain heading="FAQs" items={service.faqs} />
          <RelatedServices services={related} />
        </article>
        <Sidebar service={service.title} enquiry={index.enquiry} />
      </div>
      <CTA cta={index.cta} />
    </>
  );
}
