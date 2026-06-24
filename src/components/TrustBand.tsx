type Props = {
  items: readonly string[];
  heading: string;
  /** Zobrazí nadpis i pro zrakově vidící uživatele (homepage). */
  showHeading?: boolean;
  compact?: boolean;
  className?: string;
};

export function TrustBand({ items, heading, showHeading = false, compact = false, className = "" }: Props) {
  const headingId = "trust-band-heading";

  return (
    <section
      className={[
        "trust-band",
        compact ? "trust-band--compact" : "",
        showHeading ? "trust-band--labeled" : "",
        className
      ]
        .filter(Boolean)
        .join(" ")}
      aria-labelledby={headingId}
    >
      <div className="container trust-band-shell">
        {showHeading ? (
          <h2 id={headingId} className="trust-band-label">
            {heading}
          </h2>
        ) : (
          <h2 id={headingId} className="sr-only">
            {heading}
          </h2>
        )}
        <ul className="trust-band-list">
          {items.map((item, index) => (
            <li
              key={item}
              className={index === 0 ? "trust-band-item trust-band-item--lead" : "trust-band-item"}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
