import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <section className="container flex flex-col md:flex-row gap-4 gap-y-10 mb-14 md:mb-8 items-center justify-between">
        <div className="w-full md:w-6/12 lg:w-6/12 ">
          <h1>Somos água, farinha e sal.</h1>
        </div>
        <section className="w-full  lg:w-8/12 text-sm md:text-[1.5rem]">
          <p>
            Não são necessários muitos ingredientes para contar essa história.
            Simplicidade absoluta e preciosos valores do dia a dia. O pão sobre
            a tábua de madeira.
          </p>
        </section>
      </section>
      <div className="md:container">
        <Image
          src="https://primaveradospaes.com.br/wp-content/uploads/2021/06/foto-padaria.jpg"
          alt="hero image"
          width={1200}
          height={600}
          className="w-full"
        />
      </div>
      <section className="container flex h-[50svh] items-center justify-end">
        <p className="md:w-6/12 text-sm md:text-[1.5rem]">
          Por fora, uma casa levantada há mais de um século no bairro de
          Laranjeiras no Rio de Janeiro. Por dentro, a simplicidade dá lugar aos
          pães, brioches e biscoitos que podem ser escolhidos no balcão,
          cortados ao gosto de cada cliente e vendidos a peso.
        </p>
      </section>
    </>
  );
}
