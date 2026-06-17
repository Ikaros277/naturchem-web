import { contactUrl } from "@/lib/contact-url";

export type TypicalScenario = {
  title: string;
  narrative: string;
  learnMoreHref: string;
  ctaLabel: string;
  ctaHref: string;
};

/**
 * Project examples from practice — each card links to a service detail and to an inquiry with a sensible preset.
 */
export const typicalScenarios: TypicalScenario[] = [
  {
    title: "Emissionsmessungen in einer Lackiererei",
    narrative:
      "Wir messen VOC/TOC, Feinstaub und verwandte Parameter aus Abgaskaminen und der Filterung, überprüfen repräsentative Betriebsbedingungen und erstellen einen Bericht für Betriebs- und Luftschutzbehörden.",
    learnMoreHref: "/sluzby/mereni-emisi",
    ctaLabel: "Fordern Sie Messungen an",
    ctaHref: contactUrl("Měření emisí")
  },
  {
    title: "Messungen an Kesselanlagen oder Verbrennungsquellen",
    narrative:
      "Periodische und betriebliche Messungen an Kesselanlagen, Brennern, Kraft-Wärme-Kopplungsanlagen und anderen Quellen mit Bericht für Betriebsgenehmigung, Behörde oder ISPOP.",
    learnMoreHref: "/sluzby/mereni-emisi",
    ctaLabel: "Fordern Sie Messungen an",
    ctaHref: contactUrl("Měření emisí")
  },
  {
    title: "Ausbreitungsstudie für eine neue oder veränderte Quelle",
    narrative:
      "Modellierung des Immissionsbeitrags für Genehmigungen, Kapazitätsänderungen, UVP oder Gespräche mit der regionalen Behörde.",
    learnMoreHref: "/sluzby/rozptylove-studie",
    ctaLabel: "Studie/Bericht anfordern",
    ctaHref: contactUrl("Rozptylové studie")
  },
  {
    title: "Lärmstudie für Betrieb, Bau oder Technik",
    narrative:
      "Lärmberechnung und -bewertung für Standorte, HVAC, Wärmepumpen, Industriequellen oder Bauverfahren.",
    learnMoreHref: "/sluzby/hlukove-studie",
    ctaLabel: "Studie/Bericht anfordern",
    ctaHref: contactUrl("Hlukové studie")
  },
  {
    title: "Arbeitsplatzumgebungsmessungen für regionale Hygienestation",
    narrative:
      "Messungen der Arbeitsplatzumgebung – Staub, chemische Substanzen, Lärm, Mikroklima – für die Arbeitsplatzkategorisierung, Arbeitsschutzdokumentation oder eine Hygienestationsanfrage.",
    learnMoreHref: "/sluzby/pracovni-prostredi",
    ctaLabel: "Fordern Sie Messungen an",
    ctaHref: contactUrl("Měření pracovního prostředí")
  },
  {
    title: "Belege für die regionale Behörde oder die tschechische Umweltinspektion",
    narrative:
      "Wir stimmen Emissionsmessberichte, Studien, Gutachten und Betriebsdokumentationen mit einem Antrag oder einer integrierten Genehmigung ab.",
    learnMoreHref: "/sluzby/mereni-emisi",
    ctaLabel: "Senden Sie Dokumente zur Überprüfung",
    ctaHref: contactUrl("Nejsem si jistý")
  },
  {
    title: "UVP-Benachrichtigung und Begleitdokumentation für das Verfahren",
    narrative:
      "Wir bewahren Projektmeldungen, Fachanhänge und Scoping-Eingaben zusammen mit Messungen, Studien und Projektdokumentationen auf.",
    learnMoreHref: "/sluzby/eia-oznameni-zameru",
    ctaLabel: "Studie/Bericht anfordern",
    ctaHref: contactUrl("EIA a oznámení záměru")
  },
  {
    title: "Betriebsordnung oder Gutachten",
    narrative:
      "Vorbereitung nach dem Luftschutzgesetz, Verknüpfung zu Messungen und Betrieb, Ausgänge für Verwaltungsverfahren und Technologieänderungen.",
    learnMoreHref: "/sluzby/provozni-rady",
    ctaLabel: "Studie/Bericht anfordern",
    ctaHref: contactUrl("Provozní řády")
  },
  {
    title: "ISPOP- und Betriebsaufzeichnungen",
    narrative:
      "Integrierte Aufzeichnungen zur Verschmutzungsberichterstattung, Datenüberprüfung anhand von Messungen und Genehmigungen, Erstellung unterstützender Dokumentation für die Berichterstattung.",
    learnMoreHref: "/sluzby/ispop",
    ctaLabel: "Service anfordern",
    ctaHref: contactUrl("ISPOP")
  },
  {
    title: "Schulung zur Chemikaliengesetzgebung in der Produktion",
    narrative:
      "Praktische Schulung zum Chemikalienrecht für Betrieb, Lager, Produktion oder Labor mit Schwerpunkt auf Sicherheitsdatenblättern, Kennzeichnung, Lagerung und Betriebsvorschriften.",
    learnMoreHref: "/sluzby/skoleni-chemicke-legislativy",
    ctaLabel: "Fordern Sie eine Schulung an",
    ctaHref: contactUrl("Školení chemického zákona / chemické legislativy")
  },
  {
    title: "Überprüfung einer behördlichen Anfrage oder Entscheidung",
    narrative:
      "Senden Sie eine Anfrage oder Entscheidung. Wir unterscheiden, was sofort dokumentiert werden muss, was nachträglich ergänzt werden kann und welche Fristen zu beachten sind.",
    learnMoreHref: "/faq",
    ctaLabel: "Lassen Sie den Projektumfang überprüfen",
    ctaHref: contactUrl("Nejsem si jistý")
  }
];
