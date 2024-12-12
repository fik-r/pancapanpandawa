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
    domains: ['localhost', "pancapandawasukses.id", "flowbite.s3.amazonaws.com"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
