import { GestureResponderEvent } from "react-native";
import { Items } from "../select/interface";

export interface CardEditionProps{
    title: string;
    items: Items[],
    onPress: ((event: GestureResponderEvent) => void);
}