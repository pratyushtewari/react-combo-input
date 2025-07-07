import { useState } from "react";
import "./App.css";
import TagMenu from "./components/TagMenu";

import { PencilIcon, TrashIcon, ArchiveBoxXMarkIcon } from "@heroicons/react/24/solid";

function App() {
  const [tagMenuOptions, setTagMenuOptions] = useState([{
    id: "yoiuyiuoiug",
    label: "Tag Menu",
    colorName: "!bg-indigo-500",
    items: [
      {
        id: "edit",
        label: "Edit",
        icon: <PencilIcon className="size-4 fill-white/60" />,
        shortcut: "⌘E",
      },
      { id: "divider-1", label: "" },
      {
        id: "delete",
        label: "Delete",
        icon: <TrashIcon className="size-4 fill-white/60" />,
        shortcut: "⌘D",
      },
      { id: "divider-2", label: "" },
      {
        id: "Archive",
        label: "Archive",
        icon: <ArchiveBoxXMarkIcon className="size-4 fill-white/60" />,
        shortcut: "⌘R",
      },
      {
        id: "Archivedss",
        label: "Archive",
        icon: <ArchiveBoxXMarkIcon className="size-4 fill-white/60" />,
      },
    ],
  }, {
    id: "yoiuyiuoiug2",
    label: "Tag Menu 2",
    colorName: "!bg-indigo-500",
    items: [
      {
        id: "edit",
        label: "Edit",
        icon: <PencilIcon className="size-4 fill-white/60" />,
        shortcut: "⌘E",
      },
      { id: "divider-1", label: "" },
      {
        id: "delete",
        label: "Delete",
        icon: <TrashIcon className="size-4 fill-white/60" />,
        shortcut: "⌘D",
      }
    ],
  },
  {
    id:"yoiuyiuosdffiug",
    label:"Tag no menu",
    colorName:"!bg-red-700"
  }

  ]);

  function handleOnDelete(id: string) {
      console.log(id);
      const updatedItems = tagMenuOptions.filter(item => item.id !== id);
      setTagMenuOptions(updatedItems);

     //setTagMenuOptions([{id: '', label: '', items: [], colorName: ''}]);
  }

  return (
    <>
      {tagMenuOptions.map((tagMenuOption) => (
        <TagMenu key={tagMenuOption.id}
                id={tagMenuOption.id}
                label={tagMenuOption.label}
                colorName={tagMenuOption.colorName}
                items={tagMenuOption.items}
                onDelete={handleOnDelete}
              />
            ))}
    </>
  );
}

export default App;
