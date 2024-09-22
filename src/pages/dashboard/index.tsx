import { Center, Heading, useDisclose, VStack } from "native-base";
import { useEffect, useState } from "react";
import { ScrollView, Text } from "react-native";
import CustomerService from "../../service/customer-service";
import AdvertisementService from "../../service/advertisement-service";
import ErrorResponse from "../../interfaces/error";
import BottomSheetUI from "../../components/bottomSheet";
import Customer from "../../interfaces/customer";
import CardUI from "../../components/card";
import { RootStackParamList } from "../../navigator/AppNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import Advertisement from "../../interfaces/advertisement";
type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Visualizar'>;

export default function Dashboard() {

    const [customers, setCustomers] = useState<Customer[]>();
    const [advertsements, setAdvertisements] = useState<Advertisement[]>();
    const customerService = new CustomerService();
    const advertisementService = new AdvertisementService();
    const [errorOrSuccess, setErrorOrSuccess] = useState<ErrorResponse>();
    const navigation = useNavigation<NavigationProp>()
    const {
        isOpen,
        onOpen,
        onClose
    } = useDisclose();

    useEffect(() => {
        customerService.get().then((r) => {
            setCustomers(r.data)
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

        advertisementService.get().then((r) => {
            setAdvertisements(r.data)
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
    }, [])

    return (

        <VStack width={'88%'} space={8}>
            <Heading fontSize="xl">Clientes</Heading>
            <ScrollView h="80">
                {customers?.map((c) => {
                    return (
                        <>
                            <CardUI title={c.name} description1={'Propagandas ativas: ' + c.advertisements?.length} onPressIcon={() => {
                                navigation.navigate('Visualizar', { object: c })
                            }} />
                        </>
                    )
                })}
            </ScrollView>

            <Heading fontSize="xl">Propagandas</Heading>
            <ScrollView>
                {advertsements?.map((c) => {
                    const advertisementActive = c.active === true ? 'Sim' : 'Não'
                    return (
                        <>
                            <CardUI title={c.name} description1={'Propagandas ativas: ' + advertisementActive} onPressIcon={() => {
                                navigation.navigate('Visualizar', { object: c })
                            }} />
                        </>
                    )
                })}
            </ScrollView>
            {!!errorOrSuccess && <BottomSheetUI isOpen={isOpen} onClose={onClose} message={{
                status: errorOrSuccess.status,
                text: errorOrSuccess.message
            }} />}
        </VStack>
    )
}