import { Text } from "react-native";
import Customer from "../../interfaces/customer";
import { RootStackParamList } from "../../navigator/AppNavigator";
import { RouteProp, useNavigation } from "@react-navigation/native";
import { InputDynamicForm } from "../../components/dynamicForm/interface";
import { SetStateAction, useEffect, useState } from "react";
import DynamicFormUI from "../../components/dynamicForm";
import ButtonUI from "../../components/button";
import CustomerService from "../../service/customer-service";
import ErrorResponse from "../../interfaces/error";
import { useDisclose } from "native-base";
import BottomSheetUI from "../../components/bottomSheet";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import AdvertisementService from "../../service/advertisement-service";
import Advertisement from "../../interfaces/advertisement";
type VisualizationRouteProp = RouteProp<RootStackParamList, 'Visualizar'>;

type Props = {
    route: VisualizationRouteProp;
};
export default function Edit({ route }: Props) {

    // Objeto recebido na rota
    const { object } = route.params;

    //Customer recebido na rota
    const objectCustomer: Customer = object as Customer;
    const isCustomer =
        typeof objectCustomer?.id === 'number' &&
        typeof objectCustomer?.name === 'string' &&
        typeof objectCustomer?.address === 'string' &&
        typeof objectCustomer?.phone_number_1 === 'string' &&
        typeof objectCustomer?.phone_number_2 === 'string' &&
        typeof objectCustomer?.email === 'string';

    //Navegação
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'Visualizar'>>()

    // BottomSheetUI
    const {
        isOpen,
        onOpen,
        onClose
    } = useDisclose();

    // Estado de erro ou sucesso p/ mostrar no BottomSheetUI as informações
    const [errorOrSuccess, setErrorOrSuccess] = useState<ErrorResponse>();

    // Services
    const customerService = new CustomerService();
    const advertisementService = new AdvertisementService();

    // Definindo os estados Customer
    const [nameCustomer, setNameCustomer] = useState('');
    const [adressCustomer, setAdressCustomer] = useState('');
    const [phone1Customer, setPhone1Customer] = useState('');
    const [phone2Customer, setPhone2Customer] = useState('');
    const [emailCustomer, setEmailCustomer] = useState('');

    const inputs: InputDynamicForm[] = [
        {
            type: 'text',
            name: 'name',
            placeholder: 'Nome do cliente',
            value: nameCustomer,
            onChange: (e) => { console.log('nome cliente: ', e.nativeEvent.text), console.log(nameCustomer), setNameCustomer(e.nativeEvent.text) }
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

    const updateCustomer = () => {
        const customerUpdated: Customer = {
            id: objectCustomer.id,
            name: nameCustomer,
            address: adressCustomer,
            email: emailCustomer,
            phone_number_1: phone1Customer,
            phone_number_2: phone2Customer,
            advertisements: objectCustomer.advertisements
        }
        customerService.update(customerUpdated).then((r) => {
            setErrorOrSuccess({
                message: 'Cliente atualizado com sucesso!',
                status: r.status,
                dateHour: ''
            });
            setNameCustomer('')
            setAdressCustomer('')
            setEmailCustomer('')
            setPhone1Customer('')
            setPhone2Customer('')
            onOpen();
            setTimeout(() => { 
                customerService.getById( objectCustomer.id ? objectCustomer.id.toString() : '').then((r)=> {
                    console.log('Cliente atualizado pego pelo id: ', r.data)
                    navigation.navigate('Visualizar', { object: r.data }) 
                }).catch((e)=> {
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
              
            }, 1500)
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

    const deleteCustomer = () => {
        // customerService.update(objectCustomer).then((r) => {
        //     setErrorOrSuccess({
        //         message: r.message,
        //         status: r.status,
        //         dateHour: ''
        //     });
        //     onOpen();
        // }).catch((e) => {
        //     setErrorOrSuccess({
        //         message: e.message,
        //         status: e.status,
        //         dateHour: ''
        //     });
        //     onOpen();
        // })
    }

    const [name, setName] = useState('');
    const [frenquencyDivulgation, setFrenquencyDivulgation] = useState('');
    const [advertisingSchedules, setAdvertisingSchedules] = useState<string>();
    const [amount, setAmount] = useState('');
    const [datePayment, setDatePayment] = useState<string>();
    const [active, setActive] = useState<string>();
    const [observation, setObservation] = useState('');
    const [selectValue, setSelectValue] = useState({ label: object.customerName, value: object.customerName })
    const inputsAdvertisement: InputDynamicForm[] = [
        {
            type: 'text',
            name: 'name',
            placeholder: 'Nome da propaganda',
            value: name,
            onChange: (e) => { setName(e.nativeEvent.text) }
        },
        {
            type: 'text',
            name: 'frenquency',
            placeholder: 'Frequência de divulgação',
            value: frenquencyDivulgation,
            onChange: (e) => { setFrenquencyDivulgation(e.nativeEvent.text) }
        },
        {
            type: 'text',
            name: 'hours',
            placeholder: 'Horários de divulgação',
            value: advertisingSchedules,
            onChange: (e) => { setAdvertisingSchedules(e.nativeEvent.text) }
        },
        {
            type: 'text',
            name: 'amount',
            placeholder: 'R$ Valor',
            value: amount,
            onChange: (e) => { setAmount(e.nativeEvent.text) }
        },
        {
            type: 'text',
            name: 'dateDue',
            placeholder: 'Data de vencimento',
            value: datePayment,
            onChange: (e) => { setDatePayment(e.nativeEvent.text) }
        },
        {
            type: 'text',
            name: 'activate',
            placeholder: 'Ativar propaganda?',
            value: active,
            onChange: (e) => { setActive(e.nativeEvent.text) }
        },
        {
            type: 'text',
            name: 'observacao',
            placeholder: 'Observação',
            value: observation,
            onChange: (e) => { setObservation(e.nativeEvent.text) }
        },
    ]

    const updateAdvertisement = () => {
        const advertisementUpdated: Advertisement = {
            id: object.id,
            name: name,
            customer: selectValue.value,
            frenquencyDivulgation: frenquencyDivulgation,
            advertisingSchedules: advertisingSchedules?.split(",") as string[],
            amount: amount, // Usando o estado `amount`
            datePayement: datePayment,
            active: active === 'Sim' ? true : false,
            observation: observation
        };
        advertisementService.update(advertisementUpdated).then((r) => {
            setErrorOrSuccess({
                message: 'Propaganda atualizada com sucesso!',
                status: r.status,
                dateHour: ''
            });

            setName('');
            setSelectValue({ label: '', value: '' });
            setFrenquencyDivulgation('');
            setAdvertisingSchedules('');
            setAmount('');
            setDatePayment('');
            setActive('');
            setObservation('');
            onOpen();
            setTimeout(() => { 
                advertisementService.getById(object.id).then((r)=> {
                    console.log('propaganda atualizada pega pelo id: ', r.data)
                    navigation.navigate('Visualizar', { object: r.data }) 
                }).catch((e)=> {
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
              
            }, 1500)
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

    const deleteAdvertisement = () => {
        // customerService.update(objectCustomer).then((r) => {
        //     setErrorOrSuccess({
        //         message: r.message,
        //         status: r.status,
        //         dateHour: ''
        //     });
        //     onOpen();
        // }).catch((e) => {
        //     setErrorOrSuccess({
        //         message: e.message,
        //         status: e.status,
        //         dateHour: ''
        //     });
        //     onOpen();
        // })
    }

    useEffect(() => {
        if (isCustomer) {
            setNameCustomer(objectCustomer.name);
            setAdressCustomer(objectCustomer.address);
            setPhone1Customer(objectCustomer.phone_number_1);
            setPhone2Customer(objectCustomer.phone_number_2);
            setEmailCustomer(objectCustomer.email);
        } else {
            const advertisementActive = object.active === true ? 'Sim' : 'Não';
            const advertisementDatePayement = object.datePayement.toString()
            const advertisementAdversitingSchedules = object?.advertisingSchedules.join(", ")
            setName(object.name);
            setSelectValue({ label: object.customerName ? object.customerName : object.customer , value: object.customerName ? object.customerName : object.customer })
            setFrenquencyDivulgation(object.frenquencyDivulgation);
            setAdvertisingSchedules(advertisementAdversitingSchedules);
            setAmount(object.amount);
            setDatePayment(advertisementDatePayement);
            setActive(advertisementActive);
            setObservation(object.observation);

        }
    }, [])


    if (isCustomer) {
        return (
            <>
                <DynamicFormUI inputs={inputs} theme={"customer"} height={""} >
                    <ButtonUI title={"Salvar alterações"} onPress={() => { updateCustomer() }} size={"100%"} variant={"ghost"} />
                    <ButtonUI title={"Excluir cliente"} onPress={() => { deleteCustomer() }} size={"100%"} variant={"ghost"} />
                </DynamicFormUI>
                {!!errorOrSuccess && <BottomSheetUI isOpen={isOpen} onClose={onClose} message={{
                    status: errorOrSuccess.status,
                    text: errorOrSuccess.message
                }} />}
            </>

        )
    } else {
        return (
            <>
                <DynamicFormUI selectOptions={{
                    value: selectValue.value,
                    onChange: (e) => setSelectValue(e as SetStateAction<any>),
                    placeholder: 'Selecione o cliente',
                    items: [
                        { label: selectValue.label, value: selectValue.value as any }
                    ]
                }} inputs={inputsAdvertisement} theme={"advertisement"} height={""} >
                    <ButtonUI title={"Salvar alterações"} onPress={() => { updateAdvertisement() }} size={"100%"} variant={"ghost"} />
                    <ButtonUI title={"Excluir propaganda"} onPress={() => { deleteAdvertisement() }} size={"100%"} variant={"ghost"} />
                </DynamicFormUI>
                {!!errorOrSuccess && <BottomSheetUI isOpen={isOpen} onClose={onClose} message={{
                    status: errorOrSuccess.status,
                    text: errorOrSuccess.message
                }} />}
            </>


        )
    }
}