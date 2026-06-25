"use client";

import { LocaleLink } from "@/lib/i18n/locale-link";
import { useTranslations } from "@/lib/i18n/locale-context";
import type { Locale } from "@/lib/i18n/locales";
import { localizeHref } from "@/lib/i18n/navigation";
import { contactFormHref } from "@/lib/contact-url";
import { SemanticCard } from "@/components/SemanticCard";
import { ServiceIcon } from "@/components/ServiceIcon";
import { getServiceCategoryFromHref } from "@/lib/service-categories";
import type { CaseStudyCategory, LegacyCaseStudy } from "@/lib/case-studies";

type Props = {
  category?: CaseStudyCategory;
  categories: CaseStudyCategory[];
  locale: Locale;
};

export function CaseStudiesView({ category, categories, locale }: Props) {
  const common = useTranslations("common");
  const caseStudies = useTranslations("caseStudies");
  const link = (href: string) => localizeHref(href, locale);

  if (category) {
    return (
      <>
        <p className="muted">{caseStudies.intro}</p>
        <div className="grid grid-2">
          {category.cases.map((item) => (
            <CaseCard key={item.title} item={item} serviceHref={category.serviceHref} outputLabel={common.output} />
          ))}
        </div>
        <p style={{ marginTop: "1.25rem" }}>
          <LocaleLink href={category.serviceHref} className="button secondary">
            {common.relatedService}
          </LocaleLink>{" "}
          <LocaleLink href={contactFormHref} className="button">
            {common.requestService}
          </LocaleLink>
        </p>
      </>
    );
  }

  return (
    <div className="grid grid-2">
      {categories.map((cat) => (
        <SemanticCard
          key={cat.slug}
          href={link(`/typicke-zakazky/${cat.slug}`)}
          className="case-category-card"
          cta={common.viewExamples}
          serviceCategory={getServiceCategoryFromHref(cat.serviceHref)}
          aria-label={caseStudies.exampleCountAria
            .replace("{title}", cat.title)
            .replace("{count}", String(cat.cases.length))}
        >
          <ServiceIcon href={cat.serviceHref} />
          <h2>{cat.title}</h2>
          <p className="muted">{cat.short}</p>
          <p className="muted card-meta">
            {caseStudies.exampleCount.replace("{count}", String(cat.cases.length))}
          </p>
        </SemanticCard>
      ))}
    </div>
  );
}

function CaseCard({
  item,
  serviceHref,
  outputLabel
}: {
  item: LegacyCaseStudy;
  serviceHref?: string;
  outputLabel: string;
}) {
  return (
    <article className="card case-study-card">
      {serviceHref ? <ServiceIcon href={serviceHref} /> : null}
      <h2>{item.title}</h2>
      <p>{item.narrative}</p>
      <p className="muted">
        <strong>{outputLabel}:</strong> {item.output}
      </p>
    </article>
  );
}
