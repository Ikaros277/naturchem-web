import Image from "next/image";
import { getHeroImageConfig, type HeroTheme } from "@/lib/hero-images";
import { GeneratedIllustration } from "@/components/GeneratedIllustration";
import { getGeneratedIllustrationSources } from "@/lib/generated-illustrations";

type Props = {
  theme: HeroTheme;
  src?: string;
  priority?: boolean;
};

export function HeroPhoto({ theme, src, priority = false }: Props) {
  const { src: themeSrc, position = "center center" } = getHeroImageConfig(theme);
  const imageSrc = src?.trim() || themeSrc;

  if (getGeneratedIllustrationSources(imageSrc)) {
    return <GeneratedIllustration
      src={imageSrc} fill sizes="(max-width: 767px) 100vw, 48vw"
      className="hero-photo-img" style={{ objectPosition: position }} priority={priority}
    />;
  }

  return (
    <Image
      src={imageSrc}
      alt=""
      fill
      sizes="(max-width: 767px) 100vw, 48vw"
      quality={priority ? 70 : 75}
      className="hero-photo-img"
      style={{ objectPosition: position }}
      priority={priority}
      fetchPriority={priority ? "high" : "auto"}
      loading={priority ? "eager" : "lazy"}
    />
  );
}
