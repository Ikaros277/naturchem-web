import type { FaqItem } from "@/lib/faq";

/** Full text of each included answer for semantic JSON-LD. */
export function faqItemAnswerText(item: FaqItem): string {
  const parts = [...item.paragraphs];
  if (item.legal?.summary) parts.push(item.legal.summary);
  if (item.tip) parts.push(item.tip);
  return parts.join("\n\n").trim();
}

export function buildFaqPageJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faqItemAnswerText(item)
      }
    }))
  };
}
