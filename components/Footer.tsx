import Link from "next/link";
import Logo from "@/components/Logo";
export default function Footer() {
  return (
    <footer className=" py-8  bg-primary-dark text-[#fff]  ">
      <section className="container flex flex-col lg:flex-row gap-2 justify-between ">
        <div className="">
          <p>
            Primavera dos Pães: Rua Ipiranga, 51 | Laranjeiras | De terça a
            sábado
          </p>
        </div>
        <div className="flex gap-4">
          <Link href={"https://www.facebook.com/primaveradospaes/"}>
            Facebook
          </Link>
          <Link href={"https://www.instagram.com/primaveradospaes/"}>
            Instagram
          </Link>
          <Link href={"https://api.whatsapp.com/send?phone=+5521992220003"}>
            Whatsapp
          </Link>
        </div>
      </section>
    </footer>
  );
}
