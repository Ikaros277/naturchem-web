import type { NextConfig } from "next";
import { permanentRedirects } from "./src/lib/redirects";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"]
  },
  experimental: {
    optimizePackageImports: ["react-markdown"]
  },
  async redirects() {
    return permanentRedirects;
  }
};

export default nextConfig;
