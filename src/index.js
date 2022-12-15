import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Stage, Layer, Circle } from "react-konva";
const App = () => {
  const [r, setR] = useState(0);
  const handelOnChangeWidth = (e) => {
    setR(e.target.value);
    console.log("r value is:" + e.target.value);
  };
  return (
    <>
      <label> radius : </label>
      <input type={"number"} onChange={handelOnChangeWidth} value={r} />
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Circle
            x={window.innerWidth / 2}
            y={window.innerHeight / 2}
            radius={r / 0.0264583333}
            fill="red"
            shadowBlur={5}
          />
        </Layer>
      </Stage>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
