import Image from "next/image";
import { getHeroImageConfig, type HeroTheme } from "@/lib/hero-images";
import { LCP_HERO_QUALITY, LCP_HERO_SIZES } from "@/lib/lcp-hero-image";

type Props = {
  theme: HeroTheme;
  src?: string;
  priority?: boolean;
};

export function HeroPhoto({ theme, src, priority = false }: Props) {
  const { src: themeSrc, position = "center center" } = getHeroImageConfig(theme);
  const imageSrc = src?.trim() || themeSrc;

  return (
    <Image
      src={imageSrc}
      alt=""
      fill
      sizes={priority ? LCP_HERO_SIZES : "(max-width: 767px) 100vw, 48vw"}
      quality={priority ? LCP_HERO_QUALITY : 72}
      className="hero-photo-img"
      style={{ objectPosition: position }}
      priority={priority}
      fetchPriority={priority ? "high" : "auto"}
      loading={priority ? "eager" : "lazy"}
    />
  );
}
