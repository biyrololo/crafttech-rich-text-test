import { useState } from "react";
import { Layer, Stage } from "react-konva";
import Shape from "../../shared/shape/Shape";
import { CanvasProps } from "./types";
import { Figure } from "@/shared/shape";
import { KonvaEventObject, Node, NodeConfig } from "konva/lib/Node";

const Canvas = ({ tool, stageRef }: CanvasProps) => {
  const [figures, setFigures] = useState<Figure[]>([]);

  const handleOnClick = (e: KonvaEventObject<MouseEvent, Node<NodeConfig>>) => {
    if (tool === "cursor") return;
    const stage = e.target.getStage();
    if(!stage) return;
    const stageOffset = stage.absolutePosition();
    const point = stage.getPointerPosition();
    if(!point) return;
    setFigures((prev: Figure[]) => [
      ...prev,
      {
        id: Date.now().toString(36),
        width: 100,
        height: 100,
        type: "rect",
        x: point.x - stageOffset.x,
        y: point.y - stageOffset.y,
        html: "",
        text: "",
      },
    ]);
  };

  return (
    <Stage
      width={window.innerWidth}
      height={window.innerHeight}
      draggable={tool === "cursor"}
      onClick={handleOnClick}
      ref={stageRef}
    >
      <Layer>
        {figures.map((figure: Figure, i: number) => {
          return <Shape key={i} {...figure} stageRef={stageRef} tool={tool} />;
        })}
      </Layer>
    </Stage>
  );
};

export default Canvas;
