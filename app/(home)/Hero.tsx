import Image from "next/image";
import Link from "next/link";

import { animationDelay } from "@/lib/utils";
export default function Hero() {
  return (
    <section>
      <section
        style={animationDelay(2)}
        className="container flex flex-col md:flex-row gap-4 items-end justify-between reveal "
      >
        <div className="w-full md:w-6/12 ">
          <h1 className="fade-out-down mb-0 ">
            Padaria artesanal orgânica no Rio.
          </h1>
        </div>
      </section>
      <section className="md:container pt-10 grid grid-cols-6 gap-2">
        <Image
          style={animationDelay(4)}
          src="https://admin.primaveradospaes.com.br/wp-content/uploads/2024/04/primavera-cesta-de-paes.jpg"
          alt="hero image"
          width={1776}
          height={999}
          className="col-span-6  w-full reveal"
        />

        <Image
          style={animationDelay(5)}
          src="https://admin.primaveradospaes.com.br/wp-content/uploads/2024/04/cookie-cafe.jpg"
          alt="hero image"
          width={600}
          height={750}
          className="w-full col-span-2 reveal lg:fade-in "
        />
        <Image
          style={animationDelay(6)}
          src="https://admin.primaveradospaes.com.br/wp-content/uploads/2024/04/pao-mordido.jpg"
          alt="hero image"
          width={600}
          height={750}
          className="w-full col-span-2 reveal lg:fade-in"
        />

        <Image
          style={animationDelay(7)}
          src="https://admin.primaveradospaes.com.br/wp-content/uploads/2024/04/pao-a-peso.jpg"
          alt="hero image"
          width={600}
          height={750}
          className="w-full col-span-2 reveal lg:fade-in"
        />
        <section
          style={animationDelay(8)}
          className="lg:col-start-4 lg:col-span-3 col-span-6 reveal "
        >
          <p className="py-10 lg:text-3xl px-[1rem] lg:px-0 fade-in">
            Todos os dias escolhemos produzir comida de verdade com as mãos, com
            matéria-prima orgânica certificada e deliciosa.
          </p>
        </section>
        <Image
          src="https://admin.primaveradospaes.com.br/wp-content/uploads/2024/04/balcao-cliente-feliz.jpg"
          alt="hero image"
          width={1776}
          height={999}
          className="w-full col-span-6 fade-in"
        />
      </section>
    </section>
  );
}
