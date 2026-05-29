import { DedicatedServiceRoute, dedicatedServiceMetadata } from "@/lib/render-dedicated-service-page";

const slug = "modelove-vypocty";

export const metadata = dedicatedServiceMetadata(slug);

export default function Page() {
  return <DedicatedServiceRoute slug={slug} />;
}
