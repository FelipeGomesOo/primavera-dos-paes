import { animationDelay } from "@/lib/utils";

export default function MenuIcon({ onClick, menuOpen }: any) {
  const menuIcon = (
    <>
      <div
        className={`${
          menuOpen ? "translate-y-[3px] rotate-45" : "translate-y-[-3px]"
        } h-[3px] w-10 origin-center bg-primary-dark transition delay-[1900ms] duration-300 ease-in-out `}
      >
        &nbsp;
      </div>
      <div
        className={`${
          menuOpen ? "translate-y-[0px] -rotate-45" : "translate-y-[3px]"
        } h-[3px] w-10 origin-center bg-primary-dark transition delay-[1900ms] duration-300 ease-in-out `}
      >
        &nbsp;
      </div>
    </>
  );
  return (
    <button
      onClick={onClick}
      type="button"
      className="reveal relative inline-flex flex-col items-center justify-center p-2 focus:outline-none"
      aria-controls="mobile-menu"
      aria-expanded="false"
      style={animationDelay(1)}
    >
      <span className="absolute -inset-0.5"></span>
      <span className="sr-only">Open main menu</span>

      {menuIcon}
    </button>
  );
}
