import { createDedicatedServicePageExports } from "@/lib/render-dedicated-service-page";

const { generateMetadata, Page } = createDedicatedServicePageExports("mereni-mikroklimatu");
export { generateMetadata };
export default Page;
