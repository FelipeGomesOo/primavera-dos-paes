import Stores from "./Stores";
import { getStores } from "@/lib/data";
import Link from "next/link";
import Store from "./Store";
export default async function Lojas() {
  const stores = await getStores();
  return (
    <section id="lojas">
      <div className="container">
        <section className="md:border-t-4 pt-4 md:pt-4 flex flex-col md:flex-row justify-between lg:gap-4 fade-in ">
          <div className="w-full md:w-6/12 lg:sticky top-10 lg:h-[90svh] flex flex-col justify-between">
            <h2 className="mb-10 fade-in">Nossas lojas</h2>
            <div className=" text-sm lg:pr-10">
              {stores.map((store: Store, index: number) => (
                <Store key={index} store={store} />
              ))}
              <h4 className="mt-10 fade-in">Entrega em domicílio?</h4>
              <p className="lg:pr-10 fade-in">
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
          <Stores stores={stores} />
        </section>
      </div>
    </section>
  );
}
