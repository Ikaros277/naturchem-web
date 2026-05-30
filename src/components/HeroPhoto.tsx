import Image from "next/image";
import { heroThemeImages, type HeroTheme } from "@/lib/hero-images";

type Props = {
  theme: HeroTheme;
  priority?: boolean;
  compact?: boolean;
};

export function HeroPhoto({ theme, priority = false, compact = false }: Props) {
  const src = heroThemeImages[theme];

  return (
    <div className={compact ? "hero-photo hero-photo-compact" : "hero-photo"} aria-hidden="true">
      <Image
        src={src}
        alt=""
        fill
        sizes={compact ? "100vw" : "(max-width: 768px) 100vw, 1920px"}
        className="hero-photo-img"
        priority={priority}
      />
      <div className="hero-photo-overlay" />
    </div>
  );
}
