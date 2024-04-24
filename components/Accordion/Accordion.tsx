"use client";
import { useState } from "react";
import AccordionItem from "../AccordionItem";
export default function Accordion({ faqs }: { faqs: FAQ[] }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {faqs.map((faq: FAQ) => (
        <AccordionItem faq={faq} key={faq.id} />
      ))}
    </>
  );
}
