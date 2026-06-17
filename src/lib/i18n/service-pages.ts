import type { DedicatedServicePage } from "@/lib/dedicated-service-pages";
import type { Locale } from "@/lib/i18n/locales";

export type { DedicatedServicePage };

async function loadDedicatedServicePages(locale: Locale): Promise<Record<string, DedicatedServicePage>> {
  switch (locale) {
    case "de":
      return (await import("@/lib/dedicated-service-pages-de")).dedicatedServicePagesEn;
    case "en":
      return (await import("@/lib/dedicated-service-pages-en")).dedicatedServicePagesEn;
    default:
      return (await import("@/lib/dedicated-service-pages")).dedicatedServicePages;
  }
}

export async function getDedicatedServicePages(locale: Locale): Promise<Record<string, DedicatedServicePage>> {
  return loadDedicatedServicePages(locale);
}

export async function getDedicatedService(slug: string, locale: Locale): Promise<DedicatedServicePage> {
  const pages = await loadDedicatedServicePages(locale);
  const service = pages[slug];
  if (!service) {
    throw new Error(`Unknown service: ${slug}`);
  }
  return service;
}
