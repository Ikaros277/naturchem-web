import { normalizeBreadcrumbJsonLd } from "@/lib/breadcrumb-jsonld";

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(normalizeBreadcrumbJsonLd(data)) }}
    />
  );
}
