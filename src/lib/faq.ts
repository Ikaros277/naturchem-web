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
  { label: "Poslat podklady k posouzení", href: contactUrl("Nejsem si jistý") }
];

export const faqPageMetadata = {
  absoluteTitle: "FAQ – měření emisí, studie, EIA, posudky a provozní řády | NATURCHEM",
  description:
    "Časté dotazy k měření emisí, pracovnímu prostředí, hluku, rozptylovým a hlukovým studiím, EIA, odborným posudkům, provozním řádům, ISPOP a podkladům pro úřady."
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
  viewAllCategory: "Zobrazit všechny časté dotazy — {category}"
} as const;

export const faqCategories: FaqCategory[] = [
  {
    id: "obecne",
    title: "Obecné dotazy",
    tileLabel: "Obecné dotazy",
    ctas: [
      { label: "Poptat službu", href: contactFormHref },
      { label: "Poslat podklady k posouzení", href: contactUrl("Nejsem si jistý") }
    ],
    items: [
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
          "Měřicí místo posoudíme ještě před měřením. Pokud výduch nebo komín není ideální, navrhneme technicky dosažitelné řešení, upravíme přístup, doplníme příruby nebo v protokolu odborně popíšeme omezení a reprezentativnost měření."
        ],
        tip: "K poptávce přiložte fotografie výduchu, komínu, přístupu, přírub a dostupnou projektovou dokumentaci."
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
      }
    ]
  },
  {
    id: "hluk",
    title: "Hluk, akustika a hlukové studie",
    tileLabel: "Hluk a akustika",
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
      }
    ]
  },
  {
    id: "studie",
    title: "Rozptylové a hlukové studie",
    tileLabel: "Rozptylové a hlukové studie",
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
      }
    ]
  },
  {
    id: "eia",
    title: "EIA, odborné posudky, provozní řády a IPPC",
    tileLabel: "EIA, posudky a provozní řády",
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
          "Provozní řád typicky obsahuje identifikaci stacionárních zdrojů a provozovny, údaje o projektované kapacitě, popis technologických operací, způsob řízení a kontroly provozu, blokové schéma, údaje o výduších, komínech a zařízeních ke snižování emisí."
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
      }
    ]
  },
  {
    id: "ispop",
    title: "ISPOP, provozní evidence a GHG",
    tileLabel: "ISPOP, GHG a evidence",
    ctas: [
      { label: "Poptat ISPOP / provozní evidenci", href: contactUrl("ISPOP") },
      { label: "Poptat GHG", href: contactUrl("GHG") }
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
      }
    ]
  },
  {
    id: "poptavka",
    title: "Poptávka, termíny a podklady",
    tileLabel: "Poptávka a podklady",
    ctas: [
      { label: "Poptat službu", href: contactFormHref },
      { label: "Poslat podklady k posouzení", href: contactUrl("Nejsem si jistý") }
    ],
    items: [
      {
        q: "Jaké podklady máme poslat k poptávce?",
        paragraphs: [
          "Nejlepší je poslat rozhodnutí nebo výzvu úřadu, projektovou dokumentaci, popis technologie, lokalitu, provozní režim, dostupné protokoly, provozní řád, bezpečnostní listy a fotografie měřicích míst, výduchů nebo zdrojů hluku."
        ],
        links: [{ label: "Kontakt a poptávka", href: contactFormHref }]
      },
      {
        q: "Lze začít i s neúplnými podklady?",
        paragraphs: [
          "Ano. Pokud nejsou podklady kompletní, nejprve určíme, co je zásadní, co lze doplnit později a co musí dodat projektant, provozovatel nebo dodavatel technologie."
        ]
      },
      {
        q: "Umíte posoudit požadavek úřadu?",
        paragraphs: [
          "Ano. Z požadavku KHS, ČIŽP, krajského úřadu nebo stavebního úřadu vyčteme, jaký typ výstupu je nutný a které přílohy budou rozhodující pro další řízení."
        ]
      },
      {
        q: "Lze udělat nejdřív orientační posouzení?",
        paragraphs: [
          "Ano. U složitějších záměrů nejdřív uděláme orientační posouzení technologie, měřicích míst, hluku, emisí nebo požadavku úřadu — a pak stanovíme přesný rozsah zakázky."
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
