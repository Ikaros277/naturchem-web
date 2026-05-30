import Link from "next/link";
import { ServiceIcon } from "@/components/ServiceIcon";
import type { ReferenceExample } from "@/lib/reference-content";
import { contactUrl } from "@/lib/contact-url";
import { getServiceIconKey } from "@/lib/service-icons";

type Props = {
  example: ReferenceExample;
};

export function ReferenceExampleCard({ example }: Props) {
  return (
    <article className="card reference-example-card">
      <details className="reference-example-details">
        <summary className="reference-example-summary">
          <ServiceIcon icon={getServiceIconKey(example.href)} className="reference-example-icon" />
          <div className="reference-example-summary-content">
            <h3 className="reference-example-title">{example.title}</h3>
            <span className="reference-example-type muted">{example.operationType}</span>
          </div>
          <ul className="tag-row reference-example-tags" aria-label="Oblasti">
            {example.tags.map((tag) => (
              <li key={tag}><span className="tag">{tag}</span></li>
            ))}
          </ul>
        </summary>
        <div className="reference-example-detail">
          <dl className="reference-example-meta">
            <div>
              <dt>Rozsah prací</dt>
              <dd>{example.scope}</dd>
            </div>
            <div>
              <dt>Výstup</dt>
              <dd>{example.output}</dd>
            </div>
          </dl>
          {example.text ? <p className="muted">{example.text}</p> : null}
          <Link href={contactUrl(example.contactService)} className="button secondary">
            Poptat podobnou zakázku
          </Link>
        </div>
      </details>
    </article>
  );
}
