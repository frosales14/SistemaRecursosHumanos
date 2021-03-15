import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
    Router,
    Switch,
    Redirect,
    Route,
    BrowserRouter,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import {
    WelcomeScreen,
    Login,
    Puestos,
    Registro,
    AdminInterface,
    ListaAplicantes,
    CrearVacantes,
    Nosotros,
    Cuestionario,
    PageNotFound,
} from '../containers';
import { PrivateRoute } from './privateRoutes';

const browserHistory = createBrowserHistory();

const AppRoutes = () => {
    const loadRoutes = () => {
        return (
            <Switch>
                <Route exact path="/" component={WelcomeScreen} />
                <Route path="/login" component={Login} />
                <Route path="/puestos" component={Puestos} />
                <Route path="/registro" component={Registro} />
                <Route path="/nosotros" component={Nosotros} />
                <Route path="/cuestionario" component={Cuestionario} />
                <PrivateRoute
                    exact
                    path="/admin-interface"
                    component={AdminInterface}
                />
                <PrivateRoute
                    exact
                    path="/lista-aplicantes"
                    component={ListaAplicantes}
                />
                <PrivateRoute
                    exact
                    path="/creacion-vacantes"
                    component={CrearVacantes}
                />
                <Route component={PageNotFound} />
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
