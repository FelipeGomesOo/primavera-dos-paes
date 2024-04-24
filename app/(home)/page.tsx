import Hero from "./Hero";
import Lojas from "./Lojas";
import Produtos from "./Produtos";
import Sobre from "./Sobre";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 lg:gap-20">
      <Hero />
      <Lojas />
      <Produtos />
      <Sobre />
    </div>
  );
}
