import ArrowIcon from "../SVG/Arrow";
export default function AccordionItem({ faq }: { faq: FAQ }) {
  return (
    <details className="border-b border-primary-light  group overflow-hidden  duration-700  ease-in-out transition-all max-h-14 open:max-h-full ">
      <summary className="cursor-pointer font-normal py-2 group-hover:bg-[#fff] flex items-center justify-between  z-10">
        {faq.title}
        <ArrowIcon
          className={`w-2 overflow-visible mr-4  duration-700  ease-in-out transition-all group-open:rotate-180`}
        />
      </summary>
      <div
        className={`py-4`}
        dangerouslySetInnerHTML={{ __html: faq.content }}
      ></div>
    </details>
  );
}
