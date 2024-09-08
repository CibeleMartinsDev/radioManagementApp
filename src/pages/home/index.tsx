import { VStack } from "native-base";
import ButtonUI from "../../components/button";
import { InputUI } from "../../components/input";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function Home(){
    const navigation = useNavigation()
    const [searchValue, setSearchValue] = useState('')
    return (
       <VStack width={'80%'} display={'flex'} alignItems={'center'} justifyContent={'center'} space={580}>
        <InputUI haveIcon={true} placeholder={"Pesquise um cliente ou propaganda..."} value={searchValue} onChange={(e)=> setSearchValue(e.nativeEvent.text) } type={"text"}/>
        <VStack space={8}>
            <ButtonUI title={"Cadastrar cliente"} onPress={()=> navigation.navigate('Cadastrar cliente' as never)} size={"100%"} variant={"ghost"}/>
            <ButtonUI title={"Cadastrar propaganda"} onPress={()=> navigation.navigate('Cadastrar propaganda' as never)} size={"100%"} variant={"ghost"}/>
        </VStack>
       </VStack>
    )
}