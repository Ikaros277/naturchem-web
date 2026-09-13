import Image from "next/image";
import { getHeroImageSrc, type HeroTheme } from "@/lib/hero-images";
import { GeneratedIllustration } from "@/components/GeneratedIllustration";
import { getGeneratedIllustrationSources } from "@/lib/generated-illustrations";

type Props = {
  theme: HeroTheme;
  src?: string;
};

/** Dedicated article illustration; a thematic image remains a fallback for new CMS content. */
export function ArticleCardThumb({ theme, src }: Props) {
  const imageSrc = src?.trim() || getHeroImageSrc(theme);
  return (
    <div className="article-card-thumb" aria-hidden="true">
      {getGeneratedIllustrationSources(imageSrc) ? (
        <GeneratedIllustration src={imageSrc} fill sizes="(max-width: 768px) 100vw, 33vw" className="article-card-thumb-img" />
      ) : <Image
        src={imageSrc}
        alt=""
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="article-card-thumb-img"
        loading="lazy"
        fetchPriority="low"
      />}
      <div className="article-card-thumb-overlay" />
    </div>
  );
}
