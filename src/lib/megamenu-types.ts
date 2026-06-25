import type { ServiceIconKey } from "@/lib/service-icons";

export type ServiceMegaGroupId = "mereni" | "studie" | "dokumentace";

export type MegaMenuLink = {
  href: string;
  label: string;
  description?: string;
};

export type MegaMenuGroup = {
  id?: ServiceMegaGroupId;
  title: string;
  subtitle?: string;
  links: readonly MegaMenuLink[];
};

export const serviceMegaGroupIcons: Record<ServiceMegaGroupId, ServiceIconKey> = {
  mereni: "pillar-mereni",
  studie: "pillar-studie",
  dokumentace: "pillar-dokumentace"
};
