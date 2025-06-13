const withBundleAnalyzer = require("@next/bundle-analyzer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  experimental: { appDir: true, serverActions: true },
  logging: {
    fetches: { fullUrl: true },
  },
  images: {
    domains: ["lab.basement.studio", "assets.basehub.com", "basehub.earth"],
  },
};

module.exports = (_phase, { defaultConfig: _ }) => {
  const plugins = [
    // eslint-disable-next-line turbo/no-undeclared-env-vars
    withBundleAnalyzer({ enabled: process.env.ANALYZE === "true" }),
  ];
  return plugins.reduce((acc, plugin) => plugin(acc), { ...nextConfig });
};
