import { FaqAccordionList, faqAnswerToParagraphs } from "@/components/FaqAccordionList";
import { getFaqContent } from "@/lib/i18n/content";
import type { Locale } from "@/lib/i18n/locales";

type Props = {
  locale: Locale;
  items: { q: string; a: string }[];
};

export async function SectorFaqTeaser({ locale, items }: Props) {
  if (items.length === 0) return null;

  const { uiLabels } = await getFaqContent(locale);
  const accordionItems = items.map((item) => ({
    q: item.q,
    paragraphs: faqAnswerToParagraphs(item.a)
  }));

  return (
    <section className="content-block service-faq-teaser">
      <h2>{uiLabels.sectorTeaserTitle}</h2>
      <FaqAccordionList items={accordionItems} />
    </section>
  );
}
