import MenuIcon from "@/components/SVG/MenuIcon";
import Logo from "@/components/SVG/Logo";
import Link from "next/link";
import NavMenu from "@/components/NavMenu";
import LogoIcon from "../SVG/LogoIcon";

export default function ModalContent({ onClose, menuOpen, menuItems }: any) {
  return (
    <div
      className={`${
        menuOpen ? "scale-y-100 bg-[#fff]" : "scale-y-0  bg-primary-light/20"
      } transition-scale-100  fixed left-0 top-0 z-50 flex h-svh w-full origin-top flex-col   `}
      style={{
        transition: "all  cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        transitionDelay: menuOpen ? "0.1s" : "0.5s",
      }}
    >
      <div
        className={`${
          menuOpen ? "opacity-100" : "opacity-0"
        } flex grow flex-col relative overflow-hidden`}
        style={{
          transition: "all  cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          transitionDelay: menuOpen ? "0.5s" : "0.1s",
        }}
      >
        <section className="flex h-24 items-center container  place-content-end">
          <MenuIcon onClick={onClose} menuOpen={menuOpen} />
        </section>
        <section className="grow container">
          <h4>Navegue</h4>
          <NavMenu menuItems={menuItems} onClose={onClose} />
        </section>
        <section className="container  py-10 ">
          <h4>Contatos</h4>
          <p className="mb-0 lg:text-xl">contato@primaveradospaes.com.br </p>
          <p className="m-0 lg:text-xl">+55 21 99222.0003</p>
          <Link
            className="button medium mt-6"
            href="https://wa.link/k4o0wr"
            target="_blank"
          >
            Falar via Whatsapp
          </Link>
        </section>
        <div className="fixed -right-[20svw] -bottom-[10svh] lg:-bottom-[70svh] lg:-right-0 lg:w-6/12">
          <LogoIcon className="w-full fill-primary-light/10 lg:fill-primary-light/20 " />
        </div>
      </div>
    </div>
  );
}
