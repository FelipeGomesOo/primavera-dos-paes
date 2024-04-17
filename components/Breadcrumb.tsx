import Link from "next/link";

export default function Breadcrumb({
  category,
}: {
  category: ProductCategory;
}) {
  console.log(category, "category breadcrumb");
  return (
    <nav className="flex gap-x-2">
      <Link href={`/produtos`}>Produtos ›</Link>
      <Link href={`/produtos/${category.slug}`}>{category.name}</Link>
    </nav>
  );
}
