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

export async function getProducts(amountOfProducts: number) {
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

export async function getProductsByCategory(categorySlug: string) {
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
