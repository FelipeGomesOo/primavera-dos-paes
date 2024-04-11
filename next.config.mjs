/** @type {import('next').NextConfig} */

if (!URL.canParse(process.env.BASE_URL)) {
  throw new Error(`
    Please provide a valid WordPress instance URL.
    Add to your environment variables WORDPRESS_API_URL.
  `);
}

const { protocol, hostname, port, pathname } = new URL(process.env.BASE_URL);

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: protocol.slice(0, -1),
        hostname,
        port,
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
