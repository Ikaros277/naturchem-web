import type { Locale } from "@/lib/i18n/locales";
import { pickLocale } from "@/lib/i18n/locale-pick";

const summaries: Record<Locale, Record<string, string>> = {
  cs: {
    "air-quality-analyzers":
      "Stacionární analyzátory VOC a THC pro monitorování kvality ovzduší, imisí a kontrolní stanice.",
    "emission-monitors":
      "Emisní monitory pro spaliny, výduchy a kontinuální měření organických látek na zdrojích.",
    "gc-process-analyzers":
      "Procesní analyzátory s plynovou chromatografií pro průběžnou kontrolu složení v provozu.",
    "portable-monitors":
      "Přenosné FID monitory VOC/THC s ohřátým odběrem pro emise, kontroly a terénní měření.",
    "detectors-fid-pid-tcd":
      "Detektory plamenové ionizace (FID), fotoionizace (PID) a termokonduktivity (TCD) pro analytické systémy.",
    accessories:
      "Sondy, ohřáté odběrové linky, generátory nulového vzduchu, kalibrátory a víceřádkové moduly."
  },
  en: {
    "air-quality-analyzers":
      "Stationary VOC and THC analyzers for ambient air quality, immission monitoring and monitoring stations.",
    "emission-monitors":
      "Emission monitors for flue gas, stacks and continuous organic compound measurement at sources.",
    "gc-process-analyzers":
      "Process analyzers with gas chromatography for on-line composition control in industrial plants.",
    "portable-monitors":
      "Portable FID VOC/THC monitors with heated sampling for emissions, inspections and field work.",
    "detectors-fid-pid-tcd":
      "Flame ionization (FID), photo ionization (PID) and thermal conductivity (TCD) detectors for analytical systems.",
    accessories:
      "Sampling probes, heated lines, zero-air generators, calibrators and multi-line modules."
  },
  de: {
    "air-quality-analyzers":
      "Stationäre VOC- und THC-Analysatoren für Luftqualität, Immissionsmessung und Messstationen.",
    "emission-monitors":
      "Emissionsmonitore für Abgase, Schornsteine und kontinuierliche Messung organischer Verbindungen an Quellen.",
    "gc-process-analyzers":
      "Prozessanalysatoren mit Gaschromatographie für die Online-Überwachung der Zusammensetzung im Betrieb.",
    "portable-monitors":
      "Tragbare FID VOC/THC-Monitore mit beheizter Probenahme für Emissionen, Kontrollen und Feldmessungen.",
    "detectors-fid-pid-tcd":
      "Flammenionisations- (FID), Photoionisations- (PID) und Wärmeleitfähigkeitsdetektoren (TCD) für analytische Systeme.",
    accessories:
      "Sonden, beheizte Probenahmeleitungen, Nullluftgeneratoren, Kalibratoren und Mehrleitungsmodule."
  }
};

export function getPcfCategorySummary(categoryId: string, locale: Locale): string {
  return pickLocale(locale, summaries)[categoryId] ?? "";
}
