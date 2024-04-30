import { getProductCategories, getProductsPage } from "@/lib/data";
import Hero from "./Hero";
import { Suspense } from "react";
import Portfolio from "@/components/Portfolio/Portfolio";
import PortfolioSkeleton from "@/components/PortfolioSkeleton";

export default async function ProductsListing({ products }: { products: any }) {
  const categories = await getProductCategories();
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
