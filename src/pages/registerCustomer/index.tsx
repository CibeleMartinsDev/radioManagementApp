import { GestureResponderEvent, Text } from "react-native";
import DynamicFormUI from "../../components/dynamicForm";
import { InputDynamicForm } from "../../components/dynamicForm/interface";
import { useState } from "react";
import { Button } from "native-base";
import ButtonUI from "../../components/button";

export default function RegisterCustomer() {
    const [nameCustomer, setNameCustomer] = useState('')
    const [adressCustomer, setAdressCustomer] = useState('')
    const [phone1Customer, setPhone1Customer] = useState('')
    const [phone2Customer, setPhone2Customer] = useState('')
    const [emailCustomer, setEmailCustomer] = useState('')

    const inputs: InputDynamicForm[] = [
        {
            type: 'text',
            name: 'name',
            placeholder: 'Nome do cliente',
            value: nameCustomer,
            onChange: (e) => { setNameCustomer(e.nativeEvent.text) }
        },
        {
            type: 'text',
            name: 'endereco',
            placeholder: 'Endereço do cliente',
            value: adressCustomer,
            onChange: (e) => { setAdressCustomer(e.nativeEvent.text) }
        },
        {
            type: 'text',
            name: 'phone1',
            placeholder: 'Telefone 1',
            value: phone1Customer,
            onChange: (e) => { setPhone1Customer(e.nativeEvent.text) }
        },
        {
            type: 'text',
            name: 'phone2',
            placeholder: 'Telefone 2',
            value: phone2Customer,
            onChange: (e) => { setPhone2Customer(e.nativeEvent.text) }
        },
        {
            type: 'text',
            name: 'email',
            placeholder: 'E-mail',
            value: emailCustomer,
            onChange: (e) => { setEmailCustomer(e.nativeEvent.text) }
        },
    ]
    return (
        <DynamicFormUI inputs={inputs} theme={"customer"} height={""} >
            <ButtonUI title={"Cadastrar cliente"} onPress={()=>{console.log('cadastrar cliente')} } size={"100%"} variant={"ghost"}/>
        </DynamicFormUI>
    )
}