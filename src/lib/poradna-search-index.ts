import type { Locale } from "@/lib/i18n/locales";

export type PoradnaSearchIndexEntry = {
  slug: string;
  s: string;
};

export function poradnaSearchIndexUrl(locale: Locale): string {
  return `/search/poradna-${locale}.json`;
}
