import { useEffect, useState } from "react";
import "react-tooltip/dist/react-tooltip.css";
import type { errors as _, edit_page } from "../src/content";
import Files from "./DisplayFile/Files";
type propTypes = {
  extension: string;
  pages: string;
  page: string;
  lang: string;
  errors: _;
  edit_page: edit_page;
  drop_files: string;
};

const DisplayFile = ({
  extension,
  pages,
  page,
  lang,
  errors,
  edit_page,
  drop_files,
}: propTypes) => {
  const [toolTipSizes, setToolTipSizes] = useState<string[]>([]);

  useEffect(() => {
    // const isValid = validateFiles(files, extension, errors, dispatch, {
    //   path: statePath,
    // });
    // if (isValid) {
    //   dispatch(resetErrorMessage());
    // }
  }, [extension]);

  return (
    <>
      <Files
        errors={errors}
        extension={extension}
        setToolTipSizes={setToolTipSizes}
        toolTipSizes={toolTipSizes}
        loader_text={edit_page.loader_text}
        drop_files={drop_files}
        fileDetailProps={[pages, page, lang]}
      />
    </>
  );
};

export default DisplayFile;
