import {
  dedicatedServicePages,
  type DedicatedServicePage
} from "@/lib/dedicated-service-pages";
import { dedicatedServicePagesEn } from "@/lib/dedicated-service-pages-en";
import type { Locale } from "@/lib/i18n/locales";

export type { DedicatedServicePage };

export function getDedicatedServicePages(locale: Locale): Record<string, DedicatedServicePage> {
  return locale === "en" ? dedicatedServicePagesEn : dedicatedServicePages;
}

export function getDedicatedService(slug: string, locale: Locale): DedicatedServicePage {
  const pages = getDedicatedServicePages(locale);
  const service = pages[slug];
  if (!service) {
    throw new Error(`Unknown service: ${slug}`);
  }
  return service;
}
