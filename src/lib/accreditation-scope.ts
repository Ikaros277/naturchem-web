/** Akreditovaný rozsah dle osvědčení č. 562/2023 (příloha). */
export const accreditedLabScope = {
  summary:
    "Fyzikálně-chemické analýzy a vzorkování v oblasti ovzduší, měření emisí, mikroklimatických podmínek, hluku, umělého osvětlení a vibrací.",
  emissions: {
    title: "Emise ze stacionárních zdrojů",
    sampling: [
      "izokinetický odběr tuhých znečišťujících látek (TZL)",
      "odběr organických látek (pevný sorbent)",
      "odběr těžkých kovů do kapaliny",
      "odběr anorganických sloučenin chloru a HCl",
      "odběr VOC (pevný sorbent)"
    ],
    analysis: [
      "SO₂, CO, NOx, O₂ (automatizované analyzátory)",
      "TOC (organické látky vyjádřené jako celkový organický uhlík)",
      "TZL (gravimetricky)",
      "vlhkost plynu, rychlost proudění a objemový tok",
      "VOC a další organické látky (výpočet z naměřených hodnot)",
      "HCl a anorganické sloučeniny chloru",
      "těžké kovy: As, Be, Cd, Cr, Co, Cu, Mn, Ni, Pb, Sb, Se, Sn, Te, Tl, V, Zn, Al, Fe, Si, Hg"
    ]
  },
  workplace: {
    title: "Pracovní a vnitřní ovzduší",
    items: [
      "vdechovatelná a respirabilní frakce prachu",
      "organické látky (benzen, toluen, xylen, styren, acetáty, chlorované rozpouštědla aj.)",
      "krátkodobé měření chemických látek detekčními trubicemi",
      "mikroklima: teplota, tlak, vlhkost, rychlost proudění vzduchu",
      "vibrace přenášené na ruce a celkové vibrace",
      "umělé osvětlení (vnitřní i venkovní prostředí)",
      "hluk v pracovním prostředí",
      "odběr prachu, aerosolu a vláken na filtr"
    ]
  },
  environment: {
    title: "Mimopracovní prostředí",
    items: ["hluk (LAeq, LAFmax dle platných metod ČSN ISO 1996)"]
  }
} as const;

export const authorizations = [
  {
    title: "EIA",
    text: "vypracování podkladů v procesech posuzování vlivů na životní prostředí"
  },
  {
    title: "Rozptylové studie",
    text: "vypracování rozptylových studií"
  },
  {
    title: "Odborné posudky",
    text: "odborné posudky v ochraně ovzduší"
  },
  {
    title: "Skleníkové plyny",
    text: "ověřování emisí skleníkových plynů (GHG)"
  }
] as const;
