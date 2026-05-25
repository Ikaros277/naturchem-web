import Link from "next/link";
import { ServiceIcon } from "@/components/ServiceIcon";
import type { ReferenceExample } from "@/lib/reference-content";
import { contactUrl } from "@/lib/contact-url";
import { getServiceIconKey } from "@/lib/service-icons";

type Props = {
  example: ReferenceExample;
};

export function ReferenceExampleCard({ example }: Props) {
  const primaryHref = contactUrl(example.contactService);

  return (
    <article className="card reference-example-card card-interactive">
      <Link
        href={primaryHref}
        className="card-cover-link"
        aria-label={`${example.title} — ${example.cta}`}
      />
      <ServiceIcon icon={getServiceIconKey(example.href)} />
      <h3 className="reference-example-title">{example.title}</h3>
      <dl className="reference-example-meta">
        <div>
          <dt>Typ provozu</dt>
          <dd>{example.operationType}</dd>
        </div>
        <div>
          <dt>Rozsah prací</dt>
          <dd>{example.scope}</dd>
        </div>
        <div>
          <dt>Výstup</dt>
          <dd>{example.output}</dd>
        </div>
      </dl>
      <p className="muted">{example.text}</p>
      <ul className="tag-row" aria-label="Oblasti">
        {example.tags.map((tag) => (
          <li key={tag}>
            <span className="tag">{tag}</span>
          </li>
        ))}
      </ul>
      <p className="reference-example-actions">
        <span className="card-inline-link">{example.cta}</span>
      </p>
    </article>
  );
}
