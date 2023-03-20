/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: process.env.NODE_ENV === "development" ? undefined : {
    loader: 'akamai',
    path: 'https://cdn.jsdelivr.net/gh/nathand2/Portfolio_v2/public/',
  },
  assetPrefix: './',
}

module.exports = nextConfig
