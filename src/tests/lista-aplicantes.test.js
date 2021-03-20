import React from "react";
import ReactDOM from "react-dom";
import Aplicantes from "../components/containers/lista-aplicantes";
it("Welcome screen se renderiza sin errores", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Aplicantes></Aplicantes>, div);
  ReactDOM.unmountComponentAtNode(div);
});
