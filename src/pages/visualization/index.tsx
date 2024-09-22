import { GestureResponderEvent, Text } from "react-native";
import { RootStackParamList } from "../../navigator/AppNavigator";
import { RouteProp } from "@react-navigation/native";
import CardVisualizationUI from "../../components/cardVisualization";
import Customer from "../../interfaces/customer";
import { Heading } from "native-base";

type VisualizationRouteProp = RouteProp<RootStackParamList, 'Visualizar'>;

type Props = {
    route: VisualizationRouteProp;
};

export default function Visualization({ route }: Props) {
    const { object } = route.params;
    console.log('Visualização: ', object)
    const objectCustomer: Customer = object  as Customer;
    const isCustomer =
                        typeof objectCustomer?.id === 'number' &&
                        typeof objectCustomer?.name === 'string' &&
                        typeof objectCustomer?.address === 'string' &&
                        typeof objectCustomer?.phone_number_1 === 'string' &&
                        typeof objectCustomer?.phone_number_2 === 'string' &&
                        typeof objectCustomer?.email === 'string';


    if(isCustomer) {
        return (
            <CardVisualizationUI object={objectCustomer.advertisements as []} title={objectCustomer.name} items={[{ label: 'Endereço cliente: ', value: objectCustomer.address }, { label: 'Telefone 1: ', value: objectCustomer.phone_number_1 }, { label: 'Telefone 2', value: objectCustomer.phone_number_2 }, { label: 'E-mail: ', value: objectCustomer.email }]} onPress={function (event: GestureResponderEvent): void {
                throw new Error("Function not implemented.");
            }} />
        )
    }else {
        const advertisementActive = object.active === true ? 'Sim' : 'Não';
        const advertisementDateDeactivation= object.dateDeactivation === null ? ' ' : object.dateDeactivation;
        console.log(advertisementDateDeactivation)
        return (
            
            <CardVisualizationUI title={object?.name} items={[{ label: 'Cliente: ', value: object.customerName }, { label: 'Frequência de divulgação: ', value: object.frenquencyDivulgation }, { label: 'Horários de divulgação: ', value: object.advertisingSchedules?.join(", ")}, { label: 'Data de vencimento: ', value: object.datePayement }, { label: 'Valor: ', value: 'R$ ' + object.amount }, { label: 'Data de criação: ', value: object.dateRegister?.split(" ")[0] }, { label: 'Ativa: ', value: advertisementActive }, { label: 'Data de ativação: ', value: object.dateActivation?.split(" ")[0] }, { label: 'Data de desativação: ', value: advertisementDateDeactivation?.split(" ")[0] }]} onPress={function (event: GestureResponderEvent): void {
                throw new Error("Function not implemented.");
            }} />
        )
    }
  
}