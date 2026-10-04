import Image from "next/image";
import { getHeroImageConfig, type HeroTheme } from "@/lib/hero-images";
import { GeneratedIllustration } from "@/components/GeneratedIllustration";
import { getGeneratedIllustrationSources } from "@/lib/generated-illustrations";
import { getAuthenticPhotoBySrc } from "@/lib/authentic-photos";
import { AuthenticPhoto } from "@/components/AuthenticPhoto";
import { ResponsiveImage, type EncodedImage } from "@/components/ResponsiveImage";
import heroImages from "@/lib/responsive-heroes.json";

type Props = {
  theme: HeroTheme;
  src?: string;
  priority?: boolean;
};

export function HeroPhoto({ theme, src, priority = false }: Props) {
  const { src: themeSrc, position = "center center" } = getHeroImageConfig(theme);
  const imageSrc = src?.trim() || themeSrc;

  if (getAuthenticPhotoBySrc(imageSrc)) {
    return <AuthenticPhoto src={imageSrc} position={position} priority={priority} />;
  }

  const heroImage = (heroImages as Record<string, EncodedImage>)[imageSrc];
  if (heroImage) {
    return <ResponsiveImage src={imageSrc} image={heroImage} fill
      sizes="(max-width: 767px) 100vw, 48vw" className="hero-photo-img"
      style={{ objectPosition: position }} priority={priority} />;
  }

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
