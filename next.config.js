/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate')

module.exports = {
  ...nextTranslate(),
  reactStrictMode: true,
  experimental: {
    newNextLinkBehavior: true,
    scrollRestoration: true,
    images: {
      allowFutureImage: true,
    },
  },
  images: {
    minimumCacheTTL: 31536000,
  },
}
