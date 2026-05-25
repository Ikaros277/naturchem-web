import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { dedicatedServicePages } from "@/lib/dedicated-service-pages";
import { siteUrl } from "@/lib/site";

const service = dedicatedServicePages["eia-oznameni-zameru"];

export const metadata: Metadata = {
  title: service.title,
  description: service.description,
  alternates: { canonical: `${siteUrl}/${service.slug}/` }
};

export default function Page() {
  return <ServicePage {...service} />;
}
