import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <section className="container flex flex-col md:flex-row gap-4 gap-y-10 mb-14 md:mb-8 items-center justify-between">
        <div className="w-full md:w-6/12 lg:w-4/12 ">
          <h1>Padaria artesanal orgânica</h1>
        </div>
        <section className="w-full  lg:w-8/12 text-sm md:text-[1rem]">
          <div className="flex  justify-between pb-4 ">
            <strong className="w-6/12 md:w-8/12">Nossas lojas</strong>

            <strong>Ter-Sex </strong>
            <strong>Sábado</strong>
          </div>
          <div className="flex flex-col gap-2">
            <div className="border-t border-primary-light pt-1 flex flex-row gap-2 justify-between">
              <div className="w-6/12 md:w-8/12">Rua Ipiranga, 51</div>
              <div className="">10h-19h</div>
              <div className="">9h-14h</div>
            </div>

            <div className="border-t border-primary-light pt-1 flex flex-row gap-2 justify-between">
              <div className="w-6/12 md:w-8/12">Rua Arno Konder, s/n</div>
              <div className="">12h-20h</div>
              <div className="">10h-14h</div>
            </div>
            <div className="border-t border-primary-light pt-1 flex flex-row gap-2 justify-between">
              <div className="w-6/12 md:w-8/12">
                Rua das Laranjeiras, 43/Loja 7
              </div>
              <div className="">11h-19h</div>
              <div className="">10h-14h</div>
            </div>
            <div className="my-4 ">
              <Link
                href={"https://api.whatsapp.com/send?phone=+5521992220003"}
                className="button medium"
              >
                Faça seu pedido
              </Link>
            </div>
          </div>
        </section>
      </section>
      <div className="md:container">
        <Image
          src="https://primaveradospaes.com.br/wp-content/uploads/2021/06/Ensaio-Primavera-dos-Pa%CC%83es_OCRE-Abril-2021_Padaria_65-BX-02.jpg"
          alt="hero image"
          width={1200}
          height={600}
          className="w-full"
        />
      </div>
    </>
  );
}
