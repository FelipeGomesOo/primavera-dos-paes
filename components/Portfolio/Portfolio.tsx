import ProductCard from "@/components/Portfolio/ProductCard";
export default async function Portfolio({
  products,
  children,
}: {
  products: ProductCard[];
  children?: React.ReactNode;
}) {
  return (
    <section className="container grid grid-cols-12  gap-4 gap-y-8 py-6 ">
      {products.map((product: ProductCard, index: number) => (
        <ProductCard key={index} product={product} />
      ))}
      {children}
    </section>
  );
}
