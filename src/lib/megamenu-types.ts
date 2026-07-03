import type { ServiceIconKey } from "@/lib/service-icons";

export type ServiceMegaGroupId = "mereni" | "studie" | "dokumentace";

export type ONasMegaGroupId = "spolecnost" | "odbornost" | "informace";

export type ExperienceMegaGroupId = "provozy" | "zakazky" | "reference";

export type MegaMenuGroupId = ServiceMegaGroupId | ONasMegaGroupId | ExperienceMegaGroupId;

export type MegaMenuLink = {
  href: string;
  label: string;
  description?: string;
};

export type ServiceMegaMenuGroup = {
  id?: ServiceMegaGroupId;
  title: string;
  subtitle?: string;
  links: readonly MegaMenuLink[];
};

export type ONasMegaMenuGroup = {
  id?: ONasMegaGroupId;
  title: string;
  subtitle?: string;
  links: readonly MegaMenuLink[];
};

export type ExperienceMegaMenuGroup = {
  id?: ExperienceMegaGroupId;
  title: string;
  subtitle?: string;
  links: readonly MegaMenuLink[];
};

/** @deprecated Use ServiceMegaMenuGroup or ONasMegaMenuGroup */
export type MegaMenuGroup = ServiceMegaMenuGroup | ONasMegaMenuGroup;

export const serviceMegaGroupIcons: Record<ServiceMegaGroupId, ServiceIconKey> = {
  mereni: "pillar-mereni",
  studie: "pillar-studie",
  dokumentace: "pillar-dokumentace"
};

export const oNasMegaGroupIcons: Record<ONasMegaGroupId, ServiceIconKey> = {
  spolecnost: "contact-user",
  odbornost: "ippc",
  informace: "skoleni"
};

export const experienceMegaGroupIcons: Record<ExperienceMegaGroupId, ServiceIconKey> = {
  provozy: "audience-prumysl",
  zakazky: "process-posouzeni",
  reference: "emise"
};
