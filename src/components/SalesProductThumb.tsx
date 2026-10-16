import { StaticContentImage } from "@/components/StaticContentImage";

type Props = {
  src: string;
  alt: string;
};

/** Product photo thumbnail in PCF catalog cards. */
export function SalesProductThumb({ src, alt }: Props) {
  return (
    <div className="article-card-thumb sales-product-thumb" aria-hidden="true">
      <StaticContentImage
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="article-card-thumb-img sales-product-thumb-img"
      />
      <div className="article-card-thumb-overlay sales-product-thumb-overlay" />
    </div>
  );
}

/** Larger product photo on detail page. */
export function SalesProductFigure({ src, alt }: Props) {
  return (
    <figure className="sales-product-figure">
      <div className="sales-product-figure-frame">
        <StaticContentImage
          src={src}
          alt={alt}
          width={800}
          height={520}
          className="sales-product-figure-img"
          sizes="(max-width: 768px) 100vw, min(42vw, 800px)"
        />
      </div>
    </figure>
  );
}
