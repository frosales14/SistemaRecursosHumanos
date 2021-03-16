import React from "react";
import ReactDOM from "react-dom";
import Registro from "../components/containers/welcomeScreen";
it("Vista de registro se renderiza sin errores", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Registro></Registro>, div);
  ReactDOM.unmountComponentAtNode(div);
});
