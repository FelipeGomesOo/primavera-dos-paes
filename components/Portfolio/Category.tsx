"use client";
import { useSearchParams } from "next/navigation";
import { usePathname } from "next/navigation";
import Link from "next/link";
export default function Category({
  categoryName,
  categoryURL,
}: {
  categoryName: string;
  categoryURL: string;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  let params = new URLSearchParams(searchParams);
  return (
    <div className="snap-start shrink-0 first:pl-4 first:lg:pl-0 last:pr-[calc(100%-21.5rem)]">
      <Link
        href={categoryURL + "?" + params.toString()}
        className={`link  ${pathname === categoryURL ? "active" : " "}`}
      >
        {categoryName}
      </Link>
    </div>
  );
}
