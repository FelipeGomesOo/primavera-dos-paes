import Tag from "@/components/Portfolio/Tag";
import { Suspense } from "react";
export default function FilterByTag({ tags }: { tags: ProductTag[] }) {
  return (
    <>
      {tags.map((tag: any, index: number) => (
        <Suspense key={index} fallback={<>tag...</>}>
          <Tag key={index} tagName={tag.name} tagSlug={tag.slug} />
        </Suspense>
      ))}
    </>
  );
}
