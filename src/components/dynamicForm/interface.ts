import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import { SelectProps } from "../select/interface";
import { ReactNode } from "react";

export interface DynamicFormUIProps{
    inputs: InputDynamicForm[],
    children?: ReactNode,
    theme: 'customer' | 'advertisement',
    selectOptions?: SelectProps;
    height: string;
}

export interface InputDynamicForm {
    type: "text" | "password";
    name: string;
    placeholder: string;
    value: string | undefined | number;
    onChange: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;

}

export type FormValues = {
    name: string;
    email: string;
    phone1: string;
    phone2: string;
    endereco: string;
  };