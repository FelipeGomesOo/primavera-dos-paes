"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
export default function Store_2({ store }: { store: Store }) {
  //console.log(store, "sotercard component");
  const opening = [
    {
      nome: "Segunda",
      horarios: "fechado",
    },
    {
      nome: "Terça",
      horarios: "11h-19h",
    },
    {
      nome: "Quarta",
      horarios: "11h-19h",
    },
    {
      nome: "Quinta",
      horarios: "11h-19h",
    },
    {
      nome: "Sexta",
      horarios: "11h-19h",
    },
    {
      nome: "Sábado",
      horarios: "11h-19h",
    },
    {
      nome: "Domingo",
      horarios: "fechado",
    },
  ];
  const [open, setOpen] = useState(false);
  const hoje = new Date();
  const diaDaSemana = hoje.getDay();
  console.log(diaDaSemana, "diaDaSemana store_2.tsx");
  return (
    <div className="w-11/12 snap-always snap-center lg:w-full shrink-0 lg:shrink min-h[80svh] lg:min-h-[70svh]">
      <section className="rounded w-full border border-primary-light/50  ">
        <div className=" h-40">
          <Image
            src={store.featuredImage.large.src}
            alt={store.featuredImage.large.alt}
            width={store.featuredImage.large.width}
            height={store.featuredImage.large.height}
            className="object-cover h-full"
          />
        </div>
        <div className="w-full p-4 py-10 lg:p-12 lg:self-center">
          <div className="flex flex-col gap-4">
            <div className="">
              <h3>{store.Bairro}</h3>
              <p>{store.Logradouro}</p>
            </div>
            <div className="w-full">
              <h4 className="mb-2">Funcionamento</h4>
              {opening.map((day, index) => (
                <div
                  key={index}
                  className={`md:hover:bg-primary-light/10 border-t text-sm border-primary-light/30 pt-1 flex flex-row gap-2 justify-between ${
                    diaDaSemana - 1 === index && "font-bold"
                  } ${day.horarios === "fechado" && "text-primary-light/45"}`}
                >
                  <div className="w-6/12">{day.nome}</div>
                  <div>{day.horarios}</div>
                </div>
              ))}
            </div>
            <div className="w-full ">
              <Link
                target="_blank"
                className="button medium w-full"
                href={store.MapsLink.url}
              >
                {store.MapsLink.title}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
