import { getHeroImageConfig, getHeroLcpSources, type HeroTheme } from "@/lib/hero-images";

type Props = {
  theme: HeroTheme;
};

/**
 * Statický hero obrázek pro LCP — responzivní picture bez /_next/image v kritické cestě.
 */
export function HomeLcpPhoto({ theme }: Props) {
  const { src, mobileSrc } = getHeroLcpSources(theme);
  const { position = "center center" } = getHeroImageConfig(theme);

  return (
    <picture>
      <source media="(max-width: 767px)" srcSet={mobileSrc} type="image/webp" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt=""
        width={1200}
        height={800}
        loading="eager"
        decoding="async"
        fetchPriority="high"
        className="hero-photo-img hero-photo-img--lcp"
        style={{ objectPosition: position }}
      />
    </picture>
  );
}
