import { shortenListingExcerpt } from "@/lib/excerpt";
import type { ReferenceExample } from "@/lib/reference-content";

/** Lehká karta reference — zkrácený text pro index. */
export type ReferenceExampleListing = {
  id: string;
  title: string;
  operationType: string;
  shortText: string;
  tags: readonly string[];
  href: string;
};

export function toReferenceExampleListing(example: ReferenceExample): ReferenceExampleListing {
  return {
    id: example.id,
    title: example.title,
    operationType: example.operationType,
    shortText: shortenListingExcerpt(example.text, 2),
    tags: example.tags,
    href: example.href
  };
}

export function toReferenceExampleListingMap(
  examples: Map<string, ReferenceExample>
): Map<string, ReferenceExampleListing> {
  return new Map(
    [...examples.entries()].map(([id, example]) => [id, toReferenceExampleListing(example)])
  );
}
