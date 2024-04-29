"use client";
import Image from "next/image";
export default function StoresGallery({ stores }: { stores: Store[] }) {
  return (
    <>
      {stores.map((store: Store, index: number) =>
        store.featuredImage.map((img: FaturedImage) => (
          <div key={index + Math.random()} className="relative ">
            <div className="absolute w-full h-40 bottom-0 text-sm left-0 px-1 flex flex-row items-end   z-10 text-[#fff] bg-gradient-to-t from-primary-dark/80 to-from-primary-dark/90 to-80%">
              <p className="px-2 py-2">
                {store.Bairro}: {store.Logradouro}
              </p>
            </div>
            <Image
              src={img.src}
              alt={img.alt}
              width={img.width}
              height={img.height}
              className="lg:w-full lg:mb-4 fade-in max-h-[30svh] lg:max-h-auto lg:max-h-none"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN8UQ8AAlUBaWcVN3EAAAAASUVORK5CYII="
              sizes="50vw"
            />
          </div>
        ))
      )}
    </>
  );
}
