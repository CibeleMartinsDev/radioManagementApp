import { useNavigation } from "@react-navigation/native";
import { Button, Image, Text, View, VStack } from "native-base"; // Certifique-se de ter o NativeBase configurado corretamente
import DynamicFormUI from "../../components/dynamicForm";
import ButtonUI from "../../components/button";
import { GestureResponderEvent } from "react-native";
import { useState } from "react";

export default function Login() {
    const navigation = useNavigation()
    const [emailUser, setEmailUser] = useState('');
    const [passwordUser, setPasswordUser] = useState('');
    return (
        <VStack space={20} w={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <Image size={140} position={'fixed'} top={140} source={require('../../assets/logoApp.png')} />
            <DynamicFormUI 
            height="customHeightNavbarMenu"
            inputs={[
                {
                    type: 'text',
                    name: 'email',
                    placeholder: 'E-mail',
                    value: emailUser,
                    onChange: (e) => { setEmailUser(e.nativeEvent.text) }
                },
                {
                    type: 'text',
                    name: 'password',
                    placeholder: 'Senha',
                    value: passwordUser,
                    onChange: (e) => { setPasswordUser(e.nativeEvent.text) }
                },
            ]} theme={"customer"} />
            <ButtonUI title={"Entrar"} onPress={()=> navigation.navigate('Home' as never)} size={""} variant={""} />
        </VStack>
    );
}