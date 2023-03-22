/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    // loader: 'akamai',
    // path: 'https://cdn.jsdelivr.net/gh/nathand2/Portfolio_v2@master/public/',
    domains: ['cdn.jsdelivr.net'],
    unoptimized: true,
  },
  assetPrefix: './',
}

module.exports = nextConfig
