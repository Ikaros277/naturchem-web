/** Položky megamenu Služby — jeden zdroj pravdy pro Header a navigaci. */
export const serviceMegaGroups = [
  {
    title: "Měření",
    links: [
      { href: "/sluzby/pracovni-prostredi", label: "Pracovní prostředí" },
      { href: "/sluzby/mereni-tepelna-chladova-zatez", label: "Tepelná a chladová zátěž" },
      { href: "/sluzby/mereni-diisokyanatu", label: "Měření diisokyanátů" },
      { href: "/sluzby/mereni-hluku", label: "Hluk a akustika" },
      { href: "/sluzby/mereni-emisi", label: "Měření emisí" },
      { href: "/sluzby/mereni-vibraci", label: "Vibrace" },
      { href: "/sluzby/mereni-osvetleni", label: "Osvětlení" },
      { href: "/sluzby/mereni-mikroklimatu", label: "Mikroklima" }
    ]
  },
  {
    title: "Studie a výpočty",
    links: [
      { href: "/sluzby/rozptylove-studie", label: "Rozptylové studie" },
      { href: "/sluzby/hlukove-studie", label: "Hlukové studie" },
      { href: "/sluzby/akusticke-posudky", label: "Akustické posudky" },
      { href: "/sluzby/modelove-vypocty", label: "Modelové výpočty" },
      { href: "/sluzby/imisni-dopady", label: "Imisní a hlukové dopady" }
    ]
  },
  {
    title: "Dokumentace a povolování",
    links: [
      { href: "/sluzby/eia-oznameni-zameru", label: "EIA a oznámení záměru" },
      { href: "/sluzby/odborne-posudky", label: "Odborné posudky" },
      { href: "/sluzby/povoleni-provozu", label: "Povolení provozu zdroje" },
      { href: "/sluzby/provozni-rady", label: "Provozní řády" },
      { href: "/sluzby/ippc-integrovana-povoleni", label: "IPPC a integrovaná povolení" },
      { href: "/sluzby/ispop", label: "ISPOP a provozní evidence" },
      { href: "/sluzby/ghg-overovani", label: "Emise skleníkových plynů (GHG)" }
    ]
  },
  {
    title: "Školení a podpora",
    links: [
      { href: "/sluzby/skoleni-chemicke-legislativy", label: "Školení chemické legislativy" },
      { href: "/sluzby/bezpecnostni-listy", label: "Bezpečnostní listy" },
      { href: "/sluzby/chemicke-latky", label: "Chemické látky v provozu" }
    ]
  }
] as const;
