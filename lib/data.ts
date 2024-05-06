import { extractImageUrls, getImg } from "./utils";

const BASE_URL = process.env.BASE_URL;
const API_URL = process.env.API_URL;
//const username = process.env.API_USERNAME;
//const password = process.env.API_PASSWORD;

//const base64Credentials = btoa(`${username}:${password}`);

async function fetchAPIGraphql(query = "", myTag = "") {
  const res = await fetch("https://admin.primaveradospaes.com.br/graphql", {
    next: { tags: [`${myTag}`] },
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify({
      query,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }
  return json.data;
}
/* async function fetchAPI(query: string) {
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
} */
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
  const data = await fetchAPIGraphql(
    `
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
    `,
    "tagGetProducts"
  );
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
export async function getProduct(slug: string) {
  const data = await fetchAPIGraphql(`
    query getProductById {
      produto(id: "${slug}", idType: SLUG) {
        id
        slug 
        title
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
    seoDescription:
      p.sEO.seo_descricao || p.camposDeProduto.descricao.descricaoBreve,
    seoTitle: p.sEO.seo_titulo || p.title,
    ogImage: {
      src:
        p.sEO.ogImage?.node.sourceUrl ||
        p.featuredImage?.node.sourceUrl ||
        `/opengraph-image.jpg`,
      width:
        p.sEO.ogImage?.node.mediaDetails.width ||
        p.sEO.featuredImage?.node.mediaDetails.width ||
        1200,
      height:
        p.sEO.ogImage?.node.mediaDetails.height ||
        p.sEO.featuredImage?.node.mediaDetails.height ||
        630,
    },
  };

  return product;
}
export async function getFeaturedProducts() {
  const data = await fetchAPIGraphql(
    `query getProducts {
      produtos(
        where: {
          status: PUBLISH, 
          orderby: {field: TITLE, order: ASC}, 
          taxQuery: {
            relation: AND, 
            taxArray: {
              terms: ["em-destaque"], 
              taxonomy: SITUAO, 
              operator: IN, 
              field: SLUG
            }
          }
        },
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
        }
      }
    }`,
    "tagGetFeaturedProducts"
  );

  const products = data.produtos.nodes.map((p: any) => {
    return {
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
    };
  });
  //console.log(products, "featuredProducts data.ts");

  return products;
}
export async function getProductsByCategory(slug: string) {
  const data = await fetchAPIGraphql(
    `
  query getProducts {
    produtos(
      where: {status: PUBLISH, orderby: {field: TITLE, order: ASC}, taxQuery: {relation: AND, taxArray: {terms: ["${slug}"], taxonomy: TIPODEPRODUTO, operator: IN, field: SLUG}}}
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
  }`,
    "tagGetProductsByCategory"
  );

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
  return products;
}
export async function getProductCategories() {
  const data = await fetchAPIGraphql(
    `query getProductCategories {
    tiposDeProdutos(where: {hideEmpty: true}) {
      nodes {
        slug
        name
      }
    }
  }`,
    "tagGetProductCategories"
  );
  return data.tiposDeProdutos.nodes;
}
export async function getProductCategory(slug: string) {
  const data = await fetchAPIGraphql(
    ` 
  query getProductCategory {
    tipoDeProduto(id: "${slug}", idType: SLUG ) {
        slug
        name
        description
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
  }`,
    "GetProductCategory"
  );
  const c = data.tipoDeProduto;
  const category = {
    seoTitle: c.sEO.seo_titulo || c.name,
    seoDescription: c.sEO.seo_descricao || c.description,
    ogImage: {
      src:
        c.sEO.ogImage?.node.sourceUrl ||
        c.featuredImage?.node.sourceUrl ||
        `/opengraph-image.jpg`,
      width:
        c.sEO.ogImage?.node.mediaDetails.width ||
        c.sEO.featuredImage?.node.mediaDetails.width ||
        1200,
      height:
        c.sEO.ogImage?.node.mediaDetails.height ||
        c.sEO.featuredImage?.node.mediaDetails.height ||
        630,
    },
  };
  return category;
}
export function filterProductsByTag(
  products: ProductCard[],
  tagFilters: ProductTag["slug"][]
) {
  return tagFilters.length === 0
    ? products
    : products.filter((product: any) =>
        product.qualities.some((tag: ProductTag) =>
          tagFilters.includes(tag.slug)
        )
      );
}
export function getTagsfromProducts(products: ProductCard[]) {
  let tags: ProductTag[] = [];
  products.forEach((product: ProductCard) => {
    product.qualities?.forEach((tag: ProductTag) => {
      !tags.some((item) => item.slug === tag.slug) && tags.push(tag);
    });
  });
  return tags;
}
export function getProductsAndFilters(
  products: ProductCard[],
  tagFilters: any
) {
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
  const data = await fetchAPIGraphql(
    `query getStores {
    lojas(where: {status: PUBLISH}) {
      nodes {
        id
        title
        slug
        featuredImage {
            node {
              mediaDetails {                 
                height
                width
              }
              mediaItemUrl
            }
          }
        camposDeLojas {
          fotoDaLoja {
             node {
              mediaDetails {                 
                height
                width
              }
              mediaItemUrl
            }
          }
          subtitulo
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
  }`,
    "tagGetStores"
  );

  const stores = data.lojas.nodes.map((s: any) => {
    return {
      id: s.id,
      slug: s.slug,
      title: s.title,
      subtitle: s.camposDeLojas.subtitulo,
      featuredImage: [
        {
          src: s.featuredImage.node.mediaItemUrl,
          alt: s.title,
          width: s.featuredImage.node.mediaDetails.width,
          height: s.featuredImage.node.mediaDetails.height,
        },
        s.camposDeLojas.fotoDaLoja?.node.mediaItemUrl && {
          src: s.camposDeLojas.fotoDaLoja.node.mediaItemUrl,
          alt: s.title,
          width: s.camposDeLojas.fotoDaLoja.node.mediaDetails.width,
          height: s.camposDeLojas.fotoDaLoja.node.mediaDetails.height,
        },
      ],
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
export async function getFAQ() {
  const data = await fetchAPIGraphql(
    `query GetFAQ {
      perguntasFrequentes {
        nodes { 
          id
          title
          content
        }
      }
    }`,
    "tagGETFAQ"
  );
  const faqs = data.perguntasFrequentes.nodes.map((faq: any) => ({
    id: faq.id,
    title: faq.title,
    content: faq.content,
  }));

  //console.log(faqs, "faqs Data.ts");
  return faqs;
}
export async function getProductsPage() {
  const data = await fetchAPIGraphql(
    `query getProductsPage {
      page(id: "242", idType: DATABASE_ID) {
        title
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
    }`,
    "tagGetProductsPage"
  );
  let p = data.page;
  return {
    title: p.title,
    seoTitle: p.sEO.seo_titulo || p.title,
    seoDescription: p.sEO.seo_descricao,
    ogImage: {
      src: p.sEO.ogImage?.node.sourceUrl,
      width: p.sEO.ogImage?.node.mediaDetails.width || 1200,
      height: p.sEO.ogImage?.node.mediaDetails.height || 630,
    },
  };
}
export async function getHomePage() {
  const data = await fetchAPIGraphql(
    `query getHomePage {
      page(id: "272", idType: DATABASE_ID) {
        title
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
        home {
          lojas{
            titulo
            entregas{
              titulo
              descricao
            }
            botao{
              link
              titulo
            }
          }
          nossosProdutos {
            titulo
            subtitulo
            descricao
          }
          sobre {
            nossaHistoria {
              historia
              autoria
            }
            nossosPilares {
              imagemDosSocios {
                node {
                  altText
                  sourceUrl
                  sizes
                  mediaDetails {
                    height
                    width
                  }
                }
              }
              titulo
              pilares {
                pilar01 {
                  titulo
              descricao
                  imagemPilar01 {
                    node {
                      altText
                      sourceUrl
                      sizes
                      mediaDetails {
                        height
                        width
                      }
                    }
                  }
                }
                pilar02 {
                  titulo
              descricao
                  imagemPilar02 {
                    node {
                      altText
                      sourceUrl
                      sizes
                      mediaDetails {
                        height
                        width
                      }
                    }
                  }
                }
                pilar03 {
                  titulo
              descricao
                  imagemPilar03 {
                    node {
                      altText
                      sourceUrl
                      sizes
                      mediaDetails {
                        height
                        width
                      }
                    }
                  }
                }
              }
            }
          }
          interludio {
            interludio_fotinhas {
              interludio_fotinha01 {
                node {
                  altText
                  sourceUrl
                  sizes
                  mediaDetails {
                    height
                    width
                  }
                }
              }
              interludio_fotinha02 {
                node {
                  altText
                  sourceUrl
                  sizes
                  mediaDetails {
                    height
                    width
                  }
                }
              }
              interludio_fotinha03 {
                node {
                  altText
                  sourceUrl
                  sizes
                  mediaDetails {
                    height
                    width
                  }
                }
              }
            }
            interludio_fraseImpactante
            interludio_frase_impactante_autor
            interludio_mainImg {
              node {
                altText
                sourceUrl
                sizes
                mediaDetails {
                  height
                  width
                }
              }
            }
            interludio_imagenzona {
              node {
                altText
                sourceUrl
                sizes
                mediaDetails {
                  height
                  width
                }
              }
            }
          }
          hero {
            title
            fraseImpactante
            imagenzona {
              node {
                altText
                sourceUrl
                sizes
                mediaDetails {
                  height
                  width
                }
              }
            }
            mainImg {
              node {
                altText
                sourceUrl
                sizes
                mediaDetails {
                  height
                  width
                }
              }
            }
            imagens {
              fotinha01 {
                node {
                  sourceUrl
                  mediaDetails {
                    height
                    width
                  }
                  altText
                }
              }
              fotinha02 {
                node {
                  sourceUrl
                  mediaDetails {
                    height
                    width
                  }
                  altText
                }
              }
              fotinha03 {
                node {
                  sourceUrl
                  mediaDetails {
                    height
                    width
                  }
                  altText
                }
              }
            }
          }
        }
      }
    }`,
    "tagGetHomePage"
  );
  let p = data.page;
  return {
    title: p.title,
    seoTitle: p.sEO.seo_titulo || p.home.hero.title,
    seoDescription: p.sEO.seo_descricao,
    ogImage: {
      src: p.sEO.ogImage?.node.sourceUrl,
      width: p.sEO.ogImage?.node.mediaDetails.width || 1200,
      height: p.sEO.ogImage?.node.mediaDetails.height || 630,
    },
    hero: {
      title: p.home.hero.title,
      mainImage: getImg(p.home.hero.mainImg),
      fotinhas: [
        getImg(p.home.hero.imagens.fotinha01),
        getImg(p.home.hero.imagens.fotinha02),
        getImg(p.home.hero.imagens.fotinha03),
      ],
      fraseImpactante: p.home.hero.fraseImpactante,
      imagenzona: getImg(p.home.hero.imagenzona),
    },
    lojas: {
      titulo: p.home.lojas.titulo,
      entregas: {
        titulo: p.home.lojas.entregas.titulo,
        descricao: p.home.lojas.entregas.descricao,
      },
      botao: {
        link: p.home.lojas.botao.link,
        titulo: p.home.lojas.botao.titulo,
      },
    },
    nossosProdutos: {
      titulo: p.home.nossosProdutos.titulo,
      subtitulo: p.home.nossosProdutos.subtitulo,
      descricao: p.home.nossosProdutos.descricao,
    },
    interludio: {
      mainImage: getImg(p.home.interludio.interludio_mainImg),
      fotinhas: [
        getImg(p.home.interludio.interludio_fotinhas.interludio_fotinha01),
        getImg(p.home.interludio.interludio_fotinhas.interludio_fotinha02),
        getImg(p.home.interludio.interludio_fotinhas.interludio_fotinha03),
      ],
      fraseImpactante: p.home.interludio.interludio_fraseImpactante,
      fraseImpactanteAutor: p.home.interludio.interludio_frase_impactante_autor,
      imagenzona: getImg(p.home.interludio.interludio_imagenzona),
    },
    sobre: {
      historia: p.home.sobre.nossaHistoria.historia,
      autoria: p.home.sobre.nossaHistoria.autoria,
      socios: getImg(p.home.sobre.nossosPilares.imagemDosSocios),
      titulo: p.home.sobre.nossosPilares.titulo,
      pilares: [
        {
          title: p.home.sobre.nossosPilares.pilares.pilar01.titulo,
          description: p.home.sobre.nossosPilares.pilares.pilar01.descricao,
          imagem: getImg(
            p.home.sobre.nossosPilares.pilares.pilar01.imagemPilar01
          ),
        },
        {
          title: p.home.sobre.nossosPilares.pilares.pilar02.titulo,
          description: p.home.sobre.nossosPilares.pilares.pilar02.descricao,
          imagem: getImg(
            p.home.sobre.nossosPilares.pilares.pilar02.imagemPilar02
          ),
        },
        {
          title: p.home.sobre.nossosPilares.pilares.pilar03.titulo,
          description: p.home.sobre.nossosPilares.pilares.pilar03.descricao,
          imagem: getImg(
            p.home.sobre.nossosPilares.pilares.pilar03.imagemPilar03
          ),
        },
      ],
    },
  };
}

export async function getGeral() {
  const data = await fetchAPIGraphql(
    `query getGeral {
      geral {
        email
        whatsapp_link
        whatsapp_number
        atendimento_whatsapp
        tm_status
        tm_id
        class_botao_flutuante
        class_botao_produtos 
      }
    }`,
    "tagGetGeral"
  );
  const g = data.geral;
  return {
    email: g.email,
    whatsapp_link: g.whatsapp_link,
    whatsapp_number: g.whatsapp_number,
    atendimento_whatsapp: g.atendimento_whatsapp,
    tm_status: g.tm_status,
    tm_id: g.tm_id,
    class_botao_flutuante: g.class_botao_flutuante,
    class_botao_produtos: g.class_botao_produtos,
  };
}
