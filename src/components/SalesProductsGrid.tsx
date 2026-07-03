import { IndexCard } from "@/components/IndexCard";
import { SalesProductThumb } from "@/components/SalesProductThumb";
import type { SalesBrand } from "@/lib/sales-types";
import { getPcfCategoryLabel } from "@/lib/pcf-category-labels";
import { localizeHref } from "@/lib/i18n/navigation";
import type { Locale } from "@/lib/i18n/locales";

type Props = {
  brand: SalesBrand;
  locale: Locale;
  ctaLabel: string;
};

export function SalesProductsGrid({ brand, locale, ctaLabel }: Props) {
  const link = (href: string) => localizeHref(href, locale);

  return (
    <div className="grid grid-3 index-card-grid sales-products-grid">
      {brand.products.map((product) => (
        <IndexCard
          key={product.slug}
          href={link(`/prodej/${brand.slug}/${product.slug}`)}
          title={product.title}
          cta={ctaLabel}
          className={`sales-product-card${product.imageSrc ? " sales-product-card--with-thumb" : ""}`}
          meta={
            product.imageSrc ? <SalesProductThumb src={product.imageSrc} alt={product.title} /> : undefined
          }
        >
          <p className="sales-product-card-category">
            {getPcfCategoryLabel(product.categoryId, locale, product.category)}
          </p>
          {product.tagline ? <p className="sales-product-card-tagline">{product.tagline}</p> : null}
        </IndexCard>
      ))}
    </div>
  );
}
