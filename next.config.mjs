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
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'pancapandawasukses.id',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
