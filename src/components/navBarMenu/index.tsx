import { useNavigation } from "@react-navigation/native";
import {  Center, Icon, Image, Pressable, VStack } from "native-base";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";


export default function NavbarMenuUI() {
    const navigation = useNavigation()
    return (
        <VStack
            width={'customWidthNavbarMenu'}
            height={'heightFull'}
            display={'flex'}
            justifyContent={'space-between'}
            backgroundColor={'primary.generic'}>
            <VStack w={'autoWidth'} h={'customHeightNavbarMenu'} space={10}>
                <Pressable
                   onPress={() => navigation.navigate('Home' as never) }
                    _pressed={{ opacity: 0.7 }}
                >
                    <Center>
                        <Image size={16} alt="logoRadio" borderRadius={100} source={require('../../assets/logoApp.png')} />
                    </Center>
                </Pressable>
                <Pressable
                    onPress={() => navigation.navigate('Informações Cobrança Propaganda' as never) }
                    _pressed={{ opacity: 0.7 }}
                >
                    <Center>
                        <Icon as={MaterialIcons} name="attach-money" size="2xl" color="primary.genericBlack" />
                    </Center>
                </Pressable>
                <Pressable
                   onPress={() => navigation.navigate('Dashboard' as never) }
                    _pressed={{ opacity: 0.7 }}
                >
                    <Center>
                        <Icon as={MaterialIcons} name="dashboard" size="2xl" color="primary.genericBlack" />
                    </Center>
                </Pressable>
            </VStack>
            <VStack display={'flex'} justifyContent={'flex-end'} w={'autoWidth'} h={'customHeightNavbarMenu'}>
                <Pressable
                    onPress={() => navigation.goBack() }
                    _pressed={{ opacity: 0.7 }}
                >
                    <Center>
                    <Icon as={MaterialIcons} name="arrow-back" size="2xl" color="primary.genericBlack" mb={6} />
                    </Center>
                </Pressable>
                <Pressable
                    onPress={() => navigation.navigate('Login' as never) }
                    _pressed={{ opacity: 0.7 }}
                >
                    <Center>
                    <Icon as={MaterialIcons} name="logout" size="2xl" color="primary.genericBlack" mb={6} />
                    </Center>
                </Pressable>
            </VStack>
        </VStack>
    )
}