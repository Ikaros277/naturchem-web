import { DedicatedServiceRoute, dedicatedServiceMetadata } from "@/lib/render-dedicated-service-page";

const slug = "technicke-prilohy";

export const metadata = dedicatedServiceMetadata(slug);

export default function Page() {
  return <DedicatedServiceRoute slug={slug} />;
}
