import Link from "next/link";
import type { ReactNode } from "react";
import type { ServiceCategory } from "@/lib/service-categories";

type SemanticCardProps = {
  href: string;
  className?: string;
  cta?: string;
  serviceCategory?: ServiceCategory | null;
  "aria-label"?: string;
  children: ReactNode;
};

/** Celá karta je jeden klikací odkaz (čtverec / dlaždice). */
export function SemanticCard({
  href,
  className = "",
  cta = "Zobrazit službu",
  serviceCategory,
  "aria-label": ariaLabel,
  children
}: SemanticCardProps) {
  const classes = ["card", "card-link", "card-service", "semantic-card", className]
    .filter(Boolean)
    .join(" ");

  return (
    <Link
      href={href}
      className={classes}
      aria-label={ariaLabel}
      data-category={serviceCategory ?? undefined}
    >
      {children}
      <span className="card-inline-link">{cta}</span>
    </Link>
  );
}
