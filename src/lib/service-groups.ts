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
      "Emise, hluk a pracovní prostředí. Protokoly pro provoz, kolaudaci a jednání s úřady.",
    items: [
      {
        title: "Měření pro kolaudaci",
        href: "/mereni-pro-kolaudaci",
        text: "Hluk, osvětlení, mikroklima a pracovní prostředí podle projektu, KHS nebo stavebního úřadu."
      },
      {
        title: "Měření nové haly",
        href: "/mereni-nove-haly",
        text: "Společný rozsah více faktorů pro nová pracoviště, kategorizaci prací a uvedení do provozu."
      },
      {
        title: "Měření pracovního prostředí",
        href: "/sluzby/pracovni-prostredi",
        text: "Prašnost, chemické látky, hluk, mikroklima, osvětlení, vibrace. Kategorizace prací, KHS."
      },
      {
        title: "Měření tepelné a chladové zátěže",
        href: "/sluzby/mereni-tepelna-chladova-zatez",
        text: "Mikroklimatické parametry, třída práce a přípustné doby. Podklad pro KHS a kategorizaci."
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
        text: "Osvětlení pracovišť i venkovní umělé osvětlení — pro KHS, kategorizaci prací a kolaudace."
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
      "Rozptylové a hlukové studie pro projekty, nové technologie a změny provozu.",
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
        text: "Akustický posudek technologií a strojoven v objektech. Výpočet a návrh opatření podle zadání."
      },
      {
        title: "Modelové výpočty",
        href: "/sluzby/modelove-vypocty",
        text: "Porovnání umístění technologie a variant provozu. Výpočtové podklady pro navazující studie."
      },
      {
        title: "Imisní a hlukové dopady záměrů",
        href: "/sluzby/imisni-dopady",
        text: "Společné posouzení ovzduší a hluku jednoho záměru. Sjednocené vstupy a souhrn pro investora."
      }
    ]
  },
  {
    id: "povolovaci-podklady",
    title: "Povolovací a úřední dokumentace",
    intro:
      "Odborné posudky, provozní řády a žádosti o povolení provozu či IPPC.",
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
        text: "Zpracování žádosti, odborné podklady a podání pro vydání nebo změnu povolení provozu zdroje."
      },
      {
        title: "IPPC a změny povolení",
        href: "/sluzby/ippc-integrovana-povoleni",
        text: "Žádost o integrované povolení nebo jeho změnu, odborné přílohy a podání za klienta."
      }
    ]
  },
  {
    id: "eia-investice",
    title: "EIA a investiční příprava",
    intro:
      "Oznámení záměru, zjišťovací řízení a odborné přílohy pro investiční přípravu.",
    items: [
      {
        title: "EIA a oznámení záměru",
        href: "/sluzby/eia-oznameni-zameru",
        text: "Zpracování oznámení záměru a koordinace odborných příloh pro EIA."
      },
      {
        title: "Zjišťovací řízení EIA",
        href: "/sluzby/zjistovaci-rizeni-eia",
        text: "Dílčí odborné podklady pro zpracovatele EIA ve fázi zjišťovacího řízení."
      },
      {
        title: "Technické přílohy pro investory",
        href: "/sluzby/technicke-prilohy",
        text: "Odborné přílohy podle zadání projektanta: rozptyl, hluk, doprava a emise."
      }
    ]
  },
  {
    id: "evidence-reporting",
    title: "Provozní evidence, vykazování a legislativní poradenství",
    intro:
      "ISPOP, emisní údaje a pravidla pro chemické látky v provozu.",
    items: [
      {
        title: "ISPOP a souhrnná provozní evidence",
        href: "/sluzby/ispop",
        text: "Kontrola evidence, zpracování hlášení a podání do ISPOP za provozovatele na základě zmocnění."
      },
      {
        title: "GHG a skleníkové plyny",
        href: "/sluzby/ghg-overovani",
        text: "Výpočty emisí, kontrola emisních dat a podklady pro vykazování skleníkových plynů."
      },
      {
        title: "Chemické látky v provozu",
        href: "/sluzby/chemicke-latky",
        text: "Skladování, bezpečnostní listy, označování a provozní pravidla pro chemii ve výrobě."
      }
    ]
  },
  {
    id: "skoleni-podpora",
    title: "Školení a odborná podpora",
    intro:
      "Chemická legislativa, bezpečnostní listy a označování látek a směsí.",
    items: [
      {
        title: "Školení chemického zákona a chemické legislativy",
        href: "/sluzby/skoleni-chemicke-legislativy",
        text: "Praktické školení pro firmy nakládající s chemickými látkami a směsmi."
      },
      {
        title: "Bezpečnostní listy a označování",
        href: "/sluzby/bezpecnostni-listy",
        text: "Tvorba nových bezpečnostních listů, revize stávajících a kontrola údajů pro označování."
      }
    ]
  }
];
