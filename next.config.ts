import type { NextConfig } from "next";
import { permanentRedirects } from "./src/lib/redirects";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"]
  },
  async redirects() {
    return permanentRedirects;
  }
};

export default nextConfig;
