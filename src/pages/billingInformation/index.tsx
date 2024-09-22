import { Center, Heading, HStack, useDisclose, VStack } from "native-base";
import { ScrollView, Text } from "react-native";
import CardUI from "../../components/card";
import BottomSheetUI from "../../components/bottomSheet";
import AdvertisementService from "../../service/advertisement-service";
import Advertisement from "../../interfaces/advertisement";
import { useEffect, useState } from "react";
import ErrorResponse from "../../interfaces/error";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../navigator/AppNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Visualizar'>;
export default function BillingInformation() {

    const [advertsements, setAdvertisements] = useState<Advertisement[]>();
    const [advertsementsAmount, setAdvertisementsAmount] = useState();
    const advertisementService = new AdvertisementService();
    const [errorOrSuccess, setErrorOrSuccess] = useState<ErrorResponse>();
    const navigation = useNavigation<NavigationProp>()
    const {
        isOpen,
        onOpen,
        onClose
    } = useDisclose();

    useEffect(() => {

        advertisementService.get().then((r) => {
            setAdvertisements(r.data)
            const totalAmount = r.data.reduce((sum: any, item: any) => sum + parseFloat(item.amount), 0);
            setAdvertisementsAmount(totalAmount)
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


        <VStack height={'50%'} display={'flex'} alignItems={'start'} width={'88%'} space={8}>
            <Heading fontSize="xl">Propagandas</Heading>
            <ScrollView >
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
            <HStack display={'flex'} alignItems={'center'} width={'100%'}>
                <Heading>A receber: </Heading>
                <Heading>{'R$: ' + advertsementsAmount}</Heading>
            </HStack>
            {!!errorOrSuccess && <BottomSheetUI isOpen={isOpen} onClose={onClose} message={{
                status: errorOrSuccess.status,
                text: errorOrSuccess.message
            }} />}

        </VStack>


    )
}