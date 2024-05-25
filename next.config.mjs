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
  async redirects() {
    return [
      {
        source: "/contato",
        destination: "/#contato",
        permanent: false,
      },
      {
        source: "/sobre-nos",
        destination: "/#sobre",
        permanent: false,
      },
      {
        source: "/embreve",
        destination: "/#lojas",
        permanent: true,
      },
      {
        source: "/portfolio_category/todos/",
        destination: "/produtos/",
        permanent: true,
      },
      {
        source: "/portfolio_category/paes/",
        destination: "/produtos/paes/",
        permanent: true,
      },
      {
        source: "/portfolio_category/biscoitos/",
        destination: "/produtos/biscoitos/",
        permanent: true,
      },
      {
        source: "/portfolio_category/bolos/",
        destination: "/produtos/bolos/",
        permanent: true,
      },
      {
        source: "/portfolio_category/brioche/",
        destination: "/produtos/brioches/",
        permanent: true,
      },
      {
        source: "/portfolio_category/mercearia/",
        destination: "/produtos/",
        permanent: true,
      },
      {
        source: "/portfolio-items/amanteigado/",
        destination: "/produtos/biscoitos/amanteigado",
        permanent: true,
      },
      {
        source: "/portfolio-items/babka-3-chocolates/",
        destination: "/produtos/brioches/babka-3-chocolates",
        permanent: true,
      },
      {
        source: "/portfolio-items/bisnaguinha/",
        destination: "/produtos/brioches/bisnaguinha",
        permanent: true,
      },
      {
        source: "/portfolio-items/bolo-de-cenoura/",
        destination: "/produtos/bolos/bolo-de-cenoura",
        permanent: true,
      },
      {
        source: "/portfolio-item/s/bolo-de-fuba-com-goiabada",
        destination: "/produtos/bolos/bolo-de-fuba-com-goiabada",
        permanent: true,
      },
      {
        source: "/portfolio-items/branquelin/",
        destination: "/produtos/paes/branquelin",
        permanent: true,
      },
      {
        source: "/portfolio-items/brioche/",
        destination: "/produtos/brioches/brioche",
        permanent: true,
      },
      {
        source: "/portfolio-items/brioche-c-chocolate/",
        destination: "/produtos/brioches/brioche-c-chocolate",
        permanent: true,
      },
      {
        source: "/portfolio-items/campones/",
        destination: "/produtos/paes/campones",
        permanent: true,
      },
      {
        source: "/portfolio-items/campones-c-azeitonas/",
        destination: "/produtos/paes/campones-c-azeitonas",
        permanent: true,
      },
      {
        source: "/portfolio-item/s/campones-c-figos-e-nozes",
        destination: "/produtos/paes/campones-c-figos-e-nozes",
        permanent: true,
      },
      {
        source: "/portfolio-items/campones-c-goiabada/",
        destination: "/produtos/paes/campones-c-goiabada",
        permanent: true,
      },
      {
        source: "/portfolio-item/s/campones-c-queijo-da-canastra",
        destination: "/produtos/paes/campones-c-queijo-da-canastra",
        permanent: true,
      },
      {
        source: "/portfolio-items/canastrinha/",
        destination: "/produtos/brioches/canastrinha",
        permanent: true,
      },
      {
        source: "/portfolio-items/canelinha-do-para/",
        destination: "/produtos/brioches/canelinha-do-para",
        permanent: true,
      },
      {
        source: "/portfolio-items/cantuccini/",
        destination: "/produtos/biscoitos/cantuccini",
        permanent: true,
      },
      {
        source: "/portfolio-items/challah/",
        destination: "/produtos/brioches/challah",
        permanent: true,
      },
      {
        source: "/portfolio-items/challah-c-passas-e-mel/",
        destination: "/produtos/brioches/challah-c-passas-e-mel",
        permanent: true,
      },
      {
        source: "/portfolio-items/challah-de-festa/",
        destination: "/produtos/brioches/challah-de-festa",
        permanent: true,
      },
      {
        source: "/portfolio-items/cookie/",
        destination: "/produtos/biscoitos/cookie",
        permanent: true,
      },
      {
        source: "/portfolio-items/focaccia/",
        destination: "/produtos/paes/focaccia",
        permanent: true,
      },
      {
        source: "/portfolio-items/integral/",
        destination: "/produtos/paes/integral",
        permanent: true,
      },
      {
        source: "/portfolio-items/meteil-pao-de-centeio/",
        destination: "/produtos/paes/meteil-pao-de-centeio",
        permanent: true,
      },
      {
        source: "/portfolio-items/multigraos/",
        destination: "/produtos/paes/multigraos",
        permanent: true,
      },
      {
        source: "/portfolio-items/pain-depices/",
        destination: "/produtos/paes/pain-depices",
        permanent: true,
      },
      {
        source: "/portfolio-items-de-leite/",
        destination: "/produtos/brioches/pao-petropolis-pao-de-leite",
        permanent: true,
      },
      {
        source: "/portfolio-items/provencal/",
        destination: "/produtos/brioches/provencal",
        permanent: true,
      },
      {
        source: "/portfolio-items/provencal-c-azeitona/",
        destination: "/produtos/brioches/provencal-c-azeitona",
        permanent: true,
      },
      {
        source: "/portfolio-items/provencal-com-chocolate/",
        destination: "/produtos/brioches/provencal-com-chocolate",
        permanent: true,
      },
      {
        source: "/portfolio-items/brioches/provencal-com-goiabada/",
        destination: "/produtos/brioches/provencal-com-goiabada",
        permanent: true,
      },
    ];
  },
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
