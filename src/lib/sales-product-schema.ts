import { resolveOgImageUrl } from "@/lib/i18n/metadata-helpers";
import type { SalesBrand, SalesProduct } from "@/lib/sales-types";
import { siteUrl } from "@/lib/site";

type BuildSalesCatalogPageSchemaArgs = {
  product: SalesProduct;
  brand: Pick<SalesBrand, "name" | "website">;
  pageUrl: string;
};

export function buildSalesCatalogPageSchema({ product, brand, pageUrl }: BuildSalesCatalogPageSchemaArgs) {
  const description = product.tagline || product.intro;
  const image = product.imageSrc ? resolveOgImageUrl(product.imageSrc) : undefined;

  // This is an inquiry-only catalog, not a purchasable offer. Product rich results
  // require an offer or genuine review data; never fabricate either to pass validation.
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": pageUrl + "#webpage",
    name: product.title,
    description,
    url: pageUrl,
    ...(image ? { image } : {}),
    publisher: { "@id": siteUrl + "/#organization" },
    about: {
      "@type": "Thing",
      name: product.title,
      ...(product.sourceUrl ? { sameAs: product.sourceUrl } : {})
    },
    mentions: {
      "@type": "Brand",
      name: brand.name,
      ...(brand.website ? { url: brand.website } : {})
    }
  };
}
