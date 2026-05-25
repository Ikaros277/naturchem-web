/** Položky megamenu Služby — jeden zdroj pravdy pro Header a navigaci. */
export const serviceMegaGroups = [
  {
    title: "Měření",
    links: [
      { href: "/mereni-emisi", label: "Měření emisí" },
      { href: "/pracovni-prostredi", label: "Pracovní prostředí" },
      { href: "/mereni-hluku-hlukove-studie", label: "Hluk a akustika" },
      { href: "/mereni-vibraci", label: "Vibrace" },
      { href: "/mereni-osvetleni", label: "Osvětlení" },
      { href: "/mereni-mikroklimatu", label: "Mikroklima" }
    ]
  },
  {
    title: "Studie a výpočty",
    links: [
      { href: "/rozptylove-studie", label: "Rozptylové studie" },
      { href: "/hlukove-studie", label: "Hlukové studie" },
      { href: "/akusticke-posudky", label: "Akustické posudky" },
      { href: "/modelove-vypocty", label: "Modelové výpočty" }
    ]
  },
  {
    title: "Dokumentace a povolování",
    links: [
      { href: "/eia-oznameni-zameru", label: "EIA a oznámení záměru" },
      { href: "/odborne-posudky", label: "Odborné posudky" },
      { href: "/provozni-rady", label: "Provozní řády" },
      { href: "/ippc-integrovana-povoleni", label: "IPPC" },
      { href: "/ispop-souhrnna-provozni-evidence", label: "ISPOP" },
      { href: "/ghg-overovani-emisi-sklenikovych-plynu", label: "GHG" }
    ]
  },
  {
    title: "Školení a podpora",
    links: [
      { href: "/skoleni-chemicke-legislativy", label: "Školení chemické legislativy" },
      { href: "/bezpecnostni-listy", label: "Bezpečnostní listy" },
      { href: "/chemicke-latky-v-provozu", label: "Chemické látky v provozu" }
    ]
  }
] as const;
