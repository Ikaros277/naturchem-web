import Link from "next/link";
import type { ReactNode } from "react";

type ClickableCardProps = {
  href: string;
  className?: string;
  cta?: string;
  "aria-label"?: string;
  children: ReactNode;
};

export function ClickableCard({
  href,
  className = "",
  cta,
  "aria-label": ariaLabel,
  children
}: ClickableCardProps) {
  const classes = ["card", "card-link", "card-service", className]
    .filter(Boolean)
    .join(" ");

  return (
    <Link href={href} className={classes} aria-label={ariaLabel}>
      {children}
      {cta ? <span className="card-inline-link">{cta}</span> : null}
    </Link>
  );
}
