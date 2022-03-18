import { TError, TForm, TFormChange } from "../../../utils";

export interface Props {
    className?: string;
    onChange: TFormChange;
    form: TForm;
    placeholder?: string;
    masked?: boolean;
    title?: string
    name: string;
    errors?: TError;
}