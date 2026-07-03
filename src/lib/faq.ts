import { contactFormHref, contactPageHref, contactUrl } from "@/lib/contact-url";

export type FaqLink = {
  label: string;
  href: string;
};

export type FaqLegalRef = {
  label: string;
  href: string;
};

export type FaqItem = {
  q: string;
  paragraphs: string[];
  legal?: { summary: string; refs?: FaqLegalRef[] };
  tip?: string;
  links?: FaqLink[];
};

export type FaqCategory = {
  id: string;
  title: string;
  tileLabel: string;
  items: FaqItem[];
  ctas: FaqLink[];
};

const L = {
  z201: "https://www.zakonyprolidi.cz/cs/2012-201",
  v415: "https://www.zakonyprolidi.cz/cs/2012-415",
  p32: "https://krajta.slv.cz/2012/201/par_32",
  ispop: "https://www.ispop.cz/",
  z258: "https://www.zakonyprolidi.cz/cs/2000-258",
  p37: "https://www.zakonyprolidi.cz/cs/2000-258",
  p38: "https://www.zakonyprolidi.cz/cs/2000-258",
  p39: "https://www.zakonyprolidi.cz/cs/2000-258",
  nv272: "https://www.zakonyprolidi.cz/cs/2011-272",
  p30: "https://www.zakonyprolidi.cz/cs/2000-258",
  z100: "https://www.zakonyprolidi.cz/cs/2001-100",
  pril12: "https://krajta.slv.cz/2012/415/pril_12",
  p17: "https://www.zakonyprolidi.cz/cs/2012-201"
} as const;

export const faqPageTitle = "Časté dotazy";

export const faqPageIntro =
  "Zjistíte, zda jde o měření, studii nebo provozní řád — a co poslat ČIŽP, KHS nebo stavebnímu úřadu jako první podklad.";

export const faqIntroCtas: FaqLink[] = [
  { label: "Poslat podklady k posouzení", href: contactUrl("Nejsem si jistý") },
  { label: "Nezávazně poptat", href: contactFormHref }
];

export const faqPageMetadata = {
  absoluteTitle: "FAQ – měření emisí, studie, EIA, posudky a provozní řády | NATURCHEM",
  description:
    "Časté dotazy k měření emisí, pracovnímu prostředí, hluku, rozptylovým a hlukovým studiím, EIA, odborným posudkům, provozním řádům, ISPOP a podkladům pro úřady."
} as const;

export const faqHomeGeo = {
  homeSectionTitle: "Časté dotazy provozovatelů a ekologů",
  homeSectionLead:
    "Odpovědi na typické situace — výzvy úřadů, měření emisí, studie, posudky a co poslat jako první podklad.",
  homeViewAll: "Všechny časté dotazy"
} as const;

export const faqUiLabels = {
  searchLabel: "Vyhledat v dotazech",
  searchPlaceholder: "Např. emise, hluk, KHS, ISPOP",
  categoriesNavAria: "Kategorie častých dotazů",
  emptyTitle: "Nic jsme nenašli",
  emptyText: "Zkuste obecnější výraz nebo nám pošlete dotaz přes kontaktní formulář.",
  tip: "Doporučení:",
  legal: "Právní opora",
  related: "Související služby:",
  serviceTeaserTitle: "Časté dotazy k této službě",
  sectorTeaserTitle: "Časté dotazy k tomuto provozu",
  viewAllCategory: "Zobrazit všechny časté dotazy — {category}",
  contactStripLabel: "Rychlý kontakt",
  submitMaterialsCta: "Poslat podklady k posouzení",
  inquiryCta: "Nezávazně poptat",
  categoryItemCount: "{count} dotazů"
} as const;

