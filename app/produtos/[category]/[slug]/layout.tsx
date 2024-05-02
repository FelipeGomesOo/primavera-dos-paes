import { getProduct, getProductsByCategory } from "@/lib/data";
import { Metadata, ResolvingMetadata } from "next";
export const dynamic = "auto";
type Props = {
  params: { slug: string };
};
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { seoDescription, seoTitle, ogImage } = await getProduct(params.slug);
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
export async function generateStaticParams({
  params: { category },
}: {
  params: { category: ProductCategory["slug"] };
}) {
  const products = await getProductsByCategory(category);
  return products.map((product: ProductCard) => ({
    slug: product.slug,
  }));
}

export default function Layout({
  params,
  children,
}: {
  params: { slug: string };
  children: React.ReactNode;
}) {
  return children;
}
