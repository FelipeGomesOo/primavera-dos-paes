import Hero from "@/app/produtos/Hero";
import Portfolio from "@/components/Portfolio/Portfolio";
import { Suspense } from "react";
import { getProductCategories, getProducts } from "@/lib/data";

import { Metadata } from "next";
import { getSEO } from "@/lib/data";
import PortfolioSkeleton from "@/components/PortfolioSkeleton";

export async function generateMetadata(): Promise<Metadata> {
  const { seoDescription, seoTitle, ogImage } = await getSEO(
    "produtos",
    "page"
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

export default async function Page() {
  const products = await getProducts();
  const categories = await getProductCategories();
  return (
    <>
      <Hero>Nossos produtos</Hero>
      <section>
        <Suspense fallback={<PortfolioSkeleton />}>
          <Portfolio products={products} categories={categories} />
        </Suspense>
      </section>
    </>
  );
}
