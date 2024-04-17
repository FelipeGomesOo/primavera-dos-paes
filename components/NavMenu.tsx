import { getMenuItems } from "@/lib/data";
import { NavLink } from "@/components/NavLink";

export default async function NavMenu({ onClose }: any) {
  const menuItems = await getMenuItems();
  //console.log(menuItems, "menuItems NavMenu");

  return (
    <nav className="flex flex-col text-2xl md:text-xl uppercase text-[#fff] md:text-primary md:flex-row justify-between gap-4 md:gap-8 font-mono">
      {menuItems.map((item: any, index: number) => (
        <NavLink
          onClick={onClose}
          key={item.id}
          itemName={item.title}
          itemURL={item.url}
        />
      ))}
    </nav>
  );
}
