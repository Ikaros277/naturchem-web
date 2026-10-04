import { getHeroImageConfig, getPageHeroTheme } from "@/lib/hero-images";
import { getAuthenticPhoto } from "@/lib/authentic-photos";

type Props = {
  href: string;
  alt: string;
};

/** Ilustrační náhled služby v přehledové kartě /sluzby. */
export function ServiceCardThumb({ href }: Props) {
  const theme = getPageHeroTheme(href);
  const { position = "center center" } = getHeroImageConfig(theme);
  const photo = getAuthenticPhoto(theme);
  const base = photo ? `${photo.base}-card` : `/hero/service-cards-2026-10/${theme}`;

  return (
    <div className="article-card-thumb" aria-hidden="true">
      {/* eslint-disable-next-line @next/next/no-img-element -- Pre-encoded thumbnails avoid runtime image transformations. */}
      <img
        src={`${base}-320.webp`}
        srcSet={`${base}-320.webp 320w, ${base}-640.webp 640w`}
        alt=""
        width={640}
        height={360}
        sizes="(max-width: 767px) 80px, (max-width: 1023px) calc((100vw - 96px) / 2), 280px"
        className="article-card-thumb-img"
        loading="lazy"
        fetchPriority="low"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectPosition: photo?.cardPosition ?? position }}
      />
      <div className="article-card-thumb-overlay" />
    </div>
  );
}
