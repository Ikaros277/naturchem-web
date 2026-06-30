import { HomeHeroShell } from "@/components/HomeHeroShell";
import { HomeLcpPhoto } from "@/components/HomeLcpPhoto";
import type { HomeHeroPillar } from "@/lib/home-hero-pillars";

type Props = {
  title: string;
  lead: string;
  pillars: HomeHeroPillar[];
  ariaLabel: string;
  pillarsAriaLabel: string;
};

/** Server komponenta — H1, lead a LCP fotka v prvním HTML bez čekání na JS. */
export function HomeHeroSection({ title, lead, pillars, ariaLabel, pillarsAriaLabel }: Props) {
  const initialPillar = pillars[0];

  return (
    <HomeHeroShell
      pillars={pillars}
      ariaLabel={ariaLabel}
      pillarsAriaLabel={pillarsAriaLabel}
      initialPhoto={<HomeLcpPhoto theme={initialPillar.theme} />}
    >
      <div className="hero-diagonal-spacer" aria-hidden="true" />
      <h1 className="home-hero-enter home-hero-enter-1">{title}</h1>
      <p className="hero-lead home-hero-enter home-hero-enter-2">{lead}</p>
    </HomeHeroShell>
  );
}
