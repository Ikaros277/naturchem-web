import Link from "next/link";
import { headers } from "next/headers";
import { getFaqCategoryForLocale, getFaqTeaserItemsForLocale } from "@/lib/i18n/faq-helpers";
import { getFaqContent } from "@/lib/i18n/content";
import { isLocale, type Locale } from "@/lib/i18n/locales";
import { localizeHref } from "@/lib/i18n/navigation";
import { FaqAccordionList } from "@/components/FaqAccordionList";

type Props = {
  categoryId: string;
  limit?: number;
};

async function getRequestLocale(): Promise<Locale> {
  const headerStore = await headers();
  const locale = headerStore.get("x-locale");
  return locale && isLocale(locale) ? locale : "cs";
}

export async function ServiceFaqTeaser({ categoryId, limit = 5 }: Props) {
  const locale = await getRequestLocale();
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
