import { getProductCategories, getProductsPage } from "@/lib/data";
import Hero from "./Hero";
import { Suspense } from "react";
import Portfolio from "@/components/Portfolio/Portfolio";
import PortfolioSkeleton from "@/components/PortfolioSkeleton";
import { unstable_cache } from "next/cache";

export default async function ProductsListing({ products }: { products: any }) {
  const categories = unstable_cache(await getProductCategories(), [
    "productCategoriesTag",
  ]);
  const { title } = await getProductsPage();
  return (
    <>
      <Hero>{title}</Hero>
      <Suspense fallback={<PortfolioSkeleton />}>
        <Portfolio products={products} categories={categories} />
      </Suspense>
    </>
  );
}
