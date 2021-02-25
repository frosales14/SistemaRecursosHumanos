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
import { WelcomeScreen, Login, Puestos } from '../containers';
import useToken from '../components/hooks/useToken';

const browserHistory = createBrowserHistory();

const AppRoutes = () => {
    const loadRoutes = () => {
        return (
            <Switch>
                <Route exact path="/" component={WelcomeScreen} />
                <Route path="/login" component={Login} />
                <Route path="/puestos" component={Puestos} />
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
