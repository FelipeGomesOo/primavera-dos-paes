"use client";
import Category from "@/components/Portfolio/Category";
export default function FilterByCategory({
  categories,
}: {
  categories: ProductCategory[];
}) {
  return (
    <>
      <Category categoryName="Todos" categoryURL="/produtos" />
      {categories.map((category: any, index: number) => (
        <Category
          key={index}
          categoryName={category.name}
          categoryURL={`/produtos/${category.slug}`}
        />
      ))}
    </>
  );
}
