import type { Locale } from "@/lib/i18n/locales";

/** Stránky, které mají záměrně jen ověřenou českou variantu. */
const localeAvailability: Record<string, readonly Locale[]> = {
  "/mereni-pro-kolaudaci": ["cs"],
  "/mereni-nove-haly": ["cs"],
  "/pro-stavebni-firmy": ["cs"],
  "/mereni-hluku-havlickuv-brod": ["cs"],
  "/mereni-hluku-praha": ["cs"]
};

export function localesForConstrainedPath(pathname: string): readonly Locale[] | null {
  const normalized = pathname.replace(/\/$/, "") || "/";
  return localeAvailability[normalized] ?? null;
}
