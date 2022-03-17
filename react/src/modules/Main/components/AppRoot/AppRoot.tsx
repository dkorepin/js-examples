// import React from 'react';
import { Redirect } from 'react-router-dom';
import { Auth, ERoute } from '../../../../utils';

export const AppRoot: React.FC = () => {
    const isLogged = Auth.checkLogged();

    return isLogged ? <Redirect to={ERoute.HOME} /> : <Redirect to={ERoute.LOGIN} />
}
export const uryue = 10;