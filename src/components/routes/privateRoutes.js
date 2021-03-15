import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, ...rest }) => {
    const userSession = JSON.parse(localStorage.getItem('userSession'));
    return (
        <Route
            {...rest}
            render={(props) =>
                userSession !== null ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: '/404',
                            state: { from: props.location },
                        }}
                    />
                )
            }
        />
    );
};
