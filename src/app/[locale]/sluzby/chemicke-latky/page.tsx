import "@/app/globals.css";
import { createDedicatedServicePageExports } from "@/lib/render-dedicated-service-page";

const { generateMetadata, Page } = createDedicatedServicePageExports("chemicke-latky");
export { generateMetadata };
export default Page;
