import Hero from "@/app/produtos/Hero";
import Portfolio from "@/components/Portfolio/Portfolio";
import { Suspense } from "react";
import { getProductCategories, getProducts, getProductsPage } from "@/lib/data";
import PortfolioSkeleton from "@/components/PortfolioSkeleton";

export default async function Page() {
  const products = await getProducts();
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
