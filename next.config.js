/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@nooha/ui", "@nooha/design-tokens", "@nooha/shared-types", "@nooha/shared-utils"],
};

module.exports = nextConfig;
