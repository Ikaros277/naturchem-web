import type { Locale } from "@/lib/i18n/locales";
import { pcfElettronicaProducts } from "@/lib/pcf-elettronica-catalog";

// Semantic revisions only. Never substitute build time or bump unrelated URLs.
const SEARCH_CONVERSION_REVISION = "2026-10-26T00:00:00.000Z";
const revisedCzechServices = new Set(["/sluzby/mereni-vibraci", "/sluzby/mereni-mikroklimatu"]);
const revisedCatalogPages = new Set(pcfElettronicaProducts.map(product => "/prodej/pcf-elettronica/" + product.slug));

export function getPageContentRevision(route: string, locale: Locale): Date | undefined {
  if (locale === "cs" && route === "/mereni-hluku-praha") return new Date("2026-10-29T00:00:00.000Z");
  return revisedCatalogPages.has(route) || (locale === "cs" && revisedCzechServices.has(route))
    ? new Date(SEARCH_CONVERSION_REVISION)
    : undefined;
}
