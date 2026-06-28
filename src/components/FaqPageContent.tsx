import Link from "next/link";
import { FaqAccordionList, type FaqAccordionUiLabels } from "@/components/FaqAccordionList";
import { FaqSearchClient } from "@/components/FaqSearchClient";
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
    <div className="faq-page-content">
      <FaqSearchClient
        searchLabel={uiLabels.searchLabel}
        searchPlaceholder={uiLabels.searchPlaceholder}
        emptyTitle={uiLabels.emptyTitle}
        emptyText={uiLabels.emptyText}
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
        <Link className="faq-contact-inline-link" href={link(contactFormHref)}>
          {uiLabels.inquiryCta ?? "Nezávazně poptat"}
        </Link>
      </p>

      <div className="faq-categories">
        {categories.map((category) => (
          <section key={category.id} id={category.id} className="section faq-category">
            <div className="faq-category-heading">
              <h2>{category.title}</h2>
              <span className="faq-category-count">
                {formatCategoryCount(uiLabels.categoryItemCount, category.items.length)}
              </span>
            </div>
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
                  <Link
                    key={cta.href}
                    href={link(cta.href)}
                    className={index === 0 ? "button" : "button secondary"}
                  >
                    {cta.label}
                  </Link>
                ))}
              </div>
            ) : null}
          </section>
        ))}
      </div>
    </div>
  );
}
