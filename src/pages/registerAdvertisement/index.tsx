import { Text } from "react-native";
import DynamicFormUI from "../../components/dynamicForm";
import ButtonUI from "../../components/button";
import { useState } from "react";
import { InputDynamicForm } from "../../components/dynamicForm/interface";

export default function RegisterAdvertisement() {

    const [nameCustomer, setNameCustomer] = useState('')
    const [adressCustomer, setAdressCustomer] = useState('')
    const [phone1Customer, setPhone1Customer] = useState('')
    const [phone2Customer, setPhone2Customer] = useState('')
    const [emailCustomer, setEmailCustomer] = useState('')
    const [selectValue, setSelectValue] = useState('')

    const inputsAdvertisement: InputDynamicForm[] = [
        {
            type: 'text',
            name: 'name',
            placeholder: 'Nome da propaganda',
            value: nameCustomer,
            onChange: (e) => { setNameCustomer(e.nativeEvent.text) }
        },
        {
            type: 'text',
            name: 'frenquency',
            placeholder: 'Frequência de divulgação',
            value: adressCustomer,
            onChange: (e) => { setAdressCustomer(e.nativeEvent.text) }
        },
        {
            type: 'text',
            name: 'hours',
            placeholder: 'Horários de divulgação',
            value: phone1Customer,
            onChange: (e) => { setPhone1Customer(e.nativeEvent.text) }
        },
        {
            type: 'text',
            name: 'amount',
            placeholder: 'R$ Valor',
            value: phone2Customer,
            onChange: (e) => { setPhone2Customer(e.nativeEvent.text) }
        },
        {
            type: 'text',
            name: 'dateDue',
            placeholder: 'Data de vencimento',
            value: emailCustomer,
            onChange: (e) => { setEmailCustomer(e.nativeEvent.text) }
        },
        {
            type: 'text',
            name: 'activate',
            placeholder: 'Ativar propaganda?',
            value: emailCustomer,
            onChange: (e) => { setEmailCustomer(e.nativeEvent.text) }
        },
    ]

    return (
        <DynamicFormUI selectOptions={{
            value: selectValue,
            onChange: (e)=> setSelectValue(e),
            placeholder: 'Selecione o cliente',
            items: [
                {label: 'Selecione o cliente', value: ''},
                {label: 'Lojas MM', value: 'Lojas MM'}
            ]
        }} inputs={inputsAdvertisement} theme={"advertisement"} height={""} >
            <ButtonUI title={"Cadastrar propaganda"} onPress={() => { console.log('cadastrar cliente') }} size={"100%"} variant={"ghost"} />
        </DynamicFormUI>
    )
}