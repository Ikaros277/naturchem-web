type Props = {
  items: readonly string[];
  heading: string;
  compact?: boolean;
  className?: string;
};

export function TrustBand({ items, heading, compact = false, className = "" }: Props) {
  const headingId = "trust-band-heading";

  return (
    <section
      className={["trust-band", compact ? "trust-band--compact" : "", className].filter(Boolean).join(" ")}
      aria-labelledby={headingId}
    >
      <div className="container trust-band-inner">
        <h2 id={headingId} className="sr-only">
          {heading}
        </h2>
        {items.map((item, index) => (
          <span key={item} className={index === 0 ? "trust-band-lead" : undefined}>
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
