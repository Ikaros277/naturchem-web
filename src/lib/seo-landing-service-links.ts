import type { Locale } from "@/lib/i18n/locales";
import { getSeoLandings } from "@/lib/i18n/content";

export type SeoLandingLink = {
  href: string;
  title: string;
  description: string;
};

export async function getSeoLandingsForService(
  serviceHref: string,
  locale: Locale,
  limit = 3
): Promise<SeoLandingLink[]> {
  const normalized = serviceHref.startsWith("/") ? serviceHref : `/${serviceHref}`;
  const landings = await getSeoLandings(locale);

  return landings
    .filter((landing) => landing.serviceHref === normalized)
    .slice(0, limit)
    .map((landing) => ({
      href: `/${landing.slug}`,
      title: landing.h1,
      description: landing.metaDescription
    }));
}

export async function getSeoLandingsForSector(
  sectorHref: string,
  locale: Locale,
  limit = 2
): Promise<SeoLandingLink[]> {
  const normalized = sectorHref.startsWith("/") ? sectorHref : `/${sectorHref}`;
  const landings = await getSeoLandings(locale);

  return landings
    .filter((landing) => landing.oboryHref === normalized)
    .slice(0, limit)
    .map((landing) => ({
      href: `/${landing.slug}`,
      title: landing.h1,
      description: landing.metaDescription
    }));
}
