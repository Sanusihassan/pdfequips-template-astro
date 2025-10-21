import DisplayFile from "./DisplayFile";
import { useEffect } from "react";
import type { edit_page } from "../src/content";
import ErrorElement from "./ErrorElement";
import type { errors as _ } from "../src/content";
import { CogIcon } from "@heroicons/react/outline";
import { useDispatch, useSelector } from "react-redux";
import { type ToolState, resetErrorMessage, setField } from "../src/store";
import { useFileStore } from "../src/file-store";
import AddMoreButton from "./EditArea/AddMoreButton";
import { SubmitBtn } from "./EditArea/SubmitBtn";
import { Options } from "./DisplayFile/Options";

type editPageProps = {
  extension: string;
  edit_page: edit_page;
  pages: string;
  page: string;
  lang: string;
  errors: _;
  path: string;
  drop_files: string;
};

const EditPage = ({
  extension,
  edit_page,
  pages,
  page,
  lang,
  errors,
  path,
  drop_files,
}: editPageProps) => {
  // state variables
  const errorCode = useSelector(
    (state: { tool: ToolState }) => state.tool.errorCode
  );
  const showTool = useSelector(
    (state: { tool: ToolState }) => state.tool.showTool
  );
  const showDownloadBtn = useSelector(
    (state: { tool: ToolState }) => state.tool.showDownloadBtn
  );
  const showOptions = useSelector(
    (state: { tool: ToolState }) => state.tool.showOptions
  );
  const dispatch = useDispatch();
  // actual files;
  const { files, fileInput } = useFileStore();
  useEffect(() => {
    if (errorCode == "ERR_NO_FILES_SELECTED" && files.length > 0) {
      dispatch(resetErrorMessage());
    }
  }, []);
  return (
    <aside
      className={`edit-page ${showTool || showDownloadBtn ? "d-none" : ""}`}
    >
      <section className="edit-area position-relative">
        <DisplayFile
          extension={extension}
          pages={pages}
          page={page}
          lang={lang}
          errors={errors}
          drop_files={drop_files}
          edit_page={edit_page}
        />
        <ErrorElement cta={edit_page.options.cta} />
        <AddMoreButton
          onClick={() => {
            if (fileInput) {
              fileInput?.current?.click();
            }
          }}
          lang={lang}
          path={path}
          text={edit_page.add_more_button}
        />
        <button
          className="gear-button btn btn-light"
          onClick={() => {
            dispatch(setField({ showOptions: !showOptions }));
          }}
        >
          <CogIcon className="w-6 h-6 me-2 gear-icon" />
        </button>
      </section>
      <section className={`options bg-white ${showOptions ? " expanded" : ""}`}>
        <h5 className="text-uppercase grid-header">
          <bdi>
            {
              edit_page.edit_page_titles[
                path.replace(
                  /-/g,
                  "_"
                ) as keyof typeof edit_page.edit_page_titles
              ]
            }
          </bdi>
        </h5>
        <Options content={edit_page.options} />
        <div className="hide-onsmall">
          <SubmitBtn k={path} edit_page={edit_page} errors={errors} />
        </div>
      </section>
      <div className="show-onsmall">
        <SubmitBtn k={path} edit_page={edit_page} errors={errors} />
      </div>
    </aside>
  );
};

export default EditPage;
