import { IndexCard } from "@/components/IndexCard";
import { ServiceIcon } from "@/components/ServiceIcon";
import { getMessages } from "@/lib/i18n/get-messages";
import type { Locale } from "@/lib/i18n/locales";
import { localizeHref } from "@/lib/i18n/navigation";
import type { ReferenceExampleGroup } from "@/lib/reference-example-groups";
import type { ServiceIconKey } from "@/lib/service-icons";
import { getServiceCategoryFromHref, type ServiceCategory } from "@/lib/service-categories";

type ReferenceExampleItem = {
  id: string;
  title: string;
  operationType: string;
  text: string;
  tags: readonly string[];
  href: string;
};

const groupIcons: Record<string, ServiceIconKey> = {
  "mereni-emisi": "pillar-mereni",
  "pracovni-prostredi": "pracovni-prostredi",
  "hluk-akustika": "hluk",
  "studie-posudky": "pillar-studie",
  "eia-povolovani": "eia",
  "evidence-dokumentace": "ispop"
};

const groupCategories: Record<string, ServiceCategory> = {
  "mereni-emisi": "measurement",
  "pracovni-prostredi": "measurement",
  "hluk-akustika": "measurement",
  "studie-posudky": "studies",
  "eia-povolovani": "docs",
  "evidence-dokumentace": "docs"
};

function orderCountLabel(count: number, locale: Locale, messages: Awaited<ReturnType<typeof getMessages>>): string {
  if (count === 1) return messages.reference.orderCountOne;
  if (count >= 2 && count <= 4) {
    return messages.reference.orderCountFew.replace("{count}", String(count));
  }
  return messages.reference.orderCountMany.replace("{count}", String(count));
}

type Props = {
  examplesById: Map<string, ReferenceExampleItem>;
  groups: ReferenceExampleGroup[];
  locale: Locale;
};

export async function ReferenceExamplesIndex({ examplesById, groups, locale }: Props) {
  const messages = await getMessages(locale);
  const accordion = messages.accordion;
  const common = messages.common;

  return (
    <div className="service-groups-accordion-inner reference-examples-groups">
      {groups.map((group) => {
        const groupExamples = group.exampleIds
          .map((id) => examplesById.get(id))
          .filter((e): e is ReferenceExampleItem => e !== undefined);
        const countLabel = orderCountLabel(groupExamples.length, locale, messages);
        const groupCategory = groupCategories[group.id];

        return (
          <details
            key={group.id}
            id={group.id}
            className={`card service-group-details reference-example-group${groupCategory ? ` service-group-details--${groupCategory}` : ""}`}
          >
            <summary
              className="service-group-summary"
              aria-label={`${group.title}, ${countLabel} — ${accordion.showOrCollapse}`}
            >
              <ServiceIcon
                icon={groupIcons[group.id]}
                variant="inline"
                className="service-group-summary-icon"
              />
              <div className="service-group-summary-text">
                <div className="service-group-summary-title-row">
                  <h2>{group.title}</h2>
                  <span className="service-group-count muted">{countLabel}</span>
                </div>
                <p className="muted service-group-intro">{group.intro}</p>
              </div>
              <span className="service-group-expand" aria-hidden="true">
                <span className="service-group-expand-text">
                  <span className="service-group-expand-when-closed">{accordion.expandClosed}</span>
                  <span className="service-group-expand-when-open">{accordion.expandOpen}</span>
                </span>
                <span className="service-group-expand-icon">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </span>
              </span>
            </summary>
            <div className="service-card-grid reference-group-examples">
              {groupExamples.map((example) => (
                <IndexCard
                  key={example.id}
                  href={localizeHref(example.href, locale)}
                  title={example.title}
                  cta={common.viewService}
                  className="service-index-card service-card"
                  serviceCategory={getServiceCategoryFromHref(example.href)}
                  icon={<ServiceIcon href={example.href} variant="inline" size={20} />}
                >
                  <p className="muted">{example.text}</p>
                  <span className="muted reference-example-card-type">{example.operationType}</span>
                  <ul className="tag-row service-index-card-tags" aria-label={common.areas}>
                    {example.tags.slice(0, 3).map((tag) => (
                      <li key={tag}>
                        <span className="tag">{tag}</span>
                      </li>
                    ))}
                  </ul>
                </IndexCard>
              ))}
            </div>
          </details>
        );
      })}
    </div>
  );
}
