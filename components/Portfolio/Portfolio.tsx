import Link from "next/link";
import ProductCard from "./ProductCard";
import { getProducts } from "@/lib/data";
import FilterByCategory from "./FilterByCategory";
import FilterByTag from "./FilterByTag";
import { objExists } from "@/lib/utils";

export default async function Portfolio({
  amountOfProducts,
  categoryId = null,
  tags,
}: {
  amountOfProducts: number;
  categoryId: string | null;
  tags: object;
}) {
  const tagsAreSet = objExists(tags);
  let tagsArray: any = tagsAreSet && Object.keys(tags);
  //console.log(tags, "Query do Portfolio");

  const products = await getProducts(amountOfProducts);

  const filteredProducts = products.filter((product: any) => {
    const isInCategory = categoryId
      ? product.category.slug.includes(categoryId)
      : true;
    const hasTag = tagsAreSet
      ? tagsArray.some((tag: any) => product.tags.includes(tag))
      : true;
    return isInCategory && hasTag;
  });

  //console.log(productsByTag, "productsByTag");
  return (
    <>
      {products.length > 6 && (
        <>
          <div className=" overflow-hidden sticky top-0 bg-[#fff]  ">
            <div className="overflow-auto relative lg:container">
              <section className="w-full scrollable-content flex gap-8 snap-x scroll-pl-6 overflow-x-auto lg:overflow-y-visible h-10 items-center border-b border-primary-light/20  ">
                <FilterByCategory />
                <FilterByTag />
              </section>
            </div>
          </div>
        </>
      )}
      <section className="container grid grid-cols-12  gap-4 gap-y-8 py-6 ">
        {filteredProducts.map((product: any, index: number) => (
          <ProductCard
            key={product.slug}
            title={product.title}
            imgUrl={product.featuredImage}
            linkUrl={`/produtos/${product.category.slug}/${product.slug}`}
          />
        ))}
      </section>
      {products.length < 7 && (
        <section className="container">
          <Link className="button medium w-full my-6" href="/produtos">
            Confira todos os produtos
          </Link>
        </section>
      )}
    </>
  );
}
