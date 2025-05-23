// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Essential for static export
  images: {
    unoptimized: true, // Highly recommended for static exports / Cloudflare Pages
  },
  // NO assetPrefix
  // NO basePath
  // (Unless you are intentionally deploying to a subdirectory on Cloudflare Pages,
  // which is less common and requires different setup)
};

module.exports = nextConfig;