import Link from "next/link";
import type { PageCtaStripProps } from "@/lib/cta";

export function PageCtaStrip({
  text,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  className
}: PageCtaStripProps) {
  return (
    <section className={["cta-strip", className].filter(Boolean).join(" ")}>
      <p>{text}</p>
      <div className="btn-row">
        <Link href={primaryHref} className="button">
          {primaryLabel}
        </Link>
        {secondaryLabel && secondaryHref ? (
          <Link href={secondaryHref} className="button secondary">
            {secondaryLabel}
          </Link>
        ) : null}
      </div>
    </section>
  );
}
