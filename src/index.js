import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { Stage, Layer, Circle } from "react-konva";
import EmulateScreenMoving from "./EmulateScreenMoving";
import LargeStage from "./LargeStage";

const App = () => {
  //choose unit
  // 1cm --> 37.8 pixel
  // 1mm --> 3.78 pixel
  // 1 inch --> 96 pixel
  let factor;
  const [type, setType] = useState("pixel");
  switch (type) {
    case "centimeter":
      factor = 37.8;
      break;
    case "millimeter":
      factor = 3.78;
      break;
    case "inch":
      factor = 96;
      break;
    default:
      factor = 1;
  }
  const [r, setR] = useState(20);
  useEffect(() => {
    setR(r * factor);
  }, [factor, type]);
  const handelOnChangeRadius = (e) => {
    setR(Number(e.target.value));
    // console.log("r value is:" + typeof Number(e.target.value));
  };
  const handelSelect = (e) => {
    setType(e.target.value);
  };
  return (
    <>
      {/*<LargeStage />*/}
      {/*<EmulateScreenMoving />*/}
      <label>choose an unit </label>
      <select value={type} onChange={handelSelect}>
        <option value="centimeter">centimeter</option>
        <option value="millimeter">millimeter</option>
        <option value="pixel">pixel</option>
        <option value="inch">inch</option>
      </select>
      <label> radius : </label>
      <input type={"number"} onChange={handelOnChangeRadius} value={r} />
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Circle
            x={window.innerWidth / 2}
            y={window.innerHeight / 2}
            radius={r}
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
