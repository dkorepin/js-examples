import { TError, TForm, TFormChange } from "../../utils";

export type TLoginHook = () => {
    handleLogin: () => void;
    form: TForm;
    errors: TError;
    handleChangeForm: TFormChange;
    canLogin: boolean;
}