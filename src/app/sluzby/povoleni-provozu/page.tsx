import { DedicatedServiceRoute, dedicatedServiceMetadata } from "@/lib/render-dedicated-service-page";

const slug = "povoleni-provozu";

export const metadata = dedicatedServiceMetadata(slug);

export default function Page() {
  return <DedicatedServiceRoute slug={slug} />;
}
