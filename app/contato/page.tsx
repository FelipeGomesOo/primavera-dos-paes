import Hero from "./Hero";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contato",
  description: "Fale conosco através desta página de contato.",
};
export default function Contato() {
  return (
    <>
      <Hero />
    </>
  );
}
