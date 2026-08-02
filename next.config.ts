import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath: "/Portal-Viagens",
  assetPrefix: "/Portal-Viagens/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
