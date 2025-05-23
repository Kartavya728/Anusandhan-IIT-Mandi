/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // ✅ disables image optimization
  },
};

module.exports = nextConfig;
