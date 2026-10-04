import type { ReactNode } from "react";
import type { ServiceCategory } from "@/lib/service-categories";
import { SemanticCard } from "@/components/SemanticCard";

type Props = {
  href: string;
  title: string;
  headingLevel?: 2 | 3;
  cta?: string;
  className?: string;
  serviceCategory?: ServiceCategory | null;
  /** Ikona v jednom řádku s nadpisem (card-head), bez rámečku. */
  icon?: ReactNode;
  /** Vizuální náhrada textového nadpisu (např. logo značky). */
  heading?: ReactNode;
  meta?: ReactNode;
  children?: ReactNode;
};

/** Celá dlaždice je jeden klikací odkaz; CTA zůstává vizuálně jako text odkazu. */
export function IndexCard({
  href,
  title,
  headingLevel = 3,
  cta = "Zobrazit",
  className = "",
  serviceCategory,
  icon,
  heading,
  meta,
  children
}: Props) {
  const Heading = headingLevel === 2 ? "h2" : "h3";
  return (
    <SemanticCard
      href={href}
      className={className}
      cta={cta}
      serviceCategory={serviceCategory}
      aria-label={title}
    >
      {meta}
      {heading ? (
        <div className="index-card-heading index-card-heading--custom">{heading}</div>
      ) : icon ? (
        <div className="index-card-head">
          {icon}
          <Heading className="index-card-heading">{title}</Heading>
        </div>
      ) : (
        <Heading className="index-card-heading">{title}</Heading>
      )}
      {children}
    </SemanticCard>
  );
}
