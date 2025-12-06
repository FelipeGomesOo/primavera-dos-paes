/** @type {import('next').NextConfig} */

// --- CORREÇÃO PARA O BUILD LOCAL ---
// Se o computador não encontrar a variável, forçamos o endereço oficial aqui:
if (!process.env.BASE_URL) {
  process.env.BASE_URL = "https://admin.primaveradospaes.com.br";
}

// Agora a verificação original vai passar sem travar
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
      {
        protocol: protocol.slice(0, -1),
        hostname: "primaveradospaes.com.br",
        port,
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "admin.primaveradospaes.com.br",
        port: "", 
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};
export default nextConfig;