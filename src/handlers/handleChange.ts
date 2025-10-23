import { type Action, type Dispatch } from "@reduxjs/toolkit";
import type { errors as _ } from "../content/content";
import { validateFiles } from "../utils";

export const handleChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  dispatch: Dispatch<Action>,
  setFiles: (files: FileList | File[]) => void,
  errors: typeof _,
  files: File[]
) => {
  const _files = (e.target?.files as FileList) || null;
  const finalFiles = [...files, ...Array.from(!_files ? [] : _files)];

  const { isValid } = validateFiles(
    finalFiles,
    dispatch,
    errors,
    "application/pdf"
  );

  if (isValid) {
    setFiles(finalFiles);
  }
};
