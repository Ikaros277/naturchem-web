import type { Locale } from "@/lib/i18n/locales";
import { articleContentVersion } from "@/lib/article-content-version";

export type PoradnaSearchIndexEntry = {
  slug: string;
  s: string;
};

export function poradnaSearchIndexUrl(locale: Locale): string {
  return `/search/poradna-${locale}.json?v=${articleContentVersion}`;
}

export function poradnaListingIndexUrl(locale: Locale): string {
  return `/search/poradna-listing-${locale}.json?v=${articleContentVersion}`;
}
