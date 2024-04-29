"use client";
import Image from "next/image";
export default function StoresGallery({ stores }: { stores: Store[] }) {
  return (
    <>
      {stores.map((store: Store, index: number) =>
        store.featuredImage.map((img: FaturedImage) => (
          <Image
            key={index + Math.random()}
            src={img.src}
            alt={img.alt}
            width={img.width}
            height={img.height}
            className="lg:w-full lg:mb-4 fade-in max-h-[30svh] lg:max-h-auto lg:max-h-none "
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN8UQ8AAlUBaWcVN3EAAAAASUVORK5CYII="
            sizes="100vw"
          />
        ))
      )}
    </>
  );
}
