"use client";
import { useState } from "react";
export default function AccordionItem({ faq }: { faq: FAQ }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-primary-light  group">
      <h4
        className="cursor-pointer font-normal py-2 group-hover:bg-[#fff]"
        onClick={() => setIsOpen(!isOpen)}
      >
        {faq.title}
      </h4>
      {isOpen && (
        <article
          className="py-4"
          dangerouslySetInnerHTML={{ __html: faq.content }}
        ></article>
      )}
    </div>
  );
}
