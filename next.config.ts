import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/regalo',
  images: { unoptimized: true },
};

export default nextConfig;
