import { getHeroImageConfig, type HeroTheme } from "@/lib/hero-images";

type Props = {
  theme: HeroTheme;
};

/**
 * Statický hero obrázek pro LCP — bez /_next/image optimalizátoru v kritické cestě.
 * Ostatní slidy carouselu používají HeroPhoto (next/image) až na vyžádání.
 */
export function HomeLcpPhoto({ theme }: Props) {
  const { src, position = "center center" } = getHeroImageConfig(theme);

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt=""
      width={1200}
      height={800}
      decoding="async"
      fetchPriority="high"
      className="hero-photo-img hero-photo-img--lcp"
      style={{ objectPosition: position }}
    />
  );
}
