import Image from "next/image";
import Link from "next/link";

export default function Hero({ children }: { children: React.ReactNode }) {
  return (
    <section className="container mb-4 md:mb-8 ">
      <h1>{children}</h1>
    </section>
  );
}
