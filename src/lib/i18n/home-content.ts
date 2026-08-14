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
  ],
  de: [
    "Akkreditiertes Labor Nr. 1599",
    "ČSN EN ISO/IEC 17025",
    "EIA-Autorisierung, Ausbreitungsstudien, Gutachten, THG",
    "Gerichtlich beeideter Sachverständiger",
    "Ergebnisse für KHS, ČIŽP, Krajschaftsbehörden und Bauämter"
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
  ],
  de: [
    "Akkreditiertes Labor Nr. 1599",
    "ČSN EN ISO/IEC 17025",
    "Ergebnisse für KHS, ČIŽP und Krajschaftsbehörden",
    "EIA-Autorisierung und Gutachten"
  ]
} as const;

const offerPillars = {
  cs: [
    {
      icon: "pillar-mereni" as const,
      title: "Akreditovaná měření",
      teaser:
        "Emise, hluk, osvětlení, vibrace, mikroklima i další měření pracovního prostředí — pro provoz, KHS, ČIŽP nebo kolaudaci…",
      text: "Změříme emise, hluk, osvětlení, vibrace a mikroklima. U nové haly nebo kolaudace připravíme společný rozsah podle projektu a provozu.",
      cta: "Zobrazit měření",
      href: "/sluzby#mericke-sluzby",
      tags: ["KHS", "ČIŽP", "ISO 17025"],
      links: [
        { label: "Měření emisí", href: "/sluzby/mereni-emisi" },
        { label: "Měření pro kolaudaci", href: "/mereni-pro-kolaudaci" },
        { label: "Měření nové haly", href: "/mereni-nove-haly" }
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
        "Emissions, noise, lighting, vibration, microclimate and other workplace measurements — for operations, KHS, ČIŽP or building approval…",
      text: "We measure emissions, noise, lighting, vibration and microclimate. For a new hall or building approval, we define one coordinated scope based on the project and operation.",
      cta: "View measurements",
      href: "/sluzby#mericke-sluzby",
      tags: ["KHS", "ČIŽP", "ISO 17025"],
      links: [
        { label: "Emission measurements", href: "/sluzby/mereni-emisi" },
        { label: "Workplace measurements", href: "/sluzby/pracovni-prostredi" },
        { label: "Lighting measurements", href: "/sluzby/mereni-osvetleni" }
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
  ],
  de: [
    {
      icon: "pillar-mereni" as const,
      title: "Akkreditierte Messungen",
      teaser:
        "Emissionen, Lärm, Beleuchtung, Schwingungen, Mikroklima und weitere Arbeitsplatzmessungen — für Betrieb, KHS, ČIŽP oder Bauabnahme…",
      text: "Wir messen Emissionen, Lärm, Beleuchtung, Schwingungen und Mikroklima. Bei einer neuen Halle oder Bauabnahme stimmen wir den gemeinsamen Umfang auf Projekt und Betrieb ab.",
      cta: "Messungen anzeigen",
      href: "/sluzby#mericke-sluzby",
      tags: ["KHS", "ČIŽP", "ISO 17025"],
      links: [
        { label: "Emissionsmessungen", href: "/sluzby/mereni-emisi" },
        { label: "Arbeitsplatzmessungen", href: "/sluzby/pracovni-prostredi" },
        { label: "Beleuchtungsmessungen", href: "/sluzby/mereni-osvetleni" }
      ]
    },
    {
      icon: "pillar-studie" as const,
      title: "Studien und Fachberechnungen",
      teaser: "Ausbreitungs- und Lärmstudien, Gutachten und Berechnungen für Genehmigungen, KHS oder EIA…",
      text: "Wir erstellen Ausbreitungs- und Lärmstudien, akustische Gutachten und Modellberechnungen für KHS, Baugenehmigungen oder EIA.",
      cta: "Studien anzeigen",
      href: "/sluzby#studie-vypocty",
      tags: ["EIA", "KHS", "KÚ"],
      links: [
        { label: "Ausbreitungsstudien", href: "/sluzby/rozptylove-studie" },
        { label: "Lärmstudien", href: "/sluzby/hlukove-studie" },
        { label: "Modellberechnungen", href: "/sluzby/modelove-vypocty" }
      ]
    },
    {
      icon: "pillar-dokumentace" as const,
      title: "Dokumentation und EIA",
      teaser: "EIA, Gutachten, Betriebsanweisungen, IPPC und ISPOP — Unterlagen für Behörden und Genehmigungen…",
      text: "Wir erstellen EIA, Gutachten, Betriebsanweisungen, IPPC, ISPOP, THG und weitere Dokumentation für Verwaltungsbehörden.",
      cta: "Dokumentation anzeigen",
      href: "/sluzby#povolovaci-podklady",
      tags: ["EIA", "IPPC", "ČIŽP"],
      links: [
        { label: "EIA und Gutachten", href: "/sluzby/eia-posudky-poradenstvi" },
        { label: "IPPC / ISPOP / THG", href: "/sluzby/ippc-integrovana-povoleni" },
        { label: "Kontakt", href: "/kontakt" }
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
