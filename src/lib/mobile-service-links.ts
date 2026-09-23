import type { ServiceMegaMenuGroup } from "@/lib/megamenu-types";

// Direct access mirrors the six homepage services; labels stay localized.
const directHrefs = [
  "/sluzby/mereni-emisi",
  "/sluzby/mereni-hluku",
  "/sluzby/pracovni-prostredi",
  "/sluzby/hlukove-studie",
  "/sluzby/rozptylove-studie",
  "/sluzby/eia-oznameni-zameru"
];

export function splitMobileServiceLinks(groups: readonly ServiceMegaMenuGroup[]) {
  const all = groups.flatMap(group => group.links.map(item => ({ ...item, groupId: group.id })));
  const direct = directHrefs.flatMap(href => {
    const item = all.find(link => link.href === href);
    return item ? [item] : [];
  });
  const selected = new Set(direct.map(item => item.href));
  const remaining = groups.map(group => ({
    ...group,
    links: group.links.filter(item => !selected.has(item.href))
  })).filter(group => group.links.length > 0);
  return { direct, remaining };
}
