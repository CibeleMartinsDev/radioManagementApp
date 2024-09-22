import { useNavigation } from "@react-navigation/native";
import { Button, Image, Text, useDisclose, View, VStack } from "native-base"; // Certifique-se de ter o NativeBase configurado corretamente
import DynamicFormUI from "../../components/dynamicForm";
import ButtonUI from "../../components/button";
import { GestureResponderEvent } from "react-native";
import { useContext, useState } from "react";
import AuthService from "../../service/auth-service";
import { AuthContext } from "../../context/auth-context";
import BottomSheetUI from "../../components/bottomSheet";
import ErrorResponse from '../../interfaces/error';
export default function Login() {
    const navigation = useNavigation()
    const [emailUser, setEmailUser] = useState('cibelemartins@hotmail.com');
    const [passwordUser, setPasswordUser] = useState('9999999');
    const [error, setError] = useState<ErrorResponse | null>();
    const context = useContext(AuthContext);
    const authService = new AuthService();
    const {
        isOpen,
        onOpen,
        onClose
      } = useDisclose();


    const login = () => {
        console.log('Chama a autenticação...')
        const userCredentials: UserCredentials = {
            email: emailUser,
            passwordUser: passwordUser
        }
        authService.authenticate(userCredentials).then(r => {
            context?.setToken(r);
            setEmailUser('');
            setPasswordUser('');
            navigation.navigate('Home' as never);
        }).catch(e => {
            console.log('catch tela de login: ', e.response.data)
            if(e.response.data){
                setError({
                    message: e.response.data.message,
                    status: e.response.data.status,
                    dateHour: e.response.data.dateHour
                })
                onOpen()
            }else {
                setError({
                    message: e.message,
                    status: e.status,
                    dateHour: ''
                })
                onOpen()
            }
        })
    }

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
                        type: 'password',
                        name: 'senha',
                        placeholder: 'Senha',
                        value: passwordUser,
                        onChange: (e) => { setPasswordUser(e.nativeEvent.text) }
                    },
                ]} theme={"customer"} />
            <ButtonUI title={"Entrar"} onPress={() => login()} size={""} variant={""} />
            {!!error && <BottomSheetUI isOpen={isOpen} onClose={onClose} message={{
                status: error.status,
                text: error.message
            }} />}
        </VStack>
    );
}