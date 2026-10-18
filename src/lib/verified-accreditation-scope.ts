/** Checked against all four appendix pages, including analytes and footnote 4.
 * A changed appendix requires a new review; the scope is not flexible.
 */
export const accreditationSource = {
  certificate: "562/2023",
  issued: "2023-10-26",
  reviewed: "2026-10-18",
  profile: "https://www.cai.cz/?subjekt=1599-naturchem-s-r-o",
  appendix: "https://www.cai.cz/OA/pdf/P562_2023_CS.pdf",
  localDocument: "/dokumenty/osvedceni-akreditace-562-2023.pdf",
  localSha256: "c3e91ce207e987caa24f75645244f5d17dd5cba02e98271839021f1c8ebe0718",
} as const;

/** Separate authority, checked in the public MŽP register, not in the ČIA appendix. */
export const emissionAuthorizationSource = {
  number: "MZP/2021/780/1387",
  reviewed: "2026-10-18",
  company: "NATURCHEM, s.r.o.",
  ico: "27504379",
  registry: "https://apps.mzp.cz/www/air-protections-persons.nsf/person.xsp?PID=MZEE8A01MF92",
} as const;

export const authorizedEmissionGroups = [
  { title: "Elektrochemická měření", items: ["NOx a CO elektrochemickými převodníky"] },
  { title: "Základní složky", items: ["SO₂", "NOx", "CO", "TOC", "TZL"] },
  { title: "Kovy", items: ["As, Cd, Hg, Pb", "Cr, Co, Cu, Mn, Ni, Sb, Tl, V", "Be", "Se", "Sn", "Te", "Zn"] },
  { title: "Další anorganické látky", items: ["HCl a chloridy (Cl⁻)", "HF a fluoridy (F⁻)", "NH₃ (amoniak)", "silné anorganické kyseliny (bez SO₂, absorpce do roztoku)"] },
  { title: "Další organické látky", items: ["VOC (těkavé organické sloučeniny)"] },
] as const;

/** Additional customer-facing offer: do not mark these as ČIA-accredited items. */
export const additionalAuthorizedEmissionAnalytes = [
  "HF a fluoridy", "NH₃ (amoniak)", "silné anorganické kyseliny",
] as const;

export const organicAirAnalytes = [
  "benzen", "xylen (izomery)", "styren", "ethylbenzen", "toluen", "ethylacetát",
  "dichlormetan", "chloroform", "trichlorethylen", "tetrachlorethylen",
  "metanol", "etanol", "isopropanol", "aceton", "diethylether", "cyklohexan",
  "benziny", "n-hexan", "n-heptan", "formaldehyd",
] as const;

/** Sirovodík/sulfan are synonyms; the appendix's "nitrogen dioxide" is NO₂. */
export const detectorTubeAnalytes = [
  "oxid uhelnatý (CO)", "oxid uhličitý (CO₂)", "oxidy dusíku (NOx)",
  "oxid siřičitý (SO₂)", "sirovodík (sulfan, H₂S)", "ozon (O₃)",
  "chlorovodík (HCl)", "chlor", "propan-butan", "1-butanol", "acetaldehyd",
  "aceton", "akrolein", "amoniak", "anilin", "benzen", "benzin", "butylacetát",
  "cyklohexanol", "cyklohexanon", "kyselina sírová", "methylethylketon",
  "oxid dusičitý (NO₂)", "propylacetát", "styren", "toluen", "xylen",
] as const;

export const emissionMetalAnalytes = [
  "As", "Be", "Cd", "Cr", "Co", "Cu", "Mn", "Ni", "Pb", "Sb",
  "Se", "Sn", "Te", "Tl", "V", "Zn", "Al", "Fe", "Si", "Hg",
] as const;

type AccreditedActivity = {
  id: string; name: string; kind: "test" | "sampling"; number: number;
  appendixPage: number; externalLaboratory?: boolean;
};

/** Every numbered entry is covered once below. Method identifiers and standard
 * editions remain in the source PDF, not rewritten as current legal guidance.
 */
