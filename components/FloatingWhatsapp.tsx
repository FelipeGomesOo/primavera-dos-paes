import Whatsapp from "@/components/Whatsapp";
import { animationDelay } from "@/lib/utils";
import Link from "next/link";

export default function FloatingWhatsapp() {
  return (
    <Link
      style={animationDelay(9)}
      href="https://wa.link/k4o0wr"
      target="_blank"
      className="reveal fixed group bottom-5 right-4 lg:right-8 lg:bottom-10 z-50 w-16 h-16 bg-[#25D366] rounded-full  flex items-center justify-center hover:scale-110  hover:bg-[#25D366] transition-all  shadow shadow-primary-dark/20 hover:shadow-[#25D366] border-2 border-[#fff] "
    >
      <div className="absolute bg-[#fff] w-[9.5rem] right-[4.5rem] text-[0.75rem] text-center rounded-md py-1 px-1 flex items-center shadow shadow-primary-dark/20">
        <div className="w-5 h-4 flex items-center justify-center relative">
          <span className="absolute block h-2 w-2 rounded-full bg-[#25D366] "></span>
          <span className="animate-ping  block h-2 w-2 rounded-full bg-[#25D366] opacity-75"></span>
        </div>
        <span>Peça via Whatsapp</span>
      </div>
      <Whatsapp className="w-8 h-8 fill-[#fff]" />
      <span className="group-hover:animate-ping absolute inline-flex h-full w-full rounded-full group-hover:bg-[#25D366]  group-hover:opacity-20 opacity-0"></span>
    </Link>
  );
}
