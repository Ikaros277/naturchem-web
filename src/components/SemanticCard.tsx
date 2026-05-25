import Link from "next/link";
import type { ReactNode } from "react";

type SemanticCardProps = {
  href: string;
  className?: string;
  cta?: string;
  "aria-label"?: string;
  children: ReactNode;
};

/** Celá karta je jeden klikací odkaz (čtverec / dlaždice). */
export function SemanticCard({
  href,
  className = "",
  cta = "Zobrazit službu",
  "aria-label": ariaLabel,
  children
}: SemanticCardProps) {
  const classes = ["card", "card-link", "card-service", "semantic-card", className]
    .filter(Boolean)
    .join(" ");

  return (
    <Link href={href} className={classes} aria-label={ariaLabel}>
      {children}
      <span className="card-inline-link">{cta}</span>
    </Link>
  );
}
