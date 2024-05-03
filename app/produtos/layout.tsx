import { getProductsPage } from "@/lib/data";

export async function generateMetadata() {
  const { seoDescription, seoTitle, ogImage } = await getProductsPage();
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
export const dynamic = "auto";

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
