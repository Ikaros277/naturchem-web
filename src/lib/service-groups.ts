export type ServiceGroupItem = {
  title: string;
  href: string;
  text: string;
};

export type ServiceGroup = {
  id: string;
  title: string;
  /** K čemu skupina slouží a jak ji zákazník čte. */
  intro: string;
  items: ServiceGroupItem[];
};

export const serviceGroups: ServiceGroup[] = [
  {
    id: "mericke-sluzby",
    title: "Akreditovaná a autorizovaná měření",
    intro:
      "Potřebujete protokol pro úřad nebo provoz? Zajistíme terénní měření emisí, hluku, pracovního prostředí i dalších veličin — s výstupem pro KHS, ČIŽP nebo krajský úřad.",
    items: [
      {
        title: "Měření pracovního prostředí",
        href: "/sluzby/pracovni-prostredi",
        text: "Prašnost, chemické látky, hluk, mikroklima, osvětlení, vibrace. Kategorizace prací, KHS."
      },
      {
        title: "Měření tepelné a chladové zátěže",
        href: "/sluzby/mereni-tepelna-chladova-zatez",
        text: "Mikroklima, energetický výdej dle ČSN EN ISO 8996, třída práce. Podklad pro KHS a kategorizaci."
      },
      {
        title: "Měření diisokyanátů (MDI, TDI, HDI)",
        href: "/sluzby/mereni-diisokyanatu",
        text: "Expozice izokyanátů při PUR, lakování a lepení. Osobní i stacionární odběry pro KHS."
      },
      {
        title: "Měření hluku a akustika",
        href: "/sluzby/mereni-hluku",
        text: "Terénní měření hluku, hodnocení zátěže okolí, provozoven a technologií."
      },
      {
        title: "Měření emisí ze stacionárních zdrojů",
        href: "/sluzby/mereni-emisi",
        text: "Kotelny, lakovny, kogenerační jednotky, technologické výduchy. NOx, CO, TOC/VOC, TZL."
      },
      {
        title: "Měření vibrací",
        href: "/sluzby/mereni-vibraci",
        text: "Vibrace přenášené na ruce i celé tělo. Kategorizace prací a BOZP."
      },
      {
        title: "Měření osvětlení",
        href: "/sluzby/mereni-osvetleni",
        text: "Osvětlení pracovišť pro KHS, kategorizaci prací a kolaudace."
      },
      {
        title: "Měření mikroklimatu",
        href: "/sluzby/mereni-mikroklimatu",
        text: "Teplota, vlhkost a proudění vzduchu na pracovištích."
      }
    ]
  },
  {
    id: "studie-vypocty",
    title: "Studie, výpočty a modelování",
    intro:
      "Plánujete změnu provozu nebo nový záměr? Připravíme rozptyl, hluk, modelové výpočty a propojené dopady včetně variant pro úřad i investora.",
    items: [
      {
        title: "Rozptylové studie",
        href: "/sluzby/rozptylove-studie",
        text: "Imisní příspěvky zdrojů, varianty provozu, změny kapacity, podklady pro úřady."
      },
      {
        title: "Hlukové studie",
        href: "/sluzby/hlukove-studie",
        text: "Výpočtové posouzení hluku technologií, areálů, dopravy a stavebních záměrů."
      },
      {
        title: "Akustické posudky",
        href: "/sluzby/akusticke-posudky",
        text: "Vyjádření k hluku technologií, strojoven a provozních zdrojů v objektech."
      },
      {
        title: "Modelové výpočty",
        href: "/sluzby/modelove-vypocty",
        text: "Imisní a hlukové modelování pro záměry a varianty provozu."
      },
      {
        title: "Imisní a hlukové dopady záměrů",
        href: "/sluzby/imisni-dopady",
        text: "Propojení studií ovzduší a hluku pro záměr nebo změnu provozu."
      }
    ]
  },
  {
    id: "povolovaci-podklady",
    title: "Povolovací a úřední dokumentace",
    intro:
      "Měníte technologii nebo povolení zdroje? Zpracujeme odborné posudky, provozní řády a podklady pro integrovaná povolení — pro krajský úřad i ČIŽP.",
    items: [
      {
        title: "Odborné posudky",
        href: "/sluzby/odborne-posudky",
        text: "Vyjádření podle zákona o ochraně ovzduší, změny technologie, komunikace s úřady."
      },
      {
        title: "Provozní řády",
        href: "/sluzby/provozni-rady",
        text: "Aktualizace a příprava provozních řádů zdrojů znečišťování ovzduší."
      },
      {
        title: "Povolení provozu zdroje",
        href: "/sluzby/povoleni-provozu",
        text: "Podklady pro vydání nebo změnu povolení provozu stacionárního zdroje."
      },
      {
        title: "IPPC a změny povolení",
        href: "/sluzby/ippc-integrovana-povoleni",
        text: "Integrovaná prevence a omezování znečišťování, souhrnné podklady pro provoz."
      }
    ]
  },
  {
    id: "eia-investice",
    title: "EIA a investiční příprava",
    intro:
      "Připravujete investici s EIA? Zkoordinujeme oznámení záměru, zjišťovací řízení a technické přílohy v návaznosti na povolování.",
    items: [
      {
        title: "EIA a oznámení záměru",
        href: "/sluzby/eia-oznameni-zameru",
        text: "Příprava oznámení a technických příloh pro záměry s vlivy na životní prostředí."
      },
      {
        title: "Zjišťovací řízení EIA",
        href: "/sluzby/zjistovaci-rizeni-eia",
        text: "Odborné podklady a koordinace vstupů pro fázi zjišťovacího řízení."
      },
      {
        title: "Technické přílohy pro investory",
        href: "/sluzby/technicke-prilohy",
        text: "Rozptyl, hluk, doprava, emise a návaznost na skutečný provoz záměru."
      }
    ]
  },
  {
    id: "evidence-reporting",
    title: "Provozní evidence, reporting a legislativní podpora",
    intro:
      "Blíží se hlášení ISPOP nebo kontrola údajů? Zkontrolujeme souhrnnou evidenci a emise skleníkových plynů v návaznosti na měření a povolení.",
    items: [
      {
        title: "ISPOP a souhrnná provozní evidence",
        href: "/sluzby/ispop",
        text: "Roční hlášení, souhrnná provozní evidence, návaznost na měření emisí."
      },
      {
        title: "GHG a skleníkové plyny",
        href: "/sluzby/ghg-overovani",
        text: "Ověřování emisních údajů, podklady pro reporting skleníkových plynů."
      },
      {
        title: "Legislativní péče o provozovatele",
        href: "/sluzby/chemicke-latky",
        text: "Kontrola vypočtených a měřených hodnot, autorizované ověřování dle požadavků."
      }
    ]
  },
  {
    id: "skoleni-podpora",
    title: "Školení a odborná podpora",
    intro:
      "Potřebujete školení nebo srozumitelné pravidla pro chemii v provozu? Projdeme legislativu, bezpečnostní listy, označování a skladování pro sklady, výrobu i laboratoře.",
    items: [
      {
        title: "Školení chemického zákona a chemické legislativy",
        href: "/sluzby/skoleni-chemicke-legislativy",
        text: "Praktické školení pro firmy nakládající s chemickými látkami a směsmi."
      },
      {
        title: "Školení práce s chemickými látkami a směsmi",
        href: "/sluzby/chemicke-latky",
        text: "Bezpečné používání, skladování, značení a provozní pravidla pro zaměstnance."
      },
      {
        title: "Bezpečnostní listy a označování",
        href: "/sluzby/bezpecnostni-listy",
        text: "Orientace v bezpečnostních listech, interní nádoby, štítky a návaznost na BOZP."
      }
    ]
  }
];
