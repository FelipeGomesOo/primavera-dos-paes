"use client";
import Store from "./Store";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
export default function Stores({ stores }: { stores: Store[] }) {
  return (
    <div className="w-full md:w-6/12">
      <div className="mt-6">
        {stores.map((store: Store, index: number) => (
          <Image
            key={index}
            src={store.featuredImage.large.src}
            alt={store.featuredImage.large.alt}
            width={store.featuredImage.large.width}
            height={store.featuredImage.large.height}
            className="w-full mb-4"
          />
        ))}
      </div>
    </div>
  );
}
