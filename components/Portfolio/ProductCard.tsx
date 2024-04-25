import Link from "next/link";
import Image from "next/image";
import { animationDelay } from "@/lib/utils";
export default function ProductCard({
  product,
  index,
}: {
  product: ProductCard;
  index: number;
}) {
  const { slug, title, excerpt, featuredImage, category } = product;
  return (
    <div className="col-span-12 sm:col-span-6 md:col-span-4 group fade-in">
      <Link href={`/produtos/${category}/${slug}`} className=" ">
        <Image
          className="md:group-hover:opacity-60 transform  duration-700"
          src={featuredImage}
          alt={title}
          width={1200}
          height={600}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN8UQ8AAlUBaWcVN3EAAAAASUVORK5CYII="
        />
        <h4 className="mt-2">{title}</h4>
        <p>{excerpt}</p>
      </Link>
    </div>
  );
}
