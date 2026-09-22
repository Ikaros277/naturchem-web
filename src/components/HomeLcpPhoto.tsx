import { getHeroImageConfig, getHeroLcpSources, type HeroTheme } from "@/lib/hero-images";

type Props = {
  theme: HeroTheme;
};

/**
 * Statický hero obrázek pro LCP — responzivní picture bez /_next/image v kritické cestě.
 */
export function HomeLcpPhoto({ theme }: Props) {
  const { src, avifSrc, mobileSrc, mobileAvifSrc } = getHeroLcpSources(theme);
  const { position = "center center" } = getHeroImageConfig(theme);

  return (
    <picture>
      {mobileAvifSrc ? <source media="(max-width: 767px)" srcSet={mobileAvifSrc} type="image/avif" /> : null}
      {avifSrc ? <source srcSet={avifSrc} type="image/avif" /> : null}
      <source media="(max-width: 767px)" srcSet={mobileSrc} type="image/webp" />
      <img
        src={src}
        alt=""
        width={1200}
        height={800}
        loading="eager"
        decoding="sync"
        fetchPriority="high"
        className="hero-photo-img hero-photo-img--lcp"
        style={{ objectPosition: position }}
      />
    </picture>
  );
}
