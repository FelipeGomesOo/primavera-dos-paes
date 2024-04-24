import Link from "next/link";
import Logo from "@/components/Logo";
import MobileNav from "./MobileNav/MobileNav";
import { getMenuItems } from "@/lib/data";
export default async function Header({ className }: { className: string }) {
  const menuItems = await getMenuItems();
  return (
    <>
      <header
        className={`container h-24 flex justify-between items-center mb-14 md:mb-24 ${className}`}
      >
        <Link href={"/"}>
          <Logo className="w-[9rem] fill-primary-dark transition-all hover:fill-primary  md:w-[12rem] xl:w-[11rem] md:-translate-x-2 translate-y-2" />
        </Link>

        <MobileNav menuItems={menuItems} />
      </header>
    </>
  );
}
