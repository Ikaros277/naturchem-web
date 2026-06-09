import Image from "next/image";
import { getHeroImageSrc, type HeroTheme } from "@/lib/hero-images";

type Props = {
  theme: HeroTheme;
  className?: string;
};

/** Kategorie-specifický vizuál u přehledu služby (S7-4). */
export function ServiceContextPhoto({ theme, className }: Props) {
  return (
    <div className={["service-context-photo", className].filter(Boolean).join(" ")} aria-hidden="true">
      <Image
        src={getHeroImageSrc(theme)}
        alt=""
        fill
        sizes="(max-width: 768px) 100vw, 1200px"
        className="service-context-photo-img"
      />
      <div className="service-context-photo-overlay" />
    </div>
  );
}
