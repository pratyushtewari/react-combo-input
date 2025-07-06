import "./App.css";
import TagMenu from "./components/TagMenu";

import { PencilIcon, TrashIcon, ArchiveBoxXMarkIcon } from "@heroicons/react/24/solid";

function App() {
  return (
    <>
      <TagMenu
        id="yoiuyiuoiug"
        label="Tag Menu"
        colorName="!bg-indigo-500"
        items={[
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
        ]}
      />
      <div className="space-y-4">----</div>
      <TagMenu id="yoiuyiuosdffiug" label="Tag no menu" colorName="!bg-red-700" />
    </>
  );
}

export default App;
