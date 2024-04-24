import Link from "next/link";
import Logo from "@/components/SVG/Logo";
import { getFAQ } from "@/lib/data";
import { dangerouslySetInnerHTML } from "react";
import AccordionItem from "./Accordion/AccordionItem";
import Accordion from "./Accordion/Accordion";
import LogoLetras from "./SVG/LogoLetras";
export default async function Footer({ className }: { className: string }) {
  const FAQ = await getFAQ();
  return (
    <footer className={` bg-primary-light/10   ${className}`}>
      <section className="container min-h-[100svh] py-10 flex flex-col gap-10 ">
        <section className="w-full h-[10svh] lg:h-[30svh]  md:border-t-4 pt-4 md:pt-4">
          <div className="lg:w-6/12">
            <h2>Fale conosco</h2>
          </div>
        </section>
        <section className="lg:flex w-full gap-4   justify-between  ">
          <div className="lg:w-6/12 mb-6">
            <h4 className="border-b pb-4 mb-4">Nossos contatos:</h4>
            <div className="md:text-lg">
              <p>
                contato@primaveradospaes.com.br <br /> +55 21 99222.0003
              </p>
            </div>
          </div>
          <div className="lg:w-6/12">
            <h4 className="border-b pb-4">Perguntas frequentes:</h4>
            <Accordion faqs={FAQ} />
          </div>
        </section>
        <section className="flex  flex-col-reverse md:flex-row gap-6 md:gap-4 justify-between border-t-4 mt-auto pt-2">
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
