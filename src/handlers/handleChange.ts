// @ts-ignore
import { type Action } from "@reduxjs/toolkit";
import type { errors as _ } from "../content/content"; // import the errors constant

import { validateFiles } from "../utils";
import { setField, resetErrorMessage } from "../store";
import type { Dispatch } from "../../react-astro";
export const handleChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  dispatch: Dispatch<Action>,
  setFiles: (files: FileList | File[]) => void,
  extension: string,
  errors: typeof _,
  files: File[],
  state: {
    path: string;
  }
) => {
  const _files = (e.target?.files as FileList) || null;
  setFiles([...files, ...Array.from(!_files ? [] : _files)]);
  const isValid = validateFiles(_files, extension, errors, dispatch, state);
  if (isValid && files) {
    dispatch(setField({ showTool: false }));
    dispatch(resetErrorMessage());
  }
};
