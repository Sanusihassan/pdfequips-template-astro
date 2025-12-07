import { useSelector } from "react-redux";
import { type ToolState } from "../src/store";
import { MdOutlineMoneyOffCsred } from "react-icons/md";
import RobustIcon from "./icons/Robust";
import { CiLock } from "react-icons/ci";

export const Features = ({
  features,
}: {
  features: { title: string; description: string }[];
}) => {
  const stateShowTool = useSelector(
    (state: { tool: ToolState }) => state.tool.showTool
  );
  const icons = [MdOutlineMoneyOffCsred, RobustIcon, CiLock];
  return (
    <div className={`features${stateShowTool ? "" : " d-none"}`}>
      {features.map(({ title, description }, i) => {
        const Icon = icons[i];
        return (
          <div className="feature" key={i}>
            <Icon className={`feature-icon${i === 2 ? " no-fill" : ""}`} />
            <div className="title">{title}</div>
            <p className="description">{description}</p>
          </div>
        );
      })}
    </div>
  );
};
