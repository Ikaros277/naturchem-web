import type { SalesProduct } from "@/lib/sales-types";
import { SalesProductFigure } from "@/components/SalesProductThumb";

type Props = {
  product: SalesProduct;
  labels: {
    specificationsHeading: string;
    featuresHeading: string;
    applicationsHeading: string;
    emptySection: string;
    datasheet: string;
    manufacturerPage: string;
  };
};

export function SalesProductSections({ product, labels }: Props) {
  const datasheetLinks =
    product.datasheets && product.datasheets.length > 0
      ? product.datasheets
      : product.datasheetHref
        ? [{ url: product.datasheetHref, label: labels.datasheet }]
        : [];

  return (
    <div className="sales-product-detail-layout">
      <aside className="sales-product-detail-aside">
        {product.imageSrc ? <SalesProductFigure src={product.imageSrc} alt={product.title} /> : null}
        {product.intro ? <p className="sales-product-intro">{product.intro}</p> : null}

        {datasheetLinks.length > 0 ? (
          <div className="sales-product-side-actions">
            <p className="sales-product-side-actions-label">{labels.datasheet}</p>
            <div className="btn-row sales-datasheet-links">
              {datasheetLinks.map((doc) => (
                <a
                  key={doc.url}
                  href={doc.url}
                  className="button secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {doc.label || labels.datasheet}
                </a>
              ))}
            </div>
          </div>
        ) : null}

        {product.sourceUrl ? (
          <p className="btn-row sales-manufacturer-link">
            <a href={product.sourceUrl} className="button ghost" target="_blank" rel="noopener noreferrer">
              {labels.manufacturerPage}
            </a>
          </p>
        ) : null}
      </aside>

      <div className="sales-product-sections content-block">
        <section className="sales-product-block card sales-spec-panel" aria-labelledby="sales-product-specs-heading">
          <h2 id="sales-product-specs-heading">{labels.specificationsHeading}</h2>
          {product.specifications.length > 0 ? (
            <dl className="sales-spec-table">
              {product.specifications.map((row) => (
                <div key={row.label} className="sales-spec-row">
                  <dt>{row.label}</dt>
                  <dd>{row.value}</dd>
                </div>
              ))}
            </dl>
          ) : (
            <p className="sales-empty-placeholder">{labels.emptySection}</p>
          )}
        </section>

        <section className="sales-product-block card" aria-labelledby="sales-product-features-heading">
          <h2 id="sales-product-features-heading">{labels.featuresHeading}</h2>
          {product.features.length > 0 ? (
            <ul className="check-list">
              {product.features.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className="sales-empty-placeholder">{labels.emptySection}</p>
          )}
        </section>

        <section className="sales-product-block card" aria-labelledby="sales-product-apps-heading">
          <h2 id="sales-product-apps-heading">{labels.applicationsHeading}</h2>
          {product.applications.length > 0 ? (
            <ul className="check-list">
              {product.applications.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className="sales-empty-placeholder">{labels.emptySection}</p>
          )}
        </section>
      </div>
    </div>
  );
}
