import Image from "next/image";
import { getHeroImageSrc, type HeroTheme } from "@/lib/hero-images";
import { GeneratedIllustration } from "@/components/GeneratedIllustration";
import { getGeneratedIllustrationSources } from "@/lib/generated-illustrations";
import { getResponsiveImage, ResponsiveImage } from "@/components/ResponsiveImage";

type Props = {
  theme: HeroTheme;
  src?: string;
};

/** Dedicated article illustration; a thematic image remains a fallback for new CMS content. */
export function ArticleCardThumb({ theme, src }: Props) {
  const imageSrc = src?.trim() || getHeroImageSrc(theme);
  return (
    <div className="article-card-thumb" aria-hidden="true">
      {getResponsiveImage(imageSrc) ? (
        <ResponsiveImage src={imageSrc} fill sizes="(max-width: 767px) calc((100vw - 64px) / 3), (max-width: 1023px) 150px, (max-width: 1279px) 30vw, 400px" className="article-card-thumb-img" />
      ) : getGeneratedIllustrationSources(imageSrc) ? (
        <GeneratedIllustration src={imageSrc} fill sizes="(max-width: 767px) 33vw, (max-width: 1023px) 150px, 30vw" className="article-card-thumb-img" />
      ) : <Image
        src={imageSrc}
        alt=""
        fill
        sizes="(max-width: 767px) 33vw, (max-width: 1023px) 150px, 30vw"
        className="article-card-thumb-img"
        loading="lazy"
        fetchPriority="low"
      />}
      <div className="article-card-thumb-overlay" />
    </div>
  );
}
