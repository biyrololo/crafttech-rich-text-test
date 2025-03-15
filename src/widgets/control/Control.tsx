import { ControlProps, isTool } from "./types";

const Control = ({ tool, setTool }: ControlProps) => {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(isTool(e.target.value)){
      setTool(e.target.value)
    }
  };

  return (
    <div style={{ position: "absolute", top: 0 }}>
      <div>
        <input
          type="radio"
          id="cursor"
          name="control"
          value="cursor"
          checked={tool === "cursor"}
          onChange={handleOnChange}
        />
        <label htmlFor="cursor">Взаимодействие</label>
      </div>

      <div>
        <input
          type="radio"
          id="shape"
          name="control"
          value="shape"
          checked={tool === "shape"}
          onChange={handleOnChange}
        />
        <label htmlFor="shape">Добавление</label>
      </div>
    </div>
  );
};

export default Control;
