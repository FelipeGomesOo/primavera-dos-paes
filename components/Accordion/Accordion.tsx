import AccordionItem from "./AccordionItem";
export default function Accordion({ faqs }: { faqs: FAQ[] }) {
  return (
    <>
      {faqs.map((faq: FAQ) => (
        <AccordionItem faq={faq} key={faq.id} />
      ))}
    </>
  );
}
