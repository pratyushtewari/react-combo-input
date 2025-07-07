import type { JSX } from "react";
import { Menu, MenuItem, MenuButton, MenuItems } from "@headlessui/react";
import { ChevronDownIcon, XMarkIcon } from "@heroicons/react/24/solid";

export interface PropsMenuItem {
  id: string;
  label: string;
  icon?: JSX.Element;
  shortcut?: string;
}

export interface PropsTagMenu {
  id: string;
  label: string;
  isActive?: boolean;
  items?: PropsMenuItem[];
  colorName: string;
  onDelete: (id: string) => void;
}

function GetMenuItem({ id, label, icon, shortcut }: PropsMenuItem) {
  if (id.startsWith("divider-")) return <div className="my-1 h-px bg-white/5"></div>;
  return (
    <MenuItem key={id}>
      <button className="menu_item group">
        {icon ? icon : null}
        {label}
        {shortcut ? <kbd className="menu_item_shortcut">{shortcut}</kbd> : null}
      </button>
    </MenuItem>
  );
}

function TagPart({ id, label, isActive, items, colorName }: PropsTagMenu) {
  if (!items)
    return (
      <div key={id} className={` menu_button ${isActive ? "active" : ""}  ${colorName}`}>
        {label}
      </div>
    );
  return (
    <>
      <Menu key={id}>
        <MenuButton className={`menu_button ${isActive ? "active" : ""} ${colorName}`}>
          {label}
          <ChevronDownIcon className="size-4 fill-white/60" />
        </MenuButton>

        <MenuItems transition anchor="bottom end" className="menu_items">
          {items.map((item) => (
            <GetMenuItem key={item.id} {...item} />
          ))}
        </MenuItems>
      </Menu>
    </>
  );
}

function TagMenu({ id, label, isActive, items, colorName, onDelete }: PropsTagMenu) {
  return (
    <div className="flex">
      <TagPart id={id} label={label} isActive={isActive} items={items} colorName={colorName} onDelete={onDelete} />
      <div className="flex"></div>
      <button className={`tag_close_button ${colorName}`} onClick={() => onDelete(id)}>
        <XMarkIcon className="size-4 fill-white/60" />
      </button>
    </div>
  );
}

export default TagMenu;
