"use client";
import Store from "./Store";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
export default function Stores({ stores }: { stores: Store[] }) {
  return (
    <div className="w-full md:w-6/12 ">
      <div className="mt-6">
        {stores.map((store: Store, index: number) => (
          <Image
            key={index}
            src={store.featuredImage.large.src}
            alt={store.featuredImage.large.alt}
            width={store.featuredImage.large.width}
            height={store.featuredImage.large.height}
            className="w-full mb-4 fade-in"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN8UQ8AAlUBaWcVN3EAAAAASUVORK5CYII="
            sizes="100vw"
          />
        ))}
      </div>
    </div>
  );
}
