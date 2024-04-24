import Whatsapp from "@/components/Whatsapp";
import Link from "next/link";
function FloatingWhatsapp() {
  return (
    <Link
      href="https://wa.link/k4o0wr"
      target="_blank"
      className="fixed group bottom-5 right-5 lg:right-8 lg:bottom-10 z-50 w-16 h-16 bg-primary-dark rounded-full  flex items-center justify-center hover:scale-110  hover:bg-[#25D366] transition-all  shadow shadow-primary-dark hover:shadow-[#25D366] border-2 border-[#fff] "
    >
      <Whatsapp className="w-8 h-8 fill-[#fff]" />
      <span className="group-hover:animate-ping absolute inline-flex h-full w-full rounded-full group-hover:bg-[#25D366]  group-hover:opacity-20 opacity-0"></span>
    </Link>
  );
}

export default FloatingWhatsapp;
