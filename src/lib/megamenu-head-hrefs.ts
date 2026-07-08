import type {
  ExperienceMegaGroupId,
  ONasMegaGroupId,
  ServiceMegaGroupId
} from "@/lib/megamenu-types";

export const serviceMegaGroupHeadHrefs: Record<ServiceMegaGroupId, string> = {
  mereni: "/sluzby#mericke-sluzby",
  studie: "/sluzby#studie-vypocty",
  dokumentace: "/sluzby#povolovaci-podklady"
};

export const experienceMegaGroupHeadHrefs: Record<ExperienceMegaGroupId, string> = {
  provozy: "/provozy-a-technologie",
  zakazky: "/typicke-zakazky",
  reference: "/reference"
};

export const oNasMegaGroupHeadHrefs: Record<ONasMegaGroupId, string> = {
  spolecnost: "/o-spolecnosti-naturchem",
  odbornost: "/akreditace-autorizace-dokumenty",
  informace: "/poradna"
};
