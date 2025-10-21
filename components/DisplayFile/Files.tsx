import { type Dispatch, type SetStateAction, useEffect, useState } from "react";
import type { errors as _ } from "../../src/content";
import FileCard from "./FileCard";
import {
  DragDropContext,
  Droppable,
  Draggable,
  type DropResult,
} from "react-beautiful-dnd";
import {
  ACCEPTED,
  calculatePages,
  filterNewFiles,
  isDraggableExtension,
} from "../../src/utils";
import { useFileStore } from "../../src/file-store";
import { useDispatch } from "react-redux";
import { setField, type ToolState } from "../../src/store";
import { useSelector } from "react-redux";
import { fetchSubscriptionStatus } from "fetch-subscription-status";
// import { fetchSubscriptionStatus } from "fetch-subscription-status";

type FileProps = {
  errors: _;
  extension: string;
  toolTipSizes: string[];
  setToolTipSizes: Dispatch<SetStateAction<string[]>>;
  loader_text: string;
  fileDetailProps: [string, string, string];
  drop_files: string;
};

const Files = ({
  errors,
  extension,
  loader_text,
  fileDetailProps,
  drop_files,
}: FileProps) => {
  const { files, setFiles } = useFileStore();
  const dispatch = useDispatch();
  const [isDraggingFiles, setIsDraggingFiles] = useState(false);
  const subscriptionStatus = useSelector(
    (state: { tool: ToolState }) => state.tool.subscriptionStatus
  );
  let pageCounts = [];

  useEffect(() => {
    let limitationMsg = "";
    (async () => {
      const isSubscribed =
        subscriptionStatus === null
          ? await fetchSubscriptionStatus()
          : subscriptionStatus;
      if (isSubscribed) {
        return;
      }
      pageCounts = await Promise.all(files.map(calculatePages));
      const totalPages = pageCounts.reduce((sum, count) => sum + count, 0);
      if (files.length >= 50) {
        limitationMsg = errors.alerts.maxFiles;
      } else if (totalPages > 1500) {
        limitationMsg = errors.alerts.totalPages;
      } else if (pageCounts.some((pageCount) => pageCount > 500)) {
        limitationMsg = errors.alerts.perFilePages;
      } else if (files.some((file) => file.size > 50 * 1024 * 1024)) {
        limitationMsg = errors.alerts.fileSize;
      }

      dispatch(setField({ limitationMsg }));
    })();
  }, [files]);

  const reorderFiles = (
    files: File[],
    startIndex: number,
    endIndex: number
  ): File[] => {
    const result = Array.from(files);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return;
    }

    const updatedFiles = reorderFiles(
      files,
      result.source.index,
      result.destination.index
    );
    setFiles(updatedFiles);
  };

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();

    // Check if dragging files from outside (not internal drag from react-beautiful-dnd)
    if (e.dataTransfer.types.includes("Files")) {
      setIsDraggingFiles(true);
    }
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();

    // Only hide overlay if leaving the main container
    if (e.currentTarget === e.target) {
      setIsDraggingFiles(false);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDraggingFiles(false);

    const droppedFiles = Array.from(e.dataTransfer.files);
    const newFiles = filterNewFiles(droppedFiles, files, ACCEPTED);
    setFiles([...files, ...newFiles]);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      const newFiles = filterNewFiles(selectedFiles, files, ACCEPTED);
      setFiles([...files, ...newFiles]);
    }
  };

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <div
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          style={{ position: "relative" }}
        >
          {isDraggingFiles && (
            <div className="overlay display-4">{drop_files}</div>
          )}

          {files.length === 0 && (
            <label
              htmlFor="file-input"
              style={{
                display: "block",
                padding: "2rem",
                cursor: "pointer",
                textAlign: "center",
              }}
            >
              <input
                id="file-input"
                type="file"
                multiple
                accept={extension || "*"}
                onChange={handleFileInput}
                style={{ display: "none" }}
              />
              {drop_files}
            </label>
          )}

          <Droppable droppableId="imageUrls" direction="horizontal">
            {(provided, snapshot) => (
              <div
                className={`display-file ${
                  snapshot.isDraggingOver ? "dragging-over" : ""
                }`}
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {files.map((file, index) => (
                  <Draggable
                    key={file.name}
                    draggableId={file.name}
                    index={index}
                    isDragDisabled={
                      !isDraggableExtension(extension, "merge-pdf")
                    }
                  >
                    {(provided, snapshot) => (
                      <div
                        {...provided.draggableProps}
                        ref={provided.innerRef}
                        className={`drag-element ${
                          snapshot.isDragging ? "dragging" : ""
                        }`}
                        style={{
                          ...provided.draggableProps.style,
                        }}
                      >
                        <FileCard
                          extension={extension}
                          file={file}
                          index={index}
                          isDraggable={isDraggableExtension(
                            extension,
                            "merge-pdf"
                          )}
                          provided={provided}
                          snapshot={snapshot}
                          errors={errors}
                          loader_text={loader_text}
                          fileDetailProps={fileDetailProps}
                        />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </DragDropContext>
    </>
  );
};

export default Files;
