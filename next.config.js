/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: false,
  webpack: (config, { dev }) => {
    if (dev) return { ...config, cache: false };
    return config;
  },
};
