import type { Locale } from "@/lib/i18n/locales";

const trustBand = {
  cs: [
    "Akreditovaná laboratoř č. 1599",
    "ČSN EN ISO/IEC 17025",
    "Autorizace EIA, rozptylové studie, odborné posudky, GHG",
    "Soudní znalec",
    "Výstupy pro KHS, ČIŽP, KÚ a stavební úřady"
  ],
  en: [
    "Accredited laboratory No. 1599",
    "ČSN EN ISO/IEC 17025",
    "EIA authorisation, dispersion studies, expert reports, GHG",
    "Court-appointed expert",
    "Outputs for KHS, ČIŽP, regional authorities and building offices"
  ]
} as const;

const serviceTrustBand = {
  cs: [
    "Akreditovaná laboratoř č. 1599",
    "ČSN EN ISO/IEC 17025",
    "Výstupy pro KHS, ČIŽP a KÚ",
    "Autorizace EIA a odborné posudky"
  ],
  en: [
    "Accredited laboratory No. 1599",
    "ČSN EN ISO/IEC 17025",
    "Outputs for KHS, ČIŽP and regional authorities",
    "EIA authorisation and expert reports"
  ]
} as const;

const offerPillars = {
  cs: [
    {
      icon: "pillar-mereni" as const,
      title: "Akreditovaná měření",
      teaser:
        "Emise, hluk, pracovní prostředí i vibrace — akreditovaně, s výstupem pro KHS a ČIŽP…",
      text: "Změříme emise, pracovní prostředí, hluk, vibrace, osvětlení, mikroklima i čisté prostory — akreditovaně, s výstupem pro úřady.",
      cta: "Zobrazit měření",
      href: "/sluzby#mericke-sluzby",
      tags: ["KHS", "ČIŽP", "ISO 17025"],
      links: [
        { label: "Měření emisí", href: "/sluzby/mereni-emisi" },
        { label: "Pracovní prostředí", href: "/sluzby/pracovni-prostredi" },
        { label: "Vibrace", href: "/sluzby/mereni-vibraci" }
      ]
    },
    {
      icon: "pillar-studie" as const,
      title: "Studie a odborné výpočty",
      teaser: "Rozptylové a hlukové studie, posudky a výpočty pro řízení, KHS nebo EIA…",
      text: "Připravíme rozptylové a hlukové studie, akustické posudky a modelové výpočty pro KHS, stavební řízení nebo EIA.",
      cta: "Zobrazit studie",
      href: "/sluzby#studie-vypocty",
      tags: ["EIA", "KHS", "KÚ"],
      links: [
        { label: "Rozptylové studie", href: "/sluzby/rozptylove-studie" },
        { label: "Hlukové studie", href: "/sluzby/hlukove-studie" },
        { label: "Modelové výpočty", href: "/sluzby/modelove-vypocty" }
      ]
    },
    {
      icon: "pillar-dokumentace" as const,
      title: "Dokumentace a EIA",
      teaser: "EIA, posudky, provozní řády, IPPC a ISPOP — podklady pro úřady a povolení…",
      text: "Zpracujeme EIA, odborné posudky, provozní řády, IPPC, ISPOP, GHG i další dokumentaci pro správní orgány.",
      cta: "Zobrazit dokumentaci",
      href: "/sluzby#povolovaci-podklady",
      tags: ["EIA", "IPPC", "ČIŽP"],
      links: [
        { label: "EIA a posudky", href: "/sluzby/eia-posudky-poradenstvi" },
        { label: "IPPC / ISPOP / GHG", href: "/sluzby/ippc-integrovana-povoleni" },
        { label: "Kontakt", href: "/kontakt" }
      ]
    }
  ],
  en: [
    {
      icon: "pillar-mereni" as const,
      title: "Accredited measurements",
      teaser:
        "Emissions, noise, workplace environment and vibration — accredited, with outputs for KHS and ČIŽP…",
      text: "We measure emissions, workplace environment, noise, vibration, lighting, microclimate and cleanrooms — accredited, with outputs for authorities.",
      cta: "View measurements",
      href: "/sluzby#mericke-sluzby",
      tags: ["KHS", "ČIŽP", "ISO 17025"],
      links: [
        { label: "Emission measurements", href: "/sluzby/mereni-emisi" },
        { label: "Workplace environment", href: "/sluzby/pracovni-prostredi" },
        { label: "Vibration", href: "/sluzby/mereni-vibraci" }
      ]
    },
    {
      icon: "pillar-studie" as const,
      title: "Studies and expert calculations",
      teaser: "Dispersion and noise studies, reports and calculations for permitting, KHS or EIA…",
      text: "We prepare dispersion and noise studies, acoustic reports and model calculations for KHS, building permitting or EIA.",
      cta: "View studies",
      href: "/sluzby#studie-vypocty",
      tags: ["EIA", "KHS", "KÚ"],
      links: [
        { label: "Dispersion studies", href: "/sluzby/rozptylove-studie" },
        { label: "Noise studies", href: "/sluzby/hlukove-studie" },
        { label: "Model calculations", href: "/sluzby/modelove-vypocty" }
      ]
    },
    {
      icon: "pillar-dokumentace" as const,
      title: "Documentation and EIA",
      teaser: "EIA, expert reports, operating rules, IPPC and ISPOP — documents for authorities and permits…",
      text: "We prepare EIA, expert reports, operating rules, IPPC, ISPOP, GHG and other documentation for administrative bodies.",
      cta: "View documentation",
      href: "/sluzby#povolovaci-podklady",
      tags: ["EIA", "IPPC", "ČIŽP"],
      links: [
        { label: "EIA and expert reports", href: "/sluzby/eia-posudky-poradenstvi" },
        { label: "IPPC / ISPOP / GHG", href: "/sluzby/ippc-integrovana-povoleni" },
        { label: "Contact", href: "/kontakt" }
      ]
    }
  ]
};

export function getHomeTrustBandItems(locale: Locale) {
  return trustBand[locale];
}

export function getServiceTrustBandItems(locale: Locale) {
  return serviceTrustBand[locale];
}

export function getHomeOfferPillars(locale: Locale) {
  return offerPillars[locale];
}
