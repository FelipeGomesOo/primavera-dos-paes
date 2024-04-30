import { getProducts } from "@/lib/data";
import ProductsListing from "@/app/produtos/ProductsListing";

export default async function Page() {
  const products = await getProducts();
  return <ProductsListing products={products} />;
}
