import Hero from "@/app/produtos/Hero";
import Portfolio from "@/components/Portfolio/Portfolio";
import { getProducts, getProductsAndFilters } from "@/lib/data";
import PortfolioFilter from "@/components/Portfolio/PortfolioFilter";
import FilterByCategory from "@/components/Portfolio/FilterByCategory";
import FilterByTag from "@/components/Portfolio/FilterByTag";
import EmptyPortfolio from "@/components/Portfolio/EmptyPortfolio";

import { Metadata } from "next";
import { getSEO } from "@/lib/data";

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

export default async function Page({
  searchParams,
}: {
  searchParams: {
    query: string;
  };
}) {
  const products = await getProducts();
  const { tagFilters, filteredProducts, tagButtons } =
    await getProductsAndFilters(searchParams, products);
  return (
    <>
      <Hero>Nossos produtos</Hero>
      <PortfolioFilter>
        <FilterByCategory />
        <FilterByTag tags={tagButtons} />
      </PortfolioFilter>
      <Portfolio products={filteredProducts}>
        <EmptyPortfolio products={filteredProducts} />
      </Portfolio>
    </>
  );
}
