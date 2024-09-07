
import { Icon, Input, SearchIcon } from "native-base";
import React from "react";
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface InputUIProps {
    placeholder: string;
    value: string;
    onChange: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
    haveIcon: boolean;
}
export function InputUI({ placeholder, value, onChange, haveIcon }: InputUIProps) {

    return (
        <Input
        width="60%"
        placeholderTextColor="primary.generic"
        borderColor="primary.generic"
        color="primary.generic"
        backgroundColor="primary.transparent"
        variant="underlined"
        placeholder={placeholder}
        value={value}
        onChange={onChange} // Use onChangeText
        InputRightElement={
          haveIcon ?  <Icon as={MaterialIcons} name="search" size={5} color="primary.generic"  /> : undefined
        }
    />
    )


}