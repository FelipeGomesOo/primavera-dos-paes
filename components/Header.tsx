import Link from "next/link";
import NavMenu from "@/components/NavMenu";
import Logo from "@/components/Logo";
import MobileNav from "./MobileNav/MobileNav";
export default function Header({ className }: { className: string }) {
  return (
    <header
      className={`container h-24 flex justify-between items-center mb-14 md:mb-24 ${className}`}
    >
      <Link href={"/"}>
        <Logo className="w-[9rem] fill-primary-dark transition-all hover:fill-primary  md:w-[12rem] xl:w-[11rem] md:-translate-x-2 translate-y-2" />
      </Link>
      <div className="hidden md:block">
        <NavMenu />
      </div>
      <div className="block md:hidden">
        <MobileNav />
      </div>
    </header>
  );
}
