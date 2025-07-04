import { ArchiveBoxXMarkIcon, Square2StackIcon, TrashIcon } from "@heroicons/react/16/solid";
import "./App.css";
import MenuTag from "./components/MenuTag";
import { Button } from "@headlessui/react";
import { useState } from "react";

function App() {
  const [selected, setSelected] = useState(false);
  const menuItems = [
    { id: "sdfsdf", icon: <TrashIcon className="size-4 fill-white/30" />, label: "Hello", shortcut: "⌘D" },
    { id: "423erw", icon: <Square2StackIcon className="size-4 fill-white/30" />, label: "Nahi Nahi", shortcut: "⌘T" },
    {
      id: "sdfsewrt234df",
      isdivider: true,
      icon: <ArchiveBoxXMarkIcon className="size-4 fill-white/30" />,
      label: "Yaar sahi hai",
      shortcut: "⌘F",
    },
  ];
  return (
    <>
      <div className="flex m-auto justify-center">
        <MenuTag id="erewriopew" label="Test" menuItems={menuItems} isActive={selected}></MenuTag>
        <Button  onClick={() => setSelected(!selected)} >Toggle</Button>
      </div>
    </>
  );
}

export default App;
