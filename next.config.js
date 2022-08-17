/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    loader:"akamai",
    path:'/public'
  },
  basePath:"/portfolio",
  assetPrefix:"/portfolio"
}

module.exports = nextConfig
