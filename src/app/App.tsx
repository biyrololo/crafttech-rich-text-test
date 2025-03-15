import { useRef, useState } from "react";
import Canvas from "@/widgets/canvas/Canvas";
import {Control, Tool} from "@/widgets/control";

function App() {
  const [tool, setTool] = useState<Tool>("cursor");
  const stageRef = useRef(null);
  return (
    <>
      <Canvas tool={tool} stageRef={stageRef} />
      <Control tool={tool} setTool={setTool} />
    </>
  );
}

export default App;
