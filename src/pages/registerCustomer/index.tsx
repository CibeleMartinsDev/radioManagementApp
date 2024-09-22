import { GestureResponderEvent, Text } from "react-native";
import DynamicFormUI from "../../components/dynamicForm";
import { InputDynamicForm } from "../../components/dynamicForm/interface";
import { useEffect, useState } from "react";
import { Button, useDisclose } from "native-base";
import ButtonUI from "../../components/button";
import CustomerService from "../../service/customer-service";
import Customer from "../../interfaces/customer";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigator/AppNavigator";
import BottomSheetUI from "../../components/bottomSheet";
import ErrorResponse from "../../interfaces/error";
type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Visualizar'>;

export default function RegisterCustomer() {
    const navigation = useNavigation<NavigationProp>()
    const [nameCustomer, setNameCustomer] = useState('')
    const [adressCustomer, setAdressCustomer] = useState('')
    const [phone1Customer, setPhone1Customer] = useState('')
    const [phone2Customer, setPhone2Customer] = useState('')
    const [emailCustomer, setEmailCustomer] = useState('')
    const [errorOrSuccess, setErrorOrSuccess] = useState<ErrorResponse>();

    const {
        isOpen,
        onOpen,
        onClose
    } = useDisclose();

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
    const customerService = new CustomerService();
    const registerCustomer = () => {
        const customer: Customer = {
            name: nameCustomer,
            email: emailCustomer,
            address: adressCustomer,
            phone_number_1: phone1Customer,
            phone_number_2: phone2Customer
        }
        customerService.register(customer).then((r) => {
            setErrorOrSuccess({
                message: 'Cliente cadastrado com sucesso!',
                status: r.status,
                dateHour: ''
            });
            onOpen();
            setTimeout(()=> navigation.navigate('Home'), 1500)
            
        }).catch((e) => {
            if (e.response && e.response.data) {
                setErrorOrSuccess({
                    message: e.response.data.message,
                    status: e.response.data.status,
                    dateHour: e.response.data.dateHour
                });
                onOpen();
            } else {
                setErrorOrSuccess({
                    message: e.message,
                    status: e.status,
                    dateHour: ''
                });
                onOpen();
            }
        })
    }

    return (

        <>
            <DynamicFormUI inputs={inputs} theme={"customer"} height={""} >
                <ButtonUI title={"Cadastrar cliente"} onPress={() => {registerCustomer()}} size={"100%"} variant={"ghost"} />
            </DynamicFormUI>
            {!!errorOrSuccess && <BottomSheetUI isOpen={isOpen} onClose={onClose} message={{
                status:errorOrSuccess.status,
                text: errorOrSuccess.message
            }} />}
        </>
    )
}