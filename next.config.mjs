/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: '100mb',
      allowedOrigins: [
        "pancapandawasukses.id"
      ]
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pancapandawasukses.id',
        port: '',
        pathname: '/api/uploads/**',
      },
    ],
  },
};

export default nextConfig;
