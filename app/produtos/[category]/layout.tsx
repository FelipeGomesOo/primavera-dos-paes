import { getProductCategories, getProductCategory } from "@/lib/data";
import { Metadata, ResolvingMetadata } from "next";
export const revalidate = 0;
type Props = {
  params: { category: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { seoDescription, seoTitle, ogImage } = await getProductCategory(
    params.category
  );
  return {
    title: {
      template: `%s | Primavera dos pães`,
      default: seoTitle,
    },
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

export async function generateStaticParams() {
  const categories = await getProductCategories();
  return categories.map((item: any) => ({
    category: item.slug,
  }));
}
export default function Layout({
  params,
  children,
}: {
  params: { category: string };
  children: React.ReactNode;
}) {
  return children;
}
