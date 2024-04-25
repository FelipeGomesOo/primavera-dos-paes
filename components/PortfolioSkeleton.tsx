export default function PortfolioSkeleton() {
  const products = [1, 2, 3, 4, 5, 6];
  const filters = [1, 2, 3, 4];
  return (
    <>
      <div className="md:container mb-4">
        <section className="w-full flex gap-8 h-10 items-center border-b border-primary-light/20">
          {filters.map((filter, index) => (
            <div
              key={index}
              className="w-[50px] h-6 bg-primary-light/10 animate-pulse"
            ></div>
          ))}
        </section>
      </div>
      <section className="grid grid-cols-12 gap-2 xl:gap-x-4 gap-y-8 reveal container ">
        {products.map((produto, index) => (
          <div
            key={index}
            className="col-span-12 sm:col-span-6 xl:col-span-4  "
          >
            <div className="w-full h-0 pb-[70%] bg-primary-light/20 animate-pulse"></div>
            <div className="w-6/12 h-6 bg-primary-light/10 animate-pulse mt-4"></div>
            <div className="w-full h-10 bg-primary-light/10 animate-pulse mt-4"></div>
          </div>
        ))}
      </section>
    </>
  );
}
