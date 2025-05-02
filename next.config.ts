import { VanillaExtractPlugin } from "@vanilla-extract/webpack-plugin";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    config.plugins.push(new VanillaExtractPlugin());
    return config;
  }
};

export default nextConfig;
