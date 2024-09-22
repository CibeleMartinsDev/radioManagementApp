import { GestureResponderEvent } from "react-native";
import { Items } from "../select/interface";
import Advertisement from "../../interfaces/advertisement";
import Customer from "../../interfaces/customer";

export interface CardEditionProps{
    title: string;
    items: Items[],
    onPress: ((event: GestureResponderEvent) => void);
    object: [];
}