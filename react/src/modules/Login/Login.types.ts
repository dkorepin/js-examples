export type TLoginHook = () => {
    handleLogin: () => void;
    login: string;
    setLogin: (v: string) => void;
    password: string;
    setPassword: (v: string) => void;
}