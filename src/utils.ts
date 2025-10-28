import { useEffect, useMemo, useState } from "react";
import { type Action, type Dispatch } from "@reduxjs/toolkit";
import type { errors as _ } from "./content";
import { resetErrorMessage, setField } from "./store";
import * as pdfjs from "pdfjs-dist";
import Cookies from "js-cookie";

import {
  type PDFDocumentProxy,
  type PageViewport,
  type RenderTask,
} from "pdfjs-dist";
import { toast } from "react-toastify";
// @ts-ignore
const pdfjsWorker = await import("pdfjs-dist/build/pdf.worker.min.mjs");
// pdfjs.GlobalWorkerOptions = pdfjs.GlobalWorkerOptions || {};
// pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

export function useLoadedImage(src: string): HTMLImageElement | null {
  const [loadedImage, setLoadedImage] = useState<HTMLImageElement | null>(null);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setLoadedImage(img);
  }, [src]);

  return loadedImage;
}
export function useRotatedImage(imageUrl: string): string | null {
  const image = useLoadedImage(imageUrl);

  return useMemo(() => {
    if (!image) return null;

    const canvas = document.createElement("canvas");
    canvas.width = image.height;
    canvas.height = image.width;
    const ctx = canvas.getContext("2d")!;
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate((90 * Math.PI) / 180);
    ctx.drawImage(image, -image.width / 2, -image.height / 2);
    return canvas.toDataURL();
  }, [image]);
}

const DEFAULT_PDF_IMAGE = "/images/corrupted.png";
function emptyPDFHandler(dispatch: Dispatch<Action>, errors: _) {
  dispatch(setField({ errorMessage: errors.EMPTY_FILE.message }));
  dispatch(setField({ errorCode: "ERR_EMPTY_FILE" }));
  return DEFAULT_PDF_IMAGE;
}
// i don't know why but when i pass any other file type except images or pdfs this function will cause the application to crash by entering an infinite loop
export const getFileDetailsTooltipContent = async (
  file: File,
  pages: string,
  page: string,
  lang: string,
  dispatch: Dispatch<Action>,
  errors: _
): Promise<string> => {
  const sizeInBytes = file.size;
  let size: string = "";
  let isoCode = lang === "fr" ? "fr-FR" : lang == "" ? "en" : lang;
  size = new Intl.NumberFormat(isoCode, {
    notation: "compact",
    style: "unit",
    unit: "byte",
    unitDisplay: "narrow",
  }).format(sizeInBytes);
  let tooltipContent = "<bdi>" + size;
  if (file.size === 0) {
    emptyPDFHandler(dispatch, errors);
    throw Error("ERROR: FILE_SIZE_ZERO");
  } else {
    if (
      file.type !== "image/png" &&
      file.type !== "image/jpeg" &&
      file.type !== "application/pdf"
    ) {
      return tooltipContent;
    }
    try {
      if (file.type === "image/jpeg" || file.type === "image/png") {
        const image = new Image();
        image.src = URL.createObjectURL(file);
        await new Promise<void>((resolve) => {
          image.onload = () => {
            tooltipContent += `</bdi> - <bdi>${image.width} x ${image.height}</bdi>`;
            resolve();
          };
        });
      } else if (file.type === "application/pdf") {
        const url = URL.createObjectURL(file);
        const pdf = await pdfjs.getDocument(url).promise;

        const pageCount = pdf.numPages || 0;
        if (pageCount === 2 && lang === "ar") {
          tooltipContent += " - صفحتين</bdi>";
        } else {
          tooltipContent += ` - ${
            lang === "ar" && pageCount === 1 ? "" : pageCount + " "
          }${pageCount > 1 ? pages : page}</bdi>`;
        }
        URL.revokeObjectURL(url);
        if (!file.size) {
          emptyPDFHandler(dispatch, errors);
        }
      }
    } catch (e) {
      if (!file.size) {
        emptyPDFHandler(dispatch, errors);
      }
    }
  }

  return tooltipContent;
};
// on password success i want to
export async function getFirstPageAsImage(
  file: File,
  dispatch: Dispatch<Action>,
  errors: _,
  password?: string
): Promise<string> {
  const fileUrl = URL.createObjectURL(file);
  if (!file.size) {
    return emptyPDFHandler(dispatch, errors);
  } else {
    try {
      const loadingTask = pdfjs.getDocument({
        url: fileUrl,
        password: password || undefined,
      });

      // Handle password requests
      loadingTask.onPassword = (updatePassword, reason) => {
        if (reason === pdfjs.PasswordResponses.NEED_PASSWORD) {
          // First time asking for password
          if (password) {
            updatePassword(password);
          } else {
            dispatch(setField({ errorCode: "PASSWORD_REQUIRED" }));
            throw new Error("PASSWORD_REQUIRED");
          }
        } else if (reason === pdfjs.PasswordResponses.INCORRECT_PASSWORD) {
          dispatch(setField({ errorCode: "INCORRECT_PASSWORD" }));
          throw new Error("INCORRECT_PASSWORD");
        }
      };

      const pdf: PDFDocumentProxy = await loadingTask.promise;
      const page = await pdf.getPage(1); // Get the first page

      const scale = 1.5;
      const viewport: PageViewport = page.getViewport({ scale });

      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      if (!context) {
        throw new Error("Canvas context not available.");
      }
      canvas.height = viewport.height;
      canvas.width = viewport.width;

      const renderTask: RenderTask = page.render({
        canvasContext: context,
        viewport: viewport,
      });

      await renderTask.promise;

      // Clean up the object URL
      URL.revokeObjectURL(fileUrl);

      return canvas.toDataURL();
    } catch (error) {
      // Clean up the object URL on error
      URL.revokeObjectURL(fileUrl);

      // Check if it's not password-related error
      if (!error.code) {
        dispatch(setField({ errorMessage: errors.FILE_CORRUPT.message }));
        return DEFAULT_PDF_IMAGE;
      } else {
        const { code } = error;
        if (code === pdfjs.PasswordResponses.NEED_PASSWORD) {
          dispatch(
            setField({
              errorMessage: errors.PASSWORD_REQUIRED.message,
            })
          );
          return "/images/locked.png";
        } else {
          dispatch(
            setField({
              errorMessage: errors.INCORRECT_PASSWORD.message,
            })
          );
          return "/images/locked.png";
        }
      }
    }
  }
}
export const getPlaceHoderImageUrl = (extension: string) => {
  switch (extension) {
    case ".docx":
      return "/images/word.png";
    case ".html":
      return "/images/html.png";
    case ".pptx":
      return "/images/powerpoint.png";
    case ".xlsx":
      return "/images/excel.png";
    default:
      return "images/pdf.png";
  }
};

