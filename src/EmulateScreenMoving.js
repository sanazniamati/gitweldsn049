import { Circle, Layer, Stage } from "react-konva";
import { useRef, useState } from "react";
import "./style.css";
function EmulateScreenMoving() {
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
  const stageRef = useRef();
  var scrollContainer = document.getElementById("scroll-container");

  const repositionStage = () => {
    var dx = scrollContainer.scrollLeft - PADDING;
    var dy = scrollContainer.scrollTop - PADDING;
    stageRef.current.container().style.transform =
      "translate(" + dx + "px, " + dy + "px)";
    stageRef.x(-dx);
    stageRef.y(-dy);
  };
  return (
    <>
      <label> radius : </label>
      <input type={"number"} onChange={handelOnChangeWidth} value={r} />
      <div id="scroll-container">
        <div id="large-container">
          <body id="container">
            <Stage
              ref={stageRef}
              style={{ background: "lightblue" }}
              width={window.innerWidth + PADDING * 2}
              height={window.innerHeight + PADDING * 2}
              onScroll={repositionStage}
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
        </div>
      </div>
    </>
  );
}

export default EmulateScreenMoving;
