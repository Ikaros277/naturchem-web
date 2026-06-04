import type { ReactNode } from "react";
import { SemanticCard } from "@/components/SemanticCard";

type Props = {
  href: string;
  title: string;
  cta?: string;
  className?: string;
  /** Ikona v jednom řádku s nadpisem (card-head), bez rámečku. */
  icon?: ReactNode;
  meta?: ReactNode;
  children?: ReactNode;
};

/** Celá dlaždice je jeden klikací odkaz; CTA zůstává vizuálně jako text odkazu. */
export function IndexCard({
  href,
  title,
  cta = "Zobrazit",
  className = "",
  icon,
  meta,
  children
}: Props) {
  return (
    <SemanticCard href={href} className={className} cta={cta} aria-label={title}>
      {meta}
      {icon ? (
        <div className="index-card-head">
          {icon}
          <h3 className="index-card-heading">{title}</h3>
        </div>
      ) : (
        <h3 className="index-card-heading">{title}</h3>
      )}
      {children}
    </SemanticCard>
  );
}
