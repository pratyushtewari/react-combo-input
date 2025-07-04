import type { JSX } from "react";
import { Button, Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon, XMarkIcon } from "@heroicons/react/16/solid";

interface menuItem {
  id: string;
  label: string;
  icon: JSX.Element;
  shortcut?: string;
  isdivider?: boolean;
}

interface MenuTagProps {
  id: string;
  label: string;
  isActive: boolean;
  menuItems?: menuItem[];
}
const MenuTag = ({ id, label, isActive, menuItems }: MenuTagProps) => {
  const menuitemss: React.ReactNode[] = [];

  if (menuItems && menuItems.length) {
    menuItems.forEach((element, index) => {
      if (element.isdivider) {
        menuitemss.push(<div className="my-1 h-px bg-white/5"/>);
      }
      menuitemss.push(
          <MenuItem key={element.id + index}>
            <button className="bg-sdf group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-white/10">
              {element.icon}
              {element.label}
              {element.shortcut ? (
                <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-focus:inline">
                  {element.shortcut}
                </kbd>
              ) : null}
            </button>
          </MenuItem>,

      );
    });
  }

  return (
    <div id={id} className="fixed top-24 w-52 text-right">
      <Menu __demoMode>
        <MenuButton className={`${isActive ? "bg-amber-800 " : "bg-amber-400 "}  menuTagbutton`}>
          {label}
          <ChevronDownIcon className="size-4 fill-white/60" />
        </MenuButton>

        {menuitemss.length ? (
          <MenuItems transition anchor="bottom end" className="menuTagItems">
            {menuitemss}
          </MenuItems>
        ) : null}
      </Menu>
      <Button className=" tag-button">
        <XMarkIcon className="size-4 fill-white/60  " />
      </Button>
    </div>
  );
};

export default MenuTag;
