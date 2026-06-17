import Link from "next/link";
import { getFaqCategoryForLocale, getFaqTeaserItemsForLocale } from "@/lib/i18n/faq-helpers";
import { getFaqContent } from "@/lib/i18n/content";
import type { Locale } from "@/lib/i18n/locales";
import { localizeHref } from "@/lib/i18n/navigation";
import { FaqAccordionList } from "@/components/FaqAccordionList";

type Props = {
  locale: Locale;
  categoryId: string;
  limit?: number;
};

export function ServiceFaqTeaser({ locale, categoryId, limit = 5 }: Props) {
  const { uiLabels } = getFaqContent(locale);
  const category = getFaqCategoryForLocale(categoryId, locale);
  const items = getFaqTeaserItemsForLocale(categoryId, locale, limit);
  if (!category || items.length === 0) return null;

  const faqHref = localizeHref(`/faq#${categoryId}`, locale);

  return (
    <section className="content-block service-faq-teaser">
      <h2>{uiLabels.serviceTeaserTitle}</h2>
      <FaqAccordionList items={items} />
      <p>
        <Link href={faqHref}>
          {uiLabels.viewAllCategory.replace("{category}", category.title)}
        </Link>
      </p>
    </section>
  );
}
