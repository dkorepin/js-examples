export type TError = {
    [key: string]: boolean | undefined;
}

export type TForm = {
    [key: string]: any;
}

export type TFormChange = (name: string, value: any) => void;

export type TFormHook = (requiredFields: string[]) => {
    form: TForm;
    errors: TError;
    isValid: boolean;
    handleChangeForm: TFormChange;
}
