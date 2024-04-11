import Image from "next/image";

export default function Pessoas() {
  return (
    <>
      <section className="container flex flex-col md:flex-row gap-4 gap-y-10 mb-14 md:mb-8 items-center justify-between h-[100svh]">
        <div className="w-full md:w-6/12 lg:w-3/12 ">
          <Image
            src="https://primaveradospaes.com.br/wp-content/uploads/2021/06/eduardo-savino-BX-400x546.jpg"
            alt="hero image"
            width={1200}
            height={600}
            className="w-full"
          />
        </div>
        <section className="w-full  lg:w-8/12 text-sm md:text-[1.1rem]">
          <p>
            À frente das fornadas, Eduardo Savino é o padeiro fundador da
            Primavera dos Pães.
          </p>
          <p>
            Dedicado a fazer pães de qualidade com ingredientes orgânicos,
            formou-se em 2018 na Ecole Internationale de Boulangerie, no sul da
            França, e trouxe para o Bairro de Laranjeiras, no Rio de Janeiro, as
            melhores técnicas de panificação com fermentação natural e orgânica.
          </p>
        </section>
      </section>
    </>
  );
}
