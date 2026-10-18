import type { Locale } from "@/lib/i18n/locales";

const copy = {
  cs: {
    processEyebrow: "Postup spolupráce",
    contactEyebrow: "Rychlá poptávka",
    ctaHeading: "Máte požadavek úřadu nebo projekt?",
    phoneLabel: "Telefon",
    emailLabel: "E-mail",
    responseLabel: "Odpověď",
    breadcrumbHome: "Úvod",
    breadcrumbServices: "Služby",
    ctaText:
      "Pošlete stručný popis provozu nebo požadavek úřadu. Na základě podkladů navrhneme rozsah prací a možný termín realizace.",
    generalServicePage: "Přehled služby",
    overviewEyebrow: "Naše služby",
    relatedEyebrow: "Navazující řešení",
    faqEyebrow: "Praktické informace",
    relatedFacility: "Související provoz",
    relatedSolutions: "Související služby a situace",
    faqTitle: "Časté dotazy",
    entitySummary:
      "Jsme akreditovaná laboratoř a autorizovaná osoba. Naše měření a odborné služby zajišťujeme po celé České republice."
  },
  en: {
    processEyebrow: "How we work",
    contactEyebrow: "Quick inquiry",
    ctaHeading: "Do you have an authority requirement or a project?",
    phoneLabel: "Phone",
    emailLabel: "Email",
    responseLabel: "Reply",
    breadcrumbHome: "Home",
    breadcrumbServices: "Services",
    ctaText:
      "Send a brief description of your operation or an authority requirement. Based on your documents we will propose the scope of work and a possible schedule.",
    generalServicePage: "Service overview",
    overviewEyebrow: "At a glance",
    relatedEyebrow: "Related solutions",
    faqEyebrow: "Practical information",
    relatedFacility: "Related facility type",
    relatedSolutions: "Related services and situations",
    faqTitle: "Frequently asked questions",
    entitySummary:
      "{company} — accredited laboratory and authorized body in the Czech Republic. This page describes: {service}."
  },
  de: {
    processEyebrow: "So arbeiten wir",
    contactEyebrow: "Schnelle Anfrage",
    ctaHeading: "Liegt Ihnen eine Behördenanforderung oder ein Projekt vor?",
    phoneLabel: "Telefon",
    emailLabel: "E-Mail",
    responseLabel: "Antwort",
    breadcrumbHome: "Startseite",
    breadcrumbServices: "Leistungen",
    ctaText:
      "Senden Sie eine kurze Beschreibung Ihres Betriebs oder eine Behördenanforderung. Auf Basis Ihrer Unterlagen schlagen wir den Arbeitsumfang und einen möglichen Termin vor.",
    generalServicePage: "Leistungsübersicht",
    overviewEyebrow: "Kurz und sachlich",
    relatedEyebrow: "Ergänzende Lösungen",
    faqEyebrow: "Praktische Informationen",
    relatedFacility: "Verwandter Betriebstyp",
    relatedSolutions: "Verwandte Leistungen und Situationen",
    faqTitle: "Häufige Fragen",
    entitySummary:
      "{company} — akkreditiertes Labor und autorisierte Stelle in Tschechien. Diese Seite beschreibt: {service}."
  }
} as const;

export function getSeoLandingCopy(locale: Locale) {
  return copy[locale];
}