// a function to check if the extension is .jpg or .pdf:
export const isDraggableExtension = (ext: string, asPath: string) => {
  return ext === ".jpg" || asPath.includes("merge-pdf");
};

type ErrorCode =
  | "NO_FILES_SELECTED"
  | "FILE_CORRUPT"
  | "EMPTY_FILE"
  | "NOT_SUPPORTED_TYPE"
  | "UNKNOWN_ERROR";

export function genericFileValidation(
  file: File | null | undefined,
  contentType: string | string[]
): ErrorCode | null {
  if (!file) return "NO_FILES_SELECTED";

  try {
    if (!file.name) return "FILE_CORRUPT";

    // Check if file is empty
    if (file.size === 0) return "EMPTY_FILE";

    // Normalize allowed content types
    const allowedTypes = Array.isArray(contentType)
      ? contentType
      : [contentType];

    if (!file.type || !allowedTypes.includes(file.type))
      return "NOT_SUPPORTED_TYPE";
  } catch {
    return "UNKNOWN_ERROR";
  }

  return null;
}

interface PDFFile extends Blob {
  name: string;
}

export async function calculatePages(file: PDFFile): Promise<number> {
  const reader = new FileReader();
  reader.readAsArrayBuffer(file);
  return new Promise<number>((resolve, reject) => {
    reader.onload = async (event) => {
      try {
        const typedArray = new Uint8Array(event.target?.result as ArrayBuffer);
        const pdf = await pdfjs.getDocument(typedArray).promise;
        resolve(pdf.numPages);
      } catch (error) {
        reject(error);
      }
    };
  });
}

export async function getNthPageAsImage(
  file: File,
  dispatch: Dispatch<Action>,
  errors: _,
  pageNumber: number
): Promise<string> {
  const fileUrl = URL.createObjectURL(file);
  if (!file.size) {
    return emptyPDFHandler(dispatch, errors);
  } else {
    try {
      const loadingTask = pdfjs.getDocument(fileUrl);
      const pdf: PDFDocumentProxy = await loadingTask.promise;
      const page = await pdf.getPage(pageNumber); // Get the Nth page

      const scale = 1.5;
      const viewport: PageViewport = page.getViewport({ scale });

      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      if (!context) {
        throw new Error("Canvas context not available.");
      }
      canvas.height = viewport.height;
      canvas.width = viewport.width;

      const renderTask: RenderTask = page.render({
        canvasContext: context,
        viewport: viewport,
      });

      await renderTask.promise;

      return canvas.toDataURL();
    } catch (error) {
      // dispatch(setField({ errorMessage: errors.FILE_CORRUPT.message}));

      return DEFAULT_PDF_IMAGE; // Return the placeholder image URL when an error occurs
    }
  }
}

