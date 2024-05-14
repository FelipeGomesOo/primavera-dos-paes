import Tag from "@/components/Portfolio/Tag";
import { sortByName } from "@/lib/utils";
export default function FilterByTag({ tags }: { tags: ProductTag[] }) {
  return (
    <>
      {sortByName(tags).map((tag: any, index: number) => (
        <Tag key={index} tagName={tag.name} tagSlug={tag.slug} />
      ))}
    </>
  );
}
