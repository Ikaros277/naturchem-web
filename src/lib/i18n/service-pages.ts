import {
  dedicatedServicePages,
  type DedicatedServicePage
} from "@/lib/dedicated-service-pages";
import { dedicatedServicePagesEn } from "@/lib/dedicated-service-pages-en";
import { dedicatedServicePagesEn as dedicatedServicePagesDe } from "@/lib/dedicated-service-pages-de";
import type { Locale } from "@/lib/i18n/locales";

export type { DedicatedServicePage };

export function getDedicatedServicePages(locale: Locale): Record<string, DedicatedServicePage> {
  if (locale === "de") return dedicatedServicePagesDe;
  if (locale === "en") return dedicatedServicePagesEn;
  return dedicatedServicePages;
}

export function getDedicatedService(slug: string, locale: Locale): DedicatedServicePage {
  const pages = getDedicatedServicePages(locale);
  const service = pages[slug];
  if (!service) {
    throw new Error(`Unknown service: ${slug}`);
  }
  return service;
}
