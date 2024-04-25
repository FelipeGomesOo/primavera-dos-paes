import Stores from "./Stores";
import { getStores } from "@/lib/data";
import Link from "next/link";
import Store from "./Store";
export default async function Lojas() {
  const stores = await getStores();
  return (
    <section id="lojas" className="bg-primary-light/20 py-[5svh] lg:py-[10svh]">
      <div className="container">
        <section className="border-t-4 pt-4 flex flex-col lg:flex-row justify-between gap-6 xg:gap-4 fade-in ">
          <div className="w-full lg:w-6/12 lg:sticky top-10 h-[95svh]  lg:h-[90svh] flex flex-col justify-between">
            <h2 className="fade-in">Nossas lojas</h2>
            <div className="flex flex-col gap-6">
              <div className="lg:hidden overflow-scroll">
                <div className="mt-6 w-full flex gap-2">
                  <Stores stores={stores} />
                </div>
              </div>
              <div className="text-sm md:text-base xl:pr-10">
                {stores.map((store: Store, index: number) => (
                  <Store key={index} store={store} />
                ))}
              </div>
              <div className="text-sm md:text-base">
                <h4 className="fade-in">Entrega em domicílio?</h4>
                <p className="xl:pr-10 fade-in">
                  Temos! Das 10h às 20h nos bairros da Zona Sul, Centro e Tijuca
                  pela
                  <Link
                    target="_blank"
                    href="https://www.instagram.com/ciclocourier/"
                    className="font-bold hover:underline"
                  >
                    {" "}
                    Ciclo Courier
                  </Link>
                  . Pedidos{" "}
                  <Link
                    href="https://api.whatsapp.com/send?phone=5521992220003&text=Bem-vindo(a)%20%C3%A0%20Primavera%20dos%20P%C3%A3es.%20Envie%20esta%20mensagem%20para%20in%C3%ADcio%20do%20atendimento."
                    className="font-bold hover:underline"
                  >
                    via Whatsapp
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-6/12 hidden lg:block">
            <Stores stores={stores} />
          </div>
        </section>
      </div>
    </section>
  );
}
