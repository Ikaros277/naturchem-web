import type { Locale } from "@/lib/i18n/locales";
import { getSectorGroups } from "@/lib/i18n/sector-groups-i18n";
import type { ExperienceMegaMenuGroup } from "@/lib/megamenu-types";

export type { ExperienceMegaMenuGroup };

/** Nejčastější skupiny provozů — zbytek je na stránce přehledu. */
const FEATURED_SECTOR_GROUP_IDS = [
  "prumysl-vyroba",
  "energetika-emise",
  "odpady-recyklace"
] as const;

type ExperienceMegaShell = {
  provozy: {
    title: string;
    subtitle: string;
    overviewLabel: string;
    overviewDesc: string;
  };
  zakazky: {
    title: string;
    subtitle: string;
    overviewLabel: string;
    overviewDesc: string;
  };
  reference: {
    title: string;
    subtitle: string;
    overviewLabel: string;
    overviewDesc: string;
  };
};

const experienceMegaShell: Record<Locale, ExperienceMegaShell> = {
  cs: {
    provozy: {
      title: "Podle typu provozu",
      subtitle: "Odvětví a technologie, které obsluhujeme",
      overviewLabel: "Přehled provozů",
      overviewDesc: "Všechna odvětví a typy provozů na jedné stránce"
    },
    zakazky: {
      title: "Typické zakázky",
      subtitle: "Anonymizované příklady z praxe",
      overviewLabel: "Přehled zakázek",
      overviewDesc: "Filtrování podle provozu, služby a úřadu"
    },
    reference: {
      title: "Reference",
      subtitle: "Spolupráce a důvěra zákazníků",
      overviewLabel: "Reference a příklady",
      overviewDesc: "Zákazníci, loga a ukázky z praxe"
    }
  },
  en: {
    provozy: {
      title: "By plant type",
      subtitle: "Sectors and technologies we serve",
      overviewLabel: "Industries overview",
      overviewDesc: "All sectors and plant types on one page"
    },
    zakazky: {
      title: "Typical projects",
      subtitle: "Anonymised examples from practice",
      overviewLabel: "Project overview",
      overviewDesc: "Filter by plant type, service or authority"
    },
    reference: {
      title: "References",
      subtitle: "Clients and long-term cooperation",
      overviewLabel: "References and examples",
      overviewDesc: "Clients, logos and practice cases"
    }
  },
  de: {
    provozy: {
      title: "Nach Betriebstyp",
      subtitle: "Branchen und Technologien, die wir betreuen",
      overviewLabel: "Branchenübersicht",
      overviewDesc: "Alle Branchen und Anlagentypen auf einer Seite"
    },
    zakazky: {
      title: "Typische Projekte",
      subtitle: "Anonymisierte Beispiele aus der Praxis",
      overviewLabel: "Projektübersicht",
      overviewDesc: "Filter nach Betrieb, Leistung und Behörde"
    },
    reference: {
      title: "Referenzen",
      subtitle: "Kunden und langfristige Zusammenarbeit",
      overviewLabel: "Referenzen und Beispiele",
      overviewDesc: "Kunden, Logos und Praxisbeispiele"
    }
  }
};

export async function getExperienceMegaGroups(locale: Locale): Promise<readonly ExperienceMegaMenuGroup[]> {
  const labels = experienceMegaShell[locale];
  const sectorGroups = await getSectorGroups(locale);
  const sectorById = new Map(sectorGroups.map((group) => [group.id, group]));

  const featuredSectorLinks = FEATURED_SECTOR_GROUP_IDS.flatMap((id) => {
    const group = sectorById.get(id);
    if (!group) return [];
    return [
      {
        href: `/provozy-a-technologie#${group.id}`,
        label: group.title
      }
    ];
  });

  return [
    {
      id: "provozy",
      title: labels.provozy.title,
      subtitle: labels.provozy.subtitle,
      links: [
        {
          href: "/provozy-a-technologie",
          label: labels.provozy.overviewLabel,
          description: labels.provozy.overviewDesc
        },
        ...featuredSectorLinks
      ]
    },
    {
      id: "zakazky",
      title: labels.zakazky.title,
      subtitle: labels.zakazky.subtitle,
      links: [
        {
          href: "/typicke-zakazky",
          label: labels.zakazky.overviewLabel,
          description: labels.zakazky.overviewDesc
        }
      ]
    },
    {
      id: "reference",
      title: labels.reference.title,
      subtitle: labels.reference.subtitle,
      links: [
        {
          href: "/reference",
          label: labels.reference.overviewLabel,
          description: labels.reference.overviewDesc
        },
        {
          href: "/proc-naturchem",
          label: locale === "de" ? "Warum NATURCHEM" : locale === "en" ? "Why NATURCHEM" : "Proč NATURCHEM",
          description:
            locale === "de"
              ? "Akkreditierung, Autorisierungen und Erfahrung"
              : locale === "en"
                ? "Accreditation, authorisations and experience"
                : "Akreditace, autorizace a zkušenosti"
        }
      ]
    }
  ];
}
