import { IndexCard } from "@/components/IndexCard";
import { ServiceIcon } from "@/components/ServiceIcon";
import type { ReferenceExample } from "@/lib/reference-content";
import { referenceExampleGroups } from "@/lib/reference-example-groups";
import type { ServiceIconKey } from "@/lib/service-icons";

const groupIcons: Record<string, ServiceIconKey> = {
  "mereni-emisi": "pillar-mereni",
  "pracovni-prostredi": "pracovni-prostredi",
  "hluk-akustika": "hluk",
  "studie-posudky": "pillar-studie",
  "eia-povolovani": "eia",
  "evidence-dokumentace": "ispop"
};

const expandClosed = "Zobrazit zakázky";
const expandOpen = "Sbalit zakázky";

function exampleCountLabel(count: number): string {
  if (count === 1) return "1 zakázka";
  if (count >= 2 && count <= 4) return `${count} zakázky`;
  return `${count} zakázek`;
}

type Props = {
  examplesById: Map<string, ReferenceExample>;
};

export function ReferenceExamplesIndex({ examplesById }: Props) {
  return (
    <div className="service-groups-accordion-inner reference-examples-groups">
      {referenceExampleGroups.map((group) => {
        const groupExamples = group.exampleIds
          .map((id) => examplesById.get(id))
          .filter((e): e is ReferenceExample => e !== undefined);

        return (
          <details key={group.id} id={group.id} className="card service-group-details reference-example-group">
            <summary
              className="service-group-summary"
              aria-label={`${group.title}, ${exampleCountLabel(groupExamples.length)} — zobrazit nebo sbalit zakázky`}
            >
              <ServiceIcon
                icon={groupIcons[group.id]}
                variant="inline"
                size={24}
                className="service-group-summary-icon"
              />
              <div className="service-group-summary-text">
                <div className="service-group-summary-title-row">
                  <h2>{group.title}</h2>
                  <span className="service-group-count muted">{exampleCountLabel(groupExamples.length)}</span>
                </div>
                <p className="muted service-group-intro">{group.intro}</p>
              </div>
              <span className="service-group-expand" aria-hidden="true">
                <span className="service-group-expand-text">
                  <span className="service-group-expand-when-closed">{expandClosed}</span>
                  <span className="service-group-expand-when-open">{expandOpen}</span>
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
                  href={example.href}
                  title={example.title}
                  cta="Zobrazit službu"
                  className="service-index-card service-card"
                  icon={<ServiceIcon href={example.href} variant="inline" size={20} />}
                >
                  <p className="muted">{example.text}</p>
                  <span className="muted reference-example-card-type">{example.operationType}</span>
                  <ul className="tag-row service-index-card-tags" aria-label="Oblasti">
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
