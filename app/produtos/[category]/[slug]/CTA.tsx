import Link from "next/link";
export default function CTA({ pricing }: { pricing: Product["pricing"] }) {
  return (
    <div className="w-full lg:w-[18rem] lg:sticky top-10 flex-none border rounded p-6 border-primary-light/20 self-start ">
      <h3 className="pb-6 mb-4 border-b border-b-primary-light/20">
        Peça por telefone ou whatsapp
      </h3>
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
      <Link
        className="button large bg-primary-dark text-[#fff] hover:scale-105  hover:bg-[#25D366] w-full my-4  "
        href={`https://api.whatsapp.com/send?phone=5521992220003&text=Bem-vindo(a)%20%C3%A0%20Primavera%20dos%20P%C3%A3es.%20Envie%20esta%20mensagem%20para%20in%C3%ADcio%20do%20atendimento.`}
      >
        Peça no WhatsApp
      </Link>
      <div className="flex gap-2">
        <p>Ou</p>
        <strong>(21) 99222-0003</strong>
      </div>
      <p className="text-sm mt-2">
        Nosso atendimento funciona de terça a sexta das 9h às 18h
      </p>
    </div>
  );
}
