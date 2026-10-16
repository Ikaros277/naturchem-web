import { StaticContentImage } from "@/components/StaticContentImage";

import { localizeHref } from "@/lib/i18n/navigation";
import type { Locale } from "@/lib/i18n/locales";
import type { SalesProduct } from "@/lib/sales-types";

type Props = {
  brandSlug: string;
  locale: Locale;
  products: readonly SalesProduct[];
  ctaLabel: string;
  subcategoryLabel?: (subcategory: string) => string | undefined;
  fullWidthRows?: boolean;
};

export function SalesProductList({
  brandSlug,
  locale,
  products,
  ctaLabel,
  subcategoryLabel,
  fullWidthRows = false
}: Props) {
  const link = (href: string) => localizeHref(href, locale);

  return (
    <ul className={`sales-product-grid${fullWidthRows ? " sales-product-grid--rows" : ""}`}>
      {products.map((product) => {
        const subLabel =
          product.subcategory && subcategoryLabel
            ? subcategoryLabel(product.subcategory)
            : undefined;

        return (
          <li key={product.slug} className="sales-product-grid-item">
            <a
              href={link(`/prodej/${brandSlug}/${product.slug}`)}
              className="sales-product-grid-link"
              aria-label={product.title}
            >
              {product.imageSrc ? (
                <span className="sales-product-grid-thumb" aria-hidden="true">
                  <StaticContentImage
                    src={product.imageSrc}
                    alt=""
                    fill
                    className="sales-product-grid-thumb-img"
                    sizes={fullWidthRows
                      ? "(max-width: 759px) calc(92vw - 2.2rem), clamp(160px, 17vw, 240px)"
                      : "(max-width: 639px) calc(92vw - 2.2rem), (max-width: 1099px) calc(46vw - 2.75rem), min(30vw, 370px)"}
                  />
                </span>
              ) : null}
              <span className="sales-product-grid-body">
                <span className="sales-product-grid-title">{product.title}</span>
                {subLabel ? <span className="sales-product-grid-subcategory">{subLabel}</span> : null}
                {product.tagline ? (
                  <span className="sales-product-grid-tagline">{product.tagline}</span>
                ) : null}
              </span>
              <span className="sales-product-grid-cta">{ctaLabel}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
