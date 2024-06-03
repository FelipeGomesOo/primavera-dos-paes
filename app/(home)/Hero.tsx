import Image from "next/image";
import Link from "next/link";
import { getHomePage } from "@/lib/data";
export default async function Hero() {
  const { hero } = await getHomePage();
  const dataBlur =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN8UQ8AAlUBaWcVN3EAAAAASUVORK5CYII=";
  return (
    <section>
      <div className="container">
        <h1 className="mb-0 lg:w-9/12 2xl:w-6/12 3xl:w-9/12">{hero.title}</h1>
      </div>
      <section className="md:container pt-6 md:pt-10 grid grid-cols-6 gap-2">
        <Image
          src={hero.mainImage.src}
          alt={hero.mainImage.alt}
          width={hero.mainImage.width}
          height={hero.mainImage.height}
          className="col-span-6 w-full"
          priority
          placeholder="blur"
          blurDataURL={dataBlur}
          sizes="80vw"
        />
        {hero.fotinhas.map((img, index) => (
          <Image
            key={index}
            src={img.src}
            alt={img.alt}
            width={img.width}
            height={img.height}
            className="col-span-2"
            placeholder="blur"
            blurDataURL={dataBlur}
            sizes="33vw"
          />
        ))}
        <section className="lg:col-span-5 xl:col-start-4 xl:col-span-3 col-span-6 px-[1rem] md:px-0 fade-in py-10">
          <p className=" text-base md:text-3xl mb-4">{hero.fraseImpactante}</p>
          <Link
            href="/produtos"
            className="button small botao-conheca-produtos"
          >
            Conheça nossos produtos
          </Link>
        </section>
        <Image
          src={hero.imagenzona.src}
          alt={hero.imagenzona.alt}
          width={hero.imagenzona.width}
          height={hero.imagenzona.height}
          className="w-full col-span-6 fade-in"
          placeholder="blur"
          blurDataURL={dataBlur}
          sizes="80vw"
        />
      </section>
    </section>
  );
}
