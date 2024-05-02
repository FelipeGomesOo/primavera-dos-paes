import { getProductsByCategory } from "@/lib/data";
import ProductsListing from "@/app/produtos/ProductsListing";
export default async function Categoria({
  params,
}: {
  params: { category: string };
}) {
  const products = await getProductsByCategory(params.category);
  return <ProductsListing products={products} />;
}
