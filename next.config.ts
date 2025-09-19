import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/nirnayaa-web" : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // GitHub Pages serves from repository subdirectory
  basePath: basePath,
  assetPrefix: basePath + "/",
};

export default nextConfig;
