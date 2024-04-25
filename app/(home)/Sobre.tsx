import Heading2 from "@/components/Heading2";
import Image from "next/image";
import Link from "next/link";
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

export default function Sobre() {
  return (
    <>
      <section className="md:container  grid grid-cols-6 gap-2">
        <Image
          src="https://admin.primaveradospaes.com.br/wp-content/uploads/2024/04/vitrine.jpg"
          alt="hero image"
          width={1776}
          height={999}
          className="col-span-6  w-full fade-in"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN8UQ8AAlUBaWcVN3EAAAAASUVORK5CYII="
          sizes="80vw"
        />

        <Image
          src="https://admin.primaveradospaes.com.br/wp-content/uploads/2024/04/bolinho.jpg"
          alt="hero image"
          width={600}
          height={750}
          className="w-full col-span-2 fade-in"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN8UQ8AAlUBaWcVN3EAAAAASUVORK5CYII="
          sizes="33vw"
        />
        <Image
          src="https://admin.primaveradospaes.com.br/wp-content/uploads/2024/04/prateleira.jpg"
          alt="hero image"
          width={600}
          height={750}
          className="w-full col-span-2 fade-in"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN8UQ8AAlUBaWcVN3EAAAAASUVORK5CYII="
          sizes="33vw"
        />

        <Image
          src="https://admin.primaveradospaes.com.br/wp-content/uploads/2024/04/loja-laranjeiras.jpg"
          alt="hero image"
          width={600}
          height={750}
          className="w-full col-span-2 fade-in"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN8UQ8AAlUBaWcVN3EAAAAASUVORK5CYII="
          sizes="33vw"
        />
        <section className="w-full col-span-6 md:col-span-3 fade-in">
          <div className="py-10 px-[1rem] md:px-0 ">
            <p className=" text-lg lg:text-3xl">
              &quot;Tem que ser delicioso e não ter veneno. Temos que saber quem
              faz, de onde vem e como é feito.&quot;
            </p>
            <p>Carta de valores da Junta Local</p>
          </div>
        </section>
        <Image
          src="https://admin.primaveradospaes.com.br/wp-content/uploads/2024/04/paes-na-mesa.jpg"
          alt="hero image"
          width={1776}
          height={999}
          className="col-span-6  w-full fade-in"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN8UQ8AAlUBaWcVN3EAAAAASUVORK5CYII="
          sizes="80vw"
        />
      </section>
      <section id="sobre">
        <div className="container">
          <section className="md:border-t-4 pt-4 md:pt-4 flex flex-col md:flex-row relative lg:gap-4 mb-10 ">
            <div className="w-full md:w-6/12 lg:w-6/12 lg:sticky top-10 flex flex-col justify-between  lg:h-[90svh]">
              <div className="text-lg md:text-3xl fade-in">
                <p>
                  &quot;Primavera é mudança. Desde 2020, entramos nesse
                  movimento através das texturas, aromas e sabores que agora são
                  parte da vida e da mesa de muita gente.
                </p>
                <p>
                  Nosso trabalho é afirmar que, além de justa e consciente, sua
                  escolha também pode ser deliciosa.&quot;
                </p>
              </div>
              <p className="mt-10 mb-10 lg:mb-0 fade-in">
                Eduardo Savino e Jualiana Padilha. <br /> Parceiros de todas as
                primaveras.
              </p>
            </div>
            <div className="w-full md:w-6/12">
              <Image
                src="https://admin.primaveradospaes.com.br/wp-content/uploads/2024/04/primavera-socios.jpg"
                alt="hero image"
                width={720}
                height={1080}
                className="w-full fade-in"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN8UQ8AAlUBaWcVN3EAAAAASUVORK5CYII="
                sizes="100vw"
              />
              <h2 className="mt-10 fade-in">
                Três pilares que definem nosso trabalho:
              </h2>

              <SobreCard
                src="https://admin.primaveradospaes.com.br/wp-content/uploads/2024/04/placeholder-primavera-dos-paes.gif"
                alt="Matérias primas orgânicas"
                title="Matérias primas orgânicas"
                description="Utilização de matérias primas orgânicas, de cadeias sustentáveis e
            locais"
              />
              <SobreCard
                src="https://admin.primaveradospaes.com.br/wp-content/uploads/2024/04/placeholder-primavera-dos-paes.gif"
                alt="Consumo Responsável"
                title="Consumo Responsável"
                description="Liberdade de cada um em consumir o quanto precisa."
              />
              <SobreCard
                src="https://admin.primaveradospaes.com.br/wp-content/uploads/2024/04/placeholder-primavera-dos-paes.gif"
                alt="Fermentação Natural"
                title="Fermentação Natural"
                description="Processo natural, que valoriza sabores e contribui para um produto de maior qualidade e digestibilidade"
              />
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
