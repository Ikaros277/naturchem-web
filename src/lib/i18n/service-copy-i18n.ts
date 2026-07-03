import type { Locale } from "@/lib/i18n/locales";

const copy = {
  cs: {
    overviewHeading: "Stručně o službě",
    scopeHeading: "Co zajišťujeme",
    whenNeededHeading: "Kdy službu potřebujete",
    mistakesHeading: "Typické chyby a rizika",
    docsIntro: "Pro první posouzení rozsahu pošlete obvykle:",
    ctaStripText:
      "Pošlete popis technologie, požadavek úřadu nebo dostupné podklady. Navrhneme potřebné měření, studii nebo dokumentaci podle účelu výstupu.",
    outputsHeading: "Co dostanete",
    howToStartHeading: "Jak začít",
    practicalExamplesHeading: "Příklady zakázek z praxe",
    extraInfoSummary: "Doplňující informace pro přípravu zakázky",
    relatedHeading: "Mohlo by Vás zajímat",
    trustAria: "Důvěryhodnost a oprávnění",
    overviewAria: "Stručný přehled služby",
    viewService: "Zobrazit službu",
    viewSector: "Zobrazit provoz",
    breadcrumbHome: "Úvod",
    breadcrumbServices: "Služby",
    accreditationLink: "Akreditace a oprávnění",
    entityBlurb:
      "NATURCHEM je akreditovaná zkušební laboratoř č. 1599 (ČIA) a autorizovaná osoba pro měření emisí, pracovního prostředí a hluku v celé ČR. Více o oprávněních a zkušenostech: ",
    relatedListName: (title: string) => `Související odkazy pro ${title}`
  },
  en: {
    overviewHeading: "Service overview",
    scopeHeading: "What we provide",
    whenNeededHeading: "When you need this service",
    mistakesHeading: "Typical mistakes and risks",
    docsIntro: "For an initial scope assessment, please send:",
    ctaStripText:
      "Send a description of the technology, authority requirements or available documents. We will propose the measurements, study or documentation needed for your purpose.",
    outputsHeading: "What you receive",
    howToStartHeading: "How to get started",
    practicalExamplesHeading: "Practical project examples",
    extraInfoSummary: "Additional information for preparing your inquiry",
    relatedHeading: "You may also be interested in",
    trustAria: "Credibility and authorisations",
    overviewAria: "Brief service overview",
    viewService: "View service",
    viewSector: "View industry",
    breadcrumbHome: "Home",
    breadcrumbServices: "Services",
    accreditationLink: "Accreditation & authorisations",
    entityBlurb:
      "NATURCHEM is an accredited testing laboratory No. 1599 (ČIA) and an authorised body for emission, workplace and noise measurements across the Czech Republic. More on credentials and experience: ",
    relatedListName: (title: string) => `Related links for ${title}`
  },
  de: {
    overviewHeading: "Leistungsüberblick",
    scopeHeading: "Was wir anbieten",
    whenNeededHeading: "Wann Sie diese Leistung benötigen",
    mistakesHeading: "Typische Fehler und Risiken",
    docsIntro: "Für eine erste Einschätzung des Umfangs senden Sie bitte:",
    ctaStripText:
      "Senden Sie eine Beschreibung der Technologie, Behördenanforderungen oder vorhandene Unterlagen. Wir schlagen die für Ihren Zweck erforderlichen Messungen, Studien oder Dokumentation vor.",
    outputsHeading: "Was Sie erhalten",
    howToStartHeading: "So starten Sie",
    practicalExamplesHeading: "Praktische Projektbeispiele",
    extraInfoSummary: "Zusätzliche Informationen zur Vorbereitung Ihrer Anfrage",
    relatedHeading: "Das könnte Sie auch interessieren",
    trustAria: "Glaubwürdigkeit und Autorisierungen",
    overviewAria: "Kurzer Leistungsüberblick",
    viewService: "Leistung anzeigen",
    viewSector: "Betriebstyp anzeigen",
    breadcrumbHome: "Startseite",
    breadcrumbServices: "Leistungen",
    accreditationLink: "Akkreditierung und Autorisierungen",
    entityBlurb:
      "NATURCHEM ist akkreditiertes Prüflabor Nr. 1599 (ČIA) und autorisierte Stelle für Emissions-, Arbeitsumfeld- und Lärmmessungen in der gesamten Tschechischen Republik. Mehr zu Berechtigungen und Erfahrung: ",
    relatedListName: (title: string) => `Verwandte Links für ${title}`
  }
} as const;

export function getServiceCopy(locale: Locale) {
  return copy[locale];
}
