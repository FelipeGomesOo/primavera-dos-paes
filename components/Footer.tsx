import Link from "next/link";
import { getFAQ, getGeral } from "@/lib/data";
import Accordion from "./Accordion/Accordion";
import LogoLetras from "./SVG/LogoLetras";
export default async function Footer({ className }: { className: string }) {
  const FAQ = await getFAQ();
  const { whatsapp_number, email } = await getGeral();
  return (
    <footer
      id="contato"
      className={` bg-primary-light/10 fade-in  ${className}`}
    >
      <section className="container min-h-[105svh] lg:min-h-[100svh] py-10 flex flex-col gap-10 ">
        <section className="w-full h-[20svh] lg:h-[40svh] border-t-4 pt-4 md:pt-4">
          <h2>Fale conosco</h2>
        </section>
        <section className="lg:flex w-full gap-4 justify-between  fade-in">
          <div className="lg:w-6/12 mb-6">
            <h4 className="lg:border-b lg:pb-4 lg:mb-4">Nossos contatos:</h4>
            <div className="md:text-lg">
              <p>
                {email} <br /> {whatsapp_number}
              </p>
            </div>
          </div>
          <div className="lg:w-6/12">
            <h4 className="border-b pb-4">Perguntas frequentes:</h4>
            <Accordion faqs={FAQ} />
          </div>
        </section>
        <section className="flex  flex-col-reverse md:flex-row gap-6 md:gap-4 justify-between border-t-4 mt-auto pt-2 fade-in">
          <div className="lg:w-6/12">
            <LogoLetras className="fill-primary-dark w-[7rem]" />
          </div>
          <div className="lg:flex justify-between lg:w-6/12">
            <div className=" flex gap-4 ">
              <Link
                className="block"
                href={"https://www.facebook.com/primaveradospaes/"}
              >
                Facebook
              </Link>
              <Link
                className="block"
                href={"https://www.instagram.com/primaveradospaes/"}
              >
                Instagram
              </Link>
            </div>
          </div>
        </section>
      </section>
    </footer>
  );
}
