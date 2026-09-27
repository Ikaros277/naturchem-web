import type { Locale } from "./locales";

const copy = {
  cs: {
    breadcrumbs: "Drobečková navigace", docs: "Co nám poslat", details: "Podrobnosti ke službě",
    scopeAndOutputs: "Rozsah služby a výstupy", preparation: "Podklady a příprava",
    situations: "Typické situace", faq: "Časté dotazy", allFaq: "Další otázky a odpovědi",
    related: "Navazující služby a témata", moreRelated: "Další související témata",
    response: "Ozveme se do 24 h", responseFull: "Na poptávky reagujeme do 24 hodin.",
    inquiry: "Přejít na poptávku", lab: "Akreditovaná laboratoř č. 1599",
    measurement: "Měření", studies: "Studie a výpočty", docsCategory: "Dokumentace a povolení",
    noiseHint: "Plánujete stavbu nebo novou technologii?", noiseLink: "Hlukové studie a výpočty",
  },
  en: {
    breadcrumbs: "Breadcrumb navigation", docs: "What to send us", details: "Service details",
    scopeAndOutputs: "Scope and deliverables", preparation: "Documents and preparation",
    situations: "Typical situations", faq: "Frequently asked questions", allFaq: "More questions and answers",
    related: "Related services and topics", moreRelated: "More related topics",
    response: "We respond within 24 h", responseFull: "We respond to inquiries within 24 hours.",
    inquiry: "Send an inquiry", lab: "Accredited laboratory No. 1599",
    measurement: "Measurements", studies: "Studies and calculations", docsCategory: "Documentation and permits",
    noiseHint: "Planning a building or new equipment?", noiseLink: "Noise studies and calculations",
  },
  de: {
    breadcrumbs: "Brotkrumennavigation", docs: "Ihre Unterlagen", details: "Details zur Leistung",
    scopeAndOutputs: "Umfang und Ergebnisse", preparation: "Unterlagen und Vorbereitung",
    situations: "Typische Situationen", faq: "Häufige Fragen", allFaq: "Weitere Fragen und Antworten",
    related: "Verwandte Leistungen und Themen", moreRelated: "Weitere verwandte Themen",
    response: "Antwort innerhalb von 24 Std.", responseFull: "Wir antworten auf Anfragen innerhalb von 24 Stunden.",
    inquiry: "Anfrage senden", lab: "Akkreditiertes Labor Nr. 1599",
    measurement: "Messungen", studies: "Studien und Berechnungen", docsCategory: "Dokumentation und Genehmigungen",
    noiseHint: "Planen Sie ein Gebäude oder eine neue Anlage?", noiseLink: "Lärmstudien und Berechnungen",
  },
} as const;

export function getServiceDetailCopy(locale: Locale) {
  return copy[locale];
}
