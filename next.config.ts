import type { NextConfig } from "next";
import path from "path";

const isExport = process.env.NEXT_PUBLIC_EXPORT === "1";

const nextConfig: NextConfig = {
  output: isExport ? "export" : undefined,
  basePath: isExport ? "/groovebox" : "",
  trailingSlash: isExport ? true : undefined,
  images: {
    unoptimized: isExport,
    remotePatterns: [],
  },
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
