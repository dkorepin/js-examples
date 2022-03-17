export interface Props {
    className?: string;
    onChange: (value: string) => void;
    value: string | number;
    placeholder?: string;
    masked?: boolean;
    title?: string
    name?: string;
}