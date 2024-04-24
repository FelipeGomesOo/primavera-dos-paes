import Image from "next/image";
import Link from "next/link";
export default function StoreCard({ store }: { store: Store }) {
  console.log(store, "sotercard component");
  const opening = [
    {
      nome: "Segunda",
      horarios: "fechado",
    },
    {
      nome: "Terça",
      horarios: "11h-19h",
    },
    {
      nome: "Quarta",
      horarios: "11h-19h",
    },
    {
      nome: "Quinta",
      horarios: "11h-19h",
    },
    {
      nome: "Sexta",
      horarios: "11h-19h",
    },
    {
      nome: "Sábado",
      horarios: "11h-19h",
    },
    {
      nome: "Domingo",
      horarios: "fechado",
    },
  ];
  return (
    <div className="border border-primary-light/50 rounded min-h-[70svh] my-6">
      <div className="w-full  bg-primary-light">
        <Image
          src={store.featuredImage.large.src}
          alt={store.featuredImage.large.alt}
          width={store.featuredImage.large.width}
          height={store.featuredImage.large.height}
          className="h-48 w-full object-cover md:h-full "
        />
      </div>
      <div className="w-full p-20 py-30 lg:self-center">
        <div className="flex flex-col gap-4">
          <div className="">
            <h3>{store.Bairro}</h3>
            <p>{store.Logradouro}</p>
          </div>
          <div className="w-full lg:flex gap-6">
            <div className="w-full lg:w-6/12">
              <h4 className="mb-2">Horários de abertura</h4>
              {opening.map((day, index) => (
                <div
                  key={index}
                  className="border-t text-sm border-primary-light/30 pt-1 flex flex-row gap-2 justify-between"
                >
                  <div className="w-6/12 md:w-8/12 ">{day.nome}</div>
                  <div>{day.horarios}</div>
                </div>
              ))}
            </div>
            <div className="w-full lg:w-6/12">
              <p>
                A Fianco is an Italian vineria packed full of passion for
                Italian wine and food. We choose wines that are farmed using the
                old techniques, by small organic producers, with indigenous
                grapes, respecting the land, respecting nature. We believe that
                these old ways are the future.
              </p>
            </div>
          </div>
          <div className="w-full ">
            <Link
              target="_blank"
              className="button medium"
              href={store.MapsLink.url}
            >
              {store.MapsLink.title}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
