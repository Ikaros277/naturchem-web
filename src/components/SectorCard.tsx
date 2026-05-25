import { SemanticCard } from "@/components/SemanticCard";
import { ServiceIcon } from "@/components/ServiceIcon";
import type { Sector } from "@/lib/sectors";

type Props = {
  sector: Sector;
};

export function SectorCard({ sector }: Props) {
  const typicalItems = sector.typical
    .split(/[;,]/)
    .map((item) => item.trim())
    .filter(Boolean)
    .slice(0, 6);

  return (
    <SemanticCard
      href={sector.href}
      className="sector-card index-card"
      cta={sector.linkHint}
      aria-label={sector.title}
    >
      <ServiceIcon href={sector.href} />
      <h3 className="index-card-heading">{sector.title}</h3>
      <p className="sector-card-lead muted">{sector.description}</p>
      {typicalItems.length > 0 ? (
        <div className="sector-typical">
          <p className="mini-label">Typicky řešíme</p>
          <ul className="compact-list">
            {typicalItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </SemanticCard>
  );
}
