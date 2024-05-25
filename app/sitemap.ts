import { getProducts, getProductCategories } from "@/lib/data";

function genPage(url: string, priority: number) {
  return {
    url: "https://primaveradospaes.com.br" + url,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority,
  };
}

const genSiteMap = async () => {
  const products = await getProducts();
  const categories = await getProductCategories();
  let pages = [genPage("/", 1), genPage("/produtos/", 0.8)];
  categories.forEach((category: any) => {
    pages.push(genPage("/produtos/" + category.slug, 0.7));
  });
  products.forEach((product: any) => {
    pages.push(
      genPage("/produtos/" + product.category + "/" + product.slug, 0.6)
    );
  });
  return pages;
};

export default async function sitemap() {
  const pages = await genSiteMap();
  return [...pages];
}
