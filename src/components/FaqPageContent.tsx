import { FaqAccordionList, type FaqAccordionUiLabels } from "@/components/FaqAccordionList";
import { FaqTopicNavigation } from "@/components/FaqTopicNavigation";
import { ServiceIcon } from "@/components/ServiceIcon";
import type { Locale } from "@/lib/i18n/locales";
import { localizeHref } from "@/lib/i18n/navigation";
import { getFaqCategoryIconKey } from "@/lib/service-icons";
import type { FaqCategory } from "@/lib/faq";
import { company } from "@/lib/site";
import { contactFormHref } from "@/lib/contact-url";

export type FaqUiLabels = FaqAccordionUiLabels & {
  searchLabel: string;
  searchPlaceholder: string;
  categoriesNavAria: string;
  emptyTitle: string;
  emptyText: string;
  contactStripLabel?: string;
  inquiryCta?: string;
  categoryItemCount?: string;
};

type Props = {
  categories: FaqCategory[];
  uiLabels: FaqUiLabels;
  locale: Locale;
};

function formatCategoryCount(template: string | undefined, count: number): string {
  return (template ?? "{count}").replace("{count}", String(count));
}

export function FaqPageContent({ categories, uiLabels, locale }: Props) {
  const accordionLabels: FaqAccordionUiLabels = {
    tip: uiLabels.tip,
    legal: uiLabels.legal,
    related: uiLabels.related
  };

  const link = (href: string) => localizeHref(href, locale);

  return (
    <div className="faq-page-content" id="faq-topics">
      <span id="faq-search" aria-hidden="true" />
      <FaqTopicNavigation
        categories={categories.map(category => ({ id: category.id, title: category.tileLabel }))}
        categoriesLabel={uiLabels.categoriesNavAria}
      />

      <nav className="faq-tiles" aria-label={uiLabels.categoriesNavAria}>
        {categories.map((cat) => (
          <a key={cat.id} href={`#${cat.id}`} className="card faq-tile">
            <span className="faq-tile-icon-wrap" aria-hidden="true">
              <ServiceIcon
                icon={getFaqCategoryIconKey(cat.id)}
                variant="plain"
                size={30}
                className="faq-tile-icon"
              />
            </span>
            <span className="faq-tile-label">{cat.tileLabel}</span>
          </a>
        ))}
      </nav>

      <p className="faq-contact-inline" aria-label={uiLabels.contactStripLabel ?? "Rychlý kontakt"}>
        <a className="faq-contact-inline-link" href={`mailto:${company.email}`}>
          {company.email}
        </a>
        <span className="faq-contact-inline-sep" aria-hidden="true">
          ·
        </span>
        <a className="faq-contact-inline-link" href={`tel:${company.phones[0].replace(/\s/g, "")}`}>
          {company.phones[0]}
        </a>
        <span className="faq-contact-inline-sep" aria-hidden="true">
          ·
        </span>
        <a className="faq-contact-inline-link" href={link(contactFormHref)}>
          {uiLabels.inquiryCta ?? "Nezávazně poptat"}
        </a>
      </p>

      <div className="faq-categories">
        {categories.map((category) => (
          <details key={category.id} id={category.id} className="faq-category faq-category-disclosure">
            <summary className="faq-category-heading">
              <h2>{category.title}</h2>
              <span className="faq-category-count">
                {formatCategoryCount(uiLabels.categoryItemCount, category.items.length)}
              </span>
            </summary>
            <div className="faq-category-body">
              <FaqAccordionList
                items={category.items}
                uiLabels={accordionLabels}
                locale={locale}
              />
            </div>
            {category.ctas.length > 0 ? (
              <div className="btn-row faq-category-ctas">
                {category.ctas.map((cta, index) => (
                  <a
                    key={cta.href}
                    href={link(cta.href)}
                    className={index === 0 ? "faq-topic-link" : "faq-topic-link faq-topic-link--secondary"}
                  >
                    {cta.label}
                  </a>
                ))}
              </div>
            ) : null}
          </details>
        ))}
      </div>
    </div>
  );
}
