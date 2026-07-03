import { pcfElettronicaCatalog } from "@/lib/pcf-elettronica-catalog";
import { getSalesCategoryOverview } from "@/lib/sales-category-overview-data";
import type { SalesProduct } from "@/lib/sales-types";

const PCF_BRAND = "pcf-elettronica" as const;

export function getSalesCatalog(brandSlug: string) {
  if (brandSlug === PCF_BRAND) return pcfElettronicaCatalog;
  return undefined;
}

export function getSalesCategoryIds(brandSlug: string): string[] {
  return getSalesCatalog(brandSlug)?.map((category) => category.id) ?? [];
}

export function isSalesCategorySlug(brandSlug: string, slug: string): boolean {
  if (getSalesCategoryIds(brandSlug).includes(slug)) return true;
  return getSalesCategoryOverview(brandSlug).some((category) => category.id === slug);
}

export function getSalesCategoryProducts(
  products: readonly SalesProduct[],
  categoryId: string
): SalesProduct[] {
  return products.filter((product) => product.categoryId === categoryId);
}

export function getAllSalesCategoryParams() {
  return getSalesCategoryIds(PCF_BRAND).map((slug) => ({ brand: PCF_BRAND, slug }));
}
