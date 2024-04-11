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
    <section className="w-full md:w-6/12 lg:w-4/12 border-t-2 flex flex-row justify-between gap-4">
      <div className="w-10/12 pt-4">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="w-2/12">
        <Image src={src} alt={alt} width={500} height={500} className="" />
      </div>
    </section>
  );
}

export default function Sobre() {
  return (
    <>
      <section className="mb-16">
        <div className="container mb-5 mt-8 md:mt-20">
          <section className="md:border-t-4 pt-6 justify-between  md:pt-10 flex flex-col md:flex-row gap-4 mb-8">
            <div className="w-full md:w-6/12 lg:w-6/12 ">
              <h2>No que acreditamos</h2>
            </div>
            <div className="md:w-6/12 lg:w-5/12 ">
              <p>
                Fazemos pães de fermentação natural, brioches e biscoitos com
                ingredientes orgânicos e nacionais. E vendemos a peso, da fatia
                ao pão inteiro, leve o quanto quiser.
              </p>
            </div>
          </section>
          <Image
            src="https://primaveradospaes.com.br/wp-content/uploads/2021/06/cortes-paes-BX.jpg"
            alt="hero image"
            width={1200}
            height={600}
            className="w-full"
          />
        </div>
        <section className="container mt-8 flex flex-col md:flex-row gap-8 mb-8">
          <SobreCard
            src="https://primaveradospaes.com.br/wp-content/uploads/2021/06/Icone-Materias-Primas.png"
            alt="Matérias primas orgânicas"
            title="Matérias primas orgânicas"
            description="Utilização de matérias primas orgânicas, de cadeias sustentáveis e
            locais"
          />
          <SobreCard
            src="https://primaveradospaes.com.br/wp-content/uploads/2021/06/Icone-Icone-Consumo-Responsa%CC%81vel.png"
            alt="Consumo Responsável"
            title="Consumo Responsável"
            description="Liberdade de cada um em consumir o quanto precisa."
          />
          <SobreCard
            src="https://primaveradospaes.com.br/wp-content/uploads/2021/06/Icone-Fermentacao-Natural.png"
            alt="Fermentação Natural"
            title="Fermentação Natural"
            description="Processo natural, que valoriza sabores e contribui para um produto de maior qualidade e digestibilidade"
          />
        </section>
        <div className="container">
          <Link className="button medium w-full my-6" href="/sobre-nos">
            Saiba mais sobre nós
          </Link>
        </div>
      </section>
    </>
  );
}
