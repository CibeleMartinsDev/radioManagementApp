import { GestureResponderEvent } from "react-native";

export interface CardProps {
    title: string;
    description1?: string;
    description2?: string;
    description3?: string;
    onPressIcon?: ((event: GestureResponderEvent) => void)
}