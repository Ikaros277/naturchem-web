export type CaseStudy = {
  title: string;
  narrative: string;
  output: string;
};

export type CaseStudyCategory = {
  slug: string;
  title: string;
  short: string;
  serviceHref: string;
  cases: CaseStudy[];
};

export const caseStudyCategories: CaseStudyCategory[] = [
  {
    slug: "mereni-emisi",
    title: "Měření emisí",
    short: "Stacionární zdroje, kotelny, technologie.",
    serviceHref: "/sluzby/mereni-emisi",
    cases: [
      {
        title: "Měření emisí ve sklářském provozu",
        narrative:
          "Provozovatel potřeboval ověřit emise technologického zdroje a připravit podklad pro navazující jednání s úřadem. Posoudili jsme měřicí místo, navrhli rozsah měření, provedli měření v reprezentativním režimu a zpracovali protokol s komentářem k výsledkům.",
        output: "Protokol z měření emisí a technické vyhodnocení pro provozovatele."
      },
      {
        title: "Měření emisí v lakovně (VOC/TOC)",
        narrative:
          "Po úpravě technologie bylo nutné ověřit emisní charakteristiky. Navrhli jsme rozsah měření podle provozního řádu, provedli terénní měření a vyhodnotili výsledky pro další provozní kroky.",
        output: "Protokol s interpretací pro provozovatele a projektový tým."
      },
      {
        title: "Kotelna po modernizaci zdroje",
        narrative:
          "Po výměně zařízení provozovatel potřeboval doložit nový emisní stav. Ověřili jsme reprezentativnost provozu a změřili základní složky včetně doprovodných veličin.",
        output: "Protokol z měření pro úřad a provozní rozhodování."
      }
    ]
  },
  {
    slug: "hygienicka-mereni",
    title: "Hygienická měření",
    short: "Pracovní prostředí, kategorizace prací.",
    serviceHref: "/sluzby/pracovni-prostredi",
    cases: [
      {
        title: "Pracovní prostředí ve svařovně",
        narrative:
          "Zaměstnavatel řešil kategorizaci prací u více pozic. Navrhli jsme měřicí scénáře podle směnnosti, změřili chemické látky a hluk v reálném provozu a připravili vyhodnocení pro BOZP.",
        output: "Protokoly faktorů pracovního prostředí a podklad pro KHS."
      },
      {
        title: "Aktualizace kategorizace ve výrobní hale",
        narrative:
          "Po změně dispozice pracoviště bylo nutné přehodnotit expozici. Změřili jsme hluk, mikroklima a další faktory v návaznosti na pracovní operace.",
        output: "Podklady pro aktualizaci interní dokumentace a komunikaci s KHS."
      },
      {
        title: "Prašnost u drticí linky",
        narrative:
          "Po změně technologie vzniklo riziko zvýšené prašnosti. Provedli jsme osobní i prostorová měření v reprezentativních operacích a navrhli opatření.",
        output: "Protokol s doporučením organizačních a technických úprav."
      }
    ]
  },
  {
    slug: "rozptylove-studie",
    title: "Rozptylové studie",
    short: "Imise, varianty provozu.",
    serviceHref: "/sluzby/rozptylove-studie",
    cases: [
      {
        title: "Rozptylová studie pro odpadové hospodářství",
        narrative:
          "Investor připravoval projekt a potřeboval doplnit podklady pro správní řízení. Zpracovali jsme studii v návaznosti na technologii, provozní režim a dopravu v areálu.",
        output: "Rozptylová studie se závěrem pro investora i úřad."
      },
      {
        title: "Varianty kapacity výrobního závodu",
        narrative:
          "Před podáním dokumentace bylo nutné porovnat varianty provozu. Provedli jsme variantní modelování imisí a doporučili technicky průchodnější řešení.",
        output: "Studie se srovnáním variant pro rozhodnutí investora."
      },
      {
        title: "Dopad sklářského provozu na okolí",
        narrative:
          "U záměru bylo potřeba vyhodnotit vliv pecí na okolní zástavbu. Modelovali jsme imisní příspěvek včetně scénářů provozu a navrhli opatření.",
        output: "Rozptylová studie pro povolovací řízení."
      }
    ]
  },
  {
    slug: "hlukove-studie",
    title: "Hlukové studie",
    short: "Terén, hlukové studie, doprava.",
    serviceHref: "/sluzby/hlukove-studie",
    cases: [
      {
        title: "Hluková studie recyklačního areálu",
        narrative:
          "Investor potřeboval vyhodnotit denní a noční provoz v blízkosti obytné zástavby. Zpracovali jsme model scénářů, určili dominantní zdroje a navrhli technická opatření.",
        output: "Hluková studie s variantami pro povolovací řízení."
      },
      {
        title: "Hluk z manipulace a skladování v areálu",
        narrative:
          "Provozovatel potřeboval ověřit hluk v denním i nočním režimu vůči sousední zástavbě. Provedli jsme terénní měření, určili dominantní zdroje a navrhli organizační i technická opatření.",
        output: "Protokol z měření hluku pro jednání s úřadem."
      },
      {
        title: "Hluk po instalaci VZT",
        narrative:
          "Po instalaci jednotek vznikl požadavek na ověření hlukové zátěže. Provedli jsme terénní měření v dohodnutých režimech a navrhli praktická opatření.",
        output: "Protokol z měření hluku pro kolaudaci."
      }
    ]
  },
  {
    slug: "odborne-posudky",
    title: "Odborné posudky",
    short: "Vyjádření pro úřady.",
    serviceHref: "/sluzby/odborne-posudky",
    cases: [
      {
        title: "Posudek ke změně technologie",
        narrative:
          "Úřad požadoval technicky podložené vyjádření ke změně provozu. Analyzovali jsme technologii, emisní bilanci a navázali na dostupná měření.",
        output: "Odborný posudek s doporučením opatření."
      },
      {
        title: "Doplnění po připomínkách úřadu",
        narrative:
          "Po vyjádření orgánu bylo nutné rychle zpřesnit technické části. Doplnili jsme data, upravili argumentaci a sladili návazné podklady.",
        output: "Doplněné vyjádření pro další krok řízení."
      },
      {
        title: "Měřitelnost na více výduších",
        narrative:
          "Provoz měl více výduchů s nejasnými podmínkami měření. Provedli jsme prohlídku tras a navrhli etapizaci měření bez zbytečných prostojů.",
        output: "Technické stanovisko a plán měření."
      }
    ]
  },
  {
    slug: "eia",
    title: "EIA",
    short: "Zjišťovací řízení, koordinace studií.",
    serviceHref: "/sluzby/eia-oznameni-zameru",
    cases: [
      {
        title: "EIA u nového průmyslového záměru",
        narrative:
          "Projekt vyžadoval sladění více odborných vstupů. Nastavili jsme strategii podkladů, koordinovali studie a připravili technickou argumentaci pro fázi EIA.",
        output: "Odborné podklady pro zjišťovací řízení."
      },
      {
        title: "Rozšíření areálu",
        narrative:
          "Investor potřeboval propojit hluk, ovzduší a dopravu v jednom postupu. Sladili jsme rozptylovou a hlukovou studii s technickým popisem záměru.",
        output: "Podklad pro zjišťovací řízení."
      },
      {
        title: "Reakce na připomínky",
        narrative:
          "Po vyjádření úřadu bylo nutné rychle doplnit dokumentaci. Analyzovali jsme připomínky a připravili návazné odborné výstupy.",
        output: "Doplněná dokumentace pro pokračování řízení."
      }
    ]
  },
  {
    slug: "skoleni-chemicke-legislativy",
    title: "Školení chemické legislativy",
    short: "Chemické látky, bezpečnostní listy, provozní pravidla.",
    serviceHref: "/sluzby/skoleni-chemicke-legislativy",
    cases: [
      {
        title: "Školení zaměstnanců ve výrobním provozu",
        narrative:
          "Firma potřebovala sjednotit praxi při používání chemických látek na směnách. Připravili jsme školení navázané na reálné činnosti, bezpečnostní listy, značení interních nádob a pravidla skladování.",
        output: "Osnova školení, prezenční listina a potvrzení o absolvování."
      },
      {
        title: "Bezpečnostní listy a sklad chemických látek",
        narrative:
          "Provoz řešil dostupnost bezpečnostních listů, označování a základní pravidla pro sklad. Školení jsme zaměřili na praktickou orientaci v listech, skladové situace a odpovědnosti pracovníků.",
        output: "Praktické školení pro sklad, údržbu a vedoucí pracovníky."
      },
      {
        title: "Zavedení nové chemické směsi do provozu",
        narrative:
          "Před změnou používaných přípravků bylo potřeba proškolit obsluhu a nastavit pravidla pro práci se směsí. Prošli jsme bezpečnostní list, značení, osobní ochranné prostředky a provozní postupy.",
        output: "Školení s doporučením k doplnění interních pravidel."
      }
    ]
  },
  {
    slug: "dalsi",
    title: "Další zakázky",
    short: "IPPC, provozní řády, ISPOP.",
    serviceHref: "/sluzby/ippc-integrovana-povoleni",
    cases: [
      {
        title: "Aktualizace provozního řádu",
        narrative:
          "Změna technologie vyžadovala úpravu provozní dokumentace. Revidovali jsme provozní režimy a navázali na aktuální měření emisí.",
        output: "Aktualizovaný provozní řád."
      },
      {
        title: "Podklady pro ISPOP",
        narrative:
          "Provozovatel potřeboval sestavit souhrnnou provozní evidenci. Připravili jsme strukturu evidence a doplnili technické údaje.",
        output: "Podklady pro ISPOP."
      },
      {
        title: "Reporting GHG pro výrobní závod",
        narrative:
          "Provozovatel potřeboval sjednotit výstupy měření a výpočtů pro reporting skleníkových plynů. Navrhli jsme strukturu dat, navázali na dostupné protokoly a doplnili chybějící vstupy pro uzavření období.",
        output: "Podklad pro GHG reporting a interní kontrolu údajů."
      },
      {
        title: "Monitoring v okolí areálu",
        narrative:
          "Úřad požadoval dlouhodobé sledování imisí. Navrhli jsme místa měření, frekvenci a způsob vyhodnocení.",
        output: "Zpráva z monitoringu."
      }
    ]
  }
];

export function getCaseStudyCategory(slug: string): CaseStudyCategory | undefined {
  return caseStudyCategories.find((c) => c.slug === slug);
}
