import { useState } from "react";
import { TError, TForm, TFormChange, TFormHook } from "./Form.types";

const initErrors = (requiredFields: string[]): TError => {
    const errors: TError = {};
    requiredFields.forEach((key) => {
        errors[key] = true;
    });
    return errors;
}

export const useFormHook: TFormHook = (requiredFields) => {
    const [form, setForm] = useState<TForm>({});
    const [isValid, setIsValid] = useState(false);
    const [errors, setErrors] = useState<TError>(() => initErrors(requiredFields));

    const handleValidate = (err: TError) => {
        return Number(Object.keys(err)?.filter((key: string) => !!err[key])) === 0;
    }
    
    const handleChangeForm: TFormChange = (name, value) => {
        setForm((prev) => ({...prev, [name]: value}));

        const errorValue = Boolean(String(value)) ? undefined : true;

        setErrors((prev) => {
            const actualErrors = {...prev, [name]: requiredFields.includes(name) ? errorValue : undefined};
            setIsValid(handleValidate(actualErrors));

            return actualErrors;
        });
    }

    return {
        form,
        errors,
        isValid,
        handleChangeForm,
    }
}
