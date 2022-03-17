import React from 'react';
import { Route } from 'react-router-dom';
import { useAccessRouteHook } from './AccessRoute.hooks';
import { Props } from './AccessRoute.types';

export const AccessRoute: React.FC<Props> = ({
    requiredRole,
    ...routeProps
}) => {
    useAccessRouteHook(routeProps);

    return (
        <Route {...routeProps} />
    )
}