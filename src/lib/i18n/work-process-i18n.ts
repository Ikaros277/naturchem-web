import type { Locale } from "@/lib/i18n/locales";

const copy = {
  cs: {
    steps: [
      {
        title: "Posouzení podkladů",
        text: "Projdeme podklady, požadavek úřadu a navrhneme nejvhodnější postup."
      },
      {
        title: "Návrh rozsahu a termínu",
        text: "Upřesníme rozsah měření, studie nebo dokumentace a plánování termínů."
      },
      {
        title: "Měření a zpracování",
        text: "Provedeme měření, výpočty nebo zpracování podkladů dle dohodnutého rozsahu."
      },
      {
        title: "Odborný výstup",
        text: "Předáme protokol, studii nebo dokumentaci připravenou pro další řízení."
      }
    ],
    heading: "Jak probíhá zakázka",
    intro: "Čtyři kroky od podkladů po výstup pro úřad nebo Váš provoz.",
    stepFallback: (n: number) => `Krok ${n}`
  },
  en: {
    steps: [
      {
        title: "Review of documents",
        text: "We review your documents, authority requirements and propose the best approach."
      },
      {
        title: "Scope and schedule",
        text: "We clarify the scope of measurements, studies or documentation and plan timing."
      },
      {
        title: "Measurements and processing",
        text: "We carry out measurements, calculations or document preparation as agreed."
      },
      {
        title: "Expert deliverable",
        text: "We deliver a report, study or documentation ready for the next permitting step."
      }
    ],
    heading: "How a project works",
    intro: "Four steps from documents to a deliverable for authorities or your operation.",
    stepFallback: (n: number) => `Step ${n}`
  },
  de: {
    steps: [
      {
        title: "Prüfung der Unterlagen",
        text: "Wir prüfen Ihre Unterlagen, Behördenanforderungen und schlagen das beste Vorgehen vor."
      },
      {
        title: "Umfang und Terminplan",
        text: "Wir klären den Umfang von Messungen, Studien oder Dokumentation und planen die Termine."
      },
      {
        title: "Messung und Auswertung",
        text: "Wir führen Messungen, Berechnungen oder die Aufbereitung der Unterlagen wie vereinbart durch."
      },
      {
        title: "Fachlicher Bericht",
        text: "Wir übergeben einen Bericht, eine Studie oder Dokumentation für das weitere Genehmigungsverfahren."
      }
    ],
    heading: "Ablauf eines Projekts",
    intro: "Vier Schritte von den Unterlagen bis zum Ergebnis für Behörden oder Ihren Betrieb.",
    stepFallback: (n: number) => `Schritt ${n}`
  }
} as const;

export function getWorkProcessCopy(locale: Locale) {
  return copy[locale];
}

export function sectorProcessSteps(lines: readonly string[], locale: Locale) {
  const { steps, stepFallback } = getWorkProcessCopy(locale);
  return lines.map((line, index) => ({
    title: steps[index]?.title ?? stepFallback(index + 1),
    text: line.length > 0 ? line.charAt(0).toUpperCase() + line.slice(1) : line
  }));
}
