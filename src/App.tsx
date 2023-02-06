import { useState } from "react";
import "./App.css";

import Lights from "./components/Lights";

function App() {
  let [delay, setDelay] = useState(1);

  return (
    <div className="App">
      <Lights />
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
