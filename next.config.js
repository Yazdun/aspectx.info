/** @type {import('next').NextConfig} */
const { withPlaiceholder } = require('@plaiceholder/next')

const nextConfig = withPlaiceholder({
  reactStrictMode: true,
  images: {
    domains: ['media.rawg.io'],
  },
})

module.exports = nextConfig
