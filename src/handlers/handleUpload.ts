// when downloaded, if any settings changed allow refetch.
import axios from "axios";

import { downloadConvertedFile } from "../downloadFile";
import type { errors as _ } from "../content";
import { type RefObject } from "react";
import { resetErrorMessage, setField } from "../store";
import type { Action, Dispatch } from "@reduxjs/toolkit/react";
import { unpackArrayBuffer } from "../utils";
let filesOnSubmit = [];
export const handleUpload = async (
  e: React.FormEvent<HTMLFormElement>,
  downloadBtn: RefObject<HTMLAnchorElement>,
  dispatch: Dispatch<Action>,
  state: {
    path: string;
    errorMessage: string;
    fileName: string;
    rotations: {
      k: string;
      r: number;
    }[];
    passwords: {
      k: string;
      p: string;
    }[];
    userId: string | null;
  },
  files: File[],
  errors: _
) => {
  e.preventDefault();
  dispatch(setField({ isSubmitted: true }));

  if (!files) return;
  // Extract file names from the File[] array
  const fileNames = files.map((file) => file.name);

  // Check if every file name in files is present in filesOnSubmit
  const allFilesPresent = fileNames.every((fileName) =>
    filesOnSubmit.includes(fileName)
  );

  if (allFilesPresent && files.length === filesOnSubmit.length) {
    dispatch(setField({ showDownloadBtn: true }));
    dispatch(resetErrorMessage());
    return;
  }

  const formData = new FormData();
  for (let i = 0; i < files.length; i++) {
    formData.append("files", files[i]);
  }
  formData.append("rotations", JSON.stringify(state.rotations));
  formData.append("userId", state.userId);
  formData.append("passwords", JSON.stringify(state.passwords));

  console.log(state.passwords);
  let url: string = "";
  // @ts-ignore
  if (process.env.NODE_ENV === "development") {
    url = `http://localhost:8000/api/${state.path}`;
  } else {
    url = `/api/${state.path}`;
  }
  if (state.errorMessage) {
    return;
  }
  // formData.append("compress_amount", String(state.compressPdf));
  const originalFileName = files[0]?.name?.split(".").slice(0, -1).join(".");

  const mimeTypeLookupTable: {
    [key: string]: { outputFileMimeType: string; outputFileName: string };
  } = {
    "application/zip": {
      outputFileMimeType: "application/zip",
      outputFileName: `PDFEquips-${state.path}.zip`,
    },
    "application/pdf": {
      outputFileMimeType: "application/pdf",
      outputFileName: `${originalFileName}.pdf`,
    },
    "application/msword": {
      outputFileMimeType: "application/msword",
      outputFileName: `${originalFileName}.docx`,
    },
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document": {
      outputFileMimeType:
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      outputFileName: `${originalFileName}.docx`,
    },
    "application/vnd.ms-excel": {
      outputFileMimeType: "application/vnd.ms-excel",
      outputFileName: `${originalFileName}.xlsx`,
    },
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": {
      outputFileMimeType:
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      outputFileName: `${originalFileName}.xlsx`,
    },
    "application/vnd.ms-powerpoint": {
      outputFileMimeType: "application/vnd.ms-powerpoint",
      outputFileName: `${originalFileName}.pptx`,
    },
    "application/vnd.openxmlformats-officedocument.presentationml.presentation":
      {
        outputFileMimeType:
          "application/vnd.openxmlformats-officedocument.presentationml.presentation",
        outputFileName: `${originalFileName}.pptx`,
      },
    "text/plain": {
      outputFileMimeType: "text/plain",
      outputFileName: `${originalFileName}.txt`,
    },
  };

  try {
    const response = await axios.post(url, formData, {
      responseType: "arraybuffer",
    });
    // const originalFileName = files[0]?.name?.split(".").slice(0, -1).join(".");
    const mimeType = response.data.type || response.headers["content-type"];
    const mimeTypeData = mimeTypeLookupTable[mimeType] || {
      outputFileMimeType: mimeType,
      outputFileName: "",
    };
    const { outputFileMimeType, outputFileName } = mimeTypeData;

    dispatch(setField({ showDownloadBtn: true }));
    downloadConvertedFile(
      response,
      outputFileMimeType,
      state.fileName || outputFileName,
      downloadBtn
    );
    filesOnSubmit = files.map((f) => f.name);

    if (response.status !== 200) {
      throw new Error(`HTTP error! status: ${response.status}`);
    } else {
      dispatch(resetErrorMessage());
      dispatch(setField({ isSubmitted: false }));
    }
  } catch (error) {
    if ((error as { code: string }).code === "ERR_NETWORK") {
      dispatch(setField({ errorMessage: errors.ERR_NETWORK.message }));
      return;
    }
    dispatch(setField({ isSubmitted: false }));
    type t = keyof typeof errors | "TOTAL_PAGES" | "PER_FILE_PAGES";

    // let's add the missing cases here:
    // just give me the missing ones and i'll add them:
    const errorResponse = (error as any).response?.data;
    // For your specific case:
    const errorData = unpackArrayBuffer<{ errcode: t }>(errorResponse);
    if (errorData) {
      let limitationMsg = "";
      let errMsg = "";
      switch (errorData.errcode) {
        case "MAX_FILES_EXCEEDED":
          limitationMsg = errors.alerts.maxFiles;
          break;
        case "TOTAL_PAGES":
          limitationMsg = errors.alerts.totalPages;
          break;
        case "PER_FILE_PAGES":
          limitationMsg = errors.alerts.perFilePages;
          break;
        case "FILE_TOO_LARGE":
          limitationMsg = errors.alerts.fileSize;
          break;
        case "FILE_CORRUPT":
          limitationMsg = errMsg = errors["FILE_CORRUPT"].message;
          break;
        case "NOT_SUPPORTED_TYPE":
          errMsg = errors["NOT_SUPPORTED_TYPE"].message;
        case "NO_FILES_SELECTED":
          errMsg = errors["NO_FILES_SELECTED"].message;
          break;
        case "EMPTY_FILE":
          errMsg = errors["EMPTY_FILE"].message;
          break;
        default:
          errMsg = errors["UNKNOWN_ERROR"].message;
      }
      if (errMsg) {
        dispatch(setField({ errorMessage: limitationMsg }));
      }
      if (limitationMsg) {
        dispatch(setField({ limitationMsg }));
      }
    }
  } finally {
    dispatch(setField({ isSubmitted: false }));
  }
};
