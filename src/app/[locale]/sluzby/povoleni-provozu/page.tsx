import { createDedicatedServicePageExports } from "@/lib/render-dedicated-service-page";

const { generateMetadata, Page } = createDedicatedServicePageExports("povoleni-provozu");
export { generateMetadata };
export default Page;
