import React, { useEffect } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

interface LoadingProps {
  theme?: string;
  show: boolean;
}

const Loading = ({ theme, show }: LoadingProps) => {
  useEffect(() => {
    console.log("loaded", show);
  }, []);
  return (
    <div className={`app-loading-container${show ? " show" : ""}`}>
      <AiOutlineLoading3Quarters className={`loading-icon ${theme}`} />
    </div>
  );
};

export default Loading;
