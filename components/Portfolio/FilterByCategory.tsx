import Category from "@/components/Portfolio/Category";
import { getProductCategories } from "@/lib/data";
import { Suspense } from "react";
export default async function FilterByCategory() {
  const categories = await getProductCategories();

  return (
    <>
      <Suspense fallback={<>Categoria...</>}>
        <Category categoryName="Todos" categoryURL="/produtos" />
      </Suspense>
      {categories.map((category: any, index: number) => (
        <Suspense key={index} fallback={<>Categoria...</>}>
          <Category
            key={index}
            categoryName={category.name}
            categoryURL={`/produtos/${category.slug}`}
          />
        </Suspense>
      ))}
    </>
  );
}
