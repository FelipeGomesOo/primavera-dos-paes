"use client";
export default function Stores({ store }: { store: Store }) {
  return (
    <section className="fade-in border-t border-primary-light py-2 flex gap-2 justify-between">
      <div className="w-7/12 sm:w-9/12 grow">
        <h4 className="mb-0">{store.Bairro}</h4>
        <div className="">{store.Logradouro}</div>
        <p className="text-primary-light">{store.subtitle}</p>
      </div>
      <div className="grow">
        <div className="flex justify-between">
          <strong className="w-6/12">Ter-Sex</strong>{" "}
          <span className="">{store.TuesdayToFridayHours}</span>
        </div>
        <div className="flex justify-between">
          <strong className="w-6/12">Sábado</strong>{" "}
          <span className="">{store.SaturdayHours}</span>
        </div>
      </div>
    </section>
  );
}
