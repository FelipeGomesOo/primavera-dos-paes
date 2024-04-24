export default function Heading2({
  head,
  subhead,
  text,
}: {
  head: any;
  subhead: any;
  text?: any;
}) {
  return (
    <section className="md:border-t-4 pt-4 md:pt-4 flex flex-col md:flex-row  lg:gap-4 mb-10">
      <div className="w-full md:w-6/12 lg:w-6/12 ">
        <h2 className="mb-2">{head}</h2>
        <h4 className="text-primary-light">{subhead}</h4>
      </div>
      <div className="md:w-6/12 lg:w-6/12 pt-2">
        <p className="lg:text-lg">{text}</p>
      </div>
    </section>
  );
}
