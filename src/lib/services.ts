import fs from "node:fs";
import path from "node:path";

export interface TextBlock {
  title: string;
  detail: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  detail: string;
}

export interface Phase {
  phase: string;
  duration: string;
  detail: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ServiceSeo {
  title: string;
  description: string;
  keywords: string[];
}

export interface ServiceRecord {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  icon: string;
  tags: string[];
  image: string;
  seo: ServiceSeo;
  hero: { heading: string; subtitle: string };
  meta: {
    timeline: string;
    technology: string;
    updated: string;
    readingTime: string;
  };
  overview: string;
  problem: string;
  solution: string;
  features: TextBlock[];
  process: ProcessStep[];
  stack: string[];
  benefits: TextBlock[];
  deliverables: string[];
  timeline: Phase[];
  faqs: FaqItem[];
  related: string[];
}

export interface ServicesIndex {
  seo: ServiceSeo;
  hero: {
    eyebrow: string;
    heading: string;
    description: string;
    primaryLabel: string;
    primaryHref: string;
    secondaryLabel: string;
    secondaryHref: string;
    stats: { value: string; label: string; icon: string }[];
    floating: string[];
  };
  why: { eyebrow: string; heading: string; description: string; items: TextBlock[] };
  process: { eyebrow: string; heading: string; description: string; steps: ProcessStep[] };
  faqs: { eyebrow: string; heading: string; description: string; items: FaqItem[] };
  cta: { heading: string; description: string; primaryLabel: string; secondaryLabel: string };
  detailCta: { primaryLabel: string; secondaryLabel: string };
  enquiry: {
    budgets: string[];
    timelines: string[];
    availability: string;
    responseTime: string;
    resumeHref: string;
    submitLabel: string;
    whatsappLabel: string;
    bookLabel: string;
    resumeLabel: string;
    relatedLabel: string;
  };
  order: string[];
}

const dataDir = path.join(process.cwd(), "src/data/services");

export function getServicesIndex() {
  const raw = fs.readFileSync(path.join(dataDir, "services.json"), "utf8");
  return JSON.parse(raw) as ServicesIndex;
}

export function getAllServices() {
  const index = getServicesIndex();
  return index.order
    .map((slug) => getService(slug))
    .filter((service): service is ServiceRecord => service !== null);
}

export function getService(slug: string) {
  const file = path.join(dataDir, `${slug}.json`);
  if (!fs.existsSync(file)) return null;
  const service = JSON.parse(fs.readFileSync(file, "utf8")) as ServiceRecord;
  const index = getServicesIndex();
  if (!service.process?.length) service.process = index.process.steps;
  return service;
}

export function getRelatedServices(service: ServiceRecord) {
  const all = getAllServices();
  const chosen = service.related
    .map((slug) => all.find((item) => item.slug === slug))
    .filter((item): item is ServiceRecord => Boolean(item));
  if (chosen.length > 0) return chosen.slice(0, 3);
  return all.filter((item) => item.category === service.category && item.slug !== service.slug).slice(0, 3);
}

export function getCategories(services: ServiceRecord[]) {
  return [...new Set(services.map((service) => service.category))];
}
