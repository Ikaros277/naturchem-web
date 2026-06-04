import { FaqAccordionList, faqAnswerToParagraphs } from "@/components/FaqAccordionList";

type Props = {
  items: { q: string; a: string }[];
};

export function SectorFaqTeaser({ items }: Props) {
  if (items.length === 0) return null;

  const accordionItems = items.map((item) => ({
    q: item.q,
    paragraphs: faqAnswerToParagraphs(item.a)
  }));

  return (
    <section className="content-block service-faq-teaser">
      <h2>Časté dotazy k tomuto provozu</h2>
      <FaqAccordionList items={accordionItems} />
    </section>
  );
}
