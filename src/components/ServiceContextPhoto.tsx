import Image from "next/image";
import { getHeroContextImageConfig, type HeroTheme } from "@/lib/hero-images";

type Props = {
  theme: HeroTheme;
  className?: string;
};

/** Kategorie-specifický vizuál u přehledu služby (S7-4). */
export function ServiceContextPhoto({ theme, className }: Props) {
  const { src, position = "center center" } = getHeroContextImageConfig(theme);

  return (
    <div className={["service-context-photo", className].filter(Boolean).join(" ")} aria-hidden="true">
      <Image
        src={src}
        alt=""
        fill
        sizes="(max-width: 768px) 100vw, 1200px"
        className="service-context-photo-img"
        style={{ objectPosition: position }}
      />
      <div className="service-context-photo-overlay" />
    </div>
  );
}
