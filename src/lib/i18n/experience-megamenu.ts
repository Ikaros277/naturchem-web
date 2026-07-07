import type { Locale } from "@/lib/i18n/locales";
import type { ExperienceMegaMenuGroup } from "@/lib/megamenu-types";

export type { ExperienceMegaMenuGroup };

type ExperienceMegaShell = {
  provozy: {
    title: string;
    subtitle: string;
    overviewLabel: string;
  };
  zakazky: {
    title: string;
    subtitle: string;
    overviewLabel: string;
  };
  reference: {
    title: string;
    subtitle: string;
    overviewLabel: string;
  };
};

const experienceMegaShell: Record<Locale, ExperienceMegaShell> = {
  cs: {
    provozy: {
      title: "Podle typu provozu",
      subtitle: "Odvětví a technologie, které obsluhujeme",
      overviewLabel: "Přehled provozů"
    },
    zakazky: {
      title: "Typické zakázky",
      subtitle: "Anonymizované příklady z praxe",
      overviewLabel: "Přehled zakázek"
    },
    reference: {
      title: "Reference",
      subtitle: "Spolupráce a důvěra zákazníků",
      overviewLabel: "Reference a příklady"
    }
  },
  en: {
    provozy: {
      title: "By plant type",
      subtitle: "Sectors and technologies we serve",
      overviewLabel: "Industries overview"
    },
    zakazky: {
      title: "Typical projects",
      subtitle: "Anonymised examples from practice",
      overviewLabel: "Project overview"
    },
    reference: {
      title: "References",
      subtitle: "Clients and long-term cooperation",
      overviewLabel: "References and examples"
    }
  },
  de: {
    provozy: {
      title: "Nach Betriebstyp",
      subtitle: "Branchen und Technologien, die wir betreuen",
      overviewLabel: "Branchenübersicht"
    },
    zakazky: {
      title: "Typische Projekte",
      subtitle: "Anonymisierte Beispiele aus der Praxis",
      overviewLabel: "Projektübersicht"
    },
    reference: {
      title: "Referenzen",
      subtitle: "Kunden und langfristige Zusammenarbeit",
      overviewLabel: "Referenzen und Beispiele"
    }
  }
};

export async function getExperienceMegaGroups(locale: Locale): Promise<readonly ExperienceMegaMenuGroup[]> {
  const labels = experienceMegaShell[locale];

  return [
    {
      id: "provozy",
      title: labels.provozy.title,
      subtitle: labels.provozy.subtitle,
      links: [{ href: "/provozy-a-technologie", label: labels.provozy.overviewLabel }]
    },
    {
      id: "zakazky",
      title: labels.zakazky.title,
      subtitle: labels.zakazky.subtitle,
      links: [{ href: "/typicke-zakazky", label: labels.zakazky.overviewLabel }]
    },
    {
      id: "reference",
      title: labels.reference.title,
      subtitle: labels.reference.subtitle,
      links: [{ href: "/reference", label: labels.reference.overviewLabel }]
    }
  ];
}
