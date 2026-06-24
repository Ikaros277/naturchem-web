import { createDedicatedServicePageExports } from "@/lib/render-dedicated-service-page";

const { generateMetadata, Page } = createDedicatedServicePageExports("mereni-diisokyanatu");
export { generateMetadata };
export default Page;
