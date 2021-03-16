import React from "react";
import ReactDOM from "react-dom";
import Nosotros from "../components/containers/nosotros";
it("Vista de misión y visión se renderiza sin errores", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Nosotros></Nosotros>, div);
  ReactDOM.unmountComponentAtNode(div);
});
