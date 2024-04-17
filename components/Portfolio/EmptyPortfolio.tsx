import { getCategoryBySlug } from "@/lib/data";
import Link from "next/link";
export default async function EmptyPortfolio({
  category,
  products,
}: {
  category?: string;
  products: ProductCard[];
}) {
  const categorySlug = category && category.length > 0 ? category : "";
  const categoryName = category && (await getCategoryBySlug(category));
  //console.log(categoryName, "category name");
  const categoryText = categoryName ? (
    <>
      <strong>{categoryName.name.toLowerCase()}</strong>
    </>
  ) : (
    "produtos"
  );

  return (
    <>
      {products.length === 0 && (
        <section className="container py-10">
          <h3 className="a">
            Ops! Não encontramos {categoryText} com esse filtro.
          </h3>
          <Link
            className="button medium mt-10"
            href={`/produtos/${categorySlug}`}
          >
            Limpar filtros
          </Link>
        </section>
      )}
    </>
  );
}
