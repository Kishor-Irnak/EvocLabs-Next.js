import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  // Only use basePath/assetPrefix in production (e.g. for GitHub Pages)
  basePath: isProd ? "/EvocLabs-Next.js" : "",
  assetPrefix: isProd ? "/EvocLabs-Next.js" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
