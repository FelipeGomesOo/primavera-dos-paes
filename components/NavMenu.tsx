import { getMenuItems } from "@/lib/data";
import { NavLink } from "@/components/NavLink";

export default function NavMenu({ onClose, menuItems }: any) {
  //console.log(menuItems, "menuItems NavMenu");

  return (
    <nav className="mt-6 text-3xl lg:text-4xl font-mono">
      <ul>
        {menuItems.map((item: any, index: number) => (
          <NavLink
            onClick={onClose}
            key={item.id}
            itemName={item.title}
            itemURL={item.url}
          />
        ))}
      </ul>
    </nav>
  );
}
