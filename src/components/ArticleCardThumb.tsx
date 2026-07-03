import Image from "next/image";
import { getHeroImageSrc, type HeroTheme } from "@/lib/hero-images";

type Props = {
  theme: HeroTheme;
  src?: string;
};

/** Náhledová fotka karty článku — vlastní obrázek nebo stock hero podle tématu. */
export function ArticleCardThumb({ theme, src }: Props) {
  const imageSrc = src?.trim() || getHeroImageSrc(theme);
  return (
    <div className="article-card-thumb" aria-hidden="true">
      <Image
        src={imageSrc}
        alt=""
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="article-card-thumb-img"
        loading="lazy"
        fetchPriority="low"
      />
      <div className="article-card-thumb-overlay" />
    </div>
  );
}
