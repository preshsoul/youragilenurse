import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vercel is configured to publish the project's `dist` directory. This
  // portfolio has no server-side data requirements, so a static export keeps
  // that deployment contract while using the standard Next.js runtime.
  output: "export",
  distDir: "dist",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
