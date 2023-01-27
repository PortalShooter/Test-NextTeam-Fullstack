/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/message',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
