import Image from "next/image";
import Hero from "./Hero";
import Pessoas from "./Pessoas";
import { Metadata } from "next";
import { getSEO } from "@/lib/data";

export async function generateMetadata(): Promise<Metadata> {
  const { seoDescription, seoTitle, ogImage } = await getSEO(
    "sobre-nos",
    "page"
  );
  return {
    title: seoTitle,
    description: seoDescription,
    openGraph: {
      images: [
        {
          url: ogImage.src,
          width: ogImage.width,
          height: ogImage.height,
        },
      ],
    },
  };
}

export default function Sobre() {
  return (
    <>
      <Hero />
      <Pessoas />
    </>
  );
}
