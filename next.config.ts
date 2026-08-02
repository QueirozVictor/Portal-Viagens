import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const repoName = 'Portal-Viagens';

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : '',
  images: {
    unoptimized: true,
  },
  experimental: { ppr: false },
  compiler: {
    removeConsole: isProd ? { exclude: ['error', 'warn'] } : false,
  }
};

export default nextConfig;
