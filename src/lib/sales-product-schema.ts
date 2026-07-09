import { resolveOgImageUrl } from "@/lib/i18n/metadata-helpers";
import type { SalesBrand, SalesProduct } from "@/lib/sales-types";

type BuildSalesProductSchemaArgs = {
  product: SalesProduct;
  brand: Pick<SalesBrand, "name" | "website">;
  pageUrl: string;
};

export function buildSalesProductSchema({ product, brand, pageUrl }: BuildSalesProductSchemaArgs) {
  const description = product.tagline || product.intro;
  const image = product.imageSrc ? resolveOgImageUrl(product.imageSrc) : undefined;

  // No public price on distributor product pages — omit offers to avoid invalid Product snippets.
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description,
    url: pageUrl,
    ...(image ? { image } : {}),
    brand: {
      "@type": "Brand",
      name: brand.name,
      ...(brand.website ? { url: brand.website } : {})
    },
    ...(product.sourceUrl ? { sameAs: product.sourceUrl } : {})
  };
}
