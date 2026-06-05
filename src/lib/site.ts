export const siteUrl = "https://www.naturchem.cz";

export const company = {
  name: "NATURCHEM, s.r.o.",
  ico: "27504379",
  dic: "CZ27504379",
  email: "naturchem@naturchem.cz",
  emailSecondary: "hezina@naturchem.cz",
  phones: ["+420 603 216 983", "+420 774 100 570"],
  web: "www.naturchem.cz",
  person: "Ing. František Hezina",
  address: {
    street: "Ledečská 3015",
    city: "Havlíčkův Brod",
    postalCode: "580 01",
    country: "CZ"
  },
  branchAddresses: [
    {
      label: "České Budějovice",
      street: "Rudolfovská 119/57",
      city: "České Budějovice",
      postalCode: "370 01",
      country: "CZ"
    },
    {
      label: "Praha 5",
      street: "Lesnická 1214/5",
      city: "Praha 5",
      postalCode: "150 00",
      country: "CZ"
    }
  ],
  labAddress: {
    street: "Rudolfovská 119/57",
    city: "České Budějovice",
    postalCode: "370 01",
    country: "CZ"
  }
};

export type CompanyOffice = {
  label: string;
  street: string;
  city: string;
  postalCode: string;
};

/** Sídlo + provozovny — jednotný seznam pro kontakt a patičku. */
export function getCompanyOffices(): CompanyOffice[] {
  return [
    {
      label: company.address.city,
      street: company.address.street,
      city: company.address.city,
      postalCode: company.address.postalCode
    },
    ...company.branchAddresses.map((branch) => ({
      label: branch.label,
      street: branch.street,
      city: branch.city,
      postalCode: branch.postalCode
    }))
  ];
}

export const services = [
  {
    href: "/sluzby/mereni-emisi",
    title: "Měření emisí",
    short: "Kotelny, lakovny, technologie, výduchy, VOC/TOC, TZL, NOx, CO.",
    cta: "Zjistit více o měření emisí",
    contactCta: "Poptat měření emisí",
    contactService: "Měření emisí"
  },
  {
    href: "/sluzby/pracovni-prostredi",
    title: "Měření pracovního prostředí",
    short: "Prašnost, chemické látky, hluk, vibrace, mikroklima, kategorizace prací.",
    cta: "Zjistit více o měření pracovního prostředí",
    contactCta: "Poptat měření pracovního prostředí",
    contactService: "Měření pracovního prostředí"
  },
  {
    href: "/sluzby/mereni-hluku",
    title: "Měření hluku a akustika",
    short: "Terénní měření hluku, hluk z dopravy a technologií, hlukové studie.",
    cta: "Zjistit více o hluku a akustice",
    contactCta: "Poptat měření hluku / hlukovou studii",
    contactService: "Měření hluku a akustika"
  },
  {
    href: "/sluzby/rozptylove-studie",
    title: "Rozptylové studie",
    short: "Modelování imisí, varianty provozu, dopady zdrojů na okolí záměru.",
    cta: "Zjistit více o rozptylových studiích",
    contactCta: "Poptat rozptylovou studii",
    contactService: "Rozptylové studie"
  },
  {
    href: "/sluzby/hlukove-studie",
    title: "Hlukové studie",
    short: "Výpočtové posouzení hluku technologií, areálů, dopravy a stavebních záměrů.",
    cta: "Zjistit více o hlukových studiích",
    contactCta: "Poptat hlukovou studii",
    contactService: "Hlukové studie"
  },
  {
    href: "/sluzby/odborne-posudky",
    title: "Odborné posudky",
    short: "Posudky podle zákona o ochraně ovzduší, změny technologií a povolení provozu.",
    cta: "Zjistit více o odborných posudcích",
    contactCta: "Poptat odborný posudek",
    contactService: "Odborné posudky"
  },
  {
    href: "/sluzby/provozni-rady",
    title: "Provozní řády",
    short: "Příprava a aktualizace provozních řádů zdrojů znečišťování ovzduší.",
    cta: "Zjistit více o provozních řádech",
    contactCta: "Poptat provozní řád",
    contactService: "Provozní řády"
  },
  {
    href: "/sluzby/ippc-integrovana-povoleni",
    title: "IPPC a integrovaná povolení",
    short: "Podklady pro integrovaná povolení, změny IPPC a návaznou dokumentaci.",
    cta: "Zjistit více o IPPC",
    contactCta: "Poptat podklady pro IPPC",
    contactService: "IPPC a integrovaná povolení"
  },
  {
    href: "/sluzby/eia-oznameni-zameru",
    title: "EIA a oznámení záměru",
    short: "Oznámení záměru, odborné přílohy a koordinace podkladů pro EIA.",
    cta: "Zjistit více o EIA",
    contactCta: "Poptat EIA podklady",
    contactService: "EIA a oznámení záměru"
  },
  {
    href: "/sluzby/ispop",
    title: "ISPOP a provozní evidence",
    short: "Souhrnná provozní evidence, roční hlášení a návaznost na měření emisí.",
    cta: "Zjistit více o ISPOP",
    contactCta: "Poptat ISPOP a evidenci",
    contactService: "ISPOP"
  },
  {
    href: "/sluzby/ghg-overovani",
    title: "Emise skleníkových plynů (GHG)",
    short: "Ověřování emisí skleníkových plynů, emisní údaje a reporting.",
    cta: "Zjistit více o GHG",
    contactCta: "Poptat GHG",
    contactService: "GHG"
  },
  {
    href: "/sluzby/skoleni-chemicke-legislativy",
    title: "Školení chemické legislativy",
    short: "Chemický zákon, bezpečnostní listy, označování, skladování a provozní pravidla.",
    cta: "Zjistit více o školení chemické legislativy",
    contactCta: "Poptat školení",
    contactService: "Školení chemického zákona / chemické legislativy"
  },
  {
    href: "/sluzby/bezpecnostni-listy",
    title: "Bezpečnostní listy",
    short: "Kontrola bezpečnostních listů, označování, štítky a návaznost na BOZP.",
    cta: "Zjistit více o bezpečnostních listech",
    contactCta: "Poptat bezpečnostní listy",
    contactService: "Bezpečnostní listy"
  },
  {
    href: "/sluzby/chemicke-latky",
    title: "Chemické látky v provozu",
    short: "Pravidla pro používání, skladování a značení chemických látek v provozu.",
    cta: "Zjistit více o chemických látkách v provozu",
    contactCta: "Poptat podporu k chemickým látkám",
    contactService: "Chemické látky v provozu"
  }
] as const;
