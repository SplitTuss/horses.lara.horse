import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL('https://s3.us-east-1.amazonaws.com/images.horses.lara.horse/**')],
  },
};

export default nextConfig;
