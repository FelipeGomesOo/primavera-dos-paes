import Image from "next/image";
export default function StoreCard({ store }: { store: Store }) {
  return (
    <div className="w-6/12 lg:w-full flex flex-col lg:flex-row  gap-3 border border-primary-light/50  lg:items-center bg-[#fff]">
      <div className="w-full lg:flex-none lg:w-3/12">
        <Image
          src={store.featuredImage.large.src}
          alt={store.featuredImage.large.alt}
          width={store.featuredImage.large.width}
          height={store.featuredImage.large.height}
          className=""
        />
      </div>
      <div className="grow p-2">
        <h4>{store.Bairro}</h4>
        <p>{store.Logradouro}</p>
      </div>
    </div>
  );
}