/**
 * Sanitizes a string to be a valid key for both JavaScript objects and Python dictionaries.
 * Produces a Linux filename-friendly string using built-in functions.
 * Ensures consistent behavior across JS and Python.
 *
 * @param input - The string to sanitize
 * @returns A sanitized key safe for both JS and Python
 */
export function sanitizeKey(input: string | number | null | undefined): string {
  // Handle null, undefined, or empty input
  if (input == null || input === "") {
    return "key_empty";
  }

  // Convert to string
  let key = String(input);

  // Normalize unicode by removing diacritics
  key = key.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  // Replace any non-alphanumeric or underscore characters with underscore
  key = key.replace(/[^a-zA-Z0-9_]/g, "_");

  // Remove consecutive underscores
  while (key.includes("__")) {
    key = key.replace(/__/g, "_");
  }

  // Trim leading and trailing underscores
  key = key.replace(/^_+|_+$/g, "");

  // Ensure it doesn't start with a digit
  if (/^\d/.test(key)) {
    key = "key_" + key;
  }

  // Ensure it starts with a valid character (letter or underscore)
  if (key.length > 0 && !/^[a-zA-Z_]/.test(key)) {
    key = "key_" + key;
  }

  // Handle empty result after sanitization
  if (key === "" || key === "_") {
    return "key_sanitized";
  }

  return key;
}

export const ACCEPTED = ".pdf";

// Generalized filter function for file validation
export const filterNewFiles = (
  acceptedFiles: File[],
  existingFiles: File[],
  allowedExtension?: string
): File[] => {
  return acceptedFiles.filter((newFile) => {
    const isDuplicate = existingFiles.some(
      (existingFile) =>
        existingFile.name === newFile.name && existingFile.size === newFile.size
    );
    const hasCorrectExtension = allowedExtension
      ? newFile.name.endsWith(allowedExtension)
      : true;
    return !isDuplicate && hasCorrectExtension;
  });
};

/**
 * Safely unpacks an ArrayBuffer into a typed object
 * @param buffer - The ArrayBuffer to unpack
 * @param encoding - Character encoding (default: 'utf-8')
 * @returns The parsed JSON object or null if parsing fails
 */
export function unpackArrayBuffer<T = any>(
  buffer: ArrayBuffer,
  encoding: string = "utf-8"
): T | null {
  try {
    const decoder = new TextDecoder(encoding);
    const jsonString = decoder.decode(buffer);
    return JSON.parse(jsonString) as T;
  } catch (error) {
    console.error("Failed to unpack ArrayBuffer:", error);
    return null;
  }
}

/**
 * Increases the daily site usage count by a given amount (default = 1).
 * Uses the same "dailySiteUsage" cookie structure as canUseSiteToday().
 *
 * @param amount - How much to increase today's usage by (default 1)
 * @returns The updated usage count for today
 */
export const increaseDailySiteUsage = (amount: number = 1): number => {
  const today = new Date().toISOString().split("T")[0];

  // Read existing usage object
  const usageData = JSON.parse(Cookies.get("dailySiteUsage") || "{}") as Record<
    string,
    number
  >;

  // Increment today's count
  usageData[today] = (usageData[today] || 0) + amount;

  // Save updated usage
  Cookies.set("dailySiteUsage", JSON.stringify(usageData), {
    expires: 1, // expires in 1 day
    path: "/",
  });

  return usageData[today];
};

export const validateFiles = (
  filesToValidate: File[],
  dispatch: Dispatch<Action>,
  errors: _,
  mimetype: "application/pdf"
): { isValid: boolean } => {
  const errorCode =
    filesToValidate
      .map((file) => genericFileValidation(file, mimetype))
      .find((result) => result !== null) || null;
  let tid = null;
  if (errorCode) {
    dispatch(setField({ errorCode }));
    let errMsg = "";

    if (errorCode === "EMPTY_FILE") {
      errMsg = errors.EMPTY_FILE.message;
    } else if (errorCode === "FILE_CORRUPT") {
      errMsg = errors.FILE_CORRUPT.message;
    } else if (errorCode === "NO_FILES_SELECTED") {
      errMsg = errors.NO_FILES_SELECTED.message;
    } else if (errorCode === "NOT_SUPPORTED_TYPE") {
      errMsg = errors.NOT_SUPPORTED_TYPE.message;
    } else if (errorCode === "UNKNOWN_ERROR") {
      errMsg = errors.UNKNOWN_ERROR.message;
    }

    tid = toast(errMsg);

    return { isValid: false };
  }
  if (filesToValidate.length) {
    dispatch(setField({ showTool: false }));
    dispatch(resetErrorMessage());
    toast.dismiss(tid);
    return { isValid: true };
  }

  return { isValid: false };
};
