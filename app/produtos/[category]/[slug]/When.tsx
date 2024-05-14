export default function When({ when }: { when: string }) {
  return (
    when && (
      <div>
        <h4>Quando sai?</h4>
        <p>{when}</p>
      </div>
    )
  );
}
