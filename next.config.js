/** @type {import('next').NextConfig} */
const { withPlaiceholder } = require('@plaiceholder/next')

const nextConfig = withPlaiceholder({
  images: {
    domains: ['media.rawg.io'],
  },
})

module.exports = nextConfig
