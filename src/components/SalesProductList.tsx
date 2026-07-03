import Image from "next/image";

import { localizeHref } from "@/lib/i18n/navigation";
import type { Locale } from "@/lib/i18n/locales";
import type { SalesProduct } from "@/lib/sales-types";

type Props = {
  brandSlug: string;
  locale: Locale;
  products: readonly SalesProduct[];
  ctaLabel: string;
  subcategoryLabel?: (subcategory: string) => string | undefined;
};

export function SalesProductList({
  brandSlug,
  locale,
  products,
  ctaLabel,
  subcategoryLabel
}: Props) {
  const link = (href: string) => localizeHref(href, locale);

  return (
    <ul className="sales-product-grid">
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
                  <Image
                    src={product.imageSrc}
                    alt=""
                    fill
                    className="sales-product-grid-thumb-img"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                    fetchPriority="low"
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
