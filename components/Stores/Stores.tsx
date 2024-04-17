import StoreCard from "@/components/Stores/Store";

export default function Stores({ stores }: { stores: Store[] }) {
  return (
    <section className="py-10 lg:pt-20 mt-20 bg-primary-light/10">
      <div className="container mb-4">
        <h3>Onde você encontra</h3>
        <div className="flex flex-col lg:flex-row gap-6 lg:my-10 pt-10 lg:pt-0">
          {stores.map((store: Store, index: number) => (
            <StoreCard key={index} store={store} />
          ))}
        </div>
      </div>
    </section>
  );
}
