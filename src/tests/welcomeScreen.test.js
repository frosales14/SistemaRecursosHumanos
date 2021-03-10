import React from "react";
import ReactDOM from "react-dom";
import App from "../components/containers/welcomeScreen";
it("Welcome screen se renderiza sin errores", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});