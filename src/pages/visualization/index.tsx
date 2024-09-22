import { GestureResponderEvent, Text } from "react-native";
import { RootStackParamList } from "../../navigator/AppNavigator";
import { RouteProp } from "@react-navigation/native";
import CardVisualizationUI from "../../components/cardVisualization";

type VisualizationRouteProp = RouteProp<RootStackParamList, 'Visualizar'>;

type Props = {
    route: VisualizationRouteProp;
};

export default function Visualization({ route }: Props) {
    const { customer } = route.params;
    console.log('Visualização cliente: ', customer)
    return (
        <CardVisualizationUI object={customer.advertisements as []} title={customer?.name} items={[{ label: 'Endereço cliente: ', value: customer.address }, { label: 'Telefone 1: ', value: customer.phone_number_1 }, { label: 'Telefone 2', value: customer.phone_number_2 }, { label: 'E-mail: ', value: customer.email }]} onPress={function (event: GestureResponderEvent): void {
            throw new Error("Function not implemented.");
        }} />
    )
}