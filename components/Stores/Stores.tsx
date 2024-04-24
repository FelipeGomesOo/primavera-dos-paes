import Store_2 from "@/components/Stores/Store_2";

export default function Stores({ stores }: { stores: Store[] }) {
  return (
    <div className="lg:container overflow-auto relative">
      <section className="w-full px-[1rem] lg:px-0 snap-x snap-mandatory scrollable-content flex gap-4 lg:gap-6  overflow-x-auto lg:overflow-y-visible  items-center ">
        {stores.map((store: Store, index: number) => (
          <Store_2 key={index} store={store} />
        ))}
      </section>
    </div>
  );
}
