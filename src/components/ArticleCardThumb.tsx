import Image from "next/image";
import { heroThemeImages, type HeroTheme } from "@/lib/hero-images";

type Props = {
  theme: HeroTheme;
};

/** Náhledová fotka karty článku — téma ze stock hero (Fáze A). */
export function ArticleCardThumb({ theme }: Props) {
  return (
    <div className="article-card-thumb" aria-hidden="true">
      <Image
        src={heroThemeImages[theme]}
        alt=""
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="article-card-thumb-img"
      />
      <div className="article-card-thumb-overlay" />
    </div>
  );
}