export const faqCategories: FaqCategory[] = [
  {
    id: "obecne",
    title: "Kontroly, výzvy úřadů a první orientace",
    tileLabel: "Kontroly a výzvy úřadů",
    ctas: [
      { label: "Poslat výzvu úřadu k posouzení", href: contactUrl("Nejsem si jistý") },
      { label: "Nezávazně poptat", href: contactFormHref }
    ],
    items: [
      {
        q: "Přišla nám výzva od KHS, ČIŽP, krajského úřadu nebo stavebního úřadu. Co máme udělat jako první?",
        paragraphs: [
          "Nejprve nám pošlete celou výzvu včetně příloh, rozhodnutí, protokolů z kontroly nebo předchozí komunikace s úřadem. Z textu požadavku určíme, zda úřad požaduje měření, odborný posudek, rozptylovou nebo hlukovou studii, provozní řád, doplnění žádosti, změnu povolení provozu nebo jiný odborný podklad.",
          "Důležité je nereagovat pouze obecně. Úřad obvykle požaduje konkrétní typ dokladu, konkrétní rozsah měření nebo konkrétní vysvětlení provozního stavu. Pomůžeme rozlišit, co je nutné dodat hned, co je možné doplnit později a kde je vhodné nejprve ověřit technický stav provozu."
        ]
      },
      {
        q: "Umíte nám říct, zda je požadavek úřadu přiměřený?",
        paragraphs: [
          "Ano. Umíme odborně posoudit, zda požadavek odpovídá typu provozu, povolení, zařazení zdroje, charakteru technologie a dostupným podkladům. Pokud je požadavek nejasný, příliš obecný nebo technicky problematický, lze připravit věcné stanovisko nebo návrh dalšího postupu.",
          "Cílem není s úřadem zbytečně polemizovat, ale dodat správný odborný podklad a předejít tomu, aby provozovatel objednal zbytečné, neúplné nebo metodicky nevhodné měření."
        ]
      },
      {
        q: "Můžeme vám poslat jen výzvu úřadu bez dalších podkladů?",
        paragraphs: [
          "Ano. Výzva úřadu často stačí pro první orientaci. Následně si vyžádáme jen ty podklady, které jsou pro daný případ opravdu potřebné – například povolení provozu, provozní řád, projektovou dokumentaci, bezpečnostní listy, fotografie technologie, protokoly z předchozích měření nebo popis provozního režimu."
        ]
      },
      {
        q: "Umíte připravit i návrh odpovědi úřadu?",
        paragraphs: [
          "Ano. U složitějších případů můžeme připravit věcný technický návrh odpovědi, případně podklady pro doplnění žádosti, vyjádření ke kontrole, zdůvodnění provozního režimu nebo návrh dalšího měření. Text formulujeme tak, aby byl technicky přesný, přiměřený a použitelný pro správní řízení."
        ]
      },
      {
        q: "Jak zjistíme, jakou službu potřebujeme?",
        paragraphs: [
          "Pošlete rozhodnutí nebo výzvu úřadu, provozní řád, projektovou dokumentaci, popis technologie nebo stručný popis situace. Z podkladů určíme, zda jde o měření, studii, posudek, provozní řád, EIA podklad, ISPOP nebo jiný výstup."
        ],
        links: [
          { label: "Měření emisí", href: "/sluzby/mereni-emisi" },
          { label: "Rozptylové studie", href: "/sluzby/rozptylove-studie" },
          { label: "EIA a oznámení záměru", href: "/sluzby/eia-oznameni-zameru" },
          { label: "Kontakt", href: contactPageHref }
        ]
      },
      {
        q: "Jaký je rozdíl mezi měřením, studií a odborným posudkem?",
        paragraphs: [
          "Měření ověřuje skutečný stav v provozu nebo v chráněném prostředí. Studie obvykle hodnotí předpokládaný nebo modelovaný stav, například imisní příspěvky nebo hlukovou situaci. Odborný posudek hodnotí technické, emisní a provozní souvislosti zdroje nebo záměru a slouží jako odborný podklad pro povolování."
        ],
        tip: "Nejste si jistí? Pošlete výzvu úřadu, popis provozu a přílohy. Rozlišíme měření, studii a posudek podle účelu výstupu."
      },
      {
        q: "Jsou výstupy použitelné pro úřady?",
        paragraphs: [
          "Ano. U protokolů, studií a posudků sledujeme konkrétní adresáty výstupu: provozovatele, projektanta, investora, KHS, ČIŽP, krajský úřad, stavební úřad nebo řízení EIA."
        ]
      },
      {
        q: "Kde působíte?",
        paragraphs: [
          "Působíme z Havlíčkova Brodu, Českých Budějovic a Prahy. Zakázky řešíme i v dalších regionech podle typu služby, dostupnosti provozu, reprezentativního režimu a případných oznamovacích lhůt."
        ]
      },
      {
        q: "Pracuje NATURCHEM po celé České republice?",
        paragraphs: [
          "Ano. Terénní měření emisí, pracovního prostředí, hluku a dalších veličin zajišťujeme v celé ČR. Studie, posudky a provozní dokumentaci zpracováváme bez ohledu na lokalitu provozu — důležitá je dostupnost technologie a reprezentativní provozní režim."
        ],
        links: [{ label: "Akreditace a oprávnění", href: "/akreditace-autorizace-dokumenty" }]
      },
      {
        q: "Jaké podklady potřebuje NATURCHEM pro nabídku?",
        paragraphs: [
          "Pro první orientaci obvykle stačí výzva úřadu, popis technologie, povolení provozu nebo stručný popis situace. Podle typu služby doplníme požadavek o provozní řád, projektovou dokumentaci, bezpečnostní listy, předchozí protokoly měření nebo harmonogram provozu.",
          "Nemusíte mít vše připravené — pošlete, co máte k dispozici. Rozsah a termín upřesníme po odborném posouzení."
        ],
        links: [{ label: "Kontakt", href: contactPageHref }]
      }
    ]
  },
  {
    id: "emise",
    title: "Měření emisí",
    tileLabel: "Měření emisí",
    ctas: [
      { label: "Poptat měření emisí", href: contactUrl("Měření emisí") },
      { label: "Poslat povolení provozu k posouzení", href: contactUrl("Nejsem si jistý") }
    ],
    items: [
      {
        q: "Kdy je potřeba jednorázové měření emisí?",
        paragraphs: [
          "Jednorázové měření emisí potřebujete při pravidelném ověření povinností, po uvedení zdroje do provozu, po změně technologie, paliva nebo suroviny, na pokyn úřadu nebo jako podklad pro plnění emisních limitů."
        ],
        legal: {
          summary:
            "Vyhláška č. 415/2012 Sb. stanovuje intervaly jednorázového měření emisí, včetně měření po prvním uvedení zdroje do provozu, po změně paliva, suroviny nebo po zásahu do konstrukce či vybavení zdroje, který by mohl vést ke změně emisí.",
          refs: [{ label: "Vyhláška č. 415/2012 Sb.", href: L.v415 }]
        },
        links: [{ label: "Měření emisí ze stacionárních zdrojů", href: "/sluzby/mereni-emisi" }]
      },
      {
        q: "Kdo může provádět jednorázové měření emisí?",
        paragraphs: [
          "Jednorázové měření emisí může provádět pouze autorizovaná osoba v příslušném rozsahu. Při výběru dodavatele ověřte nejen termín, ale také rozsah autorizace a akreditovaných metod."
        ],
        legal: {
          summary:
            "§ 32 zákona č. 201/2012 Sb. uvádí, že jednorázové měření emisí, zpracování odborného posudku, zpracování rozptylové studie a ověřování zprávy o emisích může vykonávat jen autorizovaná osoba.",
          refs: [
            { label: "§ 32 zákona č. 201/2012 Sb.", href: L.p32 },
            { label: "Zákon č. 201/2012 Sb.", href: L.z201 }
          ]
        }
      },
      {
        q: "Musí se měření emisí předem ohlašovat?",
        paragraphs: [
          "U jednorázového měření emisí je nutné hlídat oznamovací povinnost. ISPOP uvádí pro formulář F_OVZ_TERM_JME povinnost ohlásit termín měření nejméně 5 pracovních dní před provedením měření. Protokol se ohlašuje formulářem F_OVZ_JME."
        ],
        legal: {
          summary: "Termín a protokol jednorázového měření emisí se ohlašují prostřednictvím ISPOP.",
          refs: [{ label: "ISPOP – měření emisí", href: L.ispop }]
        },
        tip: "Při plánování termínu počítejte s oznamovací lhůtou a určete, kdo hlášení podá."
      },
      {
        q: "Jak často se měření emisí provádí?",
        paragraphs: [
          "Interval závisí na typu zdroje, jeho zařazení, povolení provozu a prováděcích předpisech. Obecně se může jednat například o měření jednou za kalendářní rok nebo jednou za tři kalendářní roky u vybraných skupin zdrojů."
        ],
        legal: {
          summary:
            "§ 3 vyhlášky č. 415/2012 Sb. upravuje intervaly jednorázového měření emisí a uvádí také případy, kdy se namísto měření použije výpočet.",
          refs: [{ label: "Vyhláška č. 415/2012 Sb.", href: L.v415 }]
        }
      },
      {
        q: "Co když nemáme vhodné měřicí místo?",
        paragraphs: [
          "Měřicí místo posoudíme ještě před měřením. Pokud výduch není ideální, navrhneme technicky dosažitelné řešení, upravíme přístup, doplníme příruby nebo v protokolu odborně popíšeme omezení a reprezentativnost měření."
        ],
        tip: "K poptávce přiložte fotografie výduchu, přístupu, přírub a dostupnou projektovou dokumentaci."
      },
      {
        q: "Jaké látky se při měření emisí obvykle sledují?",
        paragraphs: [
          "Podle typu zdroje, povolení provozu a charakteru technologie sledujeme například TZL, VOC/TOC, NOx, CO, SO₂, O₂, HCl, HF, kovy nebo další látky."
        ]
      },
      {
        q: "Co dostaneme po měření emisí?",
        paragraphs: [
          "Dostanete protokol nebo zprávu s popisem zdroje, provozních podmínek, použitých metod, naměřených hodnot a vyhodnocením vůči limitům nebo požadavku povolení. U autorizovaného měření musí být údaje úplné, pravdivé a opřené o použitou metodiku."
        ],
        legal: {
          summary:
            "Zákon č. 201/2012 Sb. ukládá autorizované osobě povinnost vykonávat autorizovanou činnost odborně a uvádět pravdivé a úplné údaje.",
          refs: [{ label: "Zákon č. 201/2012 Sb.", href: L.z201 }]
        }
      },
      {
        q: "Jak se máme připravit na měření emisí?",
        paragraphs: [
          "Před měřením je potřeba ověřit zejména měřicí místo, bezpečný přístup k výduchu, provozní režim technologie, dostupnost obsluhy a možnost provozovat zařízení v reprezentativním výkonu. Dále je vhodné připravit povolení provozu, provozní řád, předchozí protokoly, paliva nebo suroviny, údaje o výkonu a provozní evidenci.",
          "U některých zdrojů je nutné předem ohlásit termín měření prostřednictvím ISPOP. Proto je vhodné řešit termín s dostatečným předstihem."
        ]
      },
      {
        q: "Co znamená reprezentativní provoz při měření emisí?",
        paragraphs: [
          "Reprezentativní provoz znamená, že zařízení při měření pracuje tak, aby výsledky odpovídaly běžnému nebo požadovanému provoznímu stavu. Nestačí, aby zdroj pouze běžel. Musí být zřejmé, při jakém výkonu, surovině, palivu, teplotě, zatížení nebo provozním režimu bylo měření provedeno.",
          "Pokud je technologie cyklická, dávková nebo proměnlivá, je nutné popsat, která část cyklu byla měřena a proč je pro dané hodnocení relevantní."
        ]
      },
      {
        q: "Co když při měření emisí vyjde překročení limitu?",
        paragraphs: [
          "Nejprve je potřeba zjistit příčinu. Překročení může souviset s technickým stavem zařízení, palivem, surovinou, nesprávným provozním režimem, poruchou filtru, nedostatečným spalováním, špatnou funkcí odsávání nebo nevhodným měřicím místem.",
          "V takové situaci pomůžeme vyhodnotit protokol, provozní podmínky a možné technické kroky. Podle případu lze navrhnout servis zařízení, úpravu provozního režimu, doplnění technologie ke snižování emisí, opakované měření nebo odborné stanovisko pro úřad."
        ]
      },
      {
        q: "Lze měřit emise i na technologii, která nemá klasický výduch?",
        paragraphs: [
          "Záleží na konkrétním technickém řešení. Pokud má technologie výduch, odsávání, lokální odtah nebo jiný definovaný odvod vzdušiny, lze posoudit možnost měření. Pokud emise unikají fugitivně do haly nebo přes otevřené prostory, je situace složitější a může být vhodnější kombinovat technické posouzení, měření pracovního prostředí, posouzení větrání nebo návrh odsávání.",
          "Předem je vhodné poslat fotografie zařízení, výduchů, potrubí, ventilátorů a prostoru technologie."
        ]
      },
      {
        q: "Je lepší nejprve měřit, nebo nejprve udělat technické posouzení?",
        paragraphs: [
          "U běžného pravidelného měření lze většinou rovnou plánovat měření. U nové, měněné nebo problematické technologie je často vhodné nejprve provést technické posouzení. To pomůže určit, co se má měřit, kde se má měřit, za jakého provozního režimu a zda má měření šanci dát použitelný výsledek.",
          "Tento postup je vhodný zejména u netypických technologií, cyklických provozů, spalovacích zařízení, sušáren, lakoven, filtrací, praček, pyrolýzních nebo tepelných procesů."
        ]
      }
    ]
  },
  {
    id: "pracovni-prostredi",
    title: "Pracovní prostředí a kategorizace prací",
    tileLabel: "Pracovní prostředí",
    ctas: [
      { label: "Poptat měření pracovního prostředí", href: contactUrl("Měření pracovního prostředí") },
      { label: "Poslat bezpečnostní listy a popis pracoviště", href: contactUrl("Nejsem si jistý") }
    ],
    items: [
      {
        q: "Kdy je potřeba měření pracovního prostředí?",
        paragraphs: [
          "Měření pracovního prostředí řešíte při kategorizaci prací, změně technologie, novém pracovišti, pokynu KHS nebo při ověření expozice zaměstnanců."
        ],
        links: [{ label: "Měření pracovního prostředí", href: "/sluzby/pracovni-prostredi" }]
      },
      {
        q: "Jaké faktory pracovního prostředí měříte?",
        paragraphs: [
          "Typicky se jedná o prach, chemické látky v pracovním ovzduší, hluk, vibrace, osvětlení, mikroklima a další faktory podle charakteru pracoviště, technologie a pracovní činnosti."
        ]
      },
      {
        q: "Slouží měření jako podklad pro kategorizaci prací?",
        paragraphs: [
          "Ano. Výsledky měření pracovního prostředí se často používají jako podklad pro zařazení prací do kategorií nebo pro změnu kategorizace."
        ],
        legal: {
          summary:
            "§ 37 zákona č. 258/2000 Sb. stanovuje, že práce se podle míry výskytu faktorů, které mohou ovlivnit zdraví zaměstnanců, a jejich rizikovosti zařazují do čtyř kategorií.",
          refs: [{ label: "Zákon č. 258/2000 Sb.", href: L.p37 }]
        }
      },
      {
        q: "Kdo může provádět měření pro kategorizaci prací?",
        paragraphs: [
          "Měření pro účely zařazení prací do druhé, třetí nebo čtvrté kategorie může zaměstnavatel provést jen prostřednictvím držitele osvědčení o akreditaci nebo držitele autorizace k příslušným měřením, pokud není sám takto kvalifikovaný."
        ],
        legal: {
          summary: "§ 38 zákona č. 258/2000 Sb. upravuje měření pro účely kategorizace prací.",
          refs: [{ label: "§ 38 zákona č. 258/2000 Sb.", href: L.p38 }]
        }
      },
      {
        q: "Co je riziková práce?",
        paragraphs: [
          "Rizikovou prací je práce zařazená do třetí nebo čtvrté kategorie a také práce druhé kategorie, o které tak rozhodne příslušný orgán ochrany veřejného zdraví."
        ],
        legal: {
          summary: "§ 39 zákona č. 258/2000 Sb. vymezuje rizikové práce.",
          refs: [{ label: "§ 39 zákona č. 258/2000 Sb.", href: L.p39 }]
        }
      },
      {
        q: "Jaké podklady máme poslat pro měření pracovního prostředí?",
        paragraphs: [
          "Pomůže popis pracovních činností, délka směny, počet pracovníků, používané suroviny, bezpečnostní listy, provozní režim, větrání, pracovní postupy, předchozí protokoly a případná komunikace s KHS."
        ]
      },
      {
        q: "Jak poznáme, které faktory pracovního prostředí máme měřit?",
        paragraphs: [
          "Vychází se z konkrétní pracovní činnosti, používaných látek, bezpečnostních listů, technologie, délky směny, větrání, pracovních postupů a předpokládané expozice zaměstnanců. U některých pracovišť je zřejmý hlavní faktor, například hluk, prach nebo chemické látky. U jiných je vhodné posoudit více faktorů současně – například hluk, mikroklima, osvětlení, chemické látky a fyzickou zátěž."
        ]
      },
      {
        q: "Stačí pro kategorizaci prací jeden den měření?",
        paragraphs: [
          "Často ano, pokud je den měření reprezentativní pro běžnou práci. U proměnlivých provozů je ale nutné zvážit, zda měření zachycuje typickou, nejrizikovější nebo úřadem požadovanou činnost. Pokud se práce v jednotlivých dnech významně liší, může být vhodné měření doplnit popisem činností, časovým snímkem směny nebo opakovaným měřením."
        ]
      },
      {
        q: "Můžeme měřit pracovní prostředí, když zaměstnanec dělá jen krátkou část směny rizikovou činnost?",
        paragraphs: [
          "Ano. Právě u takových činností je důležité správně popsat dobu expozice a pracovní režim. Výsledek měření se potom vztahuje k reálné době práce, případně se přepočítává nebo hodnotí podle příslušné metodiky a hygienických limitů.",
          "Typické je například krátkodobé svařování, broušení, práce s rozpouštědly, čištění, míchání chemických látek nebo údržba technologie."
        ]
      },
      {
        q: "Co když zaměstnanci používají respirátory nebo jiné OOPP?",
        paragraphs: [
          "OOPP jsou důležité, ale samy o sobě nenahrazují posouzení pracovního prostředí. Při hodnocení je potřeba rozlišit koncentraci škodliviny v pracovním ovzduší, technická a organizační opatření, větrání, délku expozice a skutečné používání ochranných prostředků.",
          "U rizikovějších prací je vhodné doložit nejen měření, ale také systém ochrany zaměstnanců, školení, výběr vhodných OOPP a kontrolu jejich používání."
        ]
      },
      {
        q: "Umíte doporučit kategorii práce podle výsledků měření?",
        paragraphs: [
          "Ano. Na základě výsledků měření, popisu práce a platných limitů lze připravit odborné vyhodnocení, které slouží jako podklad pro návrh zařazení práce do kategorie. Samotné zařazení práce je povinností zaměstnavatele a podléhá příslušným pravidlům a případnému posouzení KHS."
        ]
      }
    ]
  },
  {
    id: "hluk",
    title: "Hluk, vibrace a akustika",
    tileLabel: "Hluk a vibrace",
    ctas: [
      { label: "Poptat měření hluku", href: contactUrl("Měření hluku a akustika") },
      { label: "Poptat hlukovou studii", href: contactUrl("Hlukové studie") }
    ],
    items: [
      {
        q: "Kdy potřebujeme měření hluku?",
        paragraphs: [
          "Měření hluku objednáte při kolaudaci, stížnostech, změně technologie, novém zařízení, kontrole na pracovišti, ověření opatření nebo na pokyn KHS či stavebního úřadu."
        ],
        links: [{ label: "Měření hluku a akustika", href: "/sluzby/mereni-hluku" }]
      },
      {
        q: "Jaký je rozdíl mezi měřením hluku a hlukovou studií?",
        paragraphs: [
          "Měření hluku ověřuje skutečný stav v konkrétním místě a čase. Hluková studie hodnotí očekávaný nebo modelovaný stav — například novou technologii, průmyslový areál, dopravu, VZT, tepelné čerpadlo nebo změnu provozu."
        ],
        links: [
          { label: "Hlukové studie", href: "/sluzby/hlukove-studie" },
          { label: "Měření hluku a akustika", href: "/sluzby/mereni-hluku" }
        ]
      },
      {
        q: "Podle čeho se hodnotí hluk?",
        paragraphs: [
          "Záleží na tom, zda jde o hluk na pracovišti, chráněný venkovní prostor, chráněný venkovní prostor staveb nebo chráněný vnitřní prostor staveb."
        ],
        legal: {
          summary:
            "Nařízení vlády č. 272/2011 Sb. upravuje hygienické limity hluku a vibrací na pracovištích, v chráněných venkovních a vnitřních prostorech a způsob měření a hodnocení hluku a vibrací pro denní a noční dobu.",
          refs: [{ label: "Nařízení vlády č. 272/2011 Sb.", href: L.nv272 }]
        }
      },
      {
        q: "Kdo odpovídá za to, že hluk nepřekračuje hygienické limity?",
        paragraphs: [
          "Osoba, která používá nebo provozuje stroje a zařízení nebo provozovnu, jejichž provozem vzniká hluk, je povinna technickými, organizačními a dalšími opatřeními zajistit, aby hluk nepřekračoval hygienické limity v chráněných prostorech."
        ],
        legal: {
          summary: "§ 30 zákona č. 258/2000 Sb. upravuje povinnosti osob provozujících zdroje hluku nebo vibrací.",
          refs: [{ label: "§ 30 zákona č. 258/2000 Sb.", href: L.p30 }]
        }
      },
      {
        q: "Lze hluk řešit ještě před instalací technologie?",
        paragraphs: [
          "Ano. Před instalací technologie zpracujte hlukovou studii nebo akustické posouzení — včas upravíte umístění zdroje, výkon, režim nebo protihluková opatření."
        ],
        links: [
          { label: "Hlukové studie", href: "/sluzby/hlukove-studie" },
          { label: "Měření hluku a akustika", href: "/sluzby/mereni-hluku" }
        ]
      },
      {
        q: "Navrhujete také protihluková opatření?",
        paragraphs: [
          "Ano. V návaznosti na měření nebo výpočet lze doporučit směr opatření — například akustický kryt, clonu, tlumič, změnu umístění zdroje, omezení provozního režimu nebo stavební úpravu."
        ]
      },
      {
        q: "Jaký je rozdíl mezi hlukem na pracovišti a hlukem do okolí?",
        paragraphs: [
          "Hluk na pracovišti se hodnotí z hlediska expozice zaměstnanců. Řeší se pracovní místo, délka směny, činnost pracovníka a pracovní hygienické limity.",
          "Hluk do okolí se hodnotí z hlediska chráněných venkovních nebo vnitřních prostor, například u obytných domů. Řeší se vliv provozovny, technologie, dopravy, tepelných čerpadel, VZT nebo jiných zdrojů na okolí. Jde tedy o dvě rozdílná měření, rozdílný účel a často i rozdílné výstupy pro úřad."
        ]
      },
      {
        q: "Kdy je potřeba měření vibrací?",
        paragraphs: [
          "Měření vibrací se řeší zejména tehdy, pokud zaměstnanci pracují s vibrujícím nářadím, stroji, vozidly nebo zařízeními, která mohou přenášet vibrace na ruce nebo celé tělo. Typicky jde o brusky, kladiva, hutnicí techniku, manipulační techniku, stavební stroje, traktory nebo pracovní stroje.",
          "Měření může být podkladem pro kategorizaci prací, ověření rizika nebo reakci na požadavek KHS."
        ]
      },
      {
        q: "Kdy je vhodné udělat hlukovou studii ještě před nákupem technologie?",
        paragraphs: [
          "Před nákupem nebo instalací technologie je hluková studie vhodná vždy, když bude zařízení umístěno v blízkosti obytné zástavby, pracovat v noci, mít výrazný akustický výkon nebo být součástí většího provozu. Typicky jde o VZT jednotky, kompresory, chlazení, tepelná čerpadla, výrobní linky, drtiče, dopravníky, nakládku, sklady nebo venkovní manipulaci.",
          "Včasné posouzení může zabránit tomu, že bude nutné dodatečně instalovat drahá protihluková opatření."
        ]
      },
      {
        q: "Co když si sousedé stěžují na hluk z provozovny?",
        paragraphs: [
          "Nejprve je vhodné rozlišit, zda jde o hluk ze stacionárního zdroje, dopravy, manipulace, technologie, větrání nebo souběh více zdrojů. Podle situace lze provést měření hluku, zpracovat akustické posouzení nebo navrhnout technická opatření.",
          "Důležité je neřešit stížnost jen odhadem. Provozovatel potřebuje vědět, zda je hluk skutečně nad limitem, kdy k překročení dochází a který zdroj je rozhodující."
        ]
      }
    ]
  },
  {
    id: "studie",
    title: "Rozptylové studie, imise a zápach",
    tileLabel: "Rozptylové studie a zápach",
    ctas: [
      { label: "Poptat rozptylovou studii", href: contactUrl("Rozptylové studie") },
      { label: "Poptat hlukovou studii", href: contactUrl("Hlukové studie") },
      { label: "Poslat projektové podklady", href: contactUrl("Nejsem si jistý") }
    ],
    items: [
      {
        q: "Kdy je potřeba rozptylová studie?",
        paragraphs: [
          "Rozptylovou studii zpracujete pro nový nebo měněný zdroj emisí, změnu technologie, navýšení kapacity, EIA, povolovací řízení nebo na pokyn krajského úřadu."
        ],
        links: [{ label: "Rozptylové studie", href: "/sluzby/rozptylove-studie" }]
      },
      {
        q: "Kdo může zpracovat rozptylovou studii?",
        paragraphs: [
          "Rozptylovou studii může zpracovat autorizovaná osoba v příslušném rozsahu."
        ],
        legal: {
          summary:
            "§ 32 zákona č. 201/2012 Sb. uvádí zpracování rozptylové studie mezi činnostmi, které může vykonávat jen autorizovaná osoba.",
          refs: [{ label: "§ 32 zákona č. 201/2012 Sb.", href: L.p32 }]
        }
      },
      {
        q: "Jaké podklady jsou potřeba pro rozptylovou studii?",
        paragraphs: [
          "Obvykle je potřeba popis technologie, emisní parametry, výška a průměr výduchů, objemový tok, teplota, provozní doba, situace areálu, dopravní údaje, údaje o okolní zástavbě a účel studie."
        ]
      },
      {
        q: "Lze rozptylovou studii zpracovat variantně?",
        paragraphs: [
          "Ano. U záměrů v přípravě lze porovnat více variant technologie, výduchů, provozních režimů, kapacit nebo dopravních intenzit. Variantní posouzení pomáhá investorovi i projektantovi najít technicky a environmentálně vhodnější řešení."
        ]
      },
      {
        q: "Kdy je vhodná hluková studie?",
        paragraphs: [
          "Hluková studie je vhodná před realizací nového zdroje hluku, při změně technologie, u průmyslových areálů, VZT, tepelných čerpadel, dopravy, skladových a výrobních provozů nebo jako podklad pro stavební řízení, KHS či EIA."
        ],
        links: [{ label: "Hlukové studie", href: "/sluzby/hlukove-studie" }]
      },
      {
        q: "Jaké podklady jsou potřeba pro hlukovou studii?",
        paragraphs: [
          "Obvykle je potřeba situace záměru, umístění zdrojů hluku, akustické parametry zařízení, provozní režim, dopravní údaje, výkresy, umístění chráněných prostor a účel studie."
        ]
      },
      {
        q: "Co je nejčastější chyba při zadání rozptylové studie?",
        paragraphs: [
          "Nejčastější chybou jsou neúplné nebo nereálné vstupní údaje. Rozptylová studie potřebuje technicky správný popis zdrojů, výduchů, emisních parametrů, provozní doby, surovin, kapacity, dopravy a okolní zástavby. Pokud jsou vstupy nadhodnocené, podhodnocené nebo neodpovídají skutečnému provozu, může být výsledek studie zavádějící.",
          "Proto je vhodné vstupy před modelováním odborně zkontrolovat."
        ]
      },
      {
        q: "Lze rozptylovou studií ověřit, zda projde navýšení kapacity výroby?",
        paragraphs: [
          "Ano. Rozptylová studie může porovnat stávající a navrhovaný stav, případně více variant provozu. Umožňuje posoudit, zda navýšení kapacity významně zvýší imisní příspěvky a zda je záměr z hlediska ochrany ovzduší obhajitelný.",
          "U větších změn je vhodné řešit také návaznost na povolení provozu, EIA, odborný posudek, provozní řád a dopravní hluk."
        ]
      },
      {
        q: "Řešíte také zápach z provozů?",
        paragraphs: [
          "Ano, u provozů se zápachem lze posoudit technologii, zdroje pachových látek, větrání, provozní režim a možnosti omezení emisí. Podle situace může jít o odborné posouzení, návrh opatření, měření vybraných látek, rozptylové posouzení nebo přípravu podkladů pro jednání s úřadem.",
          "Typicky se řeší čistírny odpadních vod, odpady, kompostárny, potravinářství, lakovny, chemické provozy, zpracování kalů, zemědělské provozy a některé výrobní technologie."
        ]
      },
      {
        q: "Můžeme rozptylovou studii použít jako argument, že není potřeba instalovat další filtr?",
        paragraphs: [
          "Někdy ano, ale záleží na konkrétním zdroji, emisích, imisním pozadí, legislativních požadavcích a požadavku úřadu. Rozptylová studie hodnotí imisní dopad v okolí, ale sama o sobě nemusí nahradit povinnost plnit emisní limity nebo používat předepsaná technická opatření.",
          "Správný postup je posoudit současně emise, imise, technologii, povolení provozu a dostupná opatření."
        ]
      }
    ]
  },
  {
    id: "eia",
    title: "EIA, JES, odborné posudky a povolování",
    tileLabel: "EIA a povolování",
    ctas: [
      { label: "Poptat EIA / oznámení záměru", href: contactUrl("EIA a oznámení záměru") },
      {
        label: "Poptat odborný posudek",
        href: contactUrl("Odborné posudky")
      },
      {
        label: "Poptat provozní řád",
        href: contactUrl("Provozní řády")
      }
    ],
    items: [
      {
        q: "Kdy řešit EIA?",
        paragraphs: [
          "EIA řešte už při přípravě záměru — u nové technologie, změny kapacity, odpadů, významnějšího zdroje emisí, hluku, dopravy nebo zásahu do území. Včasné posouzení omezí přepracování dokumentace."
        ],
        legal: {
          summary:
            "Zákon č. 100/2001 Sb. uvádí, že účelem posuzování vlivů na životní prostředí je získat objektivní odborný podklad pro vydání rozhodnutí nebo opatření podle zvláštních právních předpisů.",
          refs: [{ label: "Zákon č. 100/2001 Sb.", href: L.z100 }]
        },
        links: [{ label: "EIA a oznámení záměru", href: "/sluzby/eia-oznameni-zameru" }]
      },
      {
        q: "Jaké vlivy se v EIA posuzují?",
        paragraphs: [
          "Posuzují se vlivy na veřejné zdraví a životní prostředí, včetně vlivů na živočichy, rostliny, ekosystémy, půdu, vodu, ovzduší, klima, krajinu, přírodní zdroje, hmotný majetek a kulturní památky."
        ],
        legal: {
          summary:
            "Rozsah posuzování vlivů je vymezen v zákoně č. 100/2001 Sb.; posuzování zahrnuje zjištění, popis, posouzení a vyhodnocení významných přímých a nepřímých vlivů záměru.",
          refs: [{ label: "Zákon č. 100/2001 Sb.", href: L.z100 }]
        }
      },
      {
        q: "Co je odborný posudek v ochraně ovzduší?",
        paragraphs: [
          "Odborný posudek hodnotí zdroj, technologii, emise, provozní souvislosti a návaznost na povolení provozu nebo změnu provozu. Slouží jako odborný podklad pro provozovatele a správní orgány."
        ],
        legal: {
          summary: "Zpracování odborného posudku je podle § 32 zákona č. 201/2012 Sb. autorizovanou činností.",
          refs: [{ label: "§ 32 zákona č. 201/2012 Sb.", href: L.p32 }]
        },
        links: [{ label: "Odborné posudky", href: "/sluzby/odborne-posudky" }]
      },
      {
        q: "Co musí obsahovat provozní řád zdroje?",
        paragraphs: [
          "Provozní řád typicky obsahuje identifikaci stacionárních zdrojů a provozovny, údaje o projektované kapacitě, popis technologických operací, způsob řízení a kontroly provozu, blokové schéma, údaje o výduších a zařízeních ke snižování emisí."
        ],
        legal: {
          summary:
            "Příloha č. 12 vyhlášky č. 415/2012 Sb. stanovuje náležitosti provozního řádu, včetně identifikace zdrojů, projektované kapacity a popisu technologických operací.",
          refs: [{ label: "Příloha č. 12 vyhlášky č. 415/2012 Sb.", href: L.pril12 }]
        }
      },
      {
        q: "Pomůžete se změnou povolení provozu?",
        paragraphs: [
          "Ano. Pomáháme připravit technické podklady, popis změny technologie, návaznost na měření emisí, provozní řád, rozptylovou studii, odborný posudek nebo další přílohy podle požadavku úřadu."
        ]
      },
      {
        q: "Řešíte také IPPC?",
        paragraphs: [
          "Ano. Podle rozsahu zakázky připravujeme nebo doplňujeme podklady pro integrovaná povolení a jejich změny, zejména v návaznosti na ovzduší, hluk, odpady, provozní režim a technické parametry zdrojů."
        ],
        links: [{ label: "IPPC a integrovaná povolení", href: "/sluzby/ippc-integrovana-povoleni" }]
      },
      {
        q: "Jak poznáme, zda záměr potřebuje EIA nebo jen jiné povolení?",
        paragraphs: [
          "Záleží na typu záměru, kapacitě, lokalitě, změně provozu a zařazení podle zákona o posuzování vlivů na životní prostředí. U některých záměrů je zřejmé, že EIA bude potřeba. U jiných je nutné posoudit, zda jde o podlimitní záměr, změnu záměru, navazující řízení nebo pouze odborný podklad pro jiné povolení.",
          "V praxi je vhodné provést předběžné screeningové posouzení ještě před podáním žádosti."
        ]
      },
      {
        q: "Co je jednotné environmentální stanovisko a kdy ho řešit?",
        paragraphs: [
          "Jednotné environmentální stanovisko je souhrnný environmentální podklad pro povolování záměru. V praxi může spojovat více požadavků z oblasti životního prostředí. Pro investora je důležité včas zjistit, jaké přílohy budou potřeba – například hluková studie, rozptylová studie, biologické posouzení, nakládání s odpady, ochrana vod nebo jiné odborné podklady.",
          "Pomůžeme určit, které části environmentální dokumentace je vhodné připravit předem."
        ]
      },
      {
        q: "Kdy je potřeba odborný posudek v ochraně ovzduší?",
        paragraphs: [
          "Odborný posudek se obvykle řeší u vyjmenovaných stacionárních zdrojů, při povolení provozu, změně technologie, změně paliva nebo suroviny, navýšení kapacity, úpravě čištění spalin nebo při požadavku krajského úřadu. Posudek hodnotí technické, emisní a provozní souvislosti zdroje a navrhuje podmínky, které mají být přiměřené reálnému provozu."
        ]
      },
      {
        q: "Má smysl odborný posudek zpracovat ještě před jednáním s úřadem?",
        paragraphs: [
          "Ano, zejména u složitějších nebo neobvyklých technologií. Předběžný odborný rozbor pomůže připravit technickou argumentaci, navrhnout rozumné emisní limity, četnost měření, provozní podmínky a rozsah podkladů. Provozovatel pak jedná s úřadem na základě dat a ne pouze obecného popisu technologie."
        ]
      },
      {
        q: "Co když se během projektu změní technologie, kapacita nebo provozní režim?",
        paragraphs: [
          "Změna technologie, kapacity nebo provozního režimu může ovlivnit měření emisí, rozptylovou studii, hlukovou studii, odborný posudek, provozní řád i povolení provozu. Proto je vhodné změnu posoudit dříve, než se podklady odešlou úřadu.",
          "U významnějších změn může být nutné aktualizovat již zpracovanou dokumentaci."
        ]
      }
    ]
  },
  {
    id: "ispop",
    title: "Provozní řády, evidence a ISPOP",
    tileLabel: "Provozní řády a ISPOP",
    ctas: [
      { label: "Poptat provozní řád", href: contactUrl("Provozní řády") },
      { label: "Poptat ISPOP / provozní evidenci", href: contactUrl("ISPOP") }
    ],
    items: [
      {
        q: "Pomůžete s ISPOP?",
        paragraphs: [
          "Ano. Pomáháme s přípravou podkladů, kontrolou návaznosti na měření emisí, povolení provozu, spotřeby paliv nebo surovin, provozní hodiny a další údaje potřebné pro hlášení."
        ],
        links: [{ label: "ISPOP a provozní evidence", href: "/sluzby/ispop" }]
      },
      {
        q: "Kdo podává souhrnnou provozní evidenci?",
        paragraphs: [
          "Souhrnnou provozní evidenci podává provozovatel vyjmenovaného stacionárního zdroje prostřednictvím systému ISPOP, zpravidla do 31. března za předchozí kalendářní rok."
        ],
        legal: {
          summary:
            "ISPOP uvádí formulář F_OVZ_SPE pro ohlášení souhrnné provozní evidence podle § 17 odst. 3 písm. c) zákona č. 201/2012 Sb. s termínem do 31. 3.",
          refs: [
            { label: "ISPOP", href: L.ispop },
            { label: "§ 17 zákona č. 201/2012 Sb.", href: L.p17 }
          ]
        }
      },
      {
        q: "Jak dlouho je potřeba uchovávat provozní evidenci?",
        paragraphs: [
          "U vyjmenovaných stacionárních zdrojů uchovávejte provozní evidenci po zákonem stanovenou dobu tak, aby byla dostupná při kontrole."
        ],
        legal: {
          summary:
            "§ 17 zákona č. 201/2012 Sb. upravuje povinnosti provozovatele vyjmenovaného stacionárního zdroje, včetně vedení a ohlašování souhrnné provozní evidence.",
          refs: [{ label: "Zákon č. 201/2012 Sb.", href: L.z201 }]
        }
      },
      {
        q: "Zajišťujete GHG / ověřování emisí skleníkových plynů?",
        paragraphs: [
          "Ano. U zakázek souvisejících s emisemi skleníkových plynů připravujeme nebo ověřujeme podklady podle rozsahu oprávnění a požadavků provozovatele."
        ],
        legal: {
          summary:
            "§ 32 zákona č. 201/2012 Sb. zahrnuje mezi autorizované činnosti také ověřování zprávy o emisích.",
          refs: [{ label: "§ 32 zákona č. 201/2012 Sb.", href: L.p32 }]
        },
        links: [{ label: "Ověřování emisí skleníkových plynů", href: "/sluzby/ghg-overovani" }]
      },
      {
        q: "Kdy je potřeba aktualizovat provozní řád?",
        paragraphs: [
          "Provozní řád je vhodné aktualizovat při změně technologie, zdroje, kapacity, paliva, suroviny, výduchu, filtračního zařízení, provozního režimu, emisních limitů nebo podmínek povolení provozu. Aktualizace je vhodná také tehdy, pokud provozní řád neodpovídá skutečnému stavu provozovny."
        ]
      },
      {
        q: "Má být v provozním řádu popsáno najíždění a odstavování technologie?",
        paragraphs: [
          "Ano, pokud jsou tyto režimy pro emise nebo bezpečné řízení provozu významné. U cyklických, dávkových, spalovacích, sušicích, pyrolýzních nebo jinak proměnlivých technologií je vhodné popsat běžný provoz, najíždění, odstavování, poruchové stavy a mimořádné situace.",
          "Dobrý provozní řád nemá být jen formální dokument. Má odpovídat tomu, jak technologie skutečně pracuje."
        ]
      },
      {
        q: "Co všechno má provozovatel evidovat u zdroje znečišťování ovzduší?",
        paragraphs: [
          "Rozsah evidence závisí na typu zdroje a povolení provozu. Obvykle se eviduje provozní doba, spotřeba paliv nebo surovin, množství výrobků, provoz odlučovacích zařízení, poruchy, odstávky, měření emisí, údržba a další údaje potřebné pro souhrnnou provozní evidenci nebo kontrolu.",
          "Pomůžeme nastavit evidenci tak, aby odpovídala povolení a byla prakticky použitelná při kontrole."
        ]
      },
      {
        q: "Kdo má podat hlášení do ISPOP – provozovatel, nebo dodavatel měření?",
        paragraphs: [
          "Odpovědnost za plnění povinností má provozovatel. Některé úkony ale může technicky připravit nebo podat pověřená osoba. U každé zakázky je vhodné předem určit, kdo ohlašuje termín měření, kdo podává protokol, kdo připravuje souhrnnou provozní evidenci a kdo kontroluje návaznost na povolení provozu."
        ]
      }
    ]
  },
  {
    id: "poptavka",
    title: "Poptávka, cena a termíny",
    tileLabel: "Cena a termíny",
    ctas: [
      { label: "Nezávazně poptat", href: contactFormHref },
      { label: "Poslat podklady k posouzení", href: contactUrl("Nejsem si jistý") }
    ],
    items: [
      {
        q: "Kolik stojí měření, studie nebo odborný posudek?",
        paragraphs: [
          "Cena závisí na rozsahu práce, typu technologie, počtu měřicích míst, počtu měřených látek, dostupnosti podkladů, lokalitě, složitosti výpočtu, požadavku úřadu a termínu. U jednoduchých zakázek lze cenu stanovit rychle. U složitějších provozů je nejprve vhodné posoudit podklady a přesně vymezit rozsah.",
          "Pro rychlou nabídku pomůže poslat výzvu úřadu, povolení provozu, popis technologie, fotografie, projektovou dokumentaci a předchozí protokoly."
        ]
      },
      {
        q: "Jak dlouho trvá zpracování studie nebo posudku?",
        paragraphs: [
          "Termín závisí na rozsahu zakázky, úplnosti podkladů, nutnosti měření, složitosti technologie a návaznosti na projektanta nebo úřad. Nejrychlejší postup je poslat hned na začátku všechny dostupné podklady včetně požadavku úřadu a termínu, do kdy má být dokumentace dodána.",
          "Pokud je termín velmi krátký, nejprve určíme, co je možné realisticky zpracovat a co by bylo metodicky nebo procesně rizikové."
        ]
      },
      {
        q: "Umíte zakázku rozdělit na rychlé předběžné posouzení a finální dokumentaci?",
        paragraphs: [
          "Ano. U složitějších případů je často vhodné nejprve udělat rychlé předběžné posouzení. To pomůže určit hlavní rizika, chybějící podklady, potřebná měření a pravděpodobný rozsah finální dokumentace.",
          "Tento postup je vhodný zejména u nových technologií, změn provozu, EIA, IPPC, zápachu, hluku, rozptylových studií a sporných požadavků úřadu."
        ]
      },
      {
        q: "Co máme poslat, aby nabídka nebyla jen orientační?",
        paragraphs: [
          "Ideální je poslat výzvu nebo požadavek úřadu, povolení provozu nebo předchozí rozhodnutí, stručný popis technologie, provozní režim a kapacitu, projektovou dokumentaci nebo situaci areálu, fotografie technologie, výduchů, měřicích míst nebo zdrojů hluku, bezpečnostní listy používaných látek, předchozí protokoly a studie a požadovaný termín dokončení.",
          "Čím přesnější podklady obdržíme, tím přesněji lze stanovit cenu, termín a rozsah zakázky."
        ],
        links: [{ label: "Kontakt a poptávka", href: contactFormHref }]
      },
      {
        q: "Lze začít i s neúplnými podklady?",
        paragraphs: [
          "Ano. Pokud nejsou podklady kompletní, nejprve určíme, co je zásadní, co lze doplnit později a co musí dodat projektant, provozovatel nebo dodavatel technologie."
        ]
      }
    ]
  }
];

export const faqFlatItems = faqCategories.flatMap((c) => c.items);

export function getFaqCategory(id: string): FaqCategory | undefined {
  return faqCategories.find((c) => c.id === id);
}

export function getFaqTeaserItems(categoryId: string, limit = 5): FaqItem[] {
  const category = getFaqCategory(categoryId);
  if (!category) return [];
  return category.items.slice(0, limit);
}
