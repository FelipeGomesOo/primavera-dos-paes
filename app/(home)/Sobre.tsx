import { getHomePage } from "@/lib/data";
import Image from "next/image";

export function SobreCard({
  src,
  alt,
  title,
  description,
}: {
  src: string;
  alt: string;
  title: string;
  description: string;
}) {
  return (
    <section className="w-full lg:flex gap-6 mt-4 lg:border-t pt-4 fae-in">
      <div className="w-full lg:w-9/12">
        <Image src={src} alt={alt} width={1200} height={300} />
      </div>
      <div className="w-full lg:w-6/12 lg:flex lg:flex-col justify-between ">
        <h3 className="mt-4 lg:mt-0">{title}</h3>
        <p>{description}</p>
      </div>
    </section>
  );
}

export default async function Sobre() {
  const { interludio, sobre } = await getHomePage();
  const dataBlur =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN8UQ8AAlUBaWcVN3EAAAAASUVORK5CYII=";
  return (
    <>
      <section className="md:container  grid grid-cols-6 gap-2">
        <Image
          src={interludio.mainImage.src}
          alt={interludio.mainImage.alt}
          width={interludio.mainImage.width}
          height={interludio.mainImage.height}
          className="col-span-6 w-full"
          placeholder="blur"
          blurDataURL={dataBlur}
          sizes="80vw"
        />

        {interludio.fotinhas.map((img, index) => (
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
        <section className="w-full col-span-6 md:col-span-3 fade-in">
          <div className="py-10 px-[1rem] md:px-0 ">
            <p className=" text-lg lg:text-3xl">
              &quot;{interludio.fraseImpactante}&quot;
            </p>
            <p>{interludio.fraseImpactanteAutor}</p>
          </div>
        </section>
        <Image
          src={interludio.imagenzona.src}
          alt={interludio.imagenzona.alt}
          width={interludio.imagenzona.width}
          height={interludio.imagenzona.height}
          className="col-span-6 w-full"
          placeholder="blur"
          blurDataURL={dataBlur}
          sizes="80vw"
        />
      </section>
      <section id="sobre">
        <div className="container">
          <section className="flex flex-col justify-between lg:flex-row relative xl:gap-14 gap-6 mb-10 ">
            <div className="w-full pt-4 border-t-4 lg:w-6/12 lg:sticky top-10 flex flex-col justify-between  lg:h-[90svh]">
              <h2 className="fade-in">Sobre nós</h2>
              <div
                className="text-sm md:text-base xl:text-lg 2xl:text-xl fade-in"
                dangerouslySetInnerHTML={{ __html: sobre.historia }}
              ></div>
            </div>
            <div className="w-full lg:w-6/12">
              <Image
                src={sobre.socios.src}
                alt={sobre.socios.alt}
                width={sobre.socios.width}
                height={sobre.socios.height}
                className="w-full fade-in"
                placeholder="blur"
                blurDataURL={dataBlur}
                sizes="50vw"
              />
              <h3 className="mt-10 fade-in">{sobre.titulo}</h3>
              {sobre.pilares.map((pilar, index) => (
                <div
                  key={index}
                  className="w-full flex gap-6 mt-4 lg:border-t pt-4 fade-in"
                >
                  <div className="w-3/12">
                    <Image
                      src={pilar.imagem.src}
                      alt={pilar.imagem.alt}
                      width={pilar.imagem.width}
                      height={pilar.imagem.height}
                      className="w-full fade-in"
                      placeholder="blur"
                      blurDataURL={dataBlur}
                      sizes="33vw"
                    />
                  </div>
                  <div className="w-9/12 flex  flex-col justify-center">
                    <h4 className="mt-4 lg:mt-0">{pilar.title}</h4>
                    <p>{pilar.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
