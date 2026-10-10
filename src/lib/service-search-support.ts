import type { FaqItem } from "@/lib/faq";
import { practiceNote, type ServiceEvidence } from "@/lib/archived-practice";

/** Public, anonymized scope only. Private documents and client identities stay outside the repository. */
export type { ServiceEvidence } from "@/lib/archived-practice";

type ServiceSearchSupport = {
  faqItems?: FaqItem[];
  contactMessage?: string;
  relatedLinks?: { title: string; href: string; description: string }[];
  evidence?: ServiceEvidence;
};

const vibrationEvidence: ServiceEvidence = {
  title: "Vibrace při práci s motorovou pilou a mobilními stroji",
  summary: "Pro lesnický provoz jsme měřili vibrace přenášené na ruce i na tělo při skutečných pracovních činnostech.",
  output: "Protokol rozlišující práci s ručním nářadím a obsluhu strojů."
};
const lightingEvidence: ServiceEvidence = {
  title: "Osvětlení výrobní haly automobilového průmyslu",
  summary: "Měřili jsme umělé osvětlení vybraných pracovních prostor s výrobními a svařovacími zařízeními.",
  output: "Protokol s měřením a hodnocením vybraných pracovišť."
};
const microclimateEvidence: ServiceEvidence = {
  title: "Mikroklima ve zdravotnickém provozu",
  summary: "Ve třech vybraných místnostech jsme měřili mikroklimatické podmínky za běžného provozu.",
  output: "Protokol popisující místa měření, podmínky a výsledky."
};
const studyEvidence: ServiceEvidence = {
  title: "Hlukové a imisní posouzení terénních úprav",
  summary: "Pro jeden záměr jsme zpracovali hlukovou a rozptylovou studii. Zahrnuly související dopravu, mechanizaci a manipulaci s materiálem.",
  output: "Dvě odborné studie se společným projektovým zadáním."
};
const permitEvidence: ServiceEvidence = {
  title: "Odborný posudek ke změně dřevozpracujícího provozu",
  summary: "Posoudili jsme navrhovanou změnu odsávání a filtrace jako podklad pro řízení o změně povolení provozu.",
  output: "Odborný posudek k navrhované technologické změně."
};

/**
 * Czech commercial questions replace unrelated category answers, not the technical service scope.
 * Evidence wording is a local draft for expert/publication review; no client outcomes are promised.
 */
