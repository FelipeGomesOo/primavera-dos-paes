"use client";

import ExternalLink from "@/components/SVG/ExternalLink";
import Link from "next/link";

export default function Stores({ store }: { store: Store }) {
  return (
    <section className="@container border-t border-primary-light py-2">
      <div className=" text-base flex gap-2 justify-between ">
        <div className="flex-1">
          <h4 className="mb-0">{store.Bairro}</h4>
          <Link
            className="flex items-center gap-1 hover:underline   xl:pr-10"
            target={"_blank"}
            href={store.MapsLink.url}
            title="Abrir no Google Maps"
          >
            {store.Logradouro}
            <ExternalLink className="w-3 h-3 md:w-4 md:h-4" />
          </Link>
          <p className="text-primary-light">{store.subtitle}</p>
        </div>
        <div className=" shrink-0 w-[10rem]">
          <div className="flex justify-between">
            <strong className="w-6/12">Ter-Sex</strong>{" "}
            <span className="">{store.TuesdayToFridayHours}</span>
          </div>
          <div className="flex justify-between">
            <strong className="w-6/12">Sábado</strong>{" "}
            <span className="">{store.SaturdayHours}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
