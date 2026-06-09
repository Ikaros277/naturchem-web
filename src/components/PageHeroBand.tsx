import type { ReactNode } from "react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { HeroPhoto } from "@/components/HeroPhoto";
import type { HeroTheme } from "@/lib/hero-images";

type Crumb = { name: string; href?: string };

export type PageHeroBandVariant = "standard" | "service";

type Props = {
  theme: HeroTheme;
  breadcrumbs?: Crumb[];
  children: ReactNode;
  className?: string;
  priority?: boolean;
  /** standard = index stránky; service = ServicePage */
  variant?: PageHeroBandVariant;
};

export function PageHeroBand({
  theme,
  breadcrumbs,
  children,
  className = "",
  priority = false,
  variant = "standard"
}: Props) {
  return (
    <div className={`page-hero-band page-hero-band--${variant} ${className}`.trim()}>
      <div className="container page-hero-band-inner">
        <div className="hero-band-text">
          {breadcrumbs ? <Breadcrumbs items={breadcrumbs} /> : null}
          {children}
        </div>
      </div>
      <div className="hero-photo-frame" aria-hidden="true">
        <HeroPhoto theme={theme} priority={priority} />
      </div>
    </div>
  );
}
