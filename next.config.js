/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        // Old project page was renamed from "GTM Intelligence" to
        // "GTM Operating System" (slug: gtm-operating-system).
        source: "/building/gtm-intelligence",
        destination: "/building/gtm-operating-system",
        permanent: true,
      },
    ];
  },
};
module.exports = nextConfig;
