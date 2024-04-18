export default function Conservation({ tips }: { tips: string }) {
  console.log(tips, "conservação conservation Component");
  return tips ? (
    <div>
      <h4>Dicas de conservação</h4>
      <p>{tips}</p>
    </div>
  ) : null;
}
