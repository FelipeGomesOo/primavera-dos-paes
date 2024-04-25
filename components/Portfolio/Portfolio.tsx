"use client";
import ProductCard from "@/components/Portfolio/ProductCard";
import { getProductsAndFilters } from "@/lib/data";
import PortfolioFilter from "./PortfolioFilter";
import FilterByCategory from "./FilterByCategory";
import FilterByTag from "./FilterByTag";
import EmptyPortfolio from "./EmptyPortfolio";
import { useSearchParams } from "next/navigation";
export default function Portfolio({
  products,
  categories,
  children,
}: {
  products: ProductCard[];
  categories?: ProductCategory[];
  children?: React.ReactNode;
}) {
  const searchParams = useSearchParams();
  let searchParamsArray: any = [];
  searchParams.forEach((value, key) => {
    searchParamsArray.push(key);
  });
  const { filteredProducts, tagButtons } = getProductsAndFilters(
    products,
    searchParamsArray
  );
  return (
    <>
      {categories && (
        <PortfolioFilter>
          <FilterByCategory categories={categories} />
          <FilterByTag tags={tagButtons} />
        </PortfolioFilter>
      )}
      <section className="grid grid-cols-12 gap-2 xl:gap-4 gap-y-8 reveal container">
        {filteredProducts.map((product: ProductCard, index: number) => (
          <ProductCard key={index} product={product} index={index} />
        ))}
      </section>
      <EmptyPortfolio products={filteredProducts} />
      {children}
    </>
  );
}
