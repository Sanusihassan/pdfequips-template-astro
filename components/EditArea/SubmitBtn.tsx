import { Spinner } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useFileStore } from "../../src/file-store";
import { type ToolState, setField } from "../../src/store";
import type { edit_page, errors } from "../../src/content";
import { canUseSiteToday } from "fetch-subscription-status";
export function SubmitBtn({
  k,
  edit_page,
  errors,
}: {
  k: string;
  edit_page: edit_page;
  errors: errors;
}): JSX.Element {
  const dispatch = useDispatch();
  const { submitBtn, files } = useFileStore();
  // state variables:
  const errorMessage = useSelector(
    (state: { tool: ToolState }) => state.tool.errorMessage
  );
  const isSubmitted = useSelector(
    (state: { tool: ToolState }) => state.tool.isSubmitted
  );
  const limitationMsg = useSelector(
    (state: { tool: ToolState }) => state.tool.limitationMsg
  );
  const subscriptionStatus = useSelector(
    (state: { tool: ToolState }) => state.tool.subscriptionStatus
  );
  return (
    <button
      className={`submit-btn btn btn-lg text-white position-relative overflow-hidden ${k} grid-footer`}
      onClick={() => {
        dispatch(setField({ isSubmitted: true }));
        dispatch(setField({ showOptions: false }));

        if (subscriptionStatus) {
          submitBtn?.current?.click();
        } else if (!subscriptionStatus && canUseSiteToday(10)) {
          submitBtn?.current?.click();
        } else {
          dispatch(
            setField({
              errorCode: "MAX_DAILY_USAGE",
            })
          );
          dispatch(setField({ errorMessage: errors.MAX_DAILY_USAGE.message }));
          dispatch(
            setField({
              isSubmitted: false,
            })
          );
        }
      }}
      disabled={
        errorMessage.length > 0 || files.length <= 1 || limitationMsg.length > 0
      }
    >
      <bdi>
        {
          edit_page.action_buttons[
            k.replace(/-/g, "_") as keyof typeof edit_page.action_buttons
          ]
        }
      </bdi>{" "}
      {isSubmitted ? (
        <Spinner as="span" animation="grow" role="status" aria-hidden="true" />
      ) : null}
    </button>
  );
}
