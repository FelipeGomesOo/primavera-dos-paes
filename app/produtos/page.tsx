import Image from "next/image";
import Hero from "@/app/produtos/Hero";
import Portfolio from "@/components/Portfolio/Portfolio";

export default function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  //console.log(searchParams, "Query Página de Produto");
  return (
    <>
      <Hero>Nossos produtos</Hero>
      <Portfolio
        amountOfProducts={30}
        categoryId={null}
        tags={searchParams || {}}
      />
    </>
  );
}
