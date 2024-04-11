"use client";
import MenuIcon from "@/components/MenuIcon";
import MobileNavContent from "@/components/MobileNav/MobileNavContent";
import { useState } from "react";

export default function MobileNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="lg:hidden">
      <MenuIcon onClick={handleClick} menuOpen={menuOpen} />
      <MobileNavContent onClose={handleClick} menuOpen={menuOpen} />
    </nav>
  );
}
