/** Položky megamenu Služby — jeden zdroj pravdy pro Header a navigaci. */
export const serviceMegaGroups = [
  {
    id: "mereni",
    title: "Měření",
    subtitle: "Akreditovaná měření emisí, hluku a pracovního prostředí",
    links: [
      {
        href: "/sluzby/pracovni-prostredi",
        label: "Pracovní prostředí",
        description: "Kategorizace prací, expozice a protokoly z měření"
      },
      {
        href: "/sluzby/mereni-emisi",
        label: "Měření emisí",
        description: "Emise ze zdrojů, VOC, TOC a TZL"
      },
      {
        href: "/sluzby/mereni-hluku",
        label: "Hluk a akustika",
        description: "Hluk v provozu i v okolí závodu"
      },
      {
        href: "/sluzby/mereni-tepelna-chladova-zatez",
        label: "Tepelná a chladová zátěž",
        description: "Hodnocení tepelné a chladové zátěže při práci"
      },
      {
        href: "/sluzby/mereni-diisokyanatu",
        label: "Měření diisokyanátů",
        description: "Expozice diisokyanátů ve výrobě"
      },
      {
        href: "/sluzby/mereni-vibraci",
        label: "Vibrace",
        description: "Celkové a lokální vibrace"
      },
      {
        href: "/sluzby/mereni-osvetleni",
        label: "Osvětlení",
        description: "Intenzita osvětlení na pracovištích"
      },
      {
        href: "/sluzby/mereni-mikroklimatu",
        label: "Mikroklima",
        description: "Teplota, vlhkost a proudění vzduchu"
      }
    ]
  },
  {
    id: "studie",
    title: "Studie a výpočty",
    subtitle: "Rozptylové a hlukové studie, výpočty a posudky",
    links: [
      {
        href: "/sluzby/rozptylove-studie",
        label: "Rozptylové studie",
        description: "Šíření znečišťujících látek ve vzduchu"
      },
      {
        href: "/sluzby/hlukove-studie",
        label: "Hlukové studie",
        description: "Hlukové studie pro povolení staveb"
      },
      {
        href: "/sluzby/modelove-vypocty",
        label: "Modelové výpočty",
        description: "Atmosférické a akustické modely"
      },
      {
        href: "/sluzby/akusticke-posudky",
        label: "Akustické posudky",
        description: "Posudky hluku a vibrací"
      },
      {
        href: "/sluzby/imisni-dopady",
        label: "Imisní a hlukové dopady",
        description: "Dopady záměrů na okolí a imise"
      },
      {
        href: "/sluzby/ispop",
        label: "ISPOP a provozní evidence",
        description: "Souhrnná provozní evidence a roční hlášení ISPOP"
      },
      {
        href: "/sluzby/ghg-overovani",
        label: "Emise skleníkových plynů (GHG)",
        description: "Výkazy a ověřování emisí GHG"
      }
    ]
  },
  {
    id: "dokumentace",
    title: "Dokumentace a povolení",
    subtitle: "EIA, povolení provozu a provozní dokumentace",
    links: [
      {
        href: "/sluzby/eia-oznameni-zameru",
        label: "EIA a oznámení záměru",
        description: "EIA, oznámení záměru a závěrečné zprávy"
      },
      {
        href: "/sluzby/odborne-posudky",
        label: "Odborné posudky",
        description: "Podklady pro povolování a provoz"
      },
      {
        href: "/sluzby/ippc-integrovana-povoleni",
        label: "IPPC a integrovaná povolení",
        description: "Integrovaná povolení a dokumentace BAT"
      },
      {
        href: "/sluzby/povoleni-provozu",
        label: "Povolení provozu zdroje",
        description: "Povolení provozu a změny technologie"
      },
      {
        href: "/sluzby/provozni-rady",
        label: "Provozní řády",
        description: "Provozní řády ke zdrojům a technologiím"
      },
      {
        href: "/sluzby/skoleni-chemicke-legislativy",
        label: "Školení chemické legislativy",
        description: "Školení na míru podle REACH a CLP"
      },
      {
        href: "/sluzby/bezpecnostni-listy",
        label: "Bezpečnostní listy",
        description: "Tvorba a aktualizace bezpečnostních listů"
      },
      {
        href: "/sluzby/chemicke-latky",
        label: "Chemické látky v provozu",
        description: "Evidence a posouzení chemických látek"
      }
    ]
  }
] as const;
