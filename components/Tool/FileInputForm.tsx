import React, { useEffect, useRef, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
// store
import type { ToolState } from "../../src/store";
import { handleUpload } from "../../src/handlers/handleUpload";
import { handleChange } from "../../src/handlers/handleChange";
import { useFileStore } from "../../src/file-store";
// types
import type { tools } from "../../src/content";
import { getUserInfo } from "fetch-subscription-status";
import Loading from "../Loading";
type AcceptedFileTypes = {
  [key in ".pdf" | ".pptx" | ".docx" | ".xlsx" | ".jpg" | ".html"]: string;
};
interface FileInputFormProps {
  data: {
    type: string;
    to: string;
  };
  acceptedFileTypes: AcceptedFileTypes;
  errors: any;
  lang: string;
  tools: tools;
}
export const FileInputForm: React.FC<FileInputFormProps> = ({
  data,
  acceptedFileTypes,
  errors,
  lang,
  tools,
}) => {
  const path = data.to.replace("/", "");
  const errorMessage = useSelector(
    (state: { tool: ToolState }) => state.tool.errorMessage
  );
  const fileName = useSelector(
    (state: { tool: ToolState }) => state.tool.fileName
  );
  const rotations = useSelector(
    (state: { tool: ToolState }) => state.tool.rotations
  );
  const passwords = useSelector(
    (state: { tool: ToolState }) => state.tool.passwords
  );
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  // file store
  const { files, setFiles, setFileInput, setDownloadBtn, setSubmitBtn } =
    useFileStore();
  // refs
  const fileInput = useRef<HTMLInputElement>(null);
  const submitBtn = useRef<HTMLButtonElement>(null);
  const downloadBtn = useRef<HTMLAnchorElement>(null);
  const [userId, setUserId] = useState<string | null>(null);
  useEffect(() => {
    (async () => {
      const user = await getUserInfo();
      setUserId(user?.id || null);
      setLoaded(true);
    })();
    setFileInput(fileInput);
    setSubmitBtn(submitBtn);
    setDownloadBtn(downloadBtn);
  }, []);
  return (
    <form
      onClick={(e) => {
        e.stopPropagation();
      }}
      onSubmit={(e) =>
        handleUpload(
          e,
          downloadBtn,
          dispatch,
          {
            path,
            errorMessage,
            fileName,
            rotations,
            userId,
            passwords,
          },
          files,
          errors
        )
      }
      method="POST"
      encType="multipart/form-data"
    >
      <div
        className={`upload-btn ${path}`}
        onClick={(e) => {
          e.stopPropagation();
        }}
        role="button"
      >
        {lang == "ar" ? (
          <bdi>
            {tools.select} {tools.files}
            <span className="text-uppercase">
              {data.type.replace(".", "")}
            </span>{" "}
          </bdi>
        ) : (
          <bdi>
            {tools.select}{" "}
            <span className="text-uppercase">{data.type.replace(".", "")}</span>{" "}
            {tools.files}
          </bdi>
        )}
        <Loading theme={data.to.replace("/", "")} show={!loaded} />
        <input
          type="file"
          name="files"
          accept={
            acceptedFileTypes[data.type as keyof typeof acceptedFileTypes]
          }
          multiple={path !== "split-pdf" && path !== "pdf-to-pdf-a"}
          ref={fileInput}
          className="position-absolute file-input"
          onClick={(e) => {
            e.stopPropagation();
          }}
          onChange={(e) => {
            handleChange(e, dispatch, setFiles, errors, files);
          }}
        />
      </div>
      <a
        href=""
        className="d-none"
        ref={downloadBtn}
        download="__output.pdf"
      ></a>
      {/* <div className="my-4">
          </div> */}
      <button type="submit" ref={submitBtn} className="d-none">
        submit
      </button>
    </form>
  );
};
