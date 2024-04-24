"use client";
import MenuIcon from "@/components/SVG/MenuIcon";
import MobileNavContent from "@/components/MobileNav/MobileNavContent";
import { useState } from "react";

export default function MobileNav({ menuItems }: any) {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <MenuIcon onClick={handleClick} menuOpen={menuOpen} />
      <MobileNavContent
        menuItems={menuItems}
        onClose={handleClick}
        menuOpen={menuOpen}
      />
    </>
  );
}
