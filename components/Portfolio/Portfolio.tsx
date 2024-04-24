import ProductCard from "@/components/Portfolio/ProductCard";
export default async function Portfolio({
  products,
  children,
}: {
  products: ProductCard[];
  children?: React.ReactNode;
}) {
  return (
    <>
      <section className="grid grid-cols-12  gap-4 gap-y-8 reveal">
        {products.map((product: ProductCard, index: number) => (
          <ProductCard key={index} product={product} index={index} />
        ))}
      </section>
      {children}
    </>
  );
}
