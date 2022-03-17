import { useCallback } from "react";
import { useHistory } from "react-router-dom"
import { Auth, ERoute } from "../../utils";
import { THomeHook } from "./Home.types";

export const useHomeHook: THomeHook = () => {
    const history = useHistory();

    const handleLogout = useCallback(() => {
        Auth.logout();
        history.push(ERoute.APP);
    }, [history])

    return {
        handleLogout,
    }
}