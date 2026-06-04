import Link from "next/link";
import { FaqAccordionList } from "@/components/FaqAccordionList";
import { getFaqCategory, getFaqTeaserItems } from "@/lib/faq";

type Props = {
  categoryId: string;
  limit?: number;
};

export function ServiceFaqTeaser({ categoryId, limit = 5 }: Props) {
  const category = getFaqCategory(categoryId);
  const items = getFaqTeaserItems(categoryId, limit);
  if (!category || items.length === 0) return null;

  return (
    <section className="content-block service-faq-teaser">
      <h2>Časté dotazy k této službě</h2>
      <FaqAccordionList items={items} />
      <p>
        <Link href={`/faq#${categoryId}`}>Zobrazit všechny časté dotazy — {category.title}</Link>
      </p>
    </section>
  );
}
