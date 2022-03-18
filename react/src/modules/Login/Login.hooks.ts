import { useCallback, useState } from "react";
import { useHistory } from "react-router-dom"
import { Auth, ERoute, FakeServer, TResponse, TUser, useFormHook } from "../../utils";
import { TLoginHook } from "./Login.types";
import { loginData } from "./Login.utils";

FakeServer.register<TUser>('/login', loginData);

export const useLoginHook: TLoginHook = () => {
    const history = useHistory();
    const { form, errors, handleChangeForm, isValid } = useFormHook(['login', 'password']);

    const handleLogin = async () => {
        if (!isValid) return;
        const resp: TResponse<TUser> = await FakeServer.fetch('/login');

        Auth.login(resp.body);
        history.push(ERoute.APP);
    };

    return {
        handleLogin,
        form,
        errors,
        handleChangeForm,
        canLogin: isValid,
    }
}
