/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  output: "export",
  distDir: "_static",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
