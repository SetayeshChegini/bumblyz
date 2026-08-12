import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  experimental: {
    workerThreads: true,
  },
  // TypeScript is checked explicitly in CI before `next build`; this avoids a
  // duplicate compiler subprocess in constrained build environments.
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
