import React, { ReactElement } from "react";

export type TRoute = {
    path: string;
    exact?: boolean;
    sidebar?: React.FC<any>;
    main: () => ReactElement<any, any> | null;
}

export enum ERoute {
    APP = '/',
    LOGIN = '/login',
    HOME = '/home',
}