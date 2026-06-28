import Image from "next/image";
import { getHeroImageConfig, getPageHeroTheme } from "@/lib/hero-images";

type Props = {
  href: string;
  alt: string;
};

/** Ilustrační náhled služby v přehledové kartě /sluzby. */
export function ServiceCardThumb({ href, alt }: Props) {
  const { src, position = "center center" } = getHeroImageConfig(getPageHeroTheme(href));

  return (
    <div className="article-card-thumb" aria-hidden="true">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="article-card-thumb-img"
        style={{ objectPosition: position }}
      />
      <div className="article-card-thumb-overlay" />
    </div>
  );
}
