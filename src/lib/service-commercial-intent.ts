/** Short visible offers based on existing service scope and owner-confirmed capabilities. */
export type ServiceCommercialIntent = {
  heading: string;
  features: readonly { title: string; text: string }[];
  quoteBasis: string;
  contactMessage: string;
  articlePrompt: string;
};

export const serviceCommercialIntent: Record<string, ServiceCommercialIntent> = {
  "mereni-osvetleni": {
    heading: "Měření osvětlení a protokol",
    features: [
      { title: "Pracovní místa i celý prostor", text: "Umělé a denní osvětlení ve výrobě, skladech a kancelářích. Také venkovní umělé osvětlení." },
      { title: "Rozsah podle účelu měření", text: "Zohledníme pracovní činnosti, rozmístění pracovišť a zadání pro KHS, kolaudaci nebo interní kontrolu." },
      { title: "Výsledky s vyhodnocením", text: "Předáme protokol s měřicími místy, podmínkami a výsledky. Při nedostatcích doporučíme úpravy osvětlení." },
    ],
    quoteBasis: "Rozsah a cenu určíme podle počtu prostorů, pracovních míst a typu osvětlení.",
    contactMessage: "Poptávám měření osvětlení. Místo, pracovní činnosti a účel měření: ",
    articlePrompt: "Pro nabídku měření osvětlení nám pošlete půdorys, popis práce a případný požadavek KHS.",
  },
  "bezpecnostni-listy": {
    heading: "Nový bezpečnostní list nebo revize",
    features: [
      { title: "Zpracování nového listu", text: "Vypracujeme bezpečnostní list látky nebo směsi z podkladů k produktu a jeho složení." },
      { title: "Revize stávající dokumentace", text: "Zkontrolujeme dodaný bezpečnostní list a údaje pro označování. Doplníme potřebné úpravy." },
      { title: "Používání chemie v provozu", text: "Zkontrolujeme souvislost bezpečnostního listu s označováním, skladováním a pracovními postupy." },
    ],
    quoteBasis: "Cenu určíme podle počtu produktů, požadované úpravy a dostupnosti údajů o složení.",
    contactMessage: "Poptávám zpracování nebo revizi bezpečnostního listu. Produkt, počet listů a dostupné podklady: ",
    articlePrompt: "Potřebujete nový bezpečnostní list nebo revizi? Uveďte produkt a dostupné podklady ke složení.",
  },
  "ispop": {
    heading: "Evidence, hlášení a podání do ISPOP",
    features: [
      { title: "Kontrola provozních údajů", text: "Porovnáme evidenci s povolením provozu, měřením emisí a skutečným stavem zdrojů." },
      { title: "Zpracování hlášení", text: "Připravíme souhrnnou provozní evidenci nebo další dohodnuté hlášení. Předem vymezíme agendu a ohlašovaný rok." },
      { title: "Podání za provozovatele", text: "Se zmocněním zajistíme podání do ISPOP. K odeslanému hlášení předáme potvrzení podání." },
    ],
    quoteBasis: "Pro nabídku potřebujeme ohlašovaný rok, agendu a přehled zdrojů. Rozsah podání a zastoupení dohodneme předem.",
    contactMessage: "Poptávám zpracování a podání hlášení do ISPOP. Agenda, ohlašovaný rok a provozovna: ",
    articlePrompt: "Zajistíme zpracování i podání do ISPOP. Napište agendu, ohlašovaný rok a provozovnu; přiložte předchozí hlášení.",
  },
  "ghg-overovani": {
    heading: "Výpočet uhlíkové stopy a kontrola dat",
    features: [
      { title: "Zadání a hranice výpočtu", text: "Vymezíme provoz, sledované období a požadovaný výstup pro odběratele, investora nebo interní potřebu." },
      { title: "Výpočet emisí GHG", text: "Zkontrolujeme spotřeby, emisní faktory a návaznost na provozní data. Vypočítáme emise v dohodnutém rozsahu." },
      { title: "Doložitelný výpočtový podklad", text: "Předáme výpočet s přehledem vstupů a metodiky. U kontroly stávajících dat vysvětlíme zjištěné nesoulady." },
    ],
    quoteBasis: "Pošlete požadavek odběratele nebo zadání, sledované období a dostupná data. Nezajišťujeme nezávislé akreditované ověření EU ETS.",
    contactMessage: "Poptávám výpočet uhlíkové stopy nebo kontrolu emisních dat GHG. Účel, sledované období a dostupná data: ",
    articlePrompt: "Pro výpočet emisí GHG nebo uhlíkové stopy pošlete zadání, sledované období a údaje o spotřebách. Akreditované ověření EU ETS neposkytujeme.",
  },
  "hlukove-studie": {
    heading: "Zpracování hlukové studie",
    features: [
      { title: "Záměr a zdroje hluku", text: "Průmyslové areály, technologie, VZT, tepelná čerpadla a doprava. Zohledníme denní i noční provoz." },
      { title: "Výpočet a varianty", text: "Posoudíme vliv záměru na okolí. Podle zadání porovnáme umístění zdrojů a protihluková opatření." },
      { title: "Studie pro povolování", text: "Předáme hlukovou studii s výpočtem a vyhodnocením pro KHS, stavební úřad nebo jako přílohu EIA." },
    ],
    quoteBasis: "Cena závisí na počtu zdrojů, variantách a rozsahu posouzení okolí.",
    contactMessage: "Poptávám zpracování hlukové studie. Záměr, zdroje hluku, provozní režim a požadavek úřadu: ",
    articlePrompt: "Pro nabídku hlukové studie pošlete situaci záměru, technické listy zdrojů a denní i noční režim.",
  },
  "rozptylove-studie": {
    heading: "Zpracování rozptylové studie",
    features: [
      { title: "Zdroje a emisní vstupy", text: "Kotelny, lakovny a další stacionární zdroje. Propojíme parametry výduchů, emise a provozní režim." },
      { title: "Imisní příspěvek záměru", text: "Vypočítáme dopad zdrojů na kvalitu ovzduší v okolí. Podle zadání porovnáme varianty technologie nebo provozu." },
      { title: "Studie pro úřad či EIA", text: "Předáme rozptylovou studii s použitými vstupy, výsledky a vyhodnocením pro požadovaný účel." },
    ],
    quoteBasis: "Cena závisí na počtu zdrojů, hodnocených látkách a posuzovaných variantách.",
    contactMessage: "Poptávám zpracování rozptylové studie. Záměr, zdroje emisí, výduchy a účel studie: ",
    articlePrompt: "Pro nabídku rozptylové studie pošlete situaci, parametry zdrojů a výduchů a dostupné emisní údaje.",
  },
  "ippc-integrovana-povoleni": {
    heading: "Žádost o IPPC a podání za klienta",
    features: [
      { title: "Nové povolení nebo změna", text: "Vymezíme záměr vůči stávajícímu integrovanému povolení a popíšeme technologii a provozní podmínky." },
      { title: "Žádost a odborné přílohy", text: "Zpracujeme žádost a sladíme měření, studie a provozní údaje. Rozsah příloh uvedeme v nabídce." },
      { title: "Podání a doplnění podkladů", text: "Zajistíme podání za klienta a doplnění dokumentace podle připomínek úřadu. Povolení vydává příslušný úřad." },
    ],
    quoteBasis: "Pro nabídku pošlete aktuální povolení, popis zařízení a plánované změny. Nový záměr popište včetně technologie a kapacity.",
    contactMessage: "Poptávám žádost o integrované povolení IPPC nebo jeho změnu. Zařízení a plánovaný záměr: ",
    articlePrompt: "K žádosti nebo změně IPPC nám pošlete popis zařízení, plánovanou změnu a stávající povolení, pokud ho máte.",
  },
};

export function getServiceCommercialIntent(slug: string): ServiceCommercialIntent | undefined {
  return serviceCommercialIntent[slug.split("/").pop() ?? slug];
}
