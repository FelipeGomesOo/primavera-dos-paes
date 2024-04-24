"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
export default function Stores({ store }: { store: Store }) {
  const [open, setOpen] = useState(true);
  return (
    <section className="group mb-2">
      <div className="border-t border-primary-light pt-1 flex flex-row gap-2 ">
        <div className="grow">
          <h4 className="mb-0 font-bold">{store.Bairro}</h4>
          {store.Logradouro}
        </div>
        <div className="w-[8rem] shrink-0 ml-auto">
          <div className="flex justify-between">
            <strong className="w-6/12">Ter-Sex</strong>{" "}
            <span className="">{store.TuesdayToFridayHours}</span>
          </div>
          <div className="flex justify-between">
            <strong className="w-6/12">Sábado</strong>{" "}
            <span className="">{store.SaturdayHours}</span>
          </div>
        </div>
        {/*<div className="w-6/12 md:w-2/12">
           <Link
                target="_blank"
                className="button small w-full"
                href={store.MapsLink.url}
              >
                {store.MapsLink.title}
              </Link> 
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="flex items-center button medium
          "
          >
            <span>Ver loja</span>
            <svg
              className={`w-3 h-4 ms-3 ${!open && "rotate-180"}`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
              ></path>
            </svg>
          </button>
        </div>*/}
      </div>
    </section>
  );
}
