const { protocol, hostname, port, pathname } = new URL(process.env.BASE_URL);

/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "build",
  images: {
    remotePatterns: [
      {
        protocol: protocol.slice(0, -1),
        hostname,
        port,
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: protocol.slice(0, -1),
        hostname: "primaveradospaes.com.br",
        port,
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
