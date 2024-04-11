"use client";
import { useSearchParams } from "next/navigation";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import Link from "next/link";
import CheckIcon from "../CheckIon";
export default function Tag({
  tagName,
  tagSlug,
}: {
  tagName: string;
  tagSlug: string;
}) {
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const tag = searchParams.get(tagSlug);

  const handleClick = () => {
    let params = new URLSearchParams(searchParams);
    if (tag === "ativo") {
      params.delete(tagSlug);
    } else {
      params.set(tagSlug, "ativo");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="snap-start shrink-0 first:pl-6 last:pr-[calc(100%-21.5rem)]">
      <button
        aria-checked={tag === "ativo" ? true : false}
        className=" rounded-full border-primary-light/50 button small aria-checked:bg-primary-dark aria-checked:text-[#ebe5e5]  group"
        onClick={handleClick}
      >
        <div className="flex gap-x-2 ">
          <CheckIcon className="w-4 h-4 group-aria-checked:fill-[#fff] bg-primary-light/20 fill-primary-light/20  rounded-full " />
          {tagName}
        </div>
      </button>
    </div>
  );
}
