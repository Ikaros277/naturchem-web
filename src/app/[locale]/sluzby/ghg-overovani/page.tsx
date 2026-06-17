import { createDedicatedServicePageExports } from "@/lib/render-dedicated-service-page";

const { generateMetadata, Page } = createDedicatedServicePageExports("ghg-overovani");
export { generateMetadata };
export default Page;
