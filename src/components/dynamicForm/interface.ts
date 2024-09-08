import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import { SelectProps } from "../select/interface";

export interface DynamicFormUIProps{
    inputs: InputDynamicForm[],
    children?: React.ReactElement,
    theme: 'customer' | 'advertisement',
    selectOptions?: SelectProps;
}

export interface InputDynamicForm {
    type: "text" | "password";
    name: string;
    placeholder: string;
    value: string;
    onChange: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;

}

export type FormValues = {
    name: string;
    email: string;
    phone1: string;
    phone2: string;
    endereco: string;
  };