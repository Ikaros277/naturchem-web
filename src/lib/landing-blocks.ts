import type { Locale } from "@/lib/i18n/locales";

/**
 * Shared, owner-approved copy blocks for the "demand" landing pages (Excel review, 11 Oct 2026).
 * Every sentence below was approved or edited by the owner; do not reword without re-approval.
 */
export type LandingTopic = "emise" | "hluk" | "pracovni" | "studie";

export const landingTopics: Record<string, LandingTopic> = {
  "mereni-emisi-kotelen": "emise",
  "mereni-emisi-lakoven": "emise",
  "mereni-emisi-bioplynovych-stanic": "emise",
  "mereni-emisi-drevozpracujicich-provoze": "emise",
  "mereni-emisi-susaren": "emise",
  "mereni-emisi-dieselagregat": "emise",
  "mereni-tezkych-kovu-emise": "emise",
  "autorizovana-osoba-mereni-emisi": "emise",
  "ispop-rocni-hlaseni-emise": "emise",
  "podklady-pro-cizp": "emise",
  "mereni-hluku-tepelneho-cerpadla-vzt": "hluk",
  "mereni-hluku-ceske-budejovice": "hluk",
  "mereni-hluku-havlickuv-brod": "hluk",
  "mereni-hluku-praha": "hluk",
  "mereni-hluku-ke-kolaudaci": "hluk",
  "mereni-pracovniho-prostredi-kategorizace-praci": "pracovni",
  "podklady-pro-khs": "pracovni",
  "mereni-prasnosti": "pracovni",
  "mereni-pro-kolaudaci": "pracovni",
  "mereni-nove-haly": "pracovni",
  "rozptylova-studie-povoleni": "studie",
  "odborny-posudek-zdroj-znecistovani": "studie",
  "pro-stavebni-firmy": "studie"
};

/** Pages where the extra FAQ about price, report delivery and coverage is added (emission measurement). */
const extraFaqTopics: readonly LandingTopic[] = ["emise"];
const extraFaqExcluded = new Set(["ispop-rocni-hlaseni-emise", "podklady-pro-cizp"]);

type Faq = { question: string; answer: string };

type Blocks = {
  termsEyebrow: string;
  termsTitle: string;
  price: { title: string; text: string };
  timing: { title: string; text: string };
  scope: { title: string; text: string };
  sendTitle: string;
  send: Record<LandingTopic, string>;
  credentials: { eyebrow: string; title: string; text: string; link: string };
  breadth: { text: string; linkLabel: string };
  measured: { eyebrow: string; title: string; emise: string; pracovni: string; hluk: string };
  faq: { price: Faq; protocol: Faq; nationwide: Faq };
};

const cs: Blocks = {
  termsEyebrow: "Cena a termín",
  termsTitle: "Cena, termín a rozsah měření",
  price: {
    title: "Cena a nabídka",
    text: "Cena závisí na počtu měřených zdrojů a látek, na obtížnosti měřicích míst a na vzdálenosti. Pošlete nám podklady a připravíme nezávaznou nabídku. Ozveme se do 24 hodin."
  },
  timing: {
    title: "Termín a protokol",
    text: "Termín měření domluvíme podle Vašeho provozu a požadavku úřadu. Termín dodání protokolu uvedeme v nabídce."
  },
  scope: {
    title: "Co určuje rozsah",
    text: "Rozsah a četnost měření neurčujeme my, ale povolení provozu, rozhodnutí úřadu nebo výzva KHS či ČIŽP. Pošlete nám je a ověříme, co přesně se po Vás požaduje."
  },
  sendTitle: "Do poptávky přiložte",
  send: {
    emise:
      "Povolení provozu a případný provozní řád, poslední protokol z měření, přehled zdrojů a výduchů (schéma nebo fotografie) a popis provozního režimu. Chybějící podklady s Vámi doplníme.",
    hluk:
      "Adresu, popis zdrojů hluku a jejich provozní dobu, požadavek úřadu nebo podmínky povolení, technické listy zařízení a situaci nebo fotografie.",
    pracovni:
      "Výzvu KHS nebo požadavek zaměstnavatele, seznam pracovišť a profesí, popis činností a směn, seznam používaných látek (bezpečnostní listy) a dřívější protokoly nebo kategorizaci.",
    studie:
      "Popis záměru a zdrojů, situaci a umístění areálu, parametry technologií a výduchů, provozní dobu a stanovisko úřadu, pokud ho máte."
  },
  credentials: {
    eyebrow: "Oprávnění",
    title: "Naše oprávnění",
    text: "Akreditovaná zkušební laboratoř č. 1599 (ČSN EN ISO/IEC 17025:2018, osvědčení o akreditaci č. 562/2023, platnost do 26. 10. 2028). Autorizace pro odborné posudky v ochraně ovzduší, rozptylové studie, EIA.",
    link: "Zobrazit doklady"
  },
  breadth: {
    text: "Stejný postup používáme u dalších zdrojů: kotelen, lakoven, sušáren, bioplynových stanic, dieselagregátů, dřevozpracujících provozů, galvanoven i dalších technologií. Přehled najdete v části",
    linkLabel: "Provozy a technologie"
  },
  measured: {
    eyebrow: "Rozsah měření",
    title: "Co v rámci akreditace měříme",
    emise:
      "V rozsahu akreditace měříme tuhé znečišťující látky (TZL) izokineticky, NOx, CO, SO₂ a O₂ analyzátory, TOC a VOC, HCl a anorganické sloučeniny chloru, těžké kovy (As, Be, Cd, Cr, Co, Cu, Mn, Ni, Pb, Sb, Se, Sn, Te, Tl, V, Zn, Al, Fe, Si, Hg) a vlhkost, rychlost proudění a objemový tok plynu. Konkrétní rozsah určuje povolení Vašeho provozu.",
    pracovni:
      "V rozsahu akreditace měříme vdechovatelnou a respirabilní frakci prachu, organické látky (benzen, toluen, xylen, styren, acetáty, chlorovaná rozpouštědla), krátkodobě chemické látky detekčními trubicemi, mikroklima, vibrace, umělé osvětlení a hluk v pracovním prostředí.",
    hluk: "Měříme hluk v mimopracovním prostředí (LAeq, LAFmax podle ČSN ISO 1996) i hluk v pracovním prostředí. Před nabídkou ověříme, že požadovaná metoda spadá do akreditovaného rozsahu."
  },
  faq: {
    price: {
      question: "Kolik stojí měření emisí?",
      answer:
        "Cena závisí na počtu zdrojů a měřených látek, na měřicích místech a na vzdálenosti. Po zaslání podkladů Vám připravíme nezávaznou nabídku."
    },
    protocol: {
      question: "Za jak dlouho dostanu protokol?",
      answer:
        "Termín dodání protokolu uvedeme v nabídce podle rozsahu měření. Data z protokolu se do ISPOP oznamují do 60 dnů prostřednictvím formuláře F_OVZ_JME."
    },
    nationwide: {
      question: "Měříte v celé ČR?",
      answer:
        "Ano. Terénní měření emisí, pracovního prostředí, hluku a dalších veličin zajišťujeme v celé ČR. Máme pracoviště v Českých Budějovicích, Praze 5 a Havlíčkově Brodě."
    }
  }
};

const en: Blocks = {
  termsEyebrow: "Price and timing",
  termsTitle: "Price, timing and scope of measurement",
  price: {
    title: "Price and quote",
    text: "The price depends on the number of sources and substances measured, the difficulty of the measuring points and the distance. Send us your documents and we will prepare a non-binding quote. We will get back to you within 24 hours."
  },
  timing: {
    title: "Date and report",
    text: "We agree the measurement date according to your operation and the authority's requirement. The delivery date of the report will be stated in the quote."
  },
  scope: {
    title: "What determines the scope",
    text: "The scope and frequency of measurement are not set by us, but by the operating permit, the authority's decision or a request from the hygiene station (KHS) or the Czech Environmental Inspectorate (ČIŽP). Send them to us and we will verify exactly what is required of you."
  },
  sendTitle: "Include in your inquiry",
  send: {
    emise:
      "The operating permit and any operating rules, the latest measurement report, an overview of sources and stacks (diagram or photographs) and a description of the operating regime. We will clarify any missing documents with you.",
    hluk:
      "The address, a description of the noise sources and their operating hours, the authority's requirement or the permit conditions, technical data sheets of the equipment and a site plan or photographs.",
    pracovni:
      "The hygiene station's request or the employer's requirement, a list of workplaces and jobs, a description of activities and shifts, a list of substances used (safety data sheets) and earlier reports or job categorisation.",
    studie:
      "A description of the project and sources, the site plan and location of the premises, parameters of technologies and stacks, operating hours and the authority's opinion, if you have it."
  },
  credentials: {
    eyebrow: "Credentials",
    title: "Our authorisations",
    text: "Accredited testing laboratory No. 1599 (ČSN EN ISO/IEC 17025:2018, accreditation certificate No. 562/2023, valid until 26 October 2028). Authorisations for expert reports in air protection, dispersion studies, EIA.",
    link: "View the documents"
  },
  breadth: {
    text: "We use the same procedure for other sources: boiler plants, paint shops, dryers, biogas plants, diesel generator sets, wood-processing plants, electroplating shops and other technologies. You will find the overview under",
    linkLabel: "Facilities and technologies"
  },
  measured: {
    eyebrow: "Measurement scope",
    title: "What we measure within our accreditation",
    emise:
      "Within our accreditation we measure solid particulate matter (TZL) isokinetically, NOx, CO, SO₂ and O₂ with analysers, TOC and VOC, HCl and inorganic chlorine compounds, heavy metals (As, Be, Cd, Cr, Co, Cu, Mn, Ni, Pb, Sb, Se, Sn, Te, Tl, V, Zn, Al, Fe, Si, Hg) and gas moisture, velocity and volume flow. The specific scope is determined by the permit for your operation.",
    pracovni:
      "Within our accreditation we measure the inhalable and respirable dust fractions, organic substances (benzene, toluene, xylene, styrene, acetates, chlorinated solvents), short-term chemical substances with detector tubes, microclimate, vibration, artificial lighting and noise in the working environment.",
    hluk: "We measure noise in the non-occupational environment (LAeq, LAFmax according to ČSN ISO 1996) as well as noise in the working environment. Before quoting, we confirm that the required method falls within the accredited scope."
  },
  faq: {
    price: {
      question: "How much does emission measurement cost?",
      answer:
        "The price depends on the number of sources and substances measured, the measuring points and the distance. After receiving your documents we will prepare a non-binding quote."
    },
    protocol: {
      question: "How soon will I receive the report?",
      answer:
        "The delivery date of the report will be stated in the quote according to the scope of measurement. Data from the report are notified to ISPOP within 60 days using form F_OVZ_JME."
    },
    nationwide: {
      question: "Do you measure throughout the Czech Republic?",
      answer:
        "Yes. We carry out on-site measurement of emissions, the working environment, noise and other quantities throughout the Czech Republic. We have offices in České Budějovice, Prague 5 and Havlíčkův Brod."
    }
  }
};

const de: Blocks = {
  termsEyebrow: "Preis und Termin",
  termsTitle: "Preis, Termin und Messumfang",
  price: {
    title: "Preis und Angebot",
    text: "Der Preis hängt von der Anzahl der gemessenen Quellen und Stoffe, vom Schwierigkeitsgrad der Messstellen und von der Entfernung ab. Senden Sie uns Ihre Unterlagen, und wir erstellen ein unverbindliches Angebot. Wir melden uns innerhalb von 24 Stunden."
  },
  timing: {
    title: "Termin und Protokoll",
    text: "Den Messtermin vereinbaren wir nach Ihrem Betrieb und der Anforderung der Behörde. Den Liefertermin des Protokolls nennen wir im Angebot."
  },
  scope: {
    title: "Was den Umfang bestimmt",
    text: "Umfang und Häufigkeit der Messung legen nicht wir fest, sondern die Betriebsgenehmigung, die Entscheidung der Behörde oder die Aufforderung der Hygienestation (KHS) oder der tschechischen Umweltinspektion (ČIŽP). Senden Sie sie uns, und wir prüfen, was genau von Ihnen verlangt wird."
  },
  sendTitle: "Bitte der Anfrage beifügen",
  send: {
    emise:
      "Die Betriebsgenehmigung und gegebenenfalls die Betriebsordnung, das letzte Messprotokoll, eine Übersicht der Quellen und Abluftkamine (Schema oder Fotos) und eine Beschreibung des Betriebszustands. Fehlende Unterlagen klären wir mit Ihnen.",
    hluk:
      "Die Adresse, eine Beschreibung der Lärmquellen und ihrer Betriebszeiten, die Anforderung der Behörde oder die Genehmigungsbedingungen, technische Datenblätter der Anlagen sowie einen Lageplan oder Fotos.",
    pracovni:
      "Die Aufforderung der Hygienestation oder die Anforderung des Arbeitgebers, eine Liste der Arbeitsplätze und Berufe, eine Beschreibung der Tätigkeiten und Schichten, eine Liste der verwendeten Stoffe (Sicherheitsdatenblätter) und frühere Protokolle oder die Kategorisierung.",
    studie:
      "Eine Beschreibung des Vorhabens und der Quellen, den Lageplan und die Lage des Betriebsgeländes, die Parameter der Technologien und Abluftkamine, die Betriebszeiten und die Stellungnahme der Behörde, falls vorhanden."
  },
  credentials: {
    eyebrow: "Befugnisse",
    title: "Unsere Zulassungen",
    text: "Akkreditiertes Prüflabor Nr. 1599 (ČSN EN ISO/IEC 17025:2018, Akkreditierungsurkunde Nr. 562/2023, gültig bis 26. 10. 2028). Autorisierungen für Fachgutachten zur Luftreinhaltung, Ausbreitungsstudien, UVP.",
    link: "Dokumente ansehen"
  },
  breadth: {
    text: "Dasselbe Vorgehen wenden wir bei weiteren Quellen an: Kesselanlagen, Lackierereien, Trockner, Biogasanlagen, Dieselaggregate, holzverarbeitende Betriebe, Galvaniken und weitere Technologien. Eine Übersicht finden Sie unter",
    linkLabel: "Betriebe und Technologien"
  },
  measured: {
    eyebrow: "Messumfang",
    title: "Was wir im Rahmen der Akkreditierung messen",
    emise:
      "Im Rahmen unserer Akkreditierung messen wir Staub (TZL) isokinetisch, NOx, CO, SO₂ und O₂ mit Analysatoren, TOC und VOC, HCl und anorganische Chlorverbindungen, Schwermetalle (As, Be, Cd, Cr, Co, Cu, Mn, Ni, Pb, Sb, Se, Sn, Te, Tl, V, Zn, Al, Fe, Si, Hg) sowie Gasfeuchte, Strömungsgeschwindigkeit und Volumenstrom. Den konkreten Umfang bestimmt die Genehmigung Ihres Betriebs.",
    pracovni:
      "Im Rahmen unserer Akkreditierung messen wir die einatembare und die alveolengängige Staubfraktion, organische Stoffe (Benzol, Toluol, Xylol, Styrol, Acetate, chlorierte Lösungsmittel), kurzzeitig chemische Stoffe mit Prüfröhrchen, Mikroklima, Vibrationen, künstliche Beleuchtung und Lärm am Arbeitsplatz.",
    hluk: "Wir messen Lärm in der Umgebung außerhalb des Arbeitsplatzes (LAeq, LAFmax nach ČSN ISO 1996) sowie Lärm am Arbeitsplatz. Vor dem Angebot bestätigen wir, dass die geforderte Methode in den akkreditierten Bereich fällt."
  },
  faq: {
    price: {
      question: "Was kostet eine Emissionsmessung?",
      answer:
        "Der Preis hängt von der Anzahl der Quellen und gemessenen Stoffe, den Messstellen und der Entfernung ab. Nach Erhalt Ihrer Unterlagen erstellen wir ein unverbindliches Angebot."
    },
    protocol: {
      question: "Wann erhalte ich das Protokoll?",
      answer:
        "Den Liefertermin des Protokolls nennen wir im Angebot je nach Messumfang. Die Daten aus dem Protokoll werden innerhalb von 60 Tagen über das Formular F_OVZ_JME im ISPOP gemeldet."
    },
    nationwide: {
      question: "Messen Sie in ganz Tschechien?",
      answer:
        "Ja. Vor-Ort-Messungen von Emissionen, Arbeitsumgebung, Lärm und weiteren Größen führen wir in ganz Tschechien durch. Wir haben Standorte in České Budějovice, Prag 5 und Havlíčkův Brod."
    }
  }
};

const blocks: Record<Locale, Blocks> = { cs, en, de };

export function getLandingBlocks(locale: Locale): Blocks {
  return blocks[locale];
}

export function getLandingTopic(slug: string): LandingTopic | undefined {
  return landingTopics[slug];
}

/** Extra FAQ items (price, report delivery, coverage) appended to emission-measurement landings. */
export function getExtraLandingFaq(slug: string, locale: Locale): Faq[] {
  const topic = getLandingTopic(slug);
  if (!topic || !extraFaqTopics.includes(topic) || extraFaqExcluded.has(slug)) return [];
  const { faq } = blocks[locale];
  return [faq.price, faq.protocol, faq.nationwide];
}
