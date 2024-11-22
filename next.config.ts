/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  assetPrefix: "/", // Change this
  basePath: "",
};

module.exports = nextConfig;
