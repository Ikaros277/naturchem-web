import Image from "next/image";

import { IndexCard } from "@/components/IndexCard";
import { SalesCountBadge } from "@/components/SalesCountBadge";
import type { SalesBrand } from "@/lib/sales-types";
import { localizeHref } from "@/lib/i18n/navigation";
import type { Locale } from "@/lib/i18n/locales";

type Props = {
  brands: readonly SalesBrand[];
  locale: Locale;
  ctaLabel: string;
  productCountLabel: (count: number) => string;
};

export function SalesBrandsGrid({ brands, locale, ctaLabel, productCountLabel }: Props) {
  const link = (href: string) => localizeHref(href, locale);

  return (
    <div className="grid grid-3 index-card-grid sales-brands-grid">
      {brands.map((brand) => (
        <IndexCard
          key={brand.slug}
          href={link(`/prodej/${brand.slug}`)}
          title={brand.name}
          cta={ctaLabel}
          className="sales-brand-card"
          heading={
            brand.logoSrc ? (
              <div className="sales-brand-card-logo">
                <Image
                  src={brand.logoSrc}
                  alt={`${brand.name} logo`}
                  width={160}
                  height={48}
                  className="sales-brand-logo-img"
                  sizes="160px"
                  loading="lazy"
                  fetchPriority="low"
                />
              </div>
            ) : undefined
          }
        >
          <p className="sales-brand-card-tagline">{brand.tagline}</p>
          <p className="sales-brand-card-meta">
            <SalesCountBadge>{productCountLabel(brand.products.length)}</SalesCountBadge>
          </p>
        </IndexCard>
      ))}
    </div>
  );
}
