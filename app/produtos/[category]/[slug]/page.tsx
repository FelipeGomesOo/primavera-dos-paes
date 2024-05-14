import { getProduct } from "@/lib/data";
import Image from "next/image";
import BadgeCloud from "@/components/BadgeCloud";
import Ingredients from "./Ingredientes";
import Conservation from "./Conservation";
import Breadcrumb from "@/components/Breadcrumb";
import Description from "./Description";
import CTA from "./CTA";
import When from "./When";
import Lojas from "./Lojas";

export default async function Produto({
  params,
}: {
  params: { slug: string };
}) {
  const product = await getProduct(params.slug);
  // console.log(product, "Pagina do produto");
  let badges: ProductTag[] = [];
  badges = badges.concat(product.qualities).concat(product.alerts);
  return (
    <>
      <div className="container flex flex-col lg:flex-row gap-8 mb-12 justify-between reveal">
        <div className="w-full lg:w-8/12 xl:w-7/12 flex-none">
          <Breadcrumb category={product.category} />
          <h1 className="mt-2">{product.title}</h1>
          <Image
            src={product.featuredImage.src}
            alt={product.featuredImage.alt}
            width={product.featuredImage.width}
            height={product.featuredImage.height}
            className="w-full"
          />
          <BadgeCloud badges={badges} />
          <article className="w-ful grow flex flex-col gap-6">
            <Description description={product.content} />
            <Conservation tips={product.conservation} />
            <Ingredients ingredients={product.ingredients} />
            <When when={product.when} />
            <Lojas stores={product.stores || undefined} />
          </article>
        </div>
        <CTA pricing={product.pricing} />
      </div>
    </>
  );
}
