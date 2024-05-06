import { getGeral } from "@/lib/data";
import Link from "next/link";
export default async function CTA({
  pricing,
}: {
  pricing: Product["pricing"];
}) {
  const {
    atendimento_whatsapp,
    whatsapp_number,
    whatsapp_link,
    class_botao_produtos,
  } = await getGeral();
  return (
    <div
      className={`${class_botao_produtos} w-full lg:w-[18rem] lg:sticky top-10 flex-none border rounded p-6 border-primary-light/20 self-start`}
    >
      <h3 className="pb-6 mb-4 border-b border-b-primary-light/20">
        Peça por telefone ou whatsapp
      </h3>
      {pricing.store.price && (
        <div className="mt-2">
          <p>Valor na loja</p>
          <strong>
            {"R$ " +
              pricing.store.price +
              " /" +
              pricing.store.weight +
              pricing.store.unit}
          </strong>
        </div>
      )}
      {pricing.delivery.price && (
        <div className="mt-2">
          <p>Porção para entrega</p>
          <strong>
            {"R$ " +
              pricing.delivery.price +
              " /" +
              pricing.delivery.weight +
              pricing.delivery.unit}
          </strong>
        </div>
      )}

      <Link
        className="button large bg-primary-dark text-[#fff] hover:scale-105  hover:bg-[#25D366] w-full my-4  "
        href={whatsapp_link}
      >
        Peça no WhatsApp
      </Link>
      <div className="flex gap-2">
        <p>Ou</p>
        <strong>{whatsapp_number}</strong>
      </div>
      <p className="text-sm mt-2">{atendimento_whatsapp}</p>
    </div>
  );
}
