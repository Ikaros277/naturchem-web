import { ServiceIcon } from "@/components/ServiceIcon";
import { SalesCountBadge } from "@/components/SalesCountBadge";
import { getPcfCategoryLabel } from "@/lib/pcf-category-labels";
import { getSalesCategoryOverview } from "@/lib/sales-category-overview-data";
import { getPcfCategoryIconKey } from "@/lib/sales-category-icons";
import { localizeHref } from "@/lib/i18n/navigation";
import type { Locale } from "@/lib/i18n/locales";

type Props = {
  locale: Locale;
  brandSlug: string;
  productCountLabel: (count: number) => string;
};

export function SalesCategoryOverview({ locale, brandSlug, productCountLabel }: Props) {
  const link = (href: string) => localizeHref(href, locale);
  const categories = getSalesCategoryOverview(brandSlug);

  return (
    <ul className="sales-category-list">
      {categories.map((category) => {
        const title = getPcfCategoryLabel(category.id, locale, category.title);
        const href = link(`/prodej/${brandSlug}/${category.id}`);
        const iconKey = getPcfCategoryIconKey(category.id);
        const countLabel = productCountLabel(category.productCount);

        return (
          <li key={category.id} className="sales-category-list-item">
            <a href={href} className="sales-category-list-link" aria-label={`${title}, ${countLabel}`}>
              <ServiceIcon icon={iconKey} variant="inline" size={28} className="sales-category-list-icon" />
              <span className="sales-category-list-title">{title}</span>
              <SalesCountBadge>{String(category.productCount)}</SalesCountBadge>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
