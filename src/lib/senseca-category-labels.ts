import type { Locale } from "@/lib/i18n/locales";
import { pickLocale } from "@/lib/i18n/locale-pick";

const categoryLabels: Record<Locale, Record<string, string>> = {
  cs: {
    "solar-photoradiometry": "Solární a fotoradiometrie",
    "air-and-wind-speed": "Rychlost vzduchu a větru",
    precipitation: "Srážky",
    "thunderstorm-and-lightning": "Bouřka a blesky",
    "visibility-present-weather": "Viditelnost a aktuální počasí",
    "data-acquisition-systems": "Systémy pro sběr dat",
    "soil-leaf": "Půda a listí",
    "weather-station": "Meteorologická stanice",
    "sound-vibration": "Zvuk a vibrace",
    "microclimate-thermal-comfort": "Mikroklima – tepelný komfort",
    pressure: "Tlak",
    temperature: "Teplota",
    humidity: "Vlhkost",
    light: "Světlo",
    "co2-air-quality": "CO₂ – kvalita vzduchu",
    "water-analysis": "Analýza vody"
  },
  en: {
    "solar-photoradiometry": "Solar & Photoradiometry",
    "air-and-wind-speed": "Air and Wind Speed",
    precipitation: "Precipitation",
    "thunderstorm-and-lightning": "Thunderstorm and Lightning",
    "visibility-present-weather": "Visibility & Present Weather",
    "data-acquisition-systems": "Data Acquisition Systems",
    "soil-leaf": "Soil & Leaf",
    "weather-station": "Weather Station",
    "sound-vibration": "Sound & Vibration",
    "microclimate-thermal-comfort": "Microclimate – Thermal Comfort",
    pressure: "Pressure",
    temperature: "Temperature",
    humidity: "Humidity",
    light: "Light",
    "co2-air-quality": "CO₂ – Air Quality",
    "water-analysis": "Water Analysis"
  },
  de: {
    "solar-photoradiometry": "Solar & Photoradiometrie",
    "air-and-wind-speed": "Luft und Windgeschwindigkeit",
    precipitation: "Niederschlag",
    "thunderstorm-and-lightning": "Gewitter und Blitz",
    "visibility-present-weather": "Sichtweite & aktuelles Wetter",
    "data-acquisition-systems": "Datenerfassungssysteme",
    "soil-leaf": "Boden & Blatt",
    "weather-station": "Wetterstation",
    "sound-vibration": "Schall & Vibration",
    "microclimate-thermal-comfort": "Mikroklima – thermischer Komfort",
    pressure: "Druck",
    temperature: "Temperatur",
    humidity: "Feuchte",
    light: "Licht",
    "co2-air-quality": "CO₂ – Luftqualität",
    "water-analysis": "Wasseranalyse"
  }
};

export function getSensecaCategoryLabel(categoryId: string | undefined, locale: Locale, fallback: string) {
  if (!categoryId) return fallback;
  return pickLocale(locale, categoryLabels)[categoryId] ?? fallback;
}
