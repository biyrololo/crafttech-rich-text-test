import { Tool } from "@/widgets/control";
import { Stage } from "konva/lib/Stage";

export interface CanvasProps {
    tool: Tool;
    stageRef: React.LegacyRef<Stage> | undefined
}