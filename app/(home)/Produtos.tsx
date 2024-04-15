import Portfolio from "@/components/Portfolio/Portfolio";
import { getFeaturedProducts } from "@/lib/data";
import Link from "next/link";

export default async function Produtos() {
  const products = await getFeaturedProducts();
  return (
    <>
      <div className="container mt-6 md:mt-16">
        <section className="md:border-t-4 pt-6 justify-between  md:pt-10 flex flex-col md:flex-row gap-4 mb-8">
          <div className="w-full md:w-6/12 lg:w-6/12 ">
            <h2>
              Preto no branco. <br /> Água, farinha e sal.
            </h2>
          </div>
          <div className="md:w-6/12 lg:w-5/12 ">
            <p>
              Fazemos pães de fermentação natural, brioches e biscoitos com
              ingredientes orgânicos e nacionais. E vendemos a peso, da fatia ao
              pão inteiro, leve o quanto quiser.
            </p>
          </div>
        </section>
      </div>

      <Portfolio products={products}>
        <Link className="button medium w-full my-6" href="/produtos">
          Confira todos os produtos
        </Link>
      </Portfolio>
    </>
  );
}
