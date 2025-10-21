import { ExclamationCircleIcon } from "@heroicons/react/solid";
// import { ToolStoreContext } from "../ToolStoreContext";
import { useSelector } from "react-redux";
import type { ToolState } from "../src/store";
import { CTABtn } from "./DisplayFile/Options";

const ErrorElement = ({ cta }: { cta: string }) => {
  const errorMessage = useSelector(
    (state: { tool: ToolState }) => state.tool.errorMessage
  );
  const errorCode = useSelector(
    (state: { tool: ToolState }) => state.tool.errorCode
  );
  return (
    <>
      <div
        style={{
          display: errorMessage.length ? "block" : "none",
        }}
        className="error-element alert alert-danger text-center mt-3"
        role="alert"
      >
        <ExclamationCircleIcon
          className="w-5 h-5 hide-on-ltr"
          viewBox="0 0 22 22"
        />{" "}
        <bdi className="d-inline-flex">{errorMessage}</bdi>{" "}
        <ExclamationCircleIcon
          className="w-5 h-5 hide-on-rtl"
          viewBox="0 0 22 22"
        />
      </div>
      {errorCode === "MAX_DAILY_USAGE" ? (
        <CTABtn cta={cta} centerItem={true} />
      ) : null}
    </>
  );
};

export default ErrorElement;
