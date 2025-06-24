import type { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  reactStrictMode: false,
  trailingSlash: true,
  assetPrefix: isProd ? '/horses.lara.horse/' : '',
  basePath: isProd ? '/horses.lara.horse' : '',
  output: 'export',
  images: {
    remotePatterns: [new URL('https://s3.us-east-1.amazonaws.com/images.horses.lara.horse/**')],
  },
};

export default nextConfig;
