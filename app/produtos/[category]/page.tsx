import Hero from "@/app/produtos/Hero";
import Portfolio from "@/components/Portfolio/Portfolio";
import { getAllProductCategories, getCategoryId } from "@/lib/data";

export default async function Categoria({
  params,
  searchParams,
}: {
  params: { category: string };
  searchParams?: {
    query?: string;
  };
}) {
  //console.log(searchParams, "Query Página de categoria de produto");

  return (
    <>
      <Hero>Nossos produtos</Hero>
      <Portfolio
        amountOfProducts={30}
        categoryId={params.category}
        tags={searchParams || {}}
      />
    </>
  );
}
export async function generateStaticParams() {
  const productCategories = await getAllProductCategories();

  return productCategories.map((item: any) => ({
    category: item.slug,
  }));
}
