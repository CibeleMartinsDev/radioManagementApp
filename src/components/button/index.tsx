import React, { PropsWithChildren } from 'react';
import { Button } from "native-base";
import { GestureResponderEvent } from 'react-native';

type ButtonProps = PropsWithChildren<{
  title: string;
  onPress: (e: GestureResponderEvent)=> void;
  size: string;
  variant: string;
}>;


export default function ButtonUI({title, onPress, size, variant}: ButtonProps): React.JSX.Element {

    return (
         <Button maxHeight={10} minW={40} backgroundColor={'primary.generic'} _text={{color: 'primary.genericBlack'}}  size={size} width={'48%'} variant={variant} onPress={onPress}>{title}</Button>
    )

}