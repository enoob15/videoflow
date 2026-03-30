/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['localhost', 'videoflow.vercel.app'],
  },
}

module.exports = nextConfig