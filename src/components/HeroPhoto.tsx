import Image from "next/image";
import { getHeroImageConfig, type HeroTheme } from "@/lib/hero-images";

type Props = {
  theme: HeroTheme;
  priority?: boolean;
};

export function HeroPhoto({ theme, priority = false }: Props) {
  const { src, position = "center center" } = getHeroImageConfig(theme);
  return (
    <Image
      src={src}
      alt=""
      fill
      sizes="(max-width: 767px) 100vw, 48vw"
      className="hero-photo-img"
      style={{ objectPosition: position }}
      priority={priority}
      fetchPriority={priority ? "high" : "auto"}
      loading={priority ? "eager" : "lazy"}
    />
  );
}
