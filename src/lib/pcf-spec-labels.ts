import type { Locale } from "@/lib/i18n/locales";

type SpecLabelLocale = {
  en: string;
  cs: string;
  de: string;
};

const pcfSpecLabels: Record<string, SpecLabelLocale> = {
  "Analog outputs": {
    en: "Analog outputs",
    cs: "Analogové výstupy",
    de: "Analogausgänge"
  },
  "Analysis type": {
    en: "Analysis type",
    cs: "Typ analýzy",
    de: "Analyseart"
  },
  Application: {
    en: "Application",
    cs: "Aplikace",
    de: "Anwendung"
  },
  "Application type": {
    en: "Application type",
    cs: "Typ aplikace",
    de: "Anwendungstyp"
  },
  "Background noise": {
    en: "Background noise",
    cs: "Šum pozadí",
    de: "Hintergrundrauschen"
  },
  Capacity: {
    en: "Capacity",
    cs: "Kapacita",
    de: "Kapazität"
  },
  "Carrier gas": {
    en: "Carrier gas",
    cs: "Nosný plyn",
    de: "Trägergas"
  },
  Compounds: {
    en: "Compounds",
    cs: "Sloučeniny",
    de: "Verbindungen"
  },
  Configuration: {
    en: "Configuration",
    cs: "Konfigurace",
    de: "Konfiguration"
  },
  Cycle: {
    en: "Cycle",
    cs: "Cyklus",
    de: "Zyklus"
  },
  "Detection limit (LDL)": {
    en: "Detection limit (LDL)",
    cs: "Detekční limit (LDL)",
    de: "Nachweisgrenze (LDL)"
  },
  Detector: {
    en: "Detector",
    cs: "Detektor",
    de: "Detektor"
  },
  "Detector options": {
    en: "Detector options",
    cs: "Možnosti detektoru",
    de: "Detektoroptionen"
  },
  Dimensions: {
    en: "Dimensions",
    cs: "Rozměry",
    de: "Abmessungen"
  },
  Display: {
    en: "Display",
    cs: "Displej",
    de: "Display"
  },
  Displays: {
    en: "Displays",
    cs: "Displeje",
    de: "Displays"
  },
  Filter: {
    en: "Filter",
    cs: "Filtr",
    de: "Filter"
  },
  "Form factor": {
    en: "Form factor",
    cs: "Provedení",
    de: "Bauform"
  },
  Function: {
    en: "Function",
    cs: "Funkce",
    de: "Funktion"
  },
  "Gas requirements": {
    en: "Gas requirements",
    cs: "Požadavky na plyny",
    de: "Gasanforderungen"
  },
  "Gas supplies": {
    en: "Gas supplies",
    cs: "Plynové zásobování",
    de: "Gasversorgung"
  },
  "Heated line": {
    en: "Heated line",
    cs: "Vyhřívaná linka",
    de: "Beheizte Leitung"
  },
  Heating: {
    en: "Heating",
    cs: "Vyhřívání",
    de: "Beheizung"
  },
  Integration: {
    en: "Integration",
    cs: "Integrace",
    de: "Integration"
  },
  Length: {
    en: "Length",
    cs: "Délka",
    de: "Länge"
  },
  Lengths: {
    en: "Lengths",
    cs: "Délky",
    de: "Längen"
  },
  Linearity: {
    en: "Linearity",
    cs: "Linearita",
    de: "Linearität"
  },
  "MFC channels": {
    en: "MFC channels",
    cs: "Kanály MFC",
    de: "MFC-Kanäle"
  },
  Material: {
    en: "Material",
    cs: "Materiál",
    de: "Material"
  },
  "Measured parameters": {
    en: "Measured parameters",
    cs: "Měřené parametry",
    de: "Gemessene Parameter"
  },
  "Measuring cycle": {
    en: "Measuring cycle",
    cs: "Měřicí cyklus",
    de: "Messzyklus"
  },
  "Measuring range": {
    en: "Measuring range",
    cs: "Měřicí rozsah",
    de: "Messbereich"
  },
  "Measuring scales": {
    en: "Measuring scales",
    cs: "Měřicí škály",
    de: "Messskalen"
  },
  Methods: {
    en: "Methods",
    cs: "Metody",
    de: "Methoden"
  },
  "Mixing chamber": {
    en: "Mixing chamber",
    cs: "Směšovací komora",
    de: "Mischkammer"
  },
  Mounting: {
    en: "Mounting",
    cs: "Montáž",
    de: "Montage"
  },
  Operation: {
    en: "Operation",
    cs: "Provoz",
    de: "Betrieb"
  },
  Output: {
    en: "Output",
    cs: "Výstup",
    de: "Ausgang"
  },
  Outputs: {
    en: "Outputs",
    cs: "Výstupy",
    de: "Ausgänge"
  },
  Parameters: {
    en: "Parameters",
    cs: "Parametry",
    de: "Parameter"
  },
  Power: {
    en: "Power",
    cs: "Příkon",
    de: "Leistung"
  },
  "Power supply": {
    en: "Power supply",
    cs: "Napájení",
    de: "Stromversorgung"
  },
  Precision: {
    en: "Precision",
    cs: "Přesnost",
    de: "Präzision"
  },
  "Response time": {
    en: "Response time",
    cs: "Doba odezvy",
    de: "Ansprechzeit"
  },
  "Sample flow rate": {
    en: "Sample flow rate",
    cs: "Průtok vzorku",
    de: "Probenflussrate"
  },
  "Sample temperature": {
    en: "Sample temperature",
    cs: "Teplota vzorku",
    de: "Probentemperatur"
  },
  Sampling: {
    en: "Sampling",
    cs: "Vzorkování",
    de: "Probenahme"
  },
  "Sampling mode": {
    en: "Sampling mode",
    cs: "Režim vzorkování",
    de: "Probenahmemodus"
  },
  Selectivity: {
    en: "Selectivity",
    cs: "Selektivita",
    de: "Selektivität"
  },
  Sensitivity: {
    en: "Sensitivity",
    cs: "Citlivost",
    de: "Empfindlichkeit"
  },
  "Serial output": {
    en: "Serial output",
    cs: "Sériový výstup",
    de: "Serieller Ausgang"
  },
  "Special function": {
    en: "Special function",
    cs: "Speciální funkce",
    de: "Sonderfunktion"
  },
  Standard: {
    en: "Standard",
    cs: "Norma",
    de: "Norm"
  },
  "Target compounds": {
    en: "Target compounds",
    cs: "Cílové sloučeniny",
    de: "Zielverbindungen"
  },
  "Tests performed": {
    en: "Tests performed",
    cs: "Provedené testy",
    de: "Durchgeführte Tests"
  },
  Type: {
    en: "Type",
    cs: "Typ",
    de: "Typ"
  },
  "Typical analytes": {
    en: "Typical analytes",
    cs: "Typické analyty",
    de: "Typische Analyten"
  },
  "Typical compounds": {
    en: "Typical compounds",
    cs: "Typické sloučeniny",
    de: "Typische Verbindungen"
  },
  "Typical flow": {
    en: "Typical flow",
    cs: "Typický průtok",
    de: "Typischer Durchfluss"
  },
  Use: {
    en: "Use",
    cs: "Použití",
    de: "Einsatz"
  },
  Versions: {
    en: "Versions",
    cs: "Verze",
    de: "Versionen"
  },
  Weight: {
    en: "Weight",
    cs: "Hmotnost",
    de: "Gewicht"
  },
  "Working temperature": {
    en: "Working temperature",
    cs: "Pracovní teplota",
    de: "Betriebstemperatur"
  }
};

export function getPcfSpecLabel(label: string, locale: Locale): string {
  const localized = pcfSpecLabels[label];
  if (!localized) {
    return label;
  }

  if (locale === "cs") {
    return localized.cs;
  }
  if (locale === "de") {
    return localized.de;
  }
  return localized.en;
}
