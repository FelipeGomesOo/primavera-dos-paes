import Link from "next/link";
import Image from "next/image";
export default function ProductCard({
  product,
  index,
}: {
  product: ProductCard;
  index: number;
}) {
  const { slug, title, excerpt, featuredImage, category } = product;
  return (
    <div className="col-span-12 sm:col-span-6 xl:col-span-4 group fade-in">
      <Link href={`/produtos/${category}/${slug}`} className=" ">
        <Image
          className="md:group-hover:opacity-60 transform  duration-700"
          src={featuredImage.src}
          alt={title}
          width={featuredImage.width}
          height={featuredImage.height}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN8UQ8AAlUBaWcVN3EAAAAASUVORK5CYII="
          sizes="100vw"
        />
        <h4 className="mt-2">{title}</h4>
        <p>{excerpt}</p>
      </Link>
    </div>
  );
}
