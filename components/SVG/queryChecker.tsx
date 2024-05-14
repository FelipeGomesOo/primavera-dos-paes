function QueryChecker() {
  return (
    <div className="fixed w-full top-0 h-10 text-[1.5rem] text-[#fff] bg-[#25D366] text-center z-50">
      <span className="sm:hidden ">X Small</span>
      <span className="hidden sm:block md:hidden">Small</span>
      <span className="hidden md:block lg:hidden">Medium</span>
      <span className="hidden lg:block xl:hidden">Large</span>
      <span className="hidden xl:block 2xl:hidden">1x large</span>
      <span className="hidden 2xl:block 3xl:hidden">2x large</span>
      <span className="hidden 3xl:block">3x large</span>
    </div>
  );
}

export default QueryChecker;
