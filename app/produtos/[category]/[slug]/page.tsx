import {
  getAllProductCategories,
  getProduct,
  getProductBySlug,
  getProducts,
  getProductsByCategory,
} from "@/lib/data";
import Hero from "@/app/produtos/Hero";
import Portfolio from "@/components/Portfolio/Portfolio";
import Image from "next/image";
import parse, {
  domToReact,
  htmlToDOM,
  Element,
  HTMLReactParserOptions,
} from "html-react-parser";

export default async function Produto({
  params,
}: {
  params: { category: string; slug: string };
}) {
  const product = await getProductBySlug(params.slug);
  console.log(product, "Pagina do produto");
  /* const options: HTMLReactParserOptions = {
    replace({ attribs, children }) {
      if (!attribs) {
        return;
      }
      if (attribs.class?.includes("asdasdasd")) {
        return <>{domToReact(children, options)}</>;
      }
    },
  }; */
  return (
    <>
      <Hero>{product.title}</Hero>
      <div className="container flex gap-6">
        <div className="w-full lg:w-6/12">
          <Image
            src={
              product.featuredImage ||
              "https://primaveradospaes.com.br/wp-content/uploads/2022/04/amanteigado-site.jpg"
            }
            alt={product.title}
            width={1200}
            height={600}
          />
        </div>
        {/* <article>{parse(product.content, options)}</article> */}
      </div>
    </>
  );
}
export async function generateStaticParams() {
  const productCategories = await getAllProductCategories();

  const staticParams = await Promise.all(
    productCategories.map(async (category: any) => {
      const products = await getProductsByCategory(category.slug);
      return products.map((product: any) => ({
        category: category.slug,
        slug: product.slug,
      }));
    })
  );

  return staticParams.flat();
}
