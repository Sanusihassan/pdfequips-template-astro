import { useSelector, useDispatch } from "react-redux";
import { setField, type ToolState } from "../../src/store";
import { useFileStore } from "../../src/file-store";
import { useEffect, useRef } from "react";
import type { edit_page } from "../../src/content";

export const CTABtn = ({
  cta,
  centerItem,
}: {
  cta: string;
  centerItem?: boolean;
}) => {
  return (
    <div
      className={`cta-btn mt-2${centerItem ? " row justify-content-center" : ""}`}
    >
      <a
        href="/pricing"
        className="btn btn-primary btn-sm cta-btn"
        target="_blank"
        style={{ fontWeight: "500" }}
      >
        {cta}
      </a>
    </div>
  );
};

export const Options = ({ content }: { content: edit_page["options"] }) => {
  const fileName = useSelector(
    (state: { tool: ToolState }) => state.tool.fileName
  );
  const limitationMsg = useSelector(
    (state: { tool: ToolState }) => state.tool.limitationMsg
  );
  const dispatch = useDispatch();
  const { files } = useFileStore();

  // Track whether we've already set the initial default filename
  const hasSetDefault = useRef(false);

  useEffect(() => {
    if (files.length && !fileName && !hasSetDefault.current) {
      dispatch(setField({ fileName: files[0].name }));
      hasSetDefault.current = true; // ensure we don't reset again
    }
  }, [files, fileName, dispatch, limitationMsg]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setField({ fileName: e.target.value }));
  };

  return (
    <div className="options-form">
      <div className="input-wrapper">
        <label htmlFor="fileNameInput" className="label">
          {content.label}
        </label>
        <input
          type="text"
          className="input"
          id="fileNameInput"
          placeholder={content.placeholder}
          value={fileName}
          onChange={handleChange}
        />
        <div className="helper-text">{content.helperText}</div>
      </div>
      {/* Show alert if limitationMsg is set */}
      {limitationMsg ? (
        <div className="mt-3 alert alert-info mb-3" role="alert">
          {limitationMsg}
          <CTABtn cta={content.cta} />
        </div>
      ) : null}
    </div>
  );
};
