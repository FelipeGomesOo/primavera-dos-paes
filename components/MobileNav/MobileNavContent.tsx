import MenuIcon from "@/components/MenuIcon";
import Logo from "@/components/Logo";
import Link from "next/link";
import NavMenu from "@/components/NavMenu";

export default function ModalContent({ onClose, menuOpen }: any) {
  return (
    <div
      className={`${
        menuOpen ? "scale-y-100 " : "scale-y-0  "
      } transition-scale-100 container fixed left-0 top-0 z-50 flex h-svh w-full origin-top flex-col bg-primary-dark   `}
      style={{
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
        transitionDelay: menuOpen ? "0.1s" : "1s",
      }}
    >
      <div
        className={`${
          menuOpen ? "opacity-100" : "opacity-0"
        } flex grow flex-col`}
        style={{
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
          transitionDelay: menuOpen ? "1s" : "0.1s",
        }}
      >
        <section className="flex h-24 items-center md:h-28">
          <Link href="/" className="grow basis-1/3" onClick={onClose}>
            <Logo className="w-[9rem] fill-[#fff] transition-all hover:fill-primary  md:w-[12rem] xl:w-[11rem] -translate-x-2 translate-y-2" />
          </Link>
          <MenuIcon onClick={onClose} menuOpen={menuOpen} />
        </section>
        <section className="mt-16 grow">
          <h4 className="mb-4">Menu</h4>
          {/* <NavMenu onClose={onClose} /> */}
        </section>
      </div>
    </div>
  );
}
