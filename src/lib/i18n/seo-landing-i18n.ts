import type { Locale } from "@/lib/i18n/locales";

const copy = {
  cs: {
    breadcrumbHome: "Úvod",
    breadcrumbServices: "Služby",
    ctaText:
      "Pošlete stručný popis provozu nebo požadavek úřadu. Na základě podkladů navrhneme rozsah prací a možný termín realizace.",
    generalServicePage: "Obecná stránka služby",
    relatedFacility: "Související provoz",
    entitySummary:
      "{company} — akreditovaná laboratoř a autorizovaná osoba v České republice. Tato stránka popisuje službu: {service}."
  },
  en: {
    breadcrumbHome: "Home",
    breadcrumbServices: "Services",
    ctaText:
      "Send a brief description of your operation or an authority requirement. Based on your documents we will propose the scope of work and a possible schedule.",
    generalServicePage: "General service page",
    relatedFacility: "Related facility type",
    entitySummary:
      "{company} — accredited laboratory and authorized body in the Czech Republic. This page describes: {service}."
  },
  de: {
    breadcrumbHome: "Startseite",
    breadcrumbServices: "Leistungen",
    ctaText:
      "Senden Sie eine kurze Beschreibung Ihres Betriebs oder eine Behördenanforderung. Auf Basis Ihrer Unterlagen schlagen wir den Arbeitsumfang und einen möglichen Termin vor.",
    generalServicePage: "Allgemeine Leistungsseite",
    relatedFacility: "Verwandter Betriebstyp",
    entitySummary:
      "{company} — akkreditiertes Labor und autorisierte Stelle in Tschechien. Diese Seite beschreibt: {service}."
  }
} as const;

export function getSeoLandingCopy(locale: Locale) {
  return copy[locale];
}
