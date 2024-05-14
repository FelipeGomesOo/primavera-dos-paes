"use client";

import ExternalLink from "@/components/SVG/ExternalLink";
import Link from "next/link";

export default function Stores({ store }: { store: Store }) {
  return (
    <section className="fade-in border-t border-primary-light py-2 flex gap-2 justify-between  text-sm   md:text-base xl:pr-10">
      <div className="w-7/12 sm:w-9/12 grow">
        <h4 className="mb-0">{store.Bairro}</h4>
        <Link
          className="flex items-center gap-1 hover:underline text-[13px] md:text-base xl:pr-10"
          target={"_blank"}
          href={store.MapsLink.url}
          title="Abrir no Google Maps"
        >
          {store.Logradouro}
          <ExternalLink className="w-3 h-3 md:w-4 md:h-4" />
        </Link>
        <p className="text-primary-light">{store.subtitle}</p>
      </div>
      <div className="grow">
        <div className="flex justify-between">
          <strong className="w-6/12">Ter-Sex</strong>{" "}
          <span className="">{store.TuesdayToFridayHours}</span>
        </div>
        <div className="flex justify-between">
          <strong className="w-6/12">Sábado</strong>{" "}
          <span className="">{store.SaturdayHours}</span>
        </div>
      </div>
    </section>
  );
}
