import * as React from "react";
import { render } from "react-dom";

import "./styles.scss";

function App() {
  return (
    <div className="App">
      <div className="metric">
        <div className="metric__label">Metric label</div>
        <div className="metric__wrapper">
          <div className="metric__value">8</div>
          <div className="metric__sub-value">88</div>
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
