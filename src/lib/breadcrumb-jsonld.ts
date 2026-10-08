import { siteUrl } from "@/lib/site";

/** Normalize our breadcrumb paths only; do not alter canonicals, queries or third-party URLs. */
export function normalizeBreadcrumbJsonLd(data: Record<string, unknown>): Record<string, unknown> {
  if (data["@type"] !== "BreadcrumbList" || !Array.isArray(data.itemListElement)) return data;
  return {
    ...data,
    itemListElement: data.itemListElement.map((entry: unknown) => {
      if (!entry || typeof entry !== "object") return entry;
      const item = entry as Record<string, unknown>;
      if (typeof item.item !== "string" || !item.item.startsWith(siteUrl + "/")) return entry;
      try {
        const url = new URL(item.item);
        url.pathname = url.pathname.replace(/\/{2,}/g, "/");
        return { ...item, item: url.href };
      } catch {
        return entry;
      }
    })
  };
}
