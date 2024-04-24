import Tag from "@/components/Portfolio/Tag";
export default function FilterByTag({ tags }: { tags: ProductTag[] }) {
  return (
    <>
      {tags.map((tag: any, index: number) => (
        <Tag key={index} tagName={tag.name} tagSlug={tag.slug} />
      ))}
    </>
  );
}
