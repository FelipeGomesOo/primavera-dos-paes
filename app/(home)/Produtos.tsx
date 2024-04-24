import Heading2 from "@/components/Heading2";
import Portfolio from "@/components/Portfolio/Portfolio";
import { getFeaturedProducts } from "@/lib/data";
import Link from "next/link";
import { Suspense } from "react";

export default async function Produtos() {
  const products = await getFeaturedProducts();
  return (
    <section>
      <div className="container fade-in">
        <Heading2
          head="Nossos produtos"
          subhead="Simples como farinha, água e sal."
          text="Fazemos pães de fermentação natural, brioches e biscoitos com ingredientes orgânicos e nacionais. E vendemos a peso, do pedaço ao pão inteiro, leve a quantidade ideal para você."
        />
      </div>
      <Suspense fallback={<>...</>}>
        <Portfolio products={products}>
          <div className="container">
            <Link className="button medium w-full mt-6 " href="/produtos">
              Confira todos os produtos
            </Link>
          </div>
        </Portfolio>
      </Suspense>
    </section>
  );
}
