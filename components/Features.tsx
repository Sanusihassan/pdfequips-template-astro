import { useSelector } from "react-redux";
import { type ToolState } from "../src/store";
import EfficientCombinationIcon from "./icons/EfficientCombinationIcon";
import { LuLayoutDashboard } from "react-icons/lu";
import EasyIcon from "./icons/EasyIcon";

export const Features = ({ features }: {
    features: { title: string; description: string }[];
}) => {
    const stateShowTool = useSelector(
        (state: { tool: ToolState }) => state.tool.showTool
    );
    const icons = [EfficientCombinationIcon, LuLayoutDashboard, EasyIcon]
    return (
        <div className={`features${stateShowTool ? "" : " d-none"}`}>
            {features.map(({ title, description }, i) => {
                const Icon = icons[i];
                return (
                    <div className="feature">
                        <Icon className={`feature-icon${i === 1 ? " no-fill" : ""}`} />
                        <div className="title">{title}</div>
                        <p className="description">{description}</p>
                    </div>
                )
            })}
        </div>
    )
}