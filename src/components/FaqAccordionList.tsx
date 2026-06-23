import Link from "next/link";
import type { FaqItem } from "@/lib/faq";
import type { Locale } from "@/lib/i18n/locales";
import { localizeHref } from "@/lib/i18n/navigation";

export type FaqAccordionUiLabels = {
  tip: string;
  legal: string;
  related: string;
};

type FaqAccordionItemData = {
  q: string;
  paragraphs: string[];
  tip?: string;
  legal?: {
    summary: string;
    refs?: { href: string; label: string }[];
  };
  links?: { href: string; label: string }[];
};

type Props = {
  items: FaqAccordionItemData[];
  uiLabels?: FaqAccordionUiLabels;
  locale?: Locale;
  layout?: "stack" | "grid";
};

function toAccordionItem(item: FaqItem): FaqAccordionItemData {
  return {
    q: item.q,
    paragraphs: item.paragraphs,
    tip: item.tip,
    legal: item.legal,
    links: item.links
  };
}

export function FaqAccordionList({ items, uiLabels, locale, layout = "stack" }: Props) {
  if (items.length === 0) return null;

  return (
    <div className={`faq-accordion-list${layout === "grid" ? " faq-accordion-list--grid" : ""}`}>
      {items.map((item) => (
        <FaqAccordionEntry key={item.q} item={item} uiLabels={uiLabels} locale={locale} />
      ))}
    </div>
  );
}

function FaqAccordionEntry({
  item,
  uiLabels,
  locale
}: {
  item: FaqAccordionItemData;
  uiLabels?: FaqAccordionUiLabels;
  locale?: Locale;
}) {
  const link = locale ? (href: string) => localizeHref(href, locale) : null;

  return (
    <details className="faq-accordion">
      <summary className="faq-accordion-summary">{item.q}</summary>
      <div className="faq-accordion-body">
        {item.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 40)}>{paragraph}</p>
        ))}
        {item.tip && uiLabels ? (
          <p className="faq-tip">
            <strong>{uiLabels.tip}</strong> {item.tip}
          </p>
        ) : null}
        {item.legal && uiLabels ? (
          <details className="faq-legal">
            <summary>{uiLabels.legal}</summary>
            <p>{item.legal.summary}</p>
            {item.legal.refs?.length ? (
              <ul>
                {item.legal.refs.map((ref) => (
                  <li key={ref.href}>
                    <a href={ref.href} target="_blank" rel="noopener noreferrer">
                      {ref.label}
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </details>
        ) : null}
        {item.links?.length && uiLabels && link ? (
          <p className="faq-related">
            <strong>{uiLabels.related}</strong>{" "}
            {item.links.map((itemLink, index) => (
              <span key={`${itemLink.href}-${itemLink.label}`}>
                {index > 0 ? " | " : null}
                <Link href={link(itemLink.href)}>{itemLink.label}</Link>
              </span>
            ))}
          </p>
        ) : null}
      </div>
    </details>
  );
}

export function faqAnswerToParagraphs(answer: string): string[] {
  return [answer];
}

export function faqItemsToAccordionItems(items: FaqItem[]): FaqAccordionItemData[] {
  return items.map(toAccordionItem);
}
