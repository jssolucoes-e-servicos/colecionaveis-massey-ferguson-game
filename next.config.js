/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/game",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
