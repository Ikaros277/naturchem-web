/** Lightweight category index for brand overview pages — avoids importing full product catalogs. */
export type SalesCategoryOverviewEntry = {
  id: string;
  title: string;
  productCount: number;
};

export const pcfCategoryOverview: readonly SalesCategoryOverviewEntry[] = [
  { id: "air-quality-analyzers", title: "Air Quality Analyzers", productCount: 4 },
  { id: "emission-monitors", title: "Emission Monitors", productCount: 3 },
  { id: "gc-process-analyzers", title: "GC Process Analyzers", productCount: 1 },
  { id: "portable-monitors", title: "Portable Monitors", productCount: 4 },
  { id: "detectors-fid-pid-tcd", title: "Our Detectors: FID, PID, TCD", productCount: 3 },
  { id: "accessories", title: "Accessories", productCount: 8 }
];

export function getSalesCategoryOverview(brandSlug: string): readonly SalesCategoryOverviewEntry[] {
  return brandSlug === "pcf-elettronica" ? pcfCategoryOverview : [];
}
