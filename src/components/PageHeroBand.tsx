import type { ReactNode } from "react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { HeroPhoto } from "@/components/HeroPhoto";
import type { HeroTheme } from "@/lib/hero-images";

type Crumb = { name: string; href?: string };

type Props = {
  theme: HeroTheme;
  breadcrumbs?: Crumb[];
  children: ReactNode;
  className?: string;
  priority?: boolean;
};

export function PageHeroBand({ theme, breadcrumbs, children, className = "", priority = false }: Props) {
  return (
    <div className={`page-hero-band ${className}`.trim()}>
      <HeroPhoto theme={theme} compact priority={priority} />
      <div className="container page-hero-band-inner">
        {breadcrumbs ? <Breadcrumbs items={breadcrumbs} /> : null}
        {children}
      </div>
    </div>
  );
}
