import { Heading, useDisclose, VStack } from "native-base";
import ButtonUI from "../../components/button";
import { InputUI } from "../../components/input";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import CustomerService from "../../service/customer-service";
import ErrorResponse from "../../interfaces/error";
import BottomSheetUI from "../../components/bottomSheet";
import CardUI from "../../components/card";
import { RootStackParamList } from "../../navigator/AppNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import LoadUI from "../../components/load";
type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Visualizar'>;

export default function Home() {
    const navigation = useNavigation<NavigationProp>()
    const [searchValue, setSearchValue] = useState('')
    const [searchResult, setSearchResult] = useState({} as any)
    const [allowSearch, setAllowSearch] = useState<boolean>()
    const [error, setError] = useState<ErrorResponse>();
    const [advertisementActives, setAdvertisementActives] = useState<number>();
    const [loading, setLoading] = useState<boolean>()
    const customerService = new CustomerService();

    const {
        isOpen,
        onOpen,
        onClose
    } = useDisclose();


    useEffect(() => {
        if (allowSearch && searchValue !== '') {
            setLoading(true)
            const timer = setTimeout(() => {
                customerService.getByName(searchValue, '/search').then(r => {
                    const isCustomer =
                        r.data &&
                        typeof r.data.id === 'number' &&
                        typeof r.data.name === 'string' &&
                        typeof r.data.address === 'string' &&
                        typeof r.data.phone_number_1 === 'string' &&
                        typeof r.data.phone_number_2 === 'string' &&
                        typeof r.data.email === 'string';
                    isCustomer ? setSearchResult(r.data as any) : setSearchResult({});
                    setAdvertisementActives(r.data.advertisements?.filter( (a: any) => a.active === true).length)
                    setLoading(false)
                }).catch(e => {
                    setLoading(false)
                    if (e.response && e.response.data) {
                        setError({
                            message: e.response.data.message,
                            status: e.response.data.status,
                            dateHour: e.response.data.dateHour
                        });
                        onOpen();
                    } else {
                        setError({
                            message: e.message,
                            status: e.status,
                            dateHour: ''
                        });
                        onOpen();
                    }
                });
            }, 5000);
            return () => {clearTimeout(timer)};
        }

        if(searchValue === ''){
            setSearchResult({})
            setLoading(false)
            setAdvertisementActives(0)
        }

    }, [searchValue, allowSearch])

    return (
        <VStack width={'80%'} display={'flex'} alignItems={'flex-start'} justifyContent={'center'} space={50} mr={24}>
            <InputUI haveIcon={true} placeholder={"Pesquise um cliente..."} value={searchValue} onChange={(e) => { setSearchValue(e.nativeEvent.text), setAllowSearch(true) }} type={"text"} />
            <VStack  space={130}>
                {searchResult && searchResult.name && !loading ? (
                    <CardUI title={searchResult.name} description1={'Propagandas ativas: ' + advertisementActives} onPressIcon={() => {
                        navigation.navigate('Visualizar', { object: searchResult })
                        setSearchValue('')
                        setSearchResult({})
                        setAllowSearch(false)
                        setAdvertisementActives(0)
                    }} />

                ) : (
                   !loading && <Heading>Nenhum resultado encontrado</Heading>
                )}
                {loading && <LoadUI />}
                <VStack ml={58} space={8} display={'flex'} alignItems={'flex-start'} justifyContent={'center'} >
                    <ButtonUI title={"Cadastrar cliente"} onPress={() => navigation.navigate('Cadastrar cliente' as never)} size={"100%"} variant={"ghost"} />
                    <ButtonUI title={"Cadastrar propaganda"} onPress={() => navigation.navigate('Cadastrar propaganda' as never)} size={"100%"} variant={"ghost"} />
                </VStack>
                {!!error && <BottomSheetUI isOpen={isOpen} onClose={onClose} message={{
                    status: error.status,
                    text: error.message
                }} />}
            </VStack>
        </VStack>
    )
}