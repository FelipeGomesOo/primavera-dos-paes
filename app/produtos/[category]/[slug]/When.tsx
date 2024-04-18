export default function When({ when, title }: { when: string; title: string }) {
  return (
    when && (
      <div>
        <h4>Quando sai o {title}?</h4>
        <p>{when}</p>
      </div>
    )
  );
}
