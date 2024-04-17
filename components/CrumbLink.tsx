import Link from "next/link";
export default function CrumbLink({
  category,
  pageName,
}: {
  category: string;
  pageName: string;
}) {
  return (
    <div>
      <Link href={`category`}>{pageName} ›</Link>
    </div>
  );
}