export const accreditedActivities: readonly AccreditedActivity[] = [
  { id: "test-1", number: 1, kind: "test", appendixPage: 1, name: "Organické látky na pevném sorbentu — výpočet koncentrace", externalLaboratory: true },
  { id: "test-2", number: 2, kind: "test", appendixPage: 1, name: "Vdechovatelná a respirabilní frakce prachu" },
  { id: "test-3", number: 3, kind: "test", appendixPage: 1, name: "Krátkodobé měření chemických látek detekční trubicí" },
  { id: "test-4", number: 4, kind: "test", appendixPage: 1, name: "Mikroklimatické podmínky: teplota, tlak, vlhkost, rychlost proudění" },
  { id: "test-5", number: 5, kind: "test", appendixPage: 1, name: "Vibrace přenášené na ruce a celkové vibrace" },
  { id: "test-6", number: 6, kind: "test", appendixPage: 1, name: "Umělé osvětlení ve vnitřním a venkovním prostředí" },
  { id: "test-7", number: 7, kind: "test", appendixPage: 1, name: "Hluk v pracovním prostředí" },
  { id: "test-8", number: 8, kind: "test", appendixPage: 2, name: "Hluk v mimopracovním prostředí" },
  { id: "test-9", number: 9, kind: "test", appendixPage: 2, name: "Rychlost proudění a objemový tok plynu" },
  { id: "test-10", number: 10, kind: "test", appendixPage: 2, name: "Vlhkost plynu" },
  { id: "test-11", number: 11, kind: "test", appendixPage: 2, name: "Oxid siřičitý a oxid uhelnatý (SO₂, CO)" },
  { id: "test-12", number: 12, kind: "test", appendixPage: 2, name: "Oxidy dusíku (NOx)" },
  { id: "test-13", number: 13, kind: "test", appendixPage: 2, name: "Objemová koncentrace kyslíku (O₂)" },
  { id: "test-14", number: 14, kind: "test", appendixPage: 2, name: "Organické látky jako celkový organický uhlík (TOC)" },
  { id: "test-15", number: 15, kind: "test", appendixPage: 2, name: "Tuhé znečišťující látky (TZL), gravimetricky" },
  { id: "test-16", number: 16, kind: "test", appendixPage: 3, name: "Kovy odebrané do kapaliny — výpočet koncentrace", externalLaboratory: true },
  { id: "test-17", number: 17, kind: "test", appendixPage: 3, name: "Anorganické sloučeniny chloru a HCl — výpočet koncentrace", externalLaboratory: true },
  { id: "test-18", number: 18, kind: "test", appendixPage: 3, name: "Těkavé organické látky (VOC) — výpočet koncentrace", externalLaboratory: true },
  { id: "sampling-1", number: 1, kind: "sampling", appendixPage: 4, name: "Odběr prachu, aerosolu a vláken záchytem na filtr" },
  { id: "sampling-2", number: 2, kind: "sampling", appendixPage: 4, name: "Izokinetický odběr tuhých znečišťujících látek" },
  { id: "sampling-3", number: 3, kind: "sampling", appendixPage: 4, name: "Odběr organických látek na pevný sorbent v pracovním prostředí" },
  { id: "sampling-4", number: 4, kind: "sampling", appendixPage: 4, name: "Izokinetický odběr kovů do kapaliny" },
  { id: "sampling-5", number: 5, kind: "sampling", appendixPage: 4, name: "Odběr anorganických sloučenin chloru a HCl" },
  { id: "sampling-6", number: 6, kind: "sampling", appendixPage: 4, name: "Odběr organických látek na pevný sorbent v emisích" },
];

export type AccreditedScopeKind = "emissions" | "workplace" | "environment";
export type AccreditedScopeGroup = {
  id: string; title: string; summary: string; serviceSummary?: string; activities: readonly string[];
  analytes?: readonly string[]; analytesLabel?: string; qualification?: string;
};

export const verifiedScopeGroups: Record<AccreditedScopeKind, readonly AccreditedScopeGroup[]> = {
  emissions: [
    { id: "gases", title: "Plynné složky", summary: "NOx · CO · SO₂ · O₂", activities: ["test-11", "test-12", "test-13"] },
    { id: "chlorine", title: "Sloučeniny chloru", summary: "HCl a anorganické sloučeniny chloru", activities: ["test-17", "sampling-5"] },
    { id: "organic", title: "Organické látky", summary: "TOC / VOC", activities: ["test-14", "test-18", "sampling-6"] },
    { id: "particles-metals", title: "Tuhé látky a kovy", summary: "TZL · kovy", activities: ["test-15", "test-16", "sampling-2", "sampling-4"], analytes: emissionMetalAnalytes, analytesLabel: "Přehled kovů a dalších prvků" },
    { id: "gas-parameters", title: "Parametry plynu", summary: "Vlhkost · rychlost proudění · objemový tok", activities: ["test-9", "test-10"] },
  ],
  workplace: [
    { id: "dust", title: "Prašnost", summary: "Vdechovatelná a respirabilní frakce prachu", activities: ["test-2"] },
    { id: "organic", title: "Organické látky", summary: "Odběr na pevný sorbent a výpočet koncentrace", serviceSummary: "Benzen · toluen · styren · formaldehyd", activities: ["test-1", "sampling-3"], analytes: organicAirAnalytes, analytesLabel: "Úplný seznam organických látek" },
    { id: "detector-tubes", title: "Krátkodobá měření", summary: "Chemické látky detekčními trubicemi", activities: ["test-3"], analytes: detectorTubeAnalytes, analytesLabel: "Úplný seznam pro detekční trubice", qualification: "Detekčními trubicemi měříme krátkodobé koncentrace. Pro celosměnové posouzení expozice je nutné zvolit odpovídající postup." },
    { id: "microclimate", title: "Mikroklima", summary: "Teplota · tlak · vlhkost · rychlost proudění vzduchu", activities: ["test-4"] },
    { id: "vibration", title: "Vibrace", summary: "Vibrace přenášené na ruce a celkové vibrace", activities: ["test-5"] },
    { id: "lighting", title: "Umělé osvětlení", summary: "Vnitřní i venkovní prostředí", activities: ["test-6"] },
    { id: "noise", title: "Hluk", summary: "Hluk v pracovním prostředí", activities: ["test-7"] },
    { id: "filter-sampling", title: "Odběry na filtr", summary: "Prach · aerosoly · vlákna", activities: ["sampling-1"], qualification: "Akreditovaný odběr vzorku; nejde o vlastní laboratorní stanovení všech těchto ukazatelů." },
  ],
  environment: [
    { id: "noise", title: "Hluk v okolí", summary: "Měření hluku v mimopracovním prostředí", activities: ["test-8"] },
  ],
};

export const externalLaboratoryNotes: Partial<Record<AccreditedScopeKind, string>> = {
  emissions: "Provádíme odběry a výpočet koncentrací podle naší akreditace. Laboratorní stanovení VOC, kovů a HCl / anorganických sloučenin chloru pro nás zajišťuje externí poskytovatel v rozsahu své akreditace.",
  workplace: "Organické látky odebíráme na pevný sorbent a vypočítáváme jejich koncentrace. Laboratorní stanovení pro nás provádí externí poskytovatel v rozsahu své akreditace.",
};
