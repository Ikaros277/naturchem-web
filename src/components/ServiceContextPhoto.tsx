import Image from "next/image";
import { heroThemeImages, type HeroTheme } from "@/lib/hero-images";

type Props = {
  theme: HeroTheme;
};

/** Kategorie-specifický vizuál nad decision panelem (S7-4). */
export function ServiceContextPhoto({ theme }: Props) {
  return (
    <div className="service-context-photo" aria-hidden="true">
      <Image
        src={heroThemeImages[theme]}
        alt=""
        fill
        sizes="(max-width: 768px) 100vw, 1200px"
        className="service-context-photo-img"
      />
      <div className="service-context-photo-overlay" />
    </div>
  );
}
