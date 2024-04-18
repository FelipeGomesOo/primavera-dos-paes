import { getProductBySlug, getProducts, getSEO } from "@/lib/data";
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
import { Metadata, ResolvingMetadata } from "next";
import Lojas from "./Lojas";
type Props = {
  params: { slug: string };
};
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { seoDescription, seoTitle, ogImage } = await getSEO(
    `produto/${params.slug}`,
    "produto"
  );
  return {
    title: seoTitle,
    ...(seoDescription ? { description: seoDescription } : null),
    openGraph: {
      images: [
        {
          url: ogImage.src,
          width: ogImage.width,
          height: ogImage.height,
        },
      ],
    },
  };
}
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
      <div className="container flex flex-col lg:flex-row gap-8 mb-12">
        <div className="md:hidden">
          <Breadcrumb category={product.category} />
          <h1 className=" text-4xl">{product.title}</h1>
        </div>
        <div className="w-full lg:w-4/12 flex-none">
          <Image
            src={product.featuredImage.src}
            alt={product.featuredImage.alt}
            width={product.featuredImage.width}
            height={product.featuredImage.height}
          />
          <BadgeCloud badges={badges} />
        </div>
        <article className="w-ful grow flex flex-col gap-6">
          <div className="hidden md:block">
            <Breadcrumb category={product.category} />
            <h1 className=" text-4xl mb-2 pt-2">{product.title}</h1>
          </div>
          <Description description={product.content} />
          <Conservation tips={product.conservation} />
          <Ingredients ingredients={product.ingredients} />
          <When title={product.title} when={product.when} />
          <Lojas stores={product.stores || undefined} />
        </article>
        <CTA pricing={product.pricing} />
      </div>
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
