import type { Locale } from "@/lib/i18n/locales";

/** Stránky, které mají záměrně jen ověřenou českou variantu. */
const localeAvailability: Record<string, readonly Locale[]> = {
};

export function localesForConstrainedPath(pathname: string): readonly Locale[] | null {
  const normalized = pathname.replace(/\/$/, "") || "/";
  return localeAvailability[normalized] ?? null;
}
