import "./App.css";
import { useState } from "react";
import Collapse from "./components/Collapse";

function App() {
  const [curState, setCurState] = useState("expandedLabel");
  return (
    <div>
      <button
        className="collapse-btn"
        onClick={() => {
          setCurState(
            curState === "expandedLabel" ? "collapsedLabel" : "expandedLabel"
          );
        }}
      >
        {curState === "expandedLabel" ? "collapse" : "expand"}
      </button>
      <div className="hardcode-height">
        <Collapse curState={curState}>
          <div>Hello!1</div>
          <div>Hello!2</div>
          <div>Hello!3</div>
          <div>Hello!4</div>
          <div>Hello!5</div>
          <div>Hello!6</div>
          <div>Hello!7</div>
        </Collapse>
      </div>
    </div>
  );
}

export default App;
