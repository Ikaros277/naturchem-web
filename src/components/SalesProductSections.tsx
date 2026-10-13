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
    moreSpecifications: string;
  };
};

function Specifications({ rows }: { rows: SalesProduct["specifications"] }) {
  return <dl className="sales-spec-table">{rows.map(row => <div key={row.label} className="sales-spec-row">
    <dt>{row.label}</dt><dd>{row.value}</dd>
  </div>)}</dl>;
}

export function SalesProductSections({ product, labels }: Props) {
  const datasheets = product.datasheets?.length ? product.datasheets
    : product.datasheetHref ? [{ url: product.datasheetHref, label: labels.datasheet }] : [];
  return <div className="sales-product-detail-layout">
    <aside className="sales-product-detail-aside">
      {product.imageSrc ? <SalesProductFigure src={product.imageSrc} alt={product.title} /> : null}
      {product.intro ? <p className="sales-product-intro">{product.intro}</p> : null}
      {datasheets.length ? <div className="sales-product-side-actions">
        <p className="sales-product-side-actions-label">{labels.datasheet}</p>
        <div className="btn-row sales-datasheet-links">{datasheets.map(doc => <a key={doc.url} href={doc.url} className="button secondary" target="_blank" rel="noopener noreferrer">{doc.label || labels.datasheet}</a>)}</div>
      </div> : null}
      {product.sourceUrl ? <p className="btn-row sales-manufacturer-link"><a href={product.sourceUrl} className="button ghost" target="_blank" rel="noopener noreferrer">{labels.manufacturerPage}</a></p> : null}
    </aside>
    <div className="sales-product-sections content-block">
      <section className="sales-product-block card sales-spec-panel" aria-labelledby="sales-product-specs-heading">
        <h2 id="sales-product-specs-heading">{labels.specificationsHeading}</h2>
        {product.specifications.length ? <Specifications rows={product.specifications.slice(0, 6)} /> : <p className="sales-empty-placeholder">{labels.emptySection}</p>}
        {product.specifications.length > 6 ? <details className="sales-spec-extra"><summary>{labels.moreSpecifications}</summary><Specifications rows={product.specifications.slice(6)} /></details> : null}
      </section>
      {product.features.length ? <details id="sales-product-features-heading" className="sales-product-block card sales-product-disclosure">
        <summary><h2>{labels.featuresHeading}</h2></summary>
        <ul className="check-list">{product.features.map(item => <li key={item}>{item}</li>)}</ul>
      </details> : null}
      {product.applications.length ? <details id="sales-product-apps-heading" className="sales-product-block card sales-product-disclosure">
        <summary><h2>{labels.applicationsHeading}</h2></summary>
        <ul className="check-list">{product.applications.map(item => <li key={item}>{item}</li>)}</ul>
      </details> : null}
    </div>
  </div>;
}
