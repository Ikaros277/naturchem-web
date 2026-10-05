import "@/app/globals.css";
import { createDedicatedServicePageExports } from "@/lib/render-dedicated-service-page";

const { generateMetadata, Page } = createDedicatedServicePageExports("hlukove-studie");
export { generateMetadata };
export default Page;
