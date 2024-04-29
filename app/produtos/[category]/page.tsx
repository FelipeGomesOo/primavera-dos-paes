import Hero from "@/app/produtos/Hero";
import Portfolio from "@/components/Portfolio/Portfolio";
import { Suspense } from "react";
import { getProductCategories, getProductsByCategory } from "@/lib/data";
import PortfolioSkeleton from "@/components/PortfolioSkeleton";

export default async function Categoria({
  params,
}: {
  params: { category: string };
}) {
  const products = await getProductsByCategory(params.category);
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
