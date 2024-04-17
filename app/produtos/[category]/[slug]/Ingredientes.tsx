export default function Ingredients({ ingredients }: { ingredients: string }) {
  return (
    <div className="my-6">
      <h4>Ingredientes</h4>
      <p>{ingredients} </p>
    </div>
  );
}
