import React from "react";
import { CheckIcon, ChevronDownIcon, FlatList, Icon, Select } from "native-base";
import { SelectProps } from "./interface";

export default function SelectUI({ value, placeholder, onChange, items }: SelectProps) {
    return (
        <Select selectedValue={value} minWidth="100%"  accessibilityLabel={placeholder} placeholder={placeholder}
            _selectedItem={{
                bg: "teal.600",
                endIcon: <CheckIcon size="5"
                />
            }} mt={1} onValueChange={onChange}
            borderWidth={0} 
            borderBottomWidth={2} 
            position="fixed"
            top={50}
            borderColor='primary.generic' 
            placeholderTextColor={'primary.generic'}
            dropdownIcon={<ChevronDownIcon size={5} color="white" />}
        >
            {items.map(i => <Select.Item label={i.label} value={i.value} />)}
        </Select>
    )
}