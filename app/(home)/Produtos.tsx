import Heading2 from "@/components/Heading2";
import Portfolio from "@/components/Portfolio/Portfolio";
import { getFeaturedProducts, getHomePage } from "@/lib/data";
import Link from "next/link";
import { Suspense } from "react";

export default async function Produtos() {
  const products = await getFeaturedProducts();
  const { nossosProdutos } = await getHomePage();
  return (
    <section>
      <div className="container fade-in">
        <Heading2
          head={nossosProdutos.titulo}
          subhead={nossosProdutos.subtitulo}
          text={nossosProdutos.descricao}
        />
      </div>
      <Suspense fallback={<>...</>}>
        <Portfolio products={products}>
          <div className="container">
            <Link
              className="button medium w-full mt-6 botao-conheca-produtos"
              href="/produtos"
            >
              Confira todos os produtos
            </Link>
          </div>
        </Portfolio>
      </Suspense>
    </section>
  );
}
