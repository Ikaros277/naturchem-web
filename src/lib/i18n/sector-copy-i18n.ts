import type { Locale } from "@/lib/i18n/locales";

const copy = {
  cs: {
    overviewHeading: "Stručně o provozu",
    processHeading: "Průběh zakázky",
    processIntro:
      "Čtyři kroky od posouzení provozu po protokol a doporučení pro úřad nebo Váš provoz.",
    typicalProblems: "Typické problémy",
    docs: "Podklady",
    outputs: "Výstup",
    pitfalls: "Typické chyby a rizika",
    relatedServices: "Související služby",
    viewService: "Zobrazit službu",
    breadcrumbHome: "Úvod",
    relatedListName: (title: string) => `Související služby pro ${title}`
  },
  en: {
    overviewHeading: "Facility overview",
    processHeading: "How a project works",
    processIntro:
      "Four steps from assessing your operation to a report and recommendations for authorities or your site.",
    typicalProblems: "Typical issues",
    docs: "Documents to send",
    outputs: "Deliverables",
    pitfalls: "Typical mistakes and risks",
    relatedServices: "Related services",
    viewService: "View service",
    breadcrumbHome: "Home",
    relatedListName: (title: string) => `Related services for ${title}`
  },
  de: {
    overviewHeading: "Betriebsüberblick",
    processHeading: "Ablauf eines Projekts",
    processIntro:
      "Vier Schritte von der Bewertung Ihres Betriebs bis zum Bericht und Empfehlungen für Behörden oder Ihren Standort.",
    typicalProblems: "Typische Probleme",
    docs: "Einzureichende Unterlagen",
    outputs: "Ergebnisse",
    pitfalls: "Typische Fehler und Risiken",
    relatedServices: "Verwandte Leistungen",
    viewService: "Leistung anzeigen",
    breadcrumbHome: "Startseite",
    relatedListName: (title: string) => `Verwandte Leistungen für ${title}`
  }
} as const;

export function getSectorCopy(locale: Locale) {
  return copy[locale];
}
