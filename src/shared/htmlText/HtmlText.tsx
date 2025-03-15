import { forwardRef } from "react";
import { Figure } from "../shape";

const HtmlText = forwardRef<HTMLDivElement, Pick<Figure, 'html' | 'id'>>(({ html, id }, ref) => {
  return (
    <div
      id={`htmltext_${id}`}
      dangerouslySetInnerHTML={{ __html: html }}
      style={{
        position: "fixed",
        overflow: "hidden",
        left: "100000px",
        top: "100000px",
      }}
      ref={ref}
    ></div>
  );
});

export default HtmlText;
