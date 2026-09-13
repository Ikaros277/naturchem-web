import { preload } from "react-dom";

import { HomeHeroShell } from "@/components/HomeHeroShell";
import { HomeLcpPhoto } from "@/components/HomeLcpPhoto";
import { getHeroLcpSources } from "@/lib/hero-images";
import type { HomeHeroPillar } from "@/lib/home-hero-pillars";
import type { Locale } from "@/lib/i18n/locales";
import styles from "./homepage.module.css";

type Props = {
  title: string;
  lead: string;
  pillars: HomeHeroPillar[];
  ariaLabel: string;
  pillarsAriaLabel: string;
  locale: Locale;
  credential: string;
};

/** Server komponenta — H1, lead a LCP fotka v prvním HTML bez čekání na JS. */
export function HomeHeroSection({ title, lead, pillars, ariaLabel, pillarsAriaLabel, locale, credential }: Props) {
  const initialPillar = pillars[0];
  const { src, avifSrc, mobileAvifSrc } = getHeroLcpSources(initialPillar.theme);
  if (avifSrc && mobileAvifSrc) {
    preload(mobileAvifSrc, {
      as: "image",
      type: "image/avif",
      fetchPriority: "high",
      media: "(max-width: 767px)"
    });
    preload(avifSrc, {
      as: "image",
      type: "image/avif",
      fetchPriority: "high",
      media: "(min-width: 768px)"
    });
  } else {
    preload(src, { as: "image", fetchPriority: "high" });
  }

  return (
    <HomeHeroShell
      pillars={pillars}
      locale={locale}
      credential={credential}
      ariaLabel={ariaLabel}
      pillarsAriaLabel={pillarsAriaLabel}
      initialPhoto={<HomeLcpPhoto theme={initialPillar.theme} />}
    >
      <h1>{title}</h1>
      <p className={styles.heroLead}>{lead}</p>
    </HomeHeroShell>
  );
}
