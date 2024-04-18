import Hero from "@/app/produtos/Hero";
import EmptyPortfolio from "@/components/Portfolio/EmptyPortfolio";
import FilterByCategory from "@/components/Portfolio/FilterByCategory";
import FilterByTag from "@/components/Portfolio/FilterByTag";
import Portfolio from "@/components/Portfolio/Portfolio";
import PortfolioFilter from "@/components/Portfolio/PortfolioFilter";
import {
  getProductCategories,
  getProductsAndFilters,
  getProductsByCategory,
  getSEO,
} from "@/lib/data";
import { Metadata, ResolvingMetadata } from "next";
type Props = {
  params: { category: string };
};
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { seoDescription, seoTitle, ogImage } = await getSEO(
    `tipo_de_produto/${params.category}`,
    "tipoDeProduto"
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

export default async function Categoria({
  params,
  searchParams,
}: {
  params: { category: string };
  searchParams?: {
    query?: string;
  };
}) {
  const products = await getProductsByCategory(params.category);
  const { filteredProducts, tagButtons } = await getProductsAndFilters(
    searchParams,
    products
  );
  return (
    <>
      <Hero>Nossos produtos</Hero>
      <PortfolioFilter>
        <FilterByCategory />
        <FilterByTag tags={tagButtons} />
      </PortfolioFilter>
      <Portfolio products={filteredProducts}>
        <EmptyPortfolio
          products={filteredProducts}
          category={params.category}
        />
      </Portfolio>
    </>
  );
}
export async function generateStaticParams() {
  const categories = await getProductCategories();
  return categories.map((item: any) => ({
    category: item.slug,
  }));
}
