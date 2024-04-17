export default function Conservation({ tips }: { tips: string }) {
  return (
    <div className="my-6">
      <h4>Dicas de conservação</h4>
      <p>{tips} </p>
    </div>
  );
}
