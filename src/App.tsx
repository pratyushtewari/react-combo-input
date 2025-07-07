import { useState } from "react";
import "./App.css";
// import TagMenu from "./components/TagMenu";
import type { PropsTagMenu } from "./components/TagMenu";

import { PencilIcon, TrashIcon, ArchiveBoxXMarkIcon } from "@heroicons/react/24/solid";
import MyComboBox from "./components/MyComboBox";

function App() {
  const [tagMenuOptions, setTagMenuOptions] = useState<PropsTagMenu[]>([
    {
      id: "qwerqwer",
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
      onDelete: handleOnDelete,
    },
    {
      id: "2133412134",
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
        },
      ],
      onDelete: handleOnDelete,
    },
    {
      id: "gdth253424",
      label: "Tag no menu",
      colorName: "!bg-red-700",
      onDelete: handleOnDelete,
    },
  ]);

  function handleOnDelete(id: string) {
    // Warn:
    // When working with state in programming, particularly in frameworks like React,
    // passing a function that utilizes the "same state" often refers to using an updater
    //  function when updating state based on its previous value. This is crucial for avoiding
    // "stale state" issues.
    // Updater Functions in State Management:
    //
    // Instead of directly setting the new state value,
    // you pass a function to the state setter
    // (e.g., setState in class components or the set function returned
    //  by useState in functional components). This function receives the
    // current or previous state as an argument, ensuring you are working
    // with the most up-to-date value.
    // console.log(tagMenuOptions); -- will result in original state and not the latest one as that is not referenced

    // reset the state to the new updatedItems
    setTagMenuOptions(tagMenuOptions => tagMenuOptions.filter((item) => item.id !== id));
  }

  return (
    <>
      <MyComboBox tagMenuOptions={tagMenuOptions} />
    </>
  );
}

export default App;
