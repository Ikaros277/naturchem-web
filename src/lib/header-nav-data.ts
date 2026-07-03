import type { Messages } from "@/lib/i18n/get-messages";
import type { ExperienceMegaMenuGroup, ONasMegaMenuGroup, ServiceMegaMenuGroup } from "@/lib/megamenu-types";

export type HeaderLabels = Messages["header"];

export type HeaderNavLink = {
  readonly href: string;
  readonly label: string;
  readonly description?: string;
};

export type ServiceHeaderMegaGroup = ServiceMegaMenuGroup;

export type ONasHeaderMegaGroup = ONasMegaMenuGroup;

export type ExperienceHeaderMegaGroup = ExperienceMegaMenuGroup;

/** @deprecated Use ServiceHeaderMegaGroup or ONasHeaderMegaGroup */
export type HeaderMegaGroup = ServiceHeaderMegaGroup;

export type HeaderClientProps = {
  labels: HeaderLabels;
  experienceMegaGroups: readonly ExperienceHeaderMegaGroup[];
  salesNavLink: HeaderNavLink;
  serviceMegaGroups: readonly ServiceHeaderMegaGroup[];
  oNasMegaGroups: readonly ONasHeaderMegaGroup[];
};
