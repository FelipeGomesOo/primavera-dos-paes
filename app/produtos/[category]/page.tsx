import Hero from "@/app/produtos/Hero";
import Portfolio from "@/components/Portfolio/Portfolio";
import { Suspense } from "react";
import {
  getProductCategories,
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
}: {
  params: { category: string };
}) {
  const products = await getProductsByCategory(params.category);
  const categories = await getProductCategories();
  return (
    <>
      <Hero>Nossos produtos</Hero>
      <section>
        <Suspense fallback={<>...</>}>
          <Portfolio products={products} categories={categories} />
        </Suspense>
      </section>
    </>
  );
}
export async function generateStaticParams() {
  const categories = await getProductCategories();
  return categories.map((item: any) => ({
    category: item.slug,
  }));
}
