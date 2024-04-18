export default async function Lojas({ stores }: { stores?: Store[] }) {
  return (
    stores && (
      <section className="w-full text-sm md:text-[1rem]">
        <div className="flex  justify-between pb-4 ">
          <strong className="w-6/12 md:w-8/12">Onde encontrar?</strong>
          <strong>Ter-Sex </strong>
          <strong>Sábado</strong>
        </div>
        <div className="flex flex-col gap-2">
          {stores.map((store: Store, index: number) => (
            <div
              key={index}
              className="border-t border-primary-light pt-1 flex flex-row gap-2 justify-between"
            >
              <div className="w-6/12 md:w-8/12">{store.Logradouro}</div>
              <div className="">{store.TuesdayToFridayHours}</div>
              <div className="">{store.SaturdayHours}</div>
            </div>
          ))}
        </div>
      </section>
    )
  );
}
