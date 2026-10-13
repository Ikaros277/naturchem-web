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
        <a href={primaryHref} className="button">
          {primaryLabel}
        </a>
        {secondaryLabel && secondaryHref ? (
          <a href={secondaryHref} className="button secondary">
            {secondaryLabel}
          </a>
        ) : null}
      </div>
    </section>
  );
}
