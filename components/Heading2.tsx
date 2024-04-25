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
    <section className="border-t-4 pt-4 flex flex-col lg:flex-row  lg:gap-4 mb-10">
      <div className="lg:w-6/12 ">
        <h2>{head}</h2>
        <h4 className="text-primary-light">{subhead}</h4>
      </div>
      <div className=" lg:w-6/12 pt-2">
        <p className="xl:text-lg">{text}</p>
      </div>
    </section>
  );
}
