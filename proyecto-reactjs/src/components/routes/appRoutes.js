import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Router, Switch, Redirect, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

//import { WelcomeScreen } from '../containers';
//import { Puestos } from "../containers";
import { Registro } from "../containers";

const browserHistory = createBrowserHistory();

const AppRoutes = () => {
  const loadRoutes = () => {
    return (
      <Switch>
        {/* <Route path="/" component={WelcomeScreen} /> */}
        {/* <Route path="/" component={Puestos} /> */}
        <Route path="/" component={Registro} />
      </Switch>
    );
  };

  return (
    <Router history={browserHistory}>
      <CssBaseline />
      {loadRoutes()}
    </Router>
  );
};

export default AppRoutes;
