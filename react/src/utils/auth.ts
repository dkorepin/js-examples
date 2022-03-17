import { TUser, EAuthKey } from "./common.types";

export class Auth {
    static login(user: TUser | null) {
        if (!user) return;
        localStorage.setItem(EAuthKey.USER, JSON.stringify(user));
    }

    static logout() {
        localStorage.removeItem(EAuthKey.USER);
    }

    static checkLogged() {
        const storageValue = localStorage.getItem(EAuthKey.USER);

        if (!storageValue) return false;

        const user: TUser = JSON.parse(storageValue);

        return !!user?.name;
    }
}