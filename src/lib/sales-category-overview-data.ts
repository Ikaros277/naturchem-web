/** Lightweight category index for brand overview pages — avoids importing full product catalogs. */
export type SalesCategoryOverviewEntry = {
  id: string;
  title: string;
  productCount: number;
};

export const sensecaCategoryOverview: readonly SalesCategoryOverviewEntry[] = [
  { id: "solar-photoradiometry", title: "Solar & Photoradiometry", productCount: 27 },
  { id: "air-and-wind-speed", title: "Air and Wind Speed", productCount: 23 },
  { id: "precipitation", title: "Precipitation", productCount: 6 },
  { id: "thunderstorm-and-lightning", title: "Thunderstorm and Lightning", productCount: 3 },
  { id: "visibility-present-weather", title: "Visibility & Present Weather", productCount: 9 },
  { id: "data-acquisition-systems", title: "Data Acquisition Systems", productCount: 9 },
  { id: "soil-leaf", title: "Soil & Leaf", productCount: 6 },
  { id: "weather-station", title: "Weather Station", productCount: 8 },
  { id: "sound-vibration", title: "Sound & Vibration", productCount: 23 },
  { id: "microclimate-thermal-comfort", title: "Microclimate – Thermal Comfort", productCount: 24 },
  { id: "pressure", title: "Pressure", productCount: 19 },
  { id: "temperature", title: "Temperature", productCount: 13 },
  { id: "humidity", title: "Humidity", productCount: 10 },
  { id: "light", title: "Light", productCount: 15 },
  { id: "co2-air-quality", title: "CO2 – Air Quality", productCount: 8 },
  { id: "water-analysis", title: "Water Analysis", productCount: 24 }
];

export const pcfCategoryOverview: readonly SalesCategoryOverviewEntry[] = [
  { id: "air-quality-analyzers", title: "Air Quality Analyzers", productCount: 4 },
  { id: "emission-monitors", title: "Emission Monitors", productCount: 3 },
  { id: "gc-process-analyzers", title: "GC Process Analyzers", productCount: 1 },
  { id: "portable-monitors", title: "Portable Monitors", productCount: 4 },
  { id: "detectors-fid-pid-tcd", title: "Our Detectors: FID, PID, TCD", productCount: 3 },
  { id: "accessories", title: "Accessories", productCount: 8 }
];

export function getSalesCategoryOverview(brandSlug: string): readonly SalesCategoryOverviewEntry[] {
  return brandSlug === "senseca" ? sensecaCategoryOverview : pcfCategoryOverview;
}
