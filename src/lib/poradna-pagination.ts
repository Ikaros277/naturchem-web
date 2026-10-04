import type { Locale } from "@/lib/i18n/locales";
import { localizeHref } from "@/lib/i18n/navigation";

export const PORADNA_PAGE_SIZE = 12;
export function poradnaPageCount(total: number): number {
  return Math.max(1, Math.ceil(total / PORADNA_PAGE_SIZE));
}
export function poradnaPagePath(page: number): string {
  return page === 1 ? "/poradna" : `/poradna/strana/${page}`;
}
export function poradnaPageHref(page: number, locale: Locale): string {
  return localizeHref(poradnaPagePath(page), locale);
}
export const poradnaPaginationLabels = {
  cs: { page: "Strana", navigation: "Stránky poradny", previous: "Předchozí strana", next: "Další strana", loading: "Načítám články…", error: "Články se nepodařilo načíst. Zkuste to prosím znovu.", retry: "Zkusit znovu" },
  en: { page: "Page", navigation: "Article pages", previous: "Previous page", next: "Next page", loading: "Loading articles…", error: "Articles could not be loaded. Please try again.", retry: "Try again" },
  de: { page: "Seite", navigation: "Artikelseiten", previous: "Vorherige Seite", next: "Nächste Seite", loading: "Artikel werden geladen…", error: "Artikel konnten nicht geladen werden. Bitte versuchen Sie es erneut.", retry: "Erneut versuchen" }
} satisfies Record<Locale, Record<string, string>>;
