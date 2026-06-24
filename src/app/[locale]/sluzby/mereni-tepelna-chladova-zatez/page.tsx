import { createDedicatedServicePageExports } from "@/lib/render-dedicated-service-page";

const { generateMetadata, Page } = createDedicatedServicePageExports("mereni-tepelna-chladova-zatez");
export { generateMetadata };
export default Page;
