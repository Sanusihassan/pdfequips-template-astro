import { RefreshIcon, TrashIcon } from "@heroicons/react/solid";
import { Eye, EyeOff, LockKeyholeOpen } from "lucide-react";
import type { errors as _ } from "../../src/content";

import { useDispatch, useSelector } from "react-redux";
import { useFileStore } from "../../src/file-store";
import { sanitizeKey } from "../../src/utils";
import { setField, type ToolState } from "../../src/store";
import type { SetStateAction, Dispatch } from "react";
import { useState } from "react";

export type ActionProps = {
  extension: string;
  fileName: string;
  setPassword?: Dispatch<SetStateAction<string>>;
  needsPassword?: boolean;
};

export const ActionDiv = ({
  extension,
  fileName,
  setPassword,
  needsPassword,
}: ActionProps) => {
  const { files, setFiles } = useFileStore();
  const dispatch = useDispatch();
  const [passwordInput, setPasswordInput] = useState("");
  const [showPassword, setShowPassword] = useState(false);
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
          { k, r: newRotation % 360 },
        ],
      })
    );
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (setPassword && passwordInput.trim()) {
      setPassword(passwordInput);
    }
  };

  const togglePasswordVisibility = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // Prevent form submission
    setShowPassword((prev) => !prev);
  };
  // action-div
  return (
    <>
      <div
        className={`action-div d-flex ${
          extension === ".html"
            ? "justify-content-end"
            : "justify-content-between"
        }`}
      >
        <button className="btn btn-light" onClick={(e) => handleClick(e)}>
          <TrashIcon className="icon hero-icon" />
        </button>
        <button className="btn btn-light" onClick={handleRotate}>
          <RefreshIcon className="hero-icon" />
        </button>
      </div>
      {needsPassword ? (
        <form>
          <div className="password-input-row">
            <div className="input-group">
              <input
                type={showPassword ? "text" : "password"}
                className="form-control"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                autoFocus
              />
              <button
                type="button"
                className="show-password"
                onClick={togglePasswordVisibility}
                aria-label={showPassword ? "Hide password" : "Show password"}
                tabIndex={-1}
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
              <button
                type="submit"
                className="submit-btn"
                disabled={!passwordInput.trim()}
                onClick={handlePasswordSubmit}
              >
                <LockKeyholeOpen size={16} />
              </button>
            </div>
          </div>
        </form>
      ) : null}
    </>
  );
};
