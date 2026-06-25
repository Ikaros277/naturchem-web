import type { HeroTheme } from "@/lib/hero-images";

export type HomeHeroPillarId = "mereni" | "studie" | "dokumentace";

export type HomeHeroPillar = {
  id: HomeHeroPillarId;
  label: string;
  theme: HeroTheme;
  /** Jedna věta pod chipy — co pro zákazníka uděláme (aktivní sloveso) */
  detail: string;
  href: string;
};

export const homeHeroPillars: HomeHeroPillar[] = [
  {
    id: "mereni",
    label: "Měření",
    theme: "homepage-mereni",
    detail:
      "Změříme emise, pracovní prostředí, hluk i vibrace — akreditovaně, s protokolem pro KHS a ČIŽP.",
    href: "/sluzby#mericke-sluzby"
  },
  {
    id: "studie",
    label: "Studie",
    theme: "homepage-studie",
    detail:
      "Připravíme rozptylové a hlukové studie, posudky a výpočty pro stavební řízení, KHS nebo EIA.",
    href: "/sluzby#studie-vypocty"
  },
  {
    id: "dokumentace",
    label: "Dokumentace",
    theme: "homepage-eia",
    detail:
      "Zpracujeme EIA, odborné posudky, provozní řády, IPPC a ISPOP — podklady pro správní orgány.",
    href: "/sluzby#povolovaci-podklady"
  }
];