export const czechServiceSearchSupport: Record<string, ServiceSearchSupport> = {
  "mereni-vibraci": {
    evidence: vibrationEvidence
  },
  "mereni-mikroklimatu": {
    evidence: microclimateEvidence
  },
  "mereni-osvetleni": {
    evidence: lightingEvidence,
    faqItems: [
      {
        q: "Měříte osvětlení ve výrobních halách a na pracovištích?",
        paragraphs: ["Ano. Rozsah určíme podle prostoru, rozmístění pracovních míst a vykonávaných činností. Řešíme umělé i denní osvětlení na pracovištích a také venkovní umělé osvětlení."]
      },
      {
        q: "Co potřebujete pro nabídku měření osvětlení?",
        paragraphs: ["Pošlete půdorys nebo fotografie prostoru, popis práce a rozmístění pracovních míst. Přiložte požadavek KHS, projekt osvětlení nebo předchozí protokol, pokud je máte."]
      },
      {
        q: "Jaký výstup z měření osvětlení dostaneme?",
        paragraphs: ["Protokol s popisem míst a podmínek měření, výsledky a jejich vyhodnocením. Požadovaný rozsah pro kolaudaci, kontrolu nebo interní potřebu dohodneme před měřením."]
      }
    ],
    relatedLinks: [
      { title: "Osvětlení pracoviště: co připravit", href: "/poradna/nedostatecne-osvetleni-pracoviste-co-se-meri-podklady", description: "Podklady, pracovní činnosti a skutečný stav osvětlení." }
    ]
  },
  "povoleni-provozu": {
    evidence: practiceNote("dieselPermit"),
    contactMessage: "Poptávám vydání nebo změnu povolení provozu stacionárního zdroje. Zdroj a plánovaná změna: ",
    faqItems: [
      {
        q: "Zajišťujete kompletní žádost o povolení provozu?",
        paragraphs: ["Ano. Zpracujeme žádost, potřebné odborné podklady a zajistíme podání za klienta. Podle zdroje zahrneme odborný posudek, měření emisí nebo provozní řád; rozsah uvedeme v nabídce."]
      },
      {
        q: "Co Vám poslat při změně povolení provozu?",
        paragraphs: ["Stávající povolení, popis plánované změny a technické údaje zdroje. Přiložte poslední měření, projekt nebo výzvu úřadu, pokud je máte."]
      },
      {
        q: "Co je výsledkem Vaší práce při povolování zdroje?",
        paragraphs: ["Žádost a dohodnuté odborné podklady, podání a související doplnění dokumentace. Podání žádosti ani odborný posudek nejsou samy rozhodnutím o povolení provozu."]
      }
    ],
    relatedLinks: [
      { title: "Vyjmenovaný zdroj a povolení provozu", href: "/poradna/vyjmenovany-stacionarni-zdroj-povoleni-provozu", description: "Souvislost zdroje, provozních údajů a povolovací dokumentace." }
    ]
  },
  "ippc-integrovana-povoleni": {
    evidence: practiceNote("ippcBio"),
    faqItems: [
      {
        q: "Zajišťujete kompletní žádost o integrované povolení IPPC?",
        paragraphs: ["Ano. Zpracujeme žádost, odborné podklady a zajistíme podání za klienta. Rozsah příloh, doplnění a související komunikace dohodneme podle zařízení a jeho aktuálního stavu."]
      },
      {
        q: "Jaké podklady potřebujete ke změně IPPC?",
        paragraphs: ["Aktuální integrované povolení, popis stávajícího a navrhovaného stavu, kapacity a provozní data. Pomohou také technologické schéma, měření a konkrétní výzva k doplnění."]
      },
      {
        q: "Lze propojit IPPC s měřením emisí a odbornými studiemi?",
        paragraphs: ["Ano. Měření, hlukové a rozptylové studie i provozní údaje sladíme se společným zadáním. V nabídce uvedeme, které podklady zajistíme a které je třeba dodat od provozovatele."]
      }
    ],
    relatedLinks: [
      { title: "IPPC: kdy provoz potřebuje integrované povolení", href: "/poradna/ippc-kdy-provoz-potrebuje-integrovane-povoleni", description: "Přehled souvislostí a vstupních údajů pro provozovatele." }
    ]
  },
  "zjistovaci-rizeni-eia": {
    contactMessage: "Poptávám odborné podklady pro zjišťovací řízení EIA. Popis záměru a požadované přílohy: ",
    faqItems: [
      {
        q: "Co dodáte jako podklad pro zjišťovací řízení EIA?",
        paragraphs: ["Technické vstupy a dohodnuté odborné přílohy k vlivům záměru. Propojíme údaje o emisích, hluku a provozu podle potřeb investora nebo zpracovatele oznámení."]
      },
      {
        q: "Je tato služba totéž jako celé oznámení záměru EIA?",
        paragraphs: ["Tato stránka se zaměřuje na odborné vstupy a přílohy. Pokud potřebujete zpracovat celé oznámení záměru, uveďte to v poptávce a využijte naši stránku EIA a oznámení záměru."],
        links: [{ label: "EIA a oznámení záměru", href: "/sluzby/eia-oznameni-zameru" }]
      },
      {
        q: "Jaké informace potřebujete k přípravě podkladů?",
        paragraphs: ["Popis a umístění záměru, projektovanou kapacitu, technologické údaje a provozní režim. Pošlete také zadání zpracovatele nebo požadavky úřadu a dosavadní přílohy."]
      }
    ]
  },
  "technicke-prilohy": {
    evidence: studyEvidence,
    contactMessage: "Poptávám environmentální podklady pro projekt. Záměr a požadované studie nebo měření: ",
    faqItems: [
      {
        q: "Jaké environmentální podklady připravujete pro projektanta?",
        paragraphs: ["Dohodnuté studie a měření k ovzduší a hluku, včetně údajů o související dopravě. Rozsah podkladů stanovíme podle technologie, umístění záměru a potřeb projektu."]
      },
      {
        q: "Můžete připravit hlukovou a rozptylovou studii společně?",
        paragraphs: ["Ano. Pro oba výstupy využijeme společné projektové zadání a sladíme kapacity, provozní režim i údaje o dopravě. Jednotlivé odborné studie zůstávají samostatnými výstupy."]
      },
      {
        q: "Kdy má smysl předat Vám projektové podklady?",
        paragraphs: ["Při přípravě záměru nebo porovnávání variant technologie a jejího umístění. Pošlete aktuální projekt, popis variant a seznam požadovaných příloh; domluvíme další potřebné vstupy."]
      }
    ],
    relatedLinks: [
      { title: "Projektant a ekologický konzultant", href: "/poradna/projektant-vs-ekologicky-konzultant-kdy-zapojit-odbornika-na-ovzdusi-hluk-a-eia", description: "Návaznost projektu na odborná měření a studie." }
    ]
  },
  "bezpecnostni-listy": {
    evidence: practiceNote("safetySheets"),
    faqItems: [
      {
        q: "Vytváříte také nové bezpečnostní listy?",
        paragraphs: ["Ano. Zpracováváme nové bezpečnostní listy a provádíme revize i kontrolu stávající dokumentace. Při poptávce uveďte, zda potřebujete nový list, aktualizaci, nebo kontrolu listů používaných v provozu."]
      },
      {
        q: "Co Vám poslat pro zpracování nebo revizi bezpečnostního listu?",
        paragraphs: ["Podklady k produktu a jeho složení, dostupnou dokumentaci a údaje o používání. U revize přiložte stávající list a popis změny; potřebné doplnění podkladů s Vámi upřesníme."]
      },
      {
        q: "Lze kontrolu propojit se školením zaměstnanců?",
        paragraphs: ["Ano. Zjištění mohou tvořit podklad pro školení a interní pravidla manipulace. Rozsah přizpůsobíme skutečně používaným látkám a pracovním činnostem."],
        links: [{ label: "Školení chemické legislativy", href: "/sluzby/skoleni-chemicke-legislativy" }]
      }
    ],
    relatedLinks: [
      { title: "Bezpečnostní listy v provozu", href: "/poradna/bezpecnostni-listy-v-provozu-co-musi-zamestnavatel", description: "Praktická návaznost dokumentace na práci s chemickými látkami." }
    ]
  },
  "hlukove-studie": {
    evidence: studyEvidence,
    faqItems: [
      {
        q: "Kdy potřebujete hlukovou studii a kdy měření hluku?",
        paragraphs: ["Studie výpočtem posuzuje navrhovaný záměr nebo varianty provozu. Terénní měření ověřuje skutečný hluk u existujícího zdroje. Co se vyžaduje u Vašeho záměru, určují podmínky povolení a požadavek KHS nebo stavebního úřadu; podle zadání lze oba výstupy propojit."],
        links: [
          { label: "Měření hluku", href: "/sluzby/mereni-hluku" },
          { label: "Měření hluku ke kolaudaci", href: "/mereni-hluku-ke-kolaudaci" },
          { label: "Studie, nebo měření: článek", href: "/poradna/kdy-je-potreba-hlukova-studie-a-kdy-mereni-hluku" }
        ]
      },
      {
        q: "Co potřebujete pro hlukovou studii ke stavbě nebo technologii?",
        paragraphs: ["Situaci s umístěním zdrojů a okolní zástavby, technické údaje zařízení a denní i noční provozní režim. Přiložte také údaje o dopravě a požadavek KHS, stavebního úřadu nebo projektanta. Výstupem je studie použitelná jako podklad pro řízení před KHS, stavebním úřadem nebo v EIA."]
      },
      {
        q: "Podle čeho stanovíte cenu hlukové studie?",
        paragraphs: ["Podle počtu a typu zdrojů, rozsahu území, posuzovaných režimů a variant. Rozhoduje také dostupnost vstupních údajů a případná potřeba terénního měření. Nabídku připravíme pro konkrétní zadání."]
      }
    ]
  },
  "rozptylove-studie": {
    evidence: studyEvidence,
    faqItems: [
      {
        q: "Jaké podklady potřebujete pro rozptylovou studii?",
        paragraphs: ["Situaci záměru, technické parametry zdrojů, emisní údaje a provozní režim. U dopravy a manipulace s materiálem potřebujeme také odpovídající provozní a dopravní údaje."]
      },
      {
        q: "Lze ve studii porovnat varianty provozu nebo technologie?",
        paragraphs: ["Ano, pokud jsou součástí zadání. Porovnáme například kapacitu, umístění nebo parametry zdroje. Rozsah variant a potřebné vstupy dohodneme před zpracováním."]
      },
      {
        q: "Co ovlivňuje cenu rozptylové studie?",
        paragraphs: ["Rozsah záměru, počet zdrojů, posuzované látky, varianty a dostupnost emisních údajů. Po předání základních podkladů upřesníme rozsah a cenu konkrétní studie."]
      }
    ]
  },
  "mereni-emisi": {
    evidence: {
      title: "Emise z technologického výduchu licího stroje",
      summary: "U licího stroje jsme měřili tuhé znečišťující látky a zinek na technologickém výduchu.",
      output: "Protokol autorizovaného měření emisí."
    },
    faqItems: [
      {
        q: "Měříte emise stacionárních zdrojů, nebo emise vozidel pro STK?",
        paragraphs: ["Zaměřujeme se na stacionární zdroje: kotelny, lakovny, kogenerační jednotky a technologické výduchy. Nejde o měření emisí vozidel pro technickou kontrolu."]
      },
      {
        q: "Jak určíte rozsah měření emisí u našeho zdroje?",
        paragraphs: ["Podle povolení provozu, typu technologie, měřených látek a případného požadavku úřadu. Pošlete poslední protokol, provozní režim a informace o změnách zdroje."],
        links: [{ label: "Autorizované měření emisí", href: "/autorizovana-osoba-mereni-emisi" }]
      },
      {
        q: "Co potřebujete pro nabídku měření emisí?",
        paragraphs: ["Povolení provozu, technický popis zdroje a poslední protokol, pokud existuje. Doplňte fotografie výduchu a měřicího místa, plánovaný režim a požadovaný termín."]
      }
    ]
  },
  "mereni-hluku": {
    faqItems: [
      {
        q: "Co potřebujete před měřením hluku provozu?",
        paragraphs: ["Popis a umístění zdrojů, jejich provozní režim a situaci okolí. Přiložte požadavek KHS, stavebního úřadu nebo konkrétní důvod měření."]
      },
      {
        q: "Je pro plánovanou technologii vhodné měření, nebo hluková studie?",
        paragraphs: ["Měření ověřuje skutečný provoz. U dosud neinstalované technologie nebo navrhovaného záměru slouží k posouzení výpočtová hluková studie."],
        links: [
          { label: "Hlukové studie", href: "/sluzby/hlukove-studie" },
          { label: "Měření hluku ke kolaudaci", href: "/mereni-hluku-ke-kolaudaci" }
        ]
      },
      {
        q: "Podle čeho připravíte cenu měření hluku?",
        paragraphs: ["Podle zdrojů, měřicích míst, potřebného rozsahu a provozních režimů. Pro nabídku uveďte také dostupnost technologie a požadavek na denní či noční měření."]
      }
    ]
  },
  "modelove-vypocty": {
    contactMessage: "Poptávám modelový výpočet imisí nebo hluku. Záměr, zdroje a posuzované varianty: ",
    evidence: {
      title: "Výpočtové varianty pro záměr terénních úprav",
      summary: "V rozptylové studii jsme posuzovali běžný a maximální provozní režim záměru s dopravou a manipulací s materiálem.",
      output: "Modelové výpočty jako součást odborné studie."
    },
    faqItems: [
      {
        q: "Jaké modelové výpočty zajišťujete?",
        paragraphs: ["Výpočty imisních příspěvků a hluku pro technologie, areály a související dopravu. Slouží k porovnání variant nebo jako součást hlukové či rozptylové studie."]
      },
      {
        q: "Jaké údaje potřebujete pro výpočet?",
        paragraphs: ["Situaci, technické a emisní nebo akustické parametry zdrojů a provozní režim. Uveďte posuzované varianty a účel, pro který má být výstup použit."]
      },
      {
        q: "Je modelový výpočet totéž jako kompletní odborná studie?",
        paragraphs: ["Výpočet je jednou z částí odborného posouzení. Pokud potřebujete celou studii pro projekt nebo úřad, zadání tomu přizpůsobíme."],
        links: [{ label: "Rozptylové studie", href: "/sluzby/rozptylove-studie" }, { label: "Hlukové studie", href: "/sluzby/hlukove-studie" }]
      }
    ]
  },
  "provozni-rady": {
    evidence: practiceNote("operatingRules"),
    faqItems: [
      {
        q: "Pro jaké provozy připravujete provozní řády?",
        paragraphs: ["Tato služba se zaměřuje na provozní řády zdrojů znečišťování ovzduší. Rozsah odvozujeme od technologie, povolení provozu a skutečných provozních podmínek."]
      },
      {
        q: "Co potřebujete k aktualizaci provozního řádu?",
        paragraphs: ["Dosavadní provozní řád, platné povolení, technický popis změny a poslední měření emisí. Doplňte údaje o palivu, filtraci, výduších a provozním režimu."]
      },
      {
        q: "Lze provozní řád sladit s posudkem a měřením?",
        paragraphs: ["Ano. Propojíme provozní dokumentaci s dohodnutými měřicími a odbornými podklady, aby jednotlivé výstupy vycházely ze stejných údajů o zdroji."]
      }
    ],
    relatedLinks: [
      { title: "Provozní řád zdroje znečišťování ovzduší", href: "/poradna/provozni-rad-zdroje-znecistovani-ovzdusi", description: "Návaznost řádu na technologii a povolení provozu." }
    ]
  },
  "eia-oznameni-zameru": {
    evidence: practiceNote("eiaRecycling"),
    faqItems: [
      {
        q: "Potřebujeme celé oznámení EIA, nebo pouze jeho odborné přílohy?",
        paragraphs: ["Uveďte stav projektu a co již máte zpracováno. Zajišťujeme oznámení záměru i dohodnuté odborné přílohy; v nabídce rozlišíme samostatné studie a koordinaci dokumentace."],
        links: [{ label: "Podklady pro zjišťovací řízení", href: "/sluzby/zjistovaci-rizeni-eia" }]
      },
      {
        q: "Co Vám poslat k nabídce zpracování oznámení záměru?",
        paragraphs: ["Popis a umístění záměru, kapacitu, technologické údaje a aktuální projekt. Přiložte údaje o provozu a dopravě, dosavadní studie a požadavky úřadů."]
      },
      {
        q: "Kde si můžeme ověřit Vaše odborná oprávnění?",
        paragraphs: ["Na stránce akreditací a oprávnění jsou dostupné příslušné dokumenty. Při poptávce potvrdíme odborný rozsah odpovídající konkrétnímu zadání."],
        links: [{ label: "Akreditace a oprávnění", href: "/akreditace-autorizace-dokumenty" }]
      }
    ]
  },
  "ispop": {
    evidence: practiceNote("ispopIndustry"),
    faqItems: [
      {
        q: "Zajišťujete zpracování i podání hlášení do ISPOP?",
        paragraphs: ["Ano. Zpracujeme dohodnuté hlášení a zajistíme podání za klienta. Uveďte konkrétní agendu a ohlašovaný rok, abychom potvrdili rozsah zakázky a potřebné podklady."]
      },
      {
        q: "Co potřebujete pro přípravu souhrnné provozní evidence?",
        paragraphs: ["Povolení provozu, poslední měření, provozní hodiny a spotřeby paliv nebo surovin za dané období. Přiložte předchozí hlášení a popis změn zdroje."]
      },
      {
        q: "Je příprava podkladů totéž jako podání hlášení za provozovatele?",
        paragraphs: ["Jde o odlišné úkony; můžeme zajistit oba. Pro podání za provozovatele je třeba odpovídající vazba a zmocnění v systému. Rozsah zastoupení dohodneme předem; přihlašovací hesla do poptávky neposílejte."],
        links: [{ label: "Oficiální nápověda ISPOP", href: "https://www.ispop.cz/casto-kladene-dotazy-faq/" }]
      }
    ],
    relatedLinks: [
      { title: "Chyby v souhrnné provozní evidenci", href: "/poradna/chyby-souhrnna-provozni-evidence", description: "Kontrola návaznosti údajů o zdroji, měření a provozu." }
    ]
  },
  "ghg-overovani": {
    evidence: practiceNote("ghgData"),
    faqItems: [
      {
        q: "Zajišťujete výpočet emisí skleníkových plynů a uhlíkové stopy?",
        paragraphs: ["Ano. Připravujeme výpočty emisí GHG a uhlíkové stopy a kontrolujeme vstupní údaje i výpočtové listy. Rozsah a metodiku dohodneme podle účelu požadovaného výstupu."]
      },
      {
        q: "Co potřebujete pro kontrolu emisních výpočtů?",
        paragraphs: ["Metodiku, vstupní data, spotřeby paliv nebo surovin a výpočtové listy. Doplňte sledované období, provozní změny a požadavek příjemce výstupu."]
      },
      {
        q: "Je kontrola dat totéž jako akreditované ověření výkazu EU ETS?",
        paragraphs: ["Ne. Připravujeme a kontrolujeme výpočty a údaje, ale neposkytujeme nezávislé akreditované ověření výkazu EU ETS. Pro tento výstup je třeba příslušný akreditovaný ověřovatel."],
        links: [{ label: "ČIA: akreditovaní ověřovatelé", href: "https://www.cai.cz/?page_id=4499&kategorie_subjektu=overovatele-vykazu-emisi-sklenikovych-plyn" }]
      }
    ]
  },
  "chemicke-latky": {
    evidence: practiceNote("chemicalReview"),
    faqItems: [
      {
        q: "Co zahrnuje poradenství k chemickým látkám v provozu?",
        paragraphs: ["Návaznost používaných látek na skladování, označování, manipulaci a interní pravidla. Vycházíme z bezpečnostních listů a skutečných pracovních činností."]
      },
      {
        q: "Jaké podklady potřebujete k posouzení provozu?",
        paragraphs: ["Seznam látek a směsí, bezpečnostní listy, fotografie štítků a popis skladování a používání. Pošlete také interní pravidla nebo konkrétní kontrolní zjištění."]
      },
      {
        q: "Lze řešit dokumentaci a školení ve stejné zakázce?",
        paragraphs: ["Ano. Kontrolu bezpečnostních listů a provozních pravidel lze propojit s dohodnutým školením zaměstnanců. Rozsah nastavíme podle Vašeho provozu."],
        links: [{ label: "Bezpečnostní listy", href: "/sluzby/bezpecnostni-listy" }, { label: "Školení chemické legislativy", href: "/sluzby/skoleni-chemicke-legislativy" }]
      }
    ]
  },
  "skoleni-chemicke-legislativy": {
    faqItems: [
      {
        q: "Pro koho je školení chemické legislativy určeno?",
        paragraphs: ["Pro pracovníky provozů, skladů a laboratoří, vedoucí směn, podnikové ekology a osoby řešící BOZP. Témata vztáhneme ke skutečně používaným látkám a pracovním činnostem."]
      },
      {
        q: "Co potřebujete pro nabídku firemního školení?",
        paragraphs: ["Okruh účastníků, popis provozu a požadovaná témata. Přiložte používané bezpečnostní listy a interní pravidla; formu, termín a rozsah dohodneme pro konkrétní zakázku."]
      },
      {
        q: "Může školení vycházet z našich bezpečnostních listů a postupů?",
        paragraphs: ["Ano. Bezpečnostní listy, označování a pravidla manipulace mohou tvořit podklad pro praktická témata školení. Uveďte také nejasnosti nebo zjištění, která potřebujete řešit."]
      }
    ]
  },
  "odborne-posudky": {
    evidence: permitEvidence
  },
  "mereni-diisokyanatu": {
    evidence: practiceNote("diisocyanates")
  },
  "pracovni-prostredi": {
    evidence: practiceNote("diisocyanates")
  }
};

export function getCzechServiceSearchSupport(slug: string): ServiceSearchSupport | undefined {
  return czechServiceSearchSupport[slug.split("/").pop() ?? slug];
}
