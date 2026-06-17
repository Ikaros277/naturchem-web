import { HeroPhoto } from "@/components/HeroPhoto";
import { HomeHeroShell } from "@/components/HomeHeroShell";
import { homeHeroPillars } from "@/lib/home-hero-pillars";

type Props = {
  title: string;
  lead: string;
};

/** Server komponenta — H1, lead a LCP fotka v prvním HTML bez čekání na JS. */
export function HomeHeroSection({ title, lead }: Props) {
  const initialPillar = homeHeroPillars[0];

  return (
    <HomeHeroShell initialPhoto={<HeroPhoto theme={initialPillar.theme} priority />}>
      <div className="hero-diagonal-spacer" aria-hidden="true" />
      <h1 className="home-hero-enter home-hero-enter-1">{title}</h1>
      <p className="hero-lead home-hero-enter home-hero-enter-2">{lead}</p>
    </HomeHeroShell>
  );
}
