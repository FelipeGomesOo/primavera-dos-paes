export default async function Badge({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <span className="text-xs bg-primary-light/10 px-2.5 py-0.5 rounded">
      {children}
    </span>
  );
}
