"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function EmptyPortfolio({
  products,
}: {
  products: ProductCard[];
}) {
  const pathname = usePathname();
  //console.log(categoryName, "category name");

  return (
    <>
      {products.length === 0 && (
        <section className="container py-10">
          <h3 className="a">Ops! Não encontramos produtos com esse filtro.</h3>
          <Link className="button medium mt-10" href={pathname}>
            Limpar filtros
          </Link>
        </section>
      )}
    </>
  );
}
