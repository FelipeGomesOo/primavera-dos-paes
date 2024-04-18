export default function Ingredients({ ingredients }: { ingredients: string }) {
  return (
    ingredients && (
      <div>
        <h4>Ingredientes</h4>
        <p>{ingredients} </p>
      </div>
    )
  );
}
