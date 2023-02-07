import { useState } from "react";
import "./App.css";

import Lights from "./components/Lights";
import Speed from "./components/Speed";
import Svg from "./components/SVG";

function App() {
  let [speed, setSpeed] = useState(3);

  function handleSpeedChange() {
    console.log("test");
  }

  return (
    <div className="App">
      <Speed handleSpeedChange={handleSpeedChange} />
      <Lights speed={speed} />
      <Svg />
    </div>
  );
}

export default App;

const styles = {
  wrapper: {
    backgroundColor: "red",
    borderRadius: "50px",
    height: "100px",
    width: "100px",
  },
};
