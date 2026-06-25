import type { ServiceIconKey } from "@/lib/service-icons";
import { serviceMegaGroups } from "@/lib/service-megamenu";
import type { ServiceMegaGroupId } from "@/lib/megamenu-types";

/** Hlavní kategorie služeb — jednotný barevný systém webu. */
export type ServiceCategory = "measurement" | "studies" | "docs";

export type ServiceCategoryId = ServiceCategory;

export const MEGA_GROUP_TO_CATEGORY: Record<ServiceMegaGroupId, ServiceCategory> = {
  mereni: "measurement",
  studie: "studies",
  dokumentace: "docs"
};

/** Mapování accordion skupin na /sluzby (6 skupin → 3 barvy). */
export const SERVICE_GROUP_TO_CATEGORY: Record<string, ServiceCategory> = {
  "mericke-sluzby": "measurement",
  "studie-vypocty": "studies",
  "povolovaci-podklady": "docs",
  "eia-investice": "docs",
  "evidence-reporting": "docs",
  "skoleni-podpora": "docs"
};

export const PILLAR_ID_TO_CATEGORY: Record<string, ServiceCategory> = {
  mereni: "measurement",
  studie: "studies",
  dokumentace: "docs"
};

export const CASE_STUDY_CATEGORY_TO_SERVICE_CATEGORY: Record<string, ServiceCategory> = {
  "mereni-emisi": "measurement",
  "pracovni-prostredi": "measurement",
  "hluk-vibrace": "measurement",
  "rozptylove-studie": "studies",
  "hlukove-studie": "studies",
  "eia-jes": "docs",
  "odborne-posudky": "docs",
  "provozni-rady": "docs",
  "ispop-evidence": "docs",
  "specificke-technologie": "docs"
};

export const serviceCategoryTheme = {
  measurement: {
    color: "var(--service-measurement)",
    colorDark: "var(--service-measurement-dark)",
    colorSoft: "var(--service-measurement-soft)"
  },
  studies: {
    color: "var(--service-studies)",
    colorDark: "var(--service-studies-dark)",
    colorSoft: "var(--service-studies-soft)"
  },
  docs: {
    color: "var(--service-docs)",
    colorDark: "var(--service-docs-dark)",
    colorSoft: "var(--service-docs-soft)"
  }
} as const;

function normalizeServicePath(href: string): string {
  const path = href.split("#")[0].split("?")[0].replace(/\/$/, "") || "/";
  return path.startsWith("/") ? path : `/${path}`;
}

const hrefToCategory = (() => {
  const map = new Map<string, ServiceCategory>();

  for (const group of serviceMegaGroups) {
    if (!group.id) continue;
    const category = MEGA_GROUP_TO_CATEGORY[group.id];
    for (const link of group.links) {
      map.set(normalizeServicePath(link.href), category);
    }
  }

  const extras: Array<[string, ServiceCategory]> = [
    ["/sluzby/zjistovaci-rizeni-eia", "docs"],
    ["/sluzby/technicke-prilohy", "docs"],
    ["/sluzby/eia-posudky-poradenstvi", "docs"]
  ];

  for (const [href, category] of extras) {
    map.set(href, category);
  }

  return map;
})();

const iconKeyToCategory: Partial<Record<ServiceIconKey, ServiceCategory>> = {
  emise: "measurement",
  "pracovni-prostredi": "measurement",
  hluk: "measurement",
  vibrace: "measurement",
  osvetleni: "measurement",
  mikroklima: "measurement",
  rozptyl: "studies",
  "hlukova-studie": "studies",
  akustika: "studies",
  model: "studies",
  "imis-hluk": "studies",
  ispop: "studies",
  ghg: "studies",
  posudek: "docs",
  "provozni-rad": "docs",
  povoleni: "docs",
  ippc: "docs",
  eia: "docs",
  "zjistovaci-eia": "docs",
  investor: "docs",
  chemie: "docs",
  skoleni: "docs",
  "bezpecnostni-listy": "docs",
  "pillar-mereni": "measurement",
  "pillar-studie": "studies",
  "pillar-dokumentace": "docs"
};

export function getServiceCategoryFromHref(href: string): ServiceCategory | null {
  return hrefToCategory.get(normalizeServicePath(href)) ?? null;
}

export function getServiceCategoryFromMegaGroupId(groupId: ServiceMegaGroupId): ServiceCategory {
  return MEGA_GROUP_TO_CATEGORY[groupId];
}

export function getServiceCategoryFromServiceGroupId(groupId: string): ServiceCategory | null {
  return SERVICE_GROUP_TO_CATEGORY[groupId] ?? null;
}

export function getServiceCategoryFromPillarId(pillarId: string): ServiceCategory | null {
  return PILLAR_ID_TO_CATEGORY[pillarId] ?? null;
}

export function getServiceCategoryFromCaseStudyCategoryId(categoryId: string): ServiceCategory | null {
  return CASE_STUDY_CATEGORY_TO_SERVICE_CATEGORY[categoryId] ?? null;
}

export function getServiceCategoryFromIconKey(icon: ServiceIconKey): ServiceCategory | null {
  return iconKeyToCategory[icon] ?? null;
}

export function getServiceCategory(props: {
  href?: string;
  icon?: ServiceIconKey;
}): ServiceCategory | null {
  if (props.href) {
    const fromHref = getServiceCategoryFromHref(props.href);
    if (fromHref) return fromHref;
  }

  if (props.icon) {
    return getServiceCategoryFromIconKey(props.icon);
  }

  return null;
}

export function serviceCategoryClass(category: ServiceCategory | null): string | undefined {
  return category ? `service-icon--${category}` : undefined;
}

export function categoryFromPoradnaTopic(topic: string): ServiceCategory | null {
  const map: Record<string, ServiceCategory> = {
    Emise: "measurement",
    "Pracovní prostředí": "measurement",
    Hluk: "measurement",
    "Rozptylové studie": "studies",
    "EIA a povolování": "docs",
    Legislativa: "docs",
    "Chemická legislativa": "docs"
  };
  return map[topic] ?? null;
}
