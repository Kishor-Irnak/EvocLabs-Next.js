import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/EvocLabs-Next.js",
  assetPrefix: "/EvocLabs-Next.js",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
