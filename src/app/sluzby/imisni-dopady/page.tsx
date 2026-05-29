import { DedicatedServiceRoute, dedicatedServiceMetadata } from "@/lib/render-dedicated-service-page";

const slug = "imisni-dopady";

export const metadata = dedicatedServiceMetadata(slug);

export default function Page() {
  return <DedicatedServiceRoute slug={slug} />;
}
