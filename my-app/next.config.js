const {factory} = require("typescript");

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/pants/delete_forever",
        destination: "/pants",
        permanent: true,
      },
      {
        source: "/pants/delete_temp",
        destination: "/pants",
        permanent: false,
      },
    ];
  },

  async rewrites() {
    return [
      {
        source: "/items/:slug",
        destination: "/pants/:slug",
      },
    ];
  },
};

module.exports = nextConfig;
