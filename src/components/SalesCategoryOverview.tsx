import { StaticContentImage } from "@/components/StaticContentImage";

import { SalesCountBadge } from "@/components/SalesCountBadge";
import { ServiceIcon } from "@/components/ServiceIcon";
import { LocaleLink } from "@/lib/i18n/locale-link";
import { getPcfCategoryLabel } from "@/lib/pcf-category-labels";
import { getSalesCategoryOverview } from "@/lib/sales-category-overview-data";
import { getPcfCategoryIconKey } from "@/lib/sales-category-icons";
import { getPcfCategoryImageSrc } from "@/lib/sales-category-images";
import type { Locale } from "@/lib/i18n/locales";

type Props = {
  locale: Locale;
  brandSlug: string;
  productCountLabel: (count: number) => string;
};

export function SalesCategoryOverview({ locale, brandSlug, productCountLabel }: Props) {
  const categories = getSalesCategoryOverview(brandSlug);

  return (
    <ul className="sales-category-list">
      {categories.map((category) => {
        const title = getPcfCategoryLabel(category.id, locale, category.title);
        const href = `/prodej/${brandSlug}/${category.id}`;
        const iconKey = getPcfCategoryIconKey(category.id);
        const imageSrc = getPcfCategoryImageSrc(category.id);
        const countLabel = productCountLabel(category.productCount);

        return (
          <li key={category.id} className="sales-category-list-item">
            <LocaleLink
              href={href}
              className={`sales-category-list-link${imageSrc ? " sales-category-list-link--with-thumb" : ""}`}
              aria-label={`${title}, ${countLabel}`}
            >
              {imageSrc ? (
                <span className="sales-category-list-thumb" aria-hidden="true">
                  <StaticContentImage
                    src={imageSrc}
                    alt=""
                    fill
                    className="sales-category-list-thumb-img"
                    sizes="(max-width: 639px) 92vw, (max-width: 1023px) calc(46vw - 0.425rem), (max-width: 1279px) calc(30.67vw - 0.667rem), min(15.33vw, 191px)"
                  />
                </span>
              ) : (
                <ServiceIcon icon={iconKey} variant="inline" size={28} className="sales-category-list-icon" />
              )}
              <span className="sales-category-list-title">{title}</span>
              <SalesCountBadge>{countLabel}</SalesCountBadge>
            </LocaleLink>
          </li>
        );
      })}
    </ul>
  );
}
