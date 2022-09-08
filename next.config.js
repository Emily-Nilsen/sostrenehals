/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate')

// const nextConfig = {
//   reactStrictMode: true,
//   experimental: {
//     newNextLinkBehavior: true,
//     scrollRestoration: true,
//     images: {
//       allowFutureImage: true,
//     },
//   },
//   images: {
//     minimumCacheTTL: 31536000,
//     domains: ['res.cloudinary.com'],
//   },
// }

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
    domains: ['res.cloudinary.com'],
  },
}
