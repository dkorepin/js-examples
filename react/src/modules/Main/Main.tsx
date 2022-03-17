import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import { ERoute, routes } from '../../utils';
import { AccessRoute } from './components/AccessRoute/AccessRoute';
import { AppRoot } from './components/AppRoot/AppRoot';
import './Main.css';

export const Main: React.FC = () => {

    return (
        <Router>
            <Switch>
                <Route
                    path={ERoute.APP}
                    component={() => <AppRoot />}
                    exact
                />
                {routes.map((route, index) => (
                    <AccessRoute
                        key={index}
                        path={route.path}
                        component={route.main}
                    />
                ))}
            </Switch>
        </Router>
    )
}