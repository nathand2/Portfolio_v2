/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:
  // process.env.NODE_ENV === "development" ? undefined :
  {
    // loader: 'akamai',
    // path: 'https://cdn.jsdelivr.net/gh/nathand2/Portfolio_v2/public/',
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'cdn.jsdelivr.net',
    //     port: '',
    //     pathname: '/gh/nathand2/Portfolio_v2/public/',
    //   },
    // ],
    // domains: [
    //   "https://cdn.jsdelivr.net"
    // ]
  },
  assetPrefix: './',
  // assetPrefix: process.env.NODE_ENV === "production" ? './' : "https://cdn.jsdelivr.net/gh/nathand2/Portfolio_v2/public/",

}

module.exports = nextConfig
