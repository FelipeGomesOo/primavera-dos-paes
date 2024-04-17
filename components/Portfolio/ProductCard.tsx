import Link from "next/link";
import Image from "next/image";
export default function ProductCard({ product }: { product: ProductCard }) {
  const { slug, title, excerpt, featuredImage, category } = product;
  return (
    <div className="col-span-12 sm:col-span-6 md:col-span-4">
      <Link href={`/produtos/${category}/${slug}`} className=" ">
        <Image src={featuredImage} alt={title} width={1200} height={600} />
        <h3 className="mt-2">{title}</h3>
        <p>{excerpt}</p>
      </Link>
    </div>
  );
}
