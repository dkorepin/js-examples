import { useEffect } from "react";
import { useHistory, useRouteMatch } from "react-router-dom"
import { Auth, ERoute } from "../../../../utils";
import { TAccessRouteHook } from "./AccessRoute.types";
import { availAccessRoutes } from "./AccessRoute.utils";

export const useAccessRouteHook: TAccessRouteHook = (routeProps) => {
    const history = useHistory();
    const match = useRouteMatch(routeProps);

    useEffect(() => {
        console.log('url changed', match?.path);
        // const isAccessDenied = 
        if (!Auth.checkLogged() && !availAccessRoutes.includes(String(match?.path))) {
            Auth.logout();
            history.push(ERoute.APP);
        }
    }, [match?.url, history])
}