import html2canvas from "html2canvas";
import Konva from "konva";
import { useCallback, useEffect, useRef, useState } from "react";
import { Group, Rect } from "react-konva";
import { Html } from "react-konva-utils";
import HtmlText from "../htmlText/HtmlText";
import { MarkdownEditor, MarkdownPreview } from "@/shared/markdown";
import { Figure } from "./types";
import { Tool } from "@/widgets/control";
import { Group as GroupType } from "konva/lib/Group";
import { Image } from "konva/lib/shapes/Image";
import { Stage } from "konva/lib/Stage";

const Shape = (props: Figure & {tool: Tool} & {stageRef: React.LegacyRef<Stage> | undefined}) => {
  const { x, y, width, height, tool, html, id, text } = props;
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(text);

  const groupRef = useRef<GroupType>(null);
  const imageRef = useRef<Image>();
  const htmlRef = useRef<HTMLDivElement>(null);
  const renderImage = useCallback(async () => {
    const htmltext = document.getElementById(`htmltext_${id}`);
    if (htmltext) {
      const innerhtml = htmltext.innerHTML;
      if (innerhtml) {
        const canvas = await html2canvas(htmltext, {
          backgroundColor: "rgba(0,0,0,0)",
        });
        const shape = new Konva.Image({
          x: 0,
          y: height / 2,
          scaleX: 1 / window.devicePixelRatio,
          scaleY: 1 / window.devicePixelRatio,
          image: canvas,
        });
        groupRef.current?.add(shape);
        imageRef.current = shape;
      } else return;
    } else return;
  }, [id, height]);

  useEffect(() => {
    renderImage();
  }, [renderImage]);

  const handleClick = () => {
    if (tool === "shape") {
      return;
    } else {
      setIsEditing((prev) => !prev);
      if (imageRef.current) {
        if (isEditing) {
          imageRef.current.show();
        } else {
          imageRef.current.hide();
        }
      } else return;
    }
  };

  return (
    <>
      <Group x={x} y={y} onClick={handleClick} ref={groupRef} draggable={tool === 'cursor'}>
        <Rect stroke={"black"} width={width} height={height} />
        {isEditing ? (
          <Html divProps={{style: {marginTop: '10px'}}}>
            <MarkdownEditor
              value={value}
              onChange={setValue}
            />
          </Html>
        ): (
          <Html>
            <MarkdownPreview
            value={value}
            />
          </Html>
        )}
      </Group>
      <Html>
        <HtmlText ref={htmlRef} html={html} id={id} 
        />
      </Html>
    </>
  );
};

export default Shape;
