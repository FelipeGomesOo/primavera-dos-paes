import StoresGallery from "./StoresGallery";
import { getHomePage, getStores } from "@/lib/data";
import Link from "next/link";
import Store from "./Store";
export default async function Lojas() {
  const stores = await getStores();
  const { lojas } = await getHomePage();
  return (
    <section id="lojas" className="bg-primary-light/20 py-[5svh] lg:py-[10svh]">
      <div className="lg:container">
        <section className=" flex flex-col lg:flex-row justify-between gap-6 xg:gap-4 fade-in ">
          <div className="px-4 lg:px-0 w-full lg:w-6/12">
            <div className="pt-4 border-t-4  lg:sticky top-10 h-[85svh]  lg:h-[90svh] flex flex-col justify-between">
              <h2 className="fade-in">{lojas.titulo}</h2>
              <div className="flex flex-col gap-6">
                <div className="text-sm md:text-base xl:pr-10">
                  {stores.map((store: Store, index: number) => (
                    <Store key={index} store={store} />
                  ))}
                </div>
                <div className="text-sm md:text-base">
                  <h4 className="fade-in">{lojas.entregas.titulo}</h4>
                  <p className="xl:pr-10 fade-in">{lojas.entregas.descricao}</p>
                  <Link href={lojas.botao.link} className="mt-2 button small">
                    {lojas.botao.titulo}
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-6/12 ">
            <div className="overflow-auto ">
              <div className="mt-6 w-full flex gap-2 overflow-x-auto lg:overflow-x-none lg:block h-[50svh] lg:h-auto px-4 lg:px-0">
                <StoresGallery stores={stores} />
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
