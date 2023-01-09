import { Circle, Layer, Stage } from "react-konva";
import { useState } from "react";

function LargeStage() {
  const WIDTH = 3000;
  const HEIGHT = 3000;
  // padding will increase the size of stage
  // so scrolling will look smoother
  const PADDING = 500;
  function generateNode() {
    return [...Array(200)].map((_, i) => ({
      id: i.toString(),
      x: Math.random() * WIDTH,
      y: Math.random() * HEIGHT,
    }));
  }
  const initialNodes = generateNode();
  const [circles, setCircles] = useState(initialNodes);
  const [r, setR] = useState(20);
  const handelOnChangeWidth = (e) => {
    setR(e.target.value);
    console.log("r value is:" + e.target.value);
  };
  return (
    <body
      style={{
        margin: 0,
        padding: 0,
        background: "lightblue",
        height: "100vh",
        width: "100vw",
        overflow: "auto",
      }}
    >
      <label> radius : </label>
      <input type={"number"} onChange={handelOnChangeWidth} value={r} />
      <Stage
        // style={{ background: "lightblue" }}
        width={window.innerWidth + PADDING * 2}
        height={window.innerHeight + PADDING * 2}
      >
        <Layer>
          {circles.map((circle) => (
            <Circle
              x={circle.x}
              y={circle.y}
              radius={r}
              fill={"red"}
              stroke={"black"}
              draggable
            />
          ))}
        </Layer>
      </Stage>
    </body>
  );
}

export default LargeStage;
