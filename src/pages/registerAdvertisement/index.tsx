import { Text } from "react-native";
import DynamicFormUI from "../../components/dynamicForm";
import ButtonUI from "../../components/button";
import { useEffect, useState } from "react";
import { InputDynamicForm } from "../../components/dynamicForm/interface";
import BottomSheetUI from "../../components/bottomSheet";
import { useDisclose } from "native-base";
import ErrorResponse from "../../interfaces/error";
import CustomerService from "../../service/customer-service";
import { Items } from "../../components/select/interface";
import AdvertisementService from "../../service/advertisement-service";
import Advertisement from "../../interfaces/advertisement";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../navigator/AppNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export default function RegisterAdvertisement() {

    const [errorOrSuccess, setErrorOrSuccess] = useState<ErrorResponse>();
    //Navegação
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'Home'>>()
    const {
        isOpen,
        onOpen,
        onClose
    } = useDisclose();

    const [name, setName] = useState('');
    const [frenquencyDivulgation, setFrenquencyDivulgation] = useState('');
    const [advertisingSchedules, setAdvertisingSchedules] = useState<string>();
    const [amount, setAmount] = useState('');
    const [datePayment, setDatePayment] = useState<string>();
    const [active, setActive] = useState<string>();
    const [observation, setObservation] = useState('');
    const [selectValue, setSelectValue] = useState('')
    const [customers, setCustomers] = useState<Items[]>()
    const customerService = new CustomerService();
    const advertisementService = new AdvertisementService();
    const registerAdvertisement = () => {
        const advertisement: Advertisement = {
            name: name,
            customer: selectValue,
            frenquencyDivulgation: frenquencyDivulgation,
            advertisingSchedules: advertisingSchedules?.split(",") as string[],
            amount: amount, // Usando o estado `amount`
            datePayement: datePayment,
            active: active === 'Sim' ? true : false,
            observation: observation
        };
        advertisementService.register(advertisement).then((r) => {
            setErrorOrSuccess({
                message: 'Propaganda cadastrada com sucesso!',
                status: r.status,
                dateHour: ''
            });
            onOpen();
            setTimeout(() => navigation.navigate('Home'), 1500)

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


    useEffect(() => {
        customerService.get().then((r) => {
            const customers = r.data.map((i: any) => ({
                label: i.name,
                value: i.name
            }));
            setCustomers(customers)
        }).catch((e) => { })
    }, [])


    return (
        <>
            <DynamicFormUI selectOptions={{
                value: selectValue,
                onChange: (e) => setSelectValue(e),
                placeholder: 'Selecione o cliente',
                items: customers as Items[]
            }} inputs={inputsAdvertisement} theme={"advertisement"} height={""} >
                <ButtonUI title={"Cadastrar propaganda"} onPress={() => { registerAdvertisement() }} size={"100%"} variant={"ghost"} />
            </DynamicFormUI>
            {!!errorOrSuccess && <BottomSheetUI isOpen={isOpen} onClose={onClose} message={{
                status: errorOrSuccess.status,
                text: errorOrSuccess.message
            }} />}
        </>
    )
}