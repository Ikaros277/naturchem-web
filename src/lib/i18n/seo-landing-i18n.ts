import type { Locale } from "@/lib/i18n/locales";

const copy = {
  cs: {
    breadcrumbHome: "Úvod",
    breadcrumbServices: "Služby",
    ctaText:
      "Pošlete stručný popis provozu nebo požadavek úřadu. Na základě podkladů navrhneme rozsah prací a možný termín realizace.",
    generalServicePage: "Obecná stránka služby",
    relatedFacility: "Související provoz"
  },
  en: {
    breadcrumbHome: "Home",
    breadcrumbServices: "Services",
    ctaText:
      "Send a brief description of your operation or an authority requirement. Based on your documents we will propose the scope of work and a possible schedule.",
    generalServicePage: "General service page",
    relatedFacility: "Related facility type"
  }
} as const;

export function getSeoLandingCopy(locale: Locale) {
  return copy[locale];
}
