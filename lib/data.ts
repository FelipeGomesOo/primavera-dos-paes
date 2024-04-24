import { extractImageUrls } from "./utils";

const BASE_URL = process.env.BASE_URL;
const API_URL = process.env.API_URL;
const username = process.env.API_USERNAME;
const password = process.env.API_PASSWORD;

const base64Credentials = btoa(`${username}:${password}`);

async function fetchAPIGraphql(
  query = "",
  { variables }: Record<string, any> = {}
) {
  const headers = { "Content-Type": "application/json" };
  const res = await fetch("https://admin.primaveradospaes.com.br/graphql", {
    headers,
    method: "POST",
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }
  return json.data;
}
async function fetchAPI(query: string) {
  if (!BASE_URL) {
    throw new Error("BASE_URL is not defined");
  }
  const res = await fetch(BASE_URL + API_URL + query, {
    method: "GET",
    headers: {
      Authorization: `Basic ${base64Credentials}`,
    },
  });
  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }
  //console.log(json);
  return json;
}
export async function getMenuItems() {
  /* const data = await fetchAPI(
    `menu-items/?
    menus=251
    &status=publish
    &_fields=id,title,url`
  ); */
  const data = [
    {
      id: 1,
      title: { rendered: "Início" },
      url: "https://admin.primaveradospaes.com.br/",
    },
    {
      id: 2,
      title: { rendered: "Nossas lojas" },
      url: "https://admin.primaveradospaes.com.br/#lojas",
    },
    {
      id: 3,
      title: { rendered: "Produtos" },
      url: "https://admin.primaveradospaes.com.br/produtos",
    },
    {
      id: 4,
      title: { rendered: "Sobre" },
      url: "https://admin.primaveradospaes.com.br/#sobre",
    },
  ];

  const menu = await data.map((item: any) => {
    return {
      id: item.id,
      title: item.title.rendered,
      url: item.url.replace(BASE_URL, "").trim(),
    };
  });
  //console.log(menu, "data getMenuItems");
  return menu;
}
export async function getProducts() {
  const data = await fetchAPIGraphql(`
    query getProducts {
      produtos(
        where: {status: PUBLISH, orderby: {field: TITLE, order: ASC}}
        first: 50
      ) {
        nodes {
          id
          slug
          title
          camposDeProduto {
            descricao {
              descricaoBreve
            }
            destaque {
              nodes {
                slug
              }
            }   
          }
          featuredImage {
            node {
              mediaItemUrl
              mediaDetails {
                sizes {
                  sourceUrl
                  width
                  height
                }
                height
                width
              }
            }            
          }
          tiposDeProdutos {
            nodes {
              slug
              id
              name
            }
          }
          qualidades {
            nodes {
              id
              name
              slug
            }
          }
        }
      }
    }
    `);
  const products = data.produtos.nodes.map((p: any) => {
    return {
      id: p.id,
      slug: p.slug,
      title: p.title,
      excerpt: p.camposDeProduto.descricao.descricaoBreve,
      featuredImage: {
        src:
          p.featuredImage?.node.mediaItemUrl ||
          "https://admin.primaveradospaes.com.br/wp-content/uploads/2024/04/placeholder-primavera-dos-paes.gif",
        alt: p.title,
        width: p.featuredImage?.node.mediaDetails.width || 600,
        height: p.featuredImage?.node.mediaDetails.height || 420,
      },
      category: p.tiposDeProdutos.nodes[0].slug,
      qualities: p.qualidades.nodes || null,
      featured:
        p.camposDeProduto.destaque?.nodes[0].slug === "em-destaque"
          ? true
          : false,
    };
  });
  //console.log(products);

  return products;
}
export async function getProductBySlug(slug: string) {
  const data = await fetchAPIGraphql(`
    query getProductById {
      produto(id: "${slug}", idType: SLUG) {
        id
        slug 
        title
        
        camposDeProduto {
          conservacao
          precificacao {
            naLoja {
              medida
              peso
              precoNaLoja
            }
            paraEntrega {
              medida
              peso
              precoNaLoja
            }
          }
            descricao { 
              descricaoBreve
              descricaoCompleta
            }
            destaque {
              nodes {
                slug
              }
            }
            ingredientes
            quando 
            ondeEncontro {
              nodes {
                slug
              }
            }
            imagens {
              imagem_1 {
                node {
                  mediaItemUrl
                }
              }
              imagem_2 {
                node {
                  mediaItemUrl
                }
              }
              imagem_3 {
                node {
                  mediaItemUrl
                }
              }
              imagem_4 {
                node {
                  mediaItemUrl
                }
              }
            }
          }
        featuredImage {
            node {
              mediaItemUrl
              mediaDetails {
                sizes {
                  sourceUrl
                  width
                  height
                }
                height
                width
              }
            }            
          }
          tiposDeProdutos {
            nodes {
              slug
              id
              name
            }
          }
          qualidades {
            nodes {
              id
              name
              slug
            }
          }
          alertas {
            nodes {
              id
              name
              slug
            }
          }
      }
    }
    `);
  let p = data.produto;
  const product = {
    id: p.id,
    slug: p.slug,
    title: p.title,
    category: p.tiposDeProdutos.nodes[0],
    qualities: p.qualidades.nodes || null,
    alerts: p.alertas.nodes || null,
    pricing: {
      store: {
        unit: p.camposDeProduto.precificacao.naLoja.medida,
        weight: p.camposDeProduto.precificacao.naLoja.peso || "",
        price: p.camposDeProduto.precificacao.naLoja.precoNaLoja,
      },
      delivery: {
        unit: p.camposDeProduto.precificacao.paraEntrega.medida,
        weight: p.camposDeProduto.precificacao.paraEntrega.peso || "",
        price: p.camposDeProduto.precificacao.paraEntrega.precoNaLoja,
      },
    },
    conservation: p.camposDeProduto.conservacao,
    content:
      p.camposDeProduto.descricao.descricaoCompleta ||
      `<p>${p.camposDeProduto.descricao.descricaoBreve}</p>`,
    ingredients: p.camposDeProduto.ingredientes,
    when: p.camposDeProduto.quando,
    stores: p.camposDeProduto.ondeEncontro?.nodes
      ? await Promise.all(
          p.camposDeProduto.ondeEncontro.nodes.map(async (store: Store) => {
            return await getStoreBySlug(store.slug);
          })
        )
      : null,

    images: extractImageUrls(p.camposDeProduto.imagens),
    featuredImage: {
      src:
        p.featuredImage?.node.mediaItemUrl ||
        "https://admin.primaveradospaes.com.br/wp-content/uploads/2024/04/placeholder-primavera-dos-paes.gif",
      alt: p.title,
      width: p.featuredImage?.node.mediaDetails.width || 600,
      height: p.featuredImage?.node.mediaDetails.height || 420,
    },
  };

  return product;
}
export async function getFeaturedProducts() {
  const data = await getProducts();
  const products = data.filter(
    (product: ProductCard) => product.featured === true
  );
  return products;
}
export async function getProductsByCategory(slug: string) {
  const data = await getProducts();
  const products = data.filter(
    (product: ProductCard) => product.category === slug
  );
  return products;
}
export async function getProductCategories() {
  const data = await fetchAPIGraphql(` 
  query getProductCategories {
    tiposDeProdutos(where: {hideEmpty: true}) {
      nodes {
        slug
        name
      }
    }
  }
    `);
  return data.tiposDeProdutos.nodes;
}
export function filterProductsByTag(
  products: ProductCard[],
  tagFilters: ProductTag["slug"][]
) {
  if (tagFilters.length > 0) {
    //console.log(products, "produtos a serem filtrados");
    //console.log(tagFilters, "tagFilters a serem filtrados");

    return products.filter((product: any) =>
      product.qualities.some((tag: ProductTag) => tagFilters.includes(tag.slug))
    );
  } else {
    return products;
  }
}
export function getTagsfromProducts(products: ProductCard[]) {
  let tags: ProductTag[] = [];
  products.forEach((product: ProductCard) => {
    product.qualities.forEach((tag: ProductTag) => {
      !tags.some((item) => item.slug === tag.slug) && tags.push(tag);
    });
  });
  return tags;
}
export async function getProductsAndFilters(
  searchParams: any,
  products: ProductCard[]
) {
  const tagFilters: any = Object.keys(searchParams);
  const filteredProducts = filterProductsByTag(products, tagFilters);
  const tagButtons = getTagsfromProducts(filteredProducts);
  return { filteredProducts, tagButtons, tagFilters };
}
export async function getCategoryBySlug(slug: string) {
  const data = await getProductCategories();
  const category = data.filter(
    (category: ProductCategory) => category.slug === slug
  );
  return category[0];
}
export async function getStores() {
  const data = await fetchAPIGraphql(` 
  query getStores {
    lojas(where: {status: PUBLISH}) {
      nodes {
        id
        title
        slug
        featuredImage {
            node {
              mediaDetails {
                sizes {
                  sourceUrl
                  width
                  height
                }
                height
                width
              }
              mediaItemUrl
            }
          }
        camposDeLojas {
          bairro
          telefone
          logradouro
          linkDoWhats        
          mapaDoGoogle {
            title
            url
          }
          funcionamento {
            horariosDeSabado
            horariosDeTercaASexta
          }
        }
      }
    }
  }
  
    `);

  const stores = data.lojas.nodes.map((s: any) => {
    return {
      id: s.id,
      slug: s.slug,
      title: s.title,
      featuredImage: {
        large: {
          src: s.featuredImage.node.mediaItemUrl,
          alt: s.title,
          width: s.featuredImage.node.mediaDetails.width,
          height: s.featuredImage.node.mediaDetails.height,
        },
        small: {
          src: s.featuredImage.node.mediaDetails.sizes[0].sourceUrl,
          alt: s.title,
          width: s.featuredImage.node.mediaDetails.sizes[0].width,
          height: s.featuredImage.node.mediaDetails.sizes[0].height,
        },
        thumb: {
          src: s.featuredImage.node.mediaDetails.sizes[1].sourceUrl,
          alt: s.title,
          width: s.featuredImage.node.mediaDetails.sizes[1].width,
          height: s.featuredImage.node.mediaDetails.sizes[1].height,
        },
      },
      Logradouro: s.camposDeLojas.logradouro,
      Bairro: s.camposDeLojas.bairro,
      Telefone: s.camposDeLojas.telefone,
      TuesdayToFridayHours: s.camposDeLojas.funcionamento.horariosDeTercaASexta,
      SaturdayHours: s.camposDeLojas.funcionamento.horariosDeSabado,
      MapsLink: s.camposDeLojas.mapaDoGoogle,
    };
  });
  //console.log(stores, "stores Dats.ts");
  return stores;
}
export async function getStoreBySlug(slug: string) {
  const data = await getStores();
  const store = data.filter((store: Store) => store.slug === slug);
  ///console.log(store, "store Data.ts");
  return store[0];
}
export async function getSEO(slug: string, type: string) {
  const data = await fetchAPIGraphql(`
  query getSEO {
    ${type} (id: "${slug}", idType: URI) {
      
      ${
        type === "page" || type === "produto" || type === "post"
          ? `
          title  
          featuredImage {
            node {
              id
              srcSet
              sourceUrl
              mediaDetails {
                height
                width
              }
            }
          }
      `
          : "name"
      }
      sEO {
        seo_descricao
        seo_titulo
        ogImage {
          node {
            sourceUrl
            mediaDetails {
              height
              width
            }
          }
        }
      }
    }
  }
`);

  const page = {
    seoDescription: data[type]?.sEO.seo_descricao,
    seoTitle:
      data[type]?.sEO.seo_titulo || data[type]?.title || data[type]?.name,
    ogImage: {
      src:
        data[type]?.sEO.ogImage?.node.sourceUrl ||
        data[type]?.featuredImage?.node.sourceUrl ||
        `/opengraph-image.jpg`,
      width:
        data[type]?.sEO.ogImage?.node.mediaDetails.width ||
        data[type]?.sEO.featuredImage?.node.mediaDetails.width ||
        1200,
      height:
        data[type]?.sEO.ogImage?.node.mediaDetails.height ||
        data[type]?.sEO.featuredImage?.node.mediaDetails.height ||
        630,
    },
  };
  //console.log(page, "Page SEO Data.ts");
  return page;
}

export async function getFAQ() {
  const data = await fetchAPIGraphql(`
  query GetFAQ {
    perguntasFrequentes {
      nodes { 
        id
        title
        content
      }
    }
  }
`);
  const faqs = data.perguntasFrequentes.nodes.map((faq: any) => ({
    id: faq.id,
    title: faq.title,
    content: faq.content,
  }));

  //console.log(faqs, "faqs Data.ts");
  return faqs;
}
