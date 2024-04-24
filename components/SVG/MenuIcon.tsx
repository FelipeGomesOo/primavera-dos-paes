import { animationDelay } from "@/lib/utils";

export default function MenuIcon({ onClick, menuOpen }: any) {
  const menuIcon = (
    <>
      <div
        className={` ${
          menuOpen ? "translate-y-[1px] rotate-45 " : "translate-y-[-2px] "
        } h-[1px] lg:w-4 w-10  origin-center bg-primary-dark transition  delay-[1000ms] duration-300 ease-in-out `}
      >
        &nbsp;
      </div>
      <div
        className={` ${
          menuOpen
            ? "translate-y-[0px] -rotate-45   origin-center"
            : "translate-y-[3px]    "
        } h-[1px] lg:w-4 w-10  origin-center bg-primary-dark transition  delay-[1000ms] duration-300 ease-in-out `}
      >
        &nbsp;
      </div>
    </>
  );
  return (
    <div className=" content-center  ">
      <button
        onClick={onClick}
        type="button"
        className="reveal relative flex gap-2  items-center justify-center px-3 py-1 focus:outline-none"
        aria-controls="mobile-menu"
        aria-expanded="false"
        style={animationDelay(1)}
      >
        <span className="absolute -inset-0.5"></span>
        <span className="sr-only">Abrir menu</span>
        <div className="">{menuIcon}</div>
        <div className="right hidden lg:block">Menu</div>
      </button>
    </div>
  );
}
