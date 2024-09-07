export interface SelectProps {
    value: string;
    onChange: (v: string) => void;
    placeholder: string;
    items: Items[];
}


export interface Items {
    label: string;
    value: string;
}