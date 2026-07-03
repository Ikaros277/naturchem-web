import { pcfElettronicaCatalog } from "@/lib/pcf-elettronica-catalog";
import { sensecaCatalog } from "@/lib/senseca-catalog";
import { getSalesCategoryOverview } from "@/lib/sales-category-overview-data";
import type { SalesProduct } from "@/lib/sales-types";

export function getSalesCatalog(brandSlug: string) {
  if (brandSlug === "senseca") return sensecaCatalog;
  if (brandSlug === "pcf-elettronica") return pcfElettronicaCatalog;
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
  const brands = ["senseca", "pcf-elettronica"] as const;
  return brands.flatMap((brand) =>
    getSalesCategoryIds(brand).map((slug) => ({ brand, slug }))
  );
}
