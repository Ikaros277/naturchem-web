import type { ServiceIconKey } from "@/lib/service-icons";

const pcfCategoryIcons: Record<string, ServiceIconKey> = {
  "air-quality-analyzers": "mikroklima",
  "emission-monitors": "emise",
  "gc-process-analyzers": "pillar-mereni",
  "portable-monitors": "pillar-mereni",
  "detectors-fid-pid-tcd": "chemie",
  accessories: "pillar-dokumentace"
};

const sensecaCategoryIcons: Record<string, ServiceIconKey> = {
  "solar-photoradiometry": "osvetleni",
  "air-and-wind-speed": "mikroklima",
  precipitation: "pillar-mereni",
  "thunderstorm-and-lightning": "pillar-mereni",
  "visibility-present-weather": "mikroklima",
  "data-acquisition-systems": "pillar-dokumentace",
  "soil-leaf": "pillar-mereni",
  "weather-station": "mikroklima",
  "sound-vibration": "hluk",
  "microclimate-thermal-comfort": "mikroklima",
  pressure: "pillar-mereni",
  temperature: "mikroklima",
  humidity: "mikroklima",
  light: "osvetleni",
  "co2-air-quality": "emise",
  "water-analysis": "chemie"
};

export function getPcfCategoryIconKey(categoryId: string | undefined): ServiceIconKey {
  if (categoryId && pcfCategoryIcons[categoryId]) return pcfCategoryIcons[categoryId];
  return "default";
}

export function getSensecaCategoryIconKey(categoryId: string | undefined): ServiceIconKey {
  if (categoryId && sensecaCategoryIcons[categoryId]) return sensecaCategoryIcons[categoryId];
  return "default";
}
