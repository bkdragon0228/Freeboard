/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler : {
    emotion : true,
  },
  images: {
    domains: ['storage.googleapis.com']
  }
}

module.exports = nextConfig
