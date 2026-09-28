import type { NextConfig } from "next";

// Static export: `npm run build` writes plain HTML/CSS/JS to ./out, hostable anywhere.
const config: NextConfig = {
  output: "export",
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || undefined,
  trailingSlash: false,
  images: { unoptimized: true },
};

export default config;
