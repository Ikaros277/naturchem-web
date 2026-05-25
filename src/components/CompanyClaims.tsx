import { companyClaims } from "@/lib/claims";

type Props = {
  title?: string;
  compact?: boolean;
};

export function CompanyClaims({ title, compact = false }: Props) {
  return (
    <section className={compact ? "claims-block claims-block-compact" : "claims-block"}>
      {title ? <h2>{title}</h2> : null}
      <ul className="claims-list">
        {companyClaims.map((claim) => (
          <li key={claim}>{claim}</li>
        ))}
      </ul>
    </section>
  );
}
