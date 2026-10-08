export type ServiceEvidence = { title: string; summary: string; output: string };

type ArchivedPractice = ServiceEvidence & {
  id: string;
  slug: string;
  operationType: string;
  tags: string[];
  contactService: string;
};

/**
 * Anonymized scope checked against original work products, not just order descriptions.
 * Private source locators and client identities stay in the owner's evidence register.
 * A prepared application is not an authority's approval; historic documents are not current guidance.
 */
export const archivedPractice = {
  ippcBio: {
    id: "ippc-bioodpad", slug: "ippc-integrovana-povoleni",
    title: "Integrované povolení pro zpracování biologických odpadů",
    summary: "Zpracovali jsme žádost o integrované povolení pro zařízení ke zpracování biologických odpadů, včetně popisu technologie a souvisejících odborných podkladů.",
    output: "Žádost o integrované povolení s přehledem odborných příloh.",
    operationType: "zařízení pro zpracování biologických odpadů", tags: ["IPPC", "Odpady"], contactService: "IPPC"
  },
  ippcLandfill: {
    id: "ippc-skladka", slug: "ippc-integrovana-povoleni",
    title: "Změna integrovaného povolení skládky",
    summary: "Připravili jsme žádost o změnu integrovaného povolení skládky s popisem zařízení, provozních podmínek a souvisejících vlivů na životní prostředí.",
    output: "Zpracovaná žádost o změnu IPPC a související podklady.",
    operationType: "odpadové zařízení — skládka", tags: ["IPPC", "Odpady"], contactService: "IPPC"
  },
  safetySheets: {
    id: "bezpecnostni-listy-smesi", slug: "bezpecnostni-listy",
    title: "Bezpečnostní listy stavebních směsí",
    summary: "Připravili jsme bezpečnostní listy pro spárovací hmotu a šamotovou maltu, včetně údajů o používání, zacházení a skladování.",
    output: "Zpracované bezpečnostní listy jednotlivých směsí.",
    operationType: "stavební směsi", tags: ["Bezpečnostní listy", "Chemické látky"], contactService: "Bezpečnostní listy"
  },
  chemicalReview: {
    id: "chemie-lepidla", slug: "chemicke-latky",
    title: "Posouzení lepidel v dřevozpracujícím provozu",
    summary: "Posoudili jsme bezpečnostní listy používaných lepidel a jejich souvislost s manipulací a pracovním prostředím. Připravili jsme písemné hodnocení a doporučení pro výběr směsí.",
    output: "Písemné hodnocení směsí a doporučení pro provoz.",
    operationType: "dřevozpracující provoz", tags: ["Chemické látky", "Bezpečnostní listy"], contactService: "Chemické látky"
  },
  ispopIndustry: {
    id: "ispop-vice", slug: "ispop",
    title: "ISPOP pro průmyslový areál",
    summary: "Zpracovali jsme souhrnnou provozní evidenci kotelen a technologie povrchové úpravy a podali hlášení do ISPOP. Podání je doložené potvrzením ze systému.",
    output: "Hlášení souhrnné provozní evidence a potvrzení podání.",
    operationType: "průmyslový areál s kotelnami a povrchovou úpravou", tags: ["ISPOP", "Ovzduší"], contactService: "ISPOP"
  },
  ispopMunicipal: {
    id: "ispop-kotelna-obce", slug: "ispop",
    title: "ISPOP pro obecní kotelnu na biomasu",
    summary: "Připravili jsme souhrnnou provozní evidenci kotelny na biomasu a podali hlášení do ISPOP. Podání je doložené potvrzením ze systému.",
    output: "Roční hlášení a potvrzení podání do ISPOP.",
    operationType: "obecní kotelna", tags: ["ISPOP", "Kotelny"], contactService: "ISPOP"
  },
  ghgData: {
    id: "ghg-overovani", slug: "ghg-overovani",
    title: "Kontrola energetických dat a přepočet emisí GHG",
    summary: "Zrevidovali jsme energetická data výrobního podniku a související emisní výpočty pro nakoupenou elektřinu. Výstup zahrnoval výpočtový soubor a vysvětlení změn. Nejde o akreditované ověření EU ETS.",
    output: "Výpočtový soubor a písemné vysvětlení úprav emisních dat.",
    operationType: "výrobní podnik", tags: ["GHG", "Emisní data"], contactService: "GHG"
  },
  eiaRecycling: {
    id: "eia-recyklace-kovu", slug: "eia-oznameni-zameru",
    title: "Oznámení záměru pro recyklaci kovů",
    summary: "Zpracovali jsme aktualizované oznámení záměru pro tepelné zpracování kovového recyklátu. Dokument zahrnul popis technologie, vlivy na okolí a vypořádání připomínek k původnímu oznámení.",
    output: "Aktualizované oznámení záměru EIA.",
    operationType: "provoz materiálového využití kovů", tags: ["EIA", "Recyklace"], contactService: "EIA a oznámení záměru"
  },
  operatingRules: {
    id: "provozni-rad-odpady", slug: "provozni-rady",
    title: "Aktualizace provozního řádu zkušebních pecí",
    summary: "Aktualizovali jsme provozní řád požární zkušebny se zkušebními pecemi. Dokument popisuje technologii, provozní evidenci a postupy při mimořádných stavech.",
    output: "Aktualizovaný provozní řád zdroje znečišťování ovzduší.",
    operationType: "požární zkušebna", tags: ["Provozní řád", "Ovzduší"], contactService: "Provozní řády"
  },
  diisocyanates: {
    id: "lakovna-diisokyanaty", slug: "mereni-diisokyanatu",
    title: "Pracovní ovzduší v lakovně s dvousložkovými nátěry",
    summary: "V lakovně jsme provedli odběry pro stanovení diisokyanátů a organických látek při běžném provozu s dvousložkovými nátěry.",
    output: "Protokol z měření pracovního ovzduší.",
    operationType: "lakovna ve výrobním závodě", tags: ["Diisokyanáty", "Pracovní prostředí"], contactService: "Měření pracovního prostředí"
  },
  dieselPermit: {
    id: "povoleni-motorgenerator", slug: "povoleni-provozu",
    title: "Podklady k povolení dieselového motorgenerátoru",
    summary: "Zpracovali jsme odborný posudek a žádost o změnu povolení provozu pro nový dieselový motorgenerátor ve výrobním areálu.",
    output: "Odborný posudek a žádost o změnu povolení provozu.",
    operationType: "motorgenerátor ve výrobním areálu", tags: ["Povolení provozu", "Odborný posudek"], contactService: "Odborné posudky"
  }
} satisfies Record<string, ArchivedPractice>;

export function practiceNote(key: keyof typeof archivedPractice): ServiceEvidence {
  const item = archivedPractice[key];
  return { title: item.title, summary: item.summary, output: item.output };
}
