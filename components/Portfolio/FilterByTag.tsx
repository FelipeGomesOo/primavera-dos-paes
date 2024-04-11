import Tag from "@/components/Portfolio/Tag";
import { getAllProductTags } from "@/lib/data";
import { Suspense } from "react";
export default async function FilterByTag() {
  const tags = await getAllProductTags();

  return (
    <>
      {tags.map((tag: any, index: number) => (
        <Suspense key={index} fallback={<>Tag...</>}>
          <Tag key={index} tagName={tag.name} tagSlug={tag.slug} />
        </Suspense>
      ))}
      <Suspense fallback={<>Tag...</>}>
        <Tag tagName={`Opa`} tagSlug={`opa`} />
      </Suspense>
    </>
  );
}
