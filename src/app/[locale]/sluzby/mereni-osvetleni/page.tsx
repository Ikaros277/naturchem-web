import { createDedicatedServicePageExports } from "@/lib/render-dedicated-service-page";

const { generateMetadata, Page } = createDedicatedServicePageExports("mereni-osvetleni");
export { generateMetadata };
export default Page;
