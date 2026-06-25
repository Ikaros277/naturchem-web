import type { ServiceCategory } from "@/lib/service-categories";
import { getServiceCategoryLabel } from "@/lib/i18n/service-category-i18n";
import type { Locale } from "@/lib/i18n/locales";

type Props = {
  category: ServiceCategory;
  locale: Locale;
  className?: string;
};

export function CategoryBadge({ category, locale, className }: Props) {
  const classes = ["category-badge", className].filter(Boolean).join(" ");

  return (
    <span className={classes} data-category={category}>
      {getServiceCategoryLabel(locale, category)}
    </span>
  );
}
