import { VanillaExtractPlugin } from "@vanilla-extract/webpack-plugin";
import type { NextConfig } from "next";
import nextMDX from "@next/mdx"

const withMDX = nextMDX({
  extension: /\.mdx?$/,
})

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "mdx"],

  webpack(config) {
    config.plugins.push(new VanillaExtractPlugin());
    return config;
  }
};

export default withMDX(nextConfig);
