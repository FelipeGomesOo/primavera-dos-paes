import { getProductBySlug, getProducts } from "@/lib/data";
import Image from "next/image";
import BadgeCloud from "@/components/BadgeCloud";
import Ingredients from "./Ingredientes";
import Conservation from "./Conservation";
import Link from "next/link";
import Stores from "@/components/Stores/Stores";
import Breadcrumb from "@/components/Breadcrumb";
import Description from "./Description";
import CTA from "./CTA";
import { Suspense } from "react";
import When from "./When";
import StoreCard from "@/components/Stores/Store";

export default async function Produto({
  params,
}: {
  params: { slug: string };
}) {
  const product = await getProductBySlug(params.slug);
  // console.log(product, "Pagina do produto");
  let badges: ProductTag[] = [];
  badges = badges.concat(product.qualities).concat(product.alerts);
  return (
    <>
      <div className="container flex flex-col lg:flex-row gap-8">
        <div className="md:hidden">
          <Breadcrumb category={product.category} />

          <h1 className=" text-4xl">{product.title}</h1>
        </div>
        <div className="w-full lg:w-4/12 flex-none">
          <Image
            src={product.featuredImage}
            alt={product.title}
            width={1200}
            height={600}
          />
          <BadgeCloud badges={badges} />
        </div>
        <article className="w-ful grow">
          <div className="hidden md:block">
            <Breadcrumb category={product.category} />
            <h1 className=" text-4xl">{product.title}</h1>
          </div>
          <Description description={product.content} />
          <Conservation tips={`aqui vã entrar as dicas de conservação`} />
          <Ingredients ingredients={product.ingredients} />
          <When title={product.title} when={product.when} />
          <section className="">
            <section className="w-full text-sm md:text-[1rem]">
              <div className="flex  justify-between pb-4 ">
                <strong className="w-6/12 md:w-8/12">Onde encontrar?</strong>
                <strong>Ter-Sex </strong>
                <strong>Sábado</strong>
              </div>
              <div className="flex flex-col gap-2">
                {product.stores.map((store: Store, index: number) => (
                  <div
                    key={index}
                    className="border-t border-primary-light pt-1 flex flex-row gap-2 justify-between"
                  >
                    <div className="w-6/12 md:w-8/12">{store.Logradouro}</div>
                    <div className="">{store.TuesdayToFridayHours}</div>
                    <div className="">{store.SaturdayHours}</div>
                  </div>
                ))}
              </div>
            </section>
          </section>
        </article>
        <CTA pricing={product.pricing} />
      </div>
      <Stores stores={product.stores} />
    </>
  );
}
export async function generateStaticParams() {
  const products = await getProducts();
  const productSlugs = products.map((product: ProductCard) => ({
    category: product.category,
    slug: product.slug,
  }));

  return productSlugs;
}
