import { useSelector } from "react-redux";
import { setField, type ToolState } from "../src/store";
import { DownloadIcon, ArrowLeftIcon } from "@heroicons/react/solid";
import { useDispatch } from "react-redux";
import { Tooltip } from "react-tooltip";
import type { downloadFile } from "../src/content";
import { useEffect } from "react";
import { useFileStore } from "../src/file-store";
import { increaseDailySiteUsage } from "../src/utils";
const DownloadFile = ({
  lang,
  downloadFile,
  path,
}: {
  lang: string;
  downloadFile: downloadFile;
  path: string;
}) => {
  const { files, downloadBtn } = useFileStore();
  const dispatch = useDispatch();
  const showDownloadBtn = useSelector(
    (state: { tool: ToolState }) => state.tool.showDownloadBtn
  );
  const subscriptionStatus = useSelector(
    (state: { tool: ToolState }) => state.tool.subscriptionStatus
  );
  useEffect(() => {}, [downloadFile, showDownloadBtn]);
  return (
    <div className={`download-page${showDownloadBtn ? " d-flex" : " d-none"}`}>
      <h3 className="text-center mb-4">
        <bdi>
          {downloadFile.titles &&
            downloadFile.titles[path as keyof typeof downloadFile.titles] &&
            downloadFile.titles[path as keyof typeof downloadFile.titles][
              files && files.length > 1 ? 0 : 1
            ]}
        </bdi>
      </h3>
      <div className="download-btn-container">
        <button
          className={`back-btn`}
          style={lang == "ar" ? { order: 1 } : {}}
          data-tooltip-content={
            downloadFile.backto[path as keyof typeof downloadFile.backto]
          }
          data-tooltip-id="download-btn-tooltip"
          data-tooltip-place="left"
          onClick={() => {
            dispatch(setField({ showDownloadBtn: false }));
          }}
        >
          <ArrowLeftIcon className="icon" />
          <Tooltip id="download-btn-tooltip" />
        </button>
        <button
          className={`download-btn ${path}`}
          onClick={() => {
            if (downloadBtn?.current) {
              downloadBtn.current.click();
            }
            if (!subscriptionStatus) {
              increaseDailySiteUsage();
            }
          }}
        >
          <DownloadIcon className="icon text-white mr-2" />
          <bdi>
            {downloadFile.btnText &&
              downloadFile.btnText[path as keyof typeof downloadFile.btnText] &&
              downloadFile.btnText[path as keyof typeof downloadFile.btnText][
                files && files.length > 1 ? 0 : 1
              ]}
          </bdi>
        </button>
      </div>
    </div>
  );
};

export default DownloadFile;
