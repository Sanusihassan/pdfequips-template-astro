import { RefreshIcon, TrashIcon } from "@heroicons/react/solid";
import type { errors as _ } from "../../src/content";

import { useDispatch, useSelector } from "react-redux";
import { useFileStore } from "../../src/file-store";
import { sanitizeKey } from "../../src/utils";
import { setField, type ToolState } from "../../src/store";

export type ActionProps = {
  extension: string;
  fileName: string;
};

export const ActionDiv = ({ extension, fileName }: ActionProps) => {
  const { files, setFiles } = useFileStore();
  const dispatch = useDispatch();
  const rotations = useSelector(
    (state: { tool: ToolState }) => state.tool.rotations
  );
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const newFiles = files.filter((file) => file.name !== fileName);
    setFiles(newFiles);
  };

  const handleRotate = () => {
    const k = sanitizeKey(fileName.split(".")[0]);
    const existingRotation =
      rotations && k ? rotations.find((r) => r.k === k) : null;
    const newRotation = existingRotation ? existingRotation.r + 90 : 90;

    dispatch(
      setField({
        rotations: [
          ...rotations.filter((r) => r.k !== k),
          { k, r: newRotation % 360 }, // Optional: keep rotation between 0-360
        ],
      })
    );
  };

  return (
    <div
      className={`action-div d-flex ${
        extension == ".html" ? "justify-content-end" : "justify-content-between"
      }`}
    >
      <button className="btn btn-light" onClick={(e) => handleClick(e)}>
        <TrashIcon className="icon hero-icon" />
      </button>
      <button className="btn btn-light" onClick={handleRotate}>
        <RefreshIcon className="hero-icon" />
      </button>
    </div>
  );
};
