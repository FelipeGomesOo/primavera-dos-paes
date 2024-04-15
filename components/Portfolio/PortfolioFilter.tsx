export default async function PortfolioFilter({ children }: { children: any }) {
  return (
    <div className="overflow-hidden sticky top-0 bg-[#fff]">
      <div className="overflow-auto relative lg:container">
        <section className="w-full scrollable-content flex gap-8 snap-x scroll-pl-6 overflow-x-auto lg:overflow-y-visible h-10 items-center border-b border-primary-light/20  ">
          {children}
        </section>
      </div>
    </div>
  );
}
