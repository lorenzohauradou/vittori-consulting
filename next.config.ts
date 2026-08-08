import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'vittoriconsulting.b-cdn.net',
      },
      {
        protocol: 'https',
        hostname: 'iframe.mediadelivery.net',
      },
    ],
  },
};

export default nextConfig;