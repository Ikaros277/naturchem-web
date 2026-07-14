import type { ReactNode } from "react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { HeroPhoto } from "@/components/HeroPhoto";
import { getMessages } from "@/lib/i18n/get-messages";
import type { HeroTheme } from "@/lib/hero-images";
import type { Locale } from "@/lib/i18n/locales";

type Crumb = { name: string; href?: string };

export type PageHeroBandVariant = "standard" | "service";

type Props = {
  theme: HeroTheme;
  imageSrc?: string;
  breadcrumbs?: Crumb[];
  locale?: Locale;
  children: ReactNode;
  className?: string;
  priority?: boolean;
  /** standard = index stránky; service = ServicePage */
  variant?: PageHeroBandVariant;
  /** Nahradí výchozí hero fotku (např. mapa na kontaktu). */
  media?: ReactNode;
  mediaLabel?: string;
};

export async function PageHeroBand({
  theme,
  imageSrc,
  breadcrumbs,
  locale,
  children,
  className = "",
  priority = true,
  variant = "standard",
  media,
  mediaLabel
}: Props) {
  const breadcrumbsAria =
    breadcrumbs && locale ? (await getMessages(locale)).common.breadcrumbsAria : undefined;

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
          {breadcrumbs && breadcrumbsAria ? (
            <Breadcrumbs items={breadcrumbs} breadcrumbsAria={breadcrumbsAria} />
          ) : null}
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
