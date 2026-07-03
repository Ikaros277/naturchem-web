import { ServiceIcon } from "@/components/ServiceIcon";
import { getPcfCategoryLabel } from "@/lib/pcf-category-labels";
import { getSensecaCategoryLabel } from "@/lib/senseca-category-labels";
import { getSalesCategoryOverview } from "@/lib/sales-category-overview-data";
import { getPcfCategoryIconKey, getSensecaCategoryIconKey } from "@/lib/sales-category-icons";
import { localizeHref } from "@/lib/i18n/navigation";
import type { Locale } from "@/lib/i18n/locales";

type Props = {
  locale: Locale;
  brandSlug: string;
  productCountLabel: (count: number) => string;
};

export function SalesCategoryOverview({ locale, brandSlug, productCountLabel }: Props) {
  const link = (href: string) => localizeHref(href, locale);
  const isSenseca = brandSlug === "senseca";
  const categories = getSalesCategoryOverview(brandSlug);

  return (
    <ul className="sales-category-list">
      {categories.map((category) => {
        const title = isSenseca
          ? getSensecaCategoryLabel(category.id, locale, category.title)
          : getPcfCategoryLabel(category.id, locale, category.title);
        const href = link(`/prodej/${brandSlug}/${category.id}`);
        const iconKey = isSenseca
          ? getSensecaCategoryIconKey(category.id)
          : getPcfCategoryIconKey(category.id);
        const countLabel = productCountLabel(category.productCount);

        return (
          <li key={category.id} className="sales-category-list-item">
            <a href={href} className="sales-category-list-link" aria-label={`${title}, ${countLabel}`}>
              <ServiceIcon icon={iconKey} variant="inline" size={16} />
              <span className="sales-category-list-title">{title}</span>
              <span className="sales-category-list-count" aria-hidden="true">
                {category.productCount}
              </span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
