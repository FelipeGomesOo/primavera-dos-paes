import Link from "next/link";
import Image from "next/image";
export default function ProductCard({ product }: { product: ProductCard }) {
  const { slug, title, excerpt, featuredImage, category } = product;
  return (
    <div className="col-span-12 sm:col-span-6 md:col-span-4 group ">
      <Link href={`/produtos/${category}/${slug}`} className=" ">
        <Image
          className="md:group-hover:opacity-60 transform  duration-700"
          src={featuredImage}
          alt={title}
          width={1200}
          height={600}
        />
        <h4 className="mt-2">{title}</h4>
        <p>{excerpt}</p>
      </Link>
    </div>
  );
}
