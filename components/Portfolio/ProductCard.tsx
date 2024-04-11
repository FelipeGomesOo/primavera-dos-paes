"use client";
import Link from "next/link";
import Image from "next/image";
export default function ProductCard({
  imgUrl,
  title,
  linkUrl,
}: {
  imgUrl: string;
  title: string;
  linkUrl: string;
}) {
  return (
    <div className="col-span-12 sm:col-span-6 md:col-span-4">
      <Link href={linkUrl} className=" ">
        <Image src={imgUrl} alt={title} width={1200} height={600} />
        <h3 className="mt-2">{title}</h3>
        <p>Biscoito amanteigado com leve toque de limão.</p>
      </Link>
    </div>
  );
}
