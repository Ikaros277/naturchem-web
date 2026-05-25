import Link from "next/link";
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
      <div className="faq-accordion-list">
        {items.map((item) => (
          <details key={item.q} className="faq-accordion">
            <summary className="faq-accordion-summary">{item.q}</summary>
            <div className="faq-accordion-body">
              {item.paragraphs.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
          </details>
        ))}
      </div>
      <p>
        <Link href={`/faq#${categoryId}`}>Zobrazit všechny časté dotazy — {category.title}</Link>
      </p>
    </section>
  );
}
