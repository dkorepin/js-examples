import { useCallback, useState } from "react";
import { useHistory } from "react-router-dom"
import { Auth, ERoute, FakeServer, TResponse, TUser } from "../../utils";
import { TLoginHook } from "./Login.types";
import { loginData } from "./Login.utils";

FakeServer.register<TUser>('/login', loginData);

export const useLoginHook: TLoginHook = () => {
    const history = useHistory();
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = useCallback(async () => {
        const resp: TResponse<TUser> = await FakeServer.fetch('/login');

        Auth.login(resp.body);
        history.push(ERoute.APP);
    }, [history]);

    return {
        handleLogin,
        login,
        setLogin,
        password,
        setPassword
    }
}
