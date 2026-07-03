import type { Locale } from "@/lib/i18n/locales";
import { pickLocale } from "@/lib/i18n/locale-pick";

export type PortableMonitorPriceTier = "low" | "medium" | "high";

export type PortableMonitorChoiceRow = {
  model: string;
  productSlug: string;
  scenarios: [boolean, boolean, boolean, boolean, boolean, boolean, boolean];
  price: PortableMonitorPriceTier;
};

export const portableMonitorChoiceRows: PortableMonitorChoiceRow[] = [
  {
    model: "8807/PID",
    productSlug: "mod-8807-nr-portable-gc-for-nmh-or-specifics",
    scenarios: [true, false, false, false, false, false, false],
    price: "medium"
  },
  {
    model: "8807/FID",
    productSlug: "mod-8807-nr-portable-gc-for-nmh-or-specifics",
    scenarios: [false, true, false, false, true, false, false],
    price: "medium"
  },
  {
    model: "2005",
    productSlug: "mod-2005-for-total-voc",
    scenarios: [false, false, true, true, false, false, false],
    price: "low"
  },
  {
    model: "2001 C",
    productSlug: "mod-2001-c-for-voc-and-check-of-ch4-fraction",
    scenarios: [false, false, true, false, true, true, false],
    price: "medium"
  },
  {
    model: "C 2011",
    productSlug: "mod-c-2011-for-voc-and-ch4-simultaneously",
    scenarios: [false, false, true, false, true, true, true],
    price: "high"
  }
];

type ChoiceTableCopy = {
  title: string;
  lead: string;
  modelHeading: string;
  priceHeading: string;
  matchLabel: string;
  noMatchLabel: string;
  footnote: string;
  scenarioHeadings: [string, string, string, string, string, string, string];
  priceLabels: Record<PortableMonitorPriceTier, string>;
};

const copy: Record<Locale, ChoiceTableCopy> = {
  cs: {
    title: "Volba přenosného VOC analyzátoru PCF",
    lead: "Přehledová tabulka výrobce pro rychlé srovnání modelů podle typu měření a cenové hladiny. U varianty 8807 doporučíme konfiguraci PID nebo FID podle požadovaného detekčního limitu.",
    modelHeading: "Model",
    priceHeading: "Cenová hladina",
    matchLabel: "Vhodné",
    noMatchLabel: "Nevhodné",
    footnote: "Zdroj: PCF Elettronica. Pro konkrétní měřicí úlohu a konfiguraci připravíme doporučení a nabídku.",
    scenarioHeadings: [
      "Prostředí – velmi nízký detekční limit",
      "Prostředí – nízký detekční limit",
      "Prostředí – vysoký detekční limit",
      "Komín – celkové VOC",
      "Komín – CH₄ + TVOC (T < 120 °C)",
      "Komín – CH₄ + TVOC",
      "Komín – duální HFID"
    ],
    priceLabels: {
      low: "Nízká",
      medium: "Střední",
      high: "Vysoká"
    }
  },
  en: {
    title: "Choosing a PCF portable VOC analyzer",
    lead: "Manufacturer overview for comparing models by measurement type and price tier. For the 8807 series we recommend PID or FID configuration based on the required detection limit.",
    modelHeading: "Model",
    priceHeading: "Price tier",
    matchLabel: "Suitable",
    noMatchLabel: "Not suitable",
    footnote: "Source: PCF Elettronica. We will recommend the right configuration and prepare a quote for your application.",
    scenarioHeadings: [
      "Ambient – very low detection limit",
      "Ambient – low detection limit",
      "Ambient – high detection limit",
      "Stack – total VOC",
      "Stack – CH₄ + TVOC (T < 120 °C)",
      "Stack – CH₄ + TVOC",
      "Stack – dual HFID"
    ],
    priceLabels: {
      low: "Low",
      medium: "Medium",
      high: "High"
    }
  },
  de: {
    title: "Auswahl des tragbaren PCF-VOC-Analysators",
    lead: "Herstellerübersicht zum schnellen Vergleich der Modelle nach Messaufgabe und Preisniveau. Bei der 8807-Serie empfehlen wir die PID- oder FID-Konfiguration je nach erforderlicher Nachweisgrenze.",
    modelHeading: "Modell",
    priceHeading: "Preisniveau",
    matchLabel: "Geeignet",
    noMatchLabel: "Nicht geeignet",
    footnote: "Quelle: PCF Elettronica. Für Ihre Messaufgabe empfehlen wir die passende Konfiguration und erstellen ein Angebot.",
    scenarioHeadings: [
      "Umgebung – sehr niedrige Nachweisgrenze",
      "Umgebung – niedrige Nachweisgrenze",
      "Umgebung – hohe Nachweisgrenze",
      "Schornstein – Gesamt-VOC",
      "Schornstein – CH₄ + TVOC (T < 120 °C)",
      "Schornstein – CH₄ + TVOC",
      "Schornstein – dual HFID"
    ],
    priceLabels: {
      low: "Niedrig",
      medium: "Mittel",
      high: "Hoch"
    }
  }
};

export function getPortableMonitorChoiceTableCopy(locale: Locale): ChoiceTableCopy {
  return pickLocale(locale, copy);
}
