import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { dedicatedServicePages } from "@/lib/dedicated-service-pages";
import { siteUrl } from "@/lib/site";

export function getDedicatedService(slug: string) {
  const service = dedicatedServicePages[slug];
  if (!service) {
    throw new Error(`Neznámá služba: ${slug}`);
  }
  return service;
}

export function dedicatedServiceMetadata(slug: string): Metadata {
  const service = getDedicatedService(slug);
  return {
    title: service.title,
    description: service.description,
    alternates: { canonical: `${siteUrl}/${service.slug}/` }
  };
}

export function DedicatedServiceRoute({ slug }: { slug: string }) {
  return <ServicePage {...getDedicatedService(slug)} />;
}

export const dedicatedServiceSlugs = Object.keys(dedicatedServicePages);
