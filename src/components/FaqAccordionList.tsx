type FaqAccordionItem = {
  q: string;
  paragraphs: string[];
};

type Props = {
  items: FaqAccordionItem[];
};

export function FaqAccordionList({ items }: Props) {
  if (items.length === 0) return null;

  return (
    <div className="faq-accordion-list">
      {items.map((item) => (
        <details key={item.q} className="faq-accordion">
          <summary className="faq-accordion-summary">{item.q}</summary>
          <div className="faq-accordion-body">
            {item.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </details>
      ))}
    </div>
  );
}

export function faqAnswerToParagraphs(a: string): string[] {
  return [a];
}
