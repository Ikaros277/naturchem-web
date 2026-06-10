import { HeroPhoto } from "@/components/HeroPhoto";
import { HomeHeroShell } from "@/components/HomeHeroShell";
import { homeHeroPillars } from "@/lib/home-hero-pillars";

/** Server komponenta — H1, lead a LCP fotka v prvním HTML bez čekání na JS. */
export function HomeHeroSection() {
  const initialPillar = homeHeroPillars[0];

  return (
    <HomeHeroShell initialPhoto={<HeroPhoto theme={initialPillar.theme} priority />}>
      <div className="hero-diagonal-spacer" aria-hidden="true" />
      <h1 className="home-hero-enter home-hero-enter-1">Akreditovaná měření, studie a podklady pro úřady</h1>
      <p className="hero-lead home-hero-enter home-hero-enter-2">
        Postaráme se o vše, co Váš provoz potřebuje — pro provozovatele, investory i projektanty, bez nutnosti
        poptávat více dodavatelů.
      </p>
    </HomeHeroShell>
  );
}
