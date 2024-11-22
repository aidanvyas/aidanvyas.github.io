/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Essential for static site generation
  images: {
    unoptimized: true,
  },
  basePath: "", // Add this if you're using a custom domain
  assetPrefix: "./", // Add this for GitHub Pages
};

module.exports = nextConfig;
