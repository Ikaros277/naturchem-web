import { localizeHref } from "@/lib/i18n/navigation";
import type { Locale } from "@/lib/i18n/locales";
import {
  getPortableMonitorChoiceTableCopy,
  portableMonitorChoiceRows,
  type PortableMonitorPriceTier
} from "@/lib/pcf-portable-monitors-choice-table";

type Props = {
  locale: Locale;
  brandSlug: string;
};

function priceClassName(tier: PortableMonitorPriceTier) {
  return `sales-choice-price sales-choice-price--${tier}`;
}

export function PcfPortableMonitorsChoiceTable({ locale, brandSlug }: Props) {
  const copy = getPortableMonitorChoiceTableCopy(locale);
  const link = (href: string) => localizeHref(href, locale);

  return (
    <section className="sales-choice-table-section" aria-labelledby="pcf-portable-choice-heading">
      <h2 id="pcf-portable-choice-heading">{copy.title}</h2>
      <p className="sales-section-lead sales-choice-table-lead">{copy.lead}</p>

      <div className="sales-choice-table-wrap">
        <table className="sales-choice-table">
          <thead>
            <tr>
              <th scope="col" className="sales-choice-table-model-col">
                {copy.modelHeading}
              </th>
              {copy.scenarioHeadings.map((heading) => (
                <th key={heading} scope="col" className="sales-choice-table-scenario-col">
                  {heading}
                </th>
              ))}
              <th scope="col" className="sales-choice-table-price-col">
                {copy.priceHeading}
              </th>
            </tr>
          </thead>
          <tbody>
            {portableMonitorChoiceRows.map((row) => (
              <tr key={row.model}>
                <th scope="row" className="sales-choice-table-model-col">
                  <a
                    href={link(`/prodej/${brandSlug}/${row.productSlug}`)}
                    className="sales-choice-table-model-link"
                  >
                    {row.model}
                  </a>
                </th>
                {row.scenarios.map((match, index) => (
                  <td key={`${row.model}-${index}`} className="sales-choice-table-match-col">
                    <span
                      className={
                        match ? "sales-choice-match sales-choice-match--yes" : "sales-choice-match"
                      }
                      aria-label={match ? copy.matchLabel : copy.noMatchLabel}
                    >
                      {match ? "✓" : "—"}
                    </span>
                  </td>
                ))}
                <td className="sales-choice-table-price-col">
                  <span className={priceClassName(row.price)}>{copy.priceLabels[row.price]}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="sales-choice-table-footnote">{copy.footnote}</p>
    </section>
  );
}
