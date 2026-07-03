import Link from "next/link";
import { FaqAccordionList } from "@/components/FaqAccordionList";
import { getHomeGeoFaqItems } from "@/lib/geo-home-faq";
import { getFaqContent } from "@/lib/i18n/content";
import type { Locale } from "@/lib/i18n/locales";
import { localizeHref } from "@/lib/i18n/navigation";

type Props = {
  locale: Locale;
};

export async function HomeFaqSection({ locale }: Props) {
  const [items, faq] = await Promise.all([getHomeGeoFaqItems(locale), getFaqContent(locale)]);
  const link = (href: string) => localizeHref(href, locale);

  if (items.length === 0) return null;

  return (
    <section
      className="home-section home-faq-section section--forest-tint home-below-fold"
      aria-labelledby="home-faq-heading"
    >
      <div className="container">
        <header className="section-header">
          <h2 id="home-faq-heading">{faq.homeSectionTitle}</h2>
          <p className="section-lead">{faq.homeSectionLead}</p>
        </header>
        <FaqAccordionList items={items} uiLabels={faq.uiLabels} locale={locale} />
        <p className="home-faq-more">
          <Link href={link("/faq")} className="button secondary">
            {faq.homeViewAll}
          </Link>
        </p>
      </div>
    </section>
  );
}
