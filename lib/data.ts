import { extractImageUrls } from "./utils";

const BASE_URL = process.env.BASE_URL;
const API_URL = process.env.API_URL;
const username = process.env.API_USERNAME;
const password = process.env.API_PASSWORD;

const base64Credentials = btoa(`${username}:${password}`);

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
  const data = await fetchAPI(
    `menu-items/?
    menus=2
    &status=publish
    &_fields=id,title,url`
  );

  const menu = await data.map((item: any) => {
    return {
      id: item.id,
      title: item.title.rendered,
      url: item.url.replace(BASE_URL, "").trim(),
    };
  });

  return menu;
}
export async function getAllProductCategories() {
  const data = await fetchAPI(
    `portfolio_category?_fields=
    name,
    slug,
    id
    &exclude=7,22
    &hide_empty=true
    `
  );
  return data;
}
export async function getProductCategoryById(id: number) {
  const data = await fetchAPI(
    `portfolio_category/${id}?_fields=
    name,
    slug,
    id 
    `
  );
  //console.log(data);
  return data;
}
export async function getAllProductTags() {
  const data = await fetchAPI(
    `portfolio_tags?_fields=
    name,
    slug,
    id 
    &hide_empty=true
    `
  );
  //console.log(data);
  return data;
}
export async function getProductTagById(id: number) {
  const data = await fetchAPI(
    `portfolio_tags/${id}?_fields=
    name,
    slug,
    id 
    &hide_empty=true
    `
  );
  //console.log(data);
  return data;
}

export async function getCategoryId(slug: string) {
  const req = await getAllProductCategories();
  const data = await req.filter((category: any) => category.slug === slug);

  return data[0].id;
}

export async function getProductssss(amountOfProducts: number) {
  const data = await fetchAPI(
    `avada_portfolio?
    per_page=80&status=publish
    &_embed=wp:featuredmedia 
    &orderby=title&order=asc
    `
  );
  const products = await Promise.all(
    data.map(async (product: any) => {
      const tagSlugs = await Promise.all(
        product.portfolio_tags.map(async (tag: any) => {
          const tagObject = await getProductTagById(tag);
          return tagObject.slug;
        })
      );
      const category = await Promise.all(
        product.portfolio_category.map(async (categoryId: any) => {
          const categoryObject = await getProductCategoryById(categoryId);
          const filteredCategory =
            categoryObject.id === 7 || categoryObject.id === 22
              ? null
              : categoryObject;
          //console.log(filteredCategory);
          return filteredCategory;
        })
      );

      return {
        title: product.title.rendered,
        slug: product.slug,
        status: product.status,
        category: category.filter((cat: any) => cat !== null)[0],
        tags: tagSlugs,
        featuredImage: product._embedded["wp:featuredmedia"][0].source_url,
        content: product.content.rendered,
      };
    })
  );
  const categorizedProducts = products.filter(
    (product: any) => product.category !== undefined
  );

  //console.log(categorizedProducts);
  return categorizedProducts.slice(0, amountOfProducts);
}

export async function getProduct(slug: string) {
  const req = await getProducts(90);
  const data = req.filter((product: any) => product.slug === slug);
  //console.log(data[0]);
  return data[0];
}

export async function getProductsByCategoryaa(categorySlug: string) {
  const req = await getProducts(90);
  const data = req.filter((product: any) => {
    const isInCategory = categorySlug
      ? product.category.slug.includes(categorySlug)
      : true;
    return isInCategory;
  });
  //console.log(data[0]);
  return data;
}

async function fetchAPIGraphql(
  query = "",
  { variables }: Record<string, any> = {}
) {
  const headers = { "Content-Type": "application/json" };

  /* if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
    headers[
      "Authorization"
    ] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`;
  } */

  // WPGraphQL Plugin must be enabled
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
              sourceUrl
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
  const products = data.produtos.nodes.map((productCard: any) => {
    return {
      id: productCard.id,
      slug: productCard.slug,
      title: productCard.title,
      excerpt: productCard.camposDeProduto.descricao.descricaoBreve,
      featuredImage: productCard.featuredImage || null,
      category: productCard.tiposDeProdutos.nodes[0].slug,
      qualities: productCard.qualidades.nodes || null,
      featured:
        productCard.camposDeProduto.destaque?.nodes[0].slug === "em-destaque"
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
        slug 
        title
        camposDeProduto {
            descricao { 
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
                id
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
              sourceUrl
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
  const product = {
    id: data.produto.id,
    slug: data.produto.slug,
    title: data.produto.title,
    content: data.produto.camposDeProduto.descricao.descricaoCompleta,
    ingredients: data.produto.camposDeProduto.ingredientes,
    when: data.produto.camposDeProduto.quando,
    stores: data.produto.camposDeProduto.ondeEncontro.nodes,
    images: extractImageUrls(data.produto.camposDeProduto.imagens),
    featuredImage: data.produto.featuredImage || null,
    category: data.produto.tiposDeProdutos.nodes[0].slug,
    qualities: data.produto.qualidades.nodes || null,
    alerts: data.produto.alertas.nodes || null,
    featured:
      data.produto.camposDeProduto.destaque?.nodes[0].slug === "em-destaque"
        ? true
        : false,
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
