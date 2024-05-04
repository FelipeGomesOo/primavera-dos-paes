import Link from "next/link";
import Logo from "@/components/SVG/Logo";
import MobileNav from "./MobileNav/MobileNav";
import { getMenuItems } from "@/lib/data";
import { animationDelay } from "@/lib/utils";
export default async function Header({ className }: { className: string }) {
  const menuItems = await getMenuItems();
  return (
    <>
      <header className={`container mb-14 md:mb-24 ${className} `}>
        <div className="relative h-24 flex justify-between items-center">
          <Link href={"/"}>
            <Logo className="w-[9rem] fill-primary-dark  hover:fill-primary  md:w-[12rem] xl:w-[11rem] " />
          </Link>
          <MobileNav menuItems={menuItems} />
        </div>
      </header>
    </>
  );
}
