import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section>
      <div className="container">
        <h1 className="mb-0 lg:w-9/12 2xl:w-6/12 3xl:w-9/12">
          Padaria artesanal orgânica no Rio.
        </h1>
      </div>
      <section className="md:container pt-6 md:pt-10 grid grid-cols-6 gap-2">
        <Image
          src="https://admin.primaveradospaes.com.br/wp-content/uploads/2024/04/primavera-cesta-de-paes.jpg"
          alt="hero image"
          width={1776}
          height={999}
          className="col-span-6 w-full"
          priority
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN8UQ8AAlUBaWcVN3EAAAAASUVORK5CYII="
          sizes="90vw"
        />

        <Image
          src="https://admin.primaveradospaes.com.br/wp-content/uploads/2024/04/cookie-cafe.jpg"
          alt="hero image"
          width={600}
          height={750}
          className="w-full col-span-2 fade-in"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN8UQ8AAlUBaWcVN3EAAAAASUVORK5CYII="
          sizes="33vw"
        />
        <Image
          src="https://admin.primaveradospaes.com.br/wp-content/uploads/2024/04/pao-mordido.jpg"
          alt="hero image"
          width={600}
          height={750}
          className="w-full col-span-2 fade-in"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN8UQ8AAlUBaWcVN3EAAAAASUVORK5CYII="
          sizes="33vw"
        />

        <Image
          src="https://admin.primaveradospaes.com.br/wp-content/uploads/2024/04/pao-a-peso.jpg"
          alt="hero image"
          width={600}
          height={750}
          className="w-full col-span-2 fade-in"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN8UQ8AAlUBaWcVN3EAAAAASUVORK5CYII="
          sizes="33vw"
        />
        <section className="lg:col-span-5 xl:col-start-4 xl:col-span-3 col-span-6 px-[1rem] md:px-0 fade-in py-10">
          <p className=" text-base md:text-3xl mb-4">
            Todos os dias escolhemos produzir comida de verdade com as mãos, com
            matéria-prima orgânica certificada e deliciosa.
          </p>
          <Link href="/produtos" className="button small">
            Conheça nossos produtos
          </Link>
        </section>
        <Image
          src="https://admin.primaveradospaes.com.br/wp-content/uploads/2024/04/balcao-cliente-feliz.jpg"
          alt="hero image"
          width={1776}
          height={999}
          className="w-full col-span-6 fade-in"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN8UQ8AAlUBaWcVN3EAAAAASUVORK5CYII="
          sizes="90vw"
        />
      </section>
    </section>
  );
}
