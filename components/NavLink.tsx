"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export function NavLink({
  itemName,
  itemURL,
  onClick,
}: {
  itemName: string;
  itemURL: string;
  onClick: any;
}) {
  const pathname = usePathname();
  const active = () => {
    if (pathname === itemURL) {
      return "active";
    } else if (pathname.startsWith(itemURL.slice(0, -1)) && itemURL !== "/") {
      return "active";
    } else {
      return " ";
    }
  };

  return (
    <>
      <Link onClick={onClick} className={`${active()} link `} href={itemURL}>
        {itemName}
      </Link>
    </>
  );
}
