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
    <ul className="sales-product-list">
      {products.map((product) => {
        const subLabel =
          product.subcategory && subcategoryLabel
            ? subcategoryLabel(product.subcategory)
            : undefined;

        return (
          <li key={product.slug} className="sales-product-list-item">
            <a
              href={link(`/prodej/${brandSlug}/${product.slug}`)}
              className={`sales-product-list-link${product.imageSrc ? "" : " sales-product-list-link--no-thumb"}`}
            >
              {product.imageSrc ? (
                <span className="sales-product-list-thumb" aria-hidden="true">
                  <Image
                    src={product.imageSrc}
                    alt=""
                    width={40}
                    height={40}
                    className="sales-product-list-thumb-img"
                    sizes="40px"
                  />
                </span>
              ) : null}
              <span className="sales-product-list-body">
                <span className="sales-product-list-title">{product.title}</span>
                {subLabel ? <span className="sales-product-list-subcategory">{subLabel}</span> : null}
              </span>
              <span className="sales-product-list-cta">{ctaLabel}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
