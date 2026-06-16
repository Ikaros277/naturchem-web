import type { ReactNode } from "react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { HeroPhoto } from "@/components/HeroPhoto";
import type { HeroTheme } from "@/lib/hero-images";

type Crumb = { name: string; href?: string };

export type PageHeroBandVariant = "standard" | "service";

type Props = {
  theme: HeroTheme;
  imageSrc?: string;
  breadcrumbs?: Crumb[];
  children: ReactNode;
  className?: string;
  priority?: boolean;
  /** standard = index stránky; service = ServicePage */
  variant?: PageHeroBandVariant;
  /** Nahradí výchozí hero fotku (např. mapa na kontaktu). */
  media?: ReactNode;
  mediaLabel?: string;
};

export function PageHeroBand({
  theme,
  imageSrc,
  breadcrumbs,
  children,
  className = "",
  priority = false,
  variant = "standard",
  media,
  mediaLabel
}: Props) {
  const bandClassName = [
    `page-hero-band page-hero-band--${variant}`,
    media ? "page-hero-band--media" : "",
    className
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={bandClassName}>
      <div className="container page-hero-band-inner">
        <div className="hero-band-text">
          <div className="hero-diagonal-spacer" aria-hidden="true" />
          {breadcrumbs ? <Breadcrumbs items={breadcrumbs} /> : null}
          {children}
        </div>
      </div>
      <div
        className="hero-photo-frame"
        aria-hidden={media ? undefined : true}
        role={media ? "region" : undefined}
        aria-label={media ? mediaLabel : undefined}
      >
        {media ?? <HeroPhoto theme={theme} src={imageSrc} priority={priority} />}
      </div>
    </div>
  );
}
