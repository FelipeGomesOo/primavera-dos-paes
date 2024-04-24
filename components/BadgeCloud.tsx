import Badge from "@/components/Badge";

export default async function BadgeCloud({ badges }: { badges: ProductTag[] }) {
  return (
    <div className="flex flex-wrap py-5 gap-2">
      {badges.map((badge: ProductTag, index: number) => {
        return <Badge key={index}>{badge.name}</Badge>;
      })}
    </div>
  );
}
