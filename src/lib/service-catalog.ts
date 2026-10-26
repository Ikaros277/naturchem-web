import type { ServiceGroup } from "./service-groups";
import { prioritizeMeasurements } from "./service-order";

const situationPaths = new Set(["/mereni-pro-kolaudaci", "/mereni-nove-haly"]);

export function partitionServiceCatalog(groups: readonly ServiceGroup[]) {
  return {
    situations: groups.flatMap(group => group.items.filter(item => situationPaths.has(item.href))),
    groups: groups.map(group => ({ ...group, items: group.id === "mericke-sluzby"
      ? prioritizeMeasurements(group.items.filter(item => !situationPaths.has(item.href)))
      : group.items })),
  };
}
