import { createDedicatedServicePageExports } from "@/lib/render-dedicated-service-page";

const { generateMetadata, Page } = createDedicatedServicePageExports("skoleni-chemicke-legislativy");
export { generateMetadata };
export default Page;
