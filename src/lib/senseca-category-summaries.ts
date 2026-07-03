import type { Locale } from "@/lib/i18n/locales";
import { pickLocale } from "@/lib/i18n/locale-pick";

const summaries: Record<Locale, Record<string, string>> = {
  cs: {
    "solar-photoradiometry":
      "Pyranometry, albedometry a senzory slunečního záření pro FV, meteorologii a fotoradiometrii.",
    "air-and-wind-speed":
      "Anemometry, sondy a transmitory pro měření rychlosti a směru větru v terénu i v budovách.",
    precipitation: "Srážkoměry a senzory pro meteorologické stanice a hydrologické monitorování.",
    "thunderstorm-and-lightning":
      "Systémy varování před bouřkami a detekce blesků pro letiště, průmysl a venkovní provozy.",
    "visibility-present-weather":
      "Senzory viditelnosti a přítomného počasí pro silniční, letištní a meteorologické aplikace.",
    "data-acquisition-systems":
      "Záznamníky dat a systémy pro sběr, ukládání a přenos měřených dat z terénních stanic.",
    "soil-leaf": "Senzory vlhkosti půdy, listové vlhkosti a související agronomické parametry.",
    "weather-station": "Komponenty a přístroje pro meteorologické stanice a environmentální monitorování.",
    "sound-vibration": "Hlukoměry, analyzátory vibrací a příslušenství pro akustiku a vibrodiagnostiku.",
    "microclimate-thermal-comfort":
      "Přístroje pro mikroklima, tepelnou pohodu a hygienické měření na pracovištích.",
    pressure: "Barometry, transmitory tlaku a příslušenství pro meteorologii i průmysl.",
    temperature: "Teploměry, sondy Pt100/Pt1000 a záznamníky dat pro přesné měření teploty.",
    humidity: "Hygrometry a kombinované senzory teploty a relativní vlhkosti.",
    light: "Luxmetry, spektroradiometry a senzory osvětlení pro pracoviště i laboratoře.",
    "co2-air-quality": "Senzory CO₂ a přístroje pro monitorování kvality vnitřního ovzduší.",
    "water-analysis":
      "Sondy a transmitory pro pH, vodivost, rozpuštěný kyslík a další parametry vody."
  },
  en: {
    "solar-photoradiometry":
      "Pyranometers, albedometers and solar radiation sensors for PV, meteorology and photoradiometry.",
    "air-and-wind-speed":
      "Anemometers, probes and transmitters for air velocity and wind direction indoors and outdoors.",
    precipitation: "Rain gauges and sensors for weather stations and hydrological monitoring.",
    "thunderstorm-and-lightning":
      "Thunderstorm warning and lightning detection for airports, industry and outdoor sites.",
    "visibility-present-weather":
      "Visibility and present-weather sensors for road, airport and meteorological applications.",
    "data-acquisition-systems":
      "Data loggers and systems for acquisition, storage and transfer of field measurements.",
    "soil-leaf": "Soil moisture, leaf wetness and related agronomic monitoring sensors.",
    "weather-station": "Components and instruments for weather stations and environmental monitoring.",
    "sound-vibration": "Sound level meters, vibration analyzers and accessories for acoustics.",
    "microclimate-thermal-comfort":
      "Instruments for microclimate, thermal comfort and occupational hygiene measurements.",
    pressure: "Barometers, pressure transmitters and accessories for meteorology and industry.",
    temperature: "Thermometers, Pt100/Pt1000 probes and data loggers for accurate temperature measurement.",
    humidity: "Hygrometers and combined temperature / relative humidity sensors.",
    light: "Lux meters, spectroradiometers and lighting sensors for workplaces and laboratories.",
    "co2-air-quality": "CO₂ sensors and instruments for indoor air quality monitoring.",
    "water-analysis": "Probes and transmitters for pH, conductivity, dissolved oxygen and water quality."
  },
  de: {
    "solar-photoradiometry":
      "Pyranometer, Albedometer und Strahlungssensoren für PV, Meteorologie und Photoradiometrie.",
    "air-and-wind-speed":
      "Anemometer, Sonden und Transmitter für Luftgeschwindigkeit und Windrichtung.",
    precipitation: "Regenmesser und Sensoren für Wetterstationen und Hydrologie.",
    "thunderstorm-and-lightning":
      "Gewitterwarn- und Blitzdetektionssysteme für Flughäfen, Industrie und Außenanlagen.",
    "visibility-present-weather":
      "Sichtweiten- und Wetter-Sensoren für Straße, Flughafen und Meteorologie.",
    "data-acquisition-systems":
      "Datenlogger und Systeme zur Erfassung, Speicherung und Übertragung von Messdaten.",
    "soil-leaf": "Bodenfeuchte-, Blattfeuchte- und agronomische Monitoring-Sensoren.",
    "weather-station": "Komponenten und Geräte für Wetterstationen und Umweltmonitoring.",
    "sound-vibration": "Schallpegelmesser, Vibrationsanalysatoren und Zubehör für Akustik.",
    "microclimate-thermal-comfort":
      "Geräte für Mikroklima, thermischen Komfort und Arbeitsplatzhygiene.",
    pressure: "Barometer, Drucktransmitter und Zubehör für Meteorologie und Industrie.",
    temperature: "Thermometer, Pt100/Pt1000-Sonden und Datenlogger für Temperaturmessung.",
    humidity: "Hygrometer und kombinierte Temperatur-/Feuchtesensoren.",
    light: "Luxmeter, Spektroradiometer und Beleuchtungssensoren.",
    "co2-air-quality": "CO₂-Sensoren und Geräte für die Überwachung der Raumluftqualität.",
    "water-analysis": "Sonden und Transmitter für pH, Leitfähigkeit, gelösten Sauerstoff und Wasserqualität."
  }
};

export function getSensecaCategorySummary(categoryId: string, locale: Locale): string | undefined {
  return pickLocale(locale, summaries)[categoryId];
}
