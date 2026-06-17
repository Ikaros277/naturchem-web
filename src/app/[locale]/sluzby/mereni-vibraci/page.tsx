import { createDedicatedServicePageExports } from "@/lib/render-dedicated-service-page";

const { generateMetadata, Page } = createDedicatedServicePageExports("mereni-vibraci");
export { generateMetadata };
export default Page;
