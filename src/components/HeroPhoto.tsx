import Image from "next/image";
import { getHeroImageSrc, type HeroTheme } from "@/lib/hero-images";

type Props = {
  theme: HeroTheme;
  priority?: boolean;
};

export function HeroPhoto({ theme, priority = false }: Props) {
  return (
    <Image
      src={getHeroImageSrc(theme)}
      alt=""
      fill
      sizes="(max-width: 767px) 100vw, 48vw"
      className="hero-photo-img"
      priority={priority}
    />
  );
}
