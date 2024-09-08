import {  Center, Icon, Image, Pressable, VStack } from "native-base";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";


export default function NavbarMenuUI() {
    return (
        <VStack
            width={'customWidthNavbarMenu'}
            height={'heightFull'}
            display={'flex'}
            justifyContent={'space-between'}
            backgroundColor={'primary.generic'}>
            <VStack w={'autoWidth'} h={'customHeightNavbarMenu'} space={10}>
                <Pressable
                    onPress={() => {
                        console.log('preesss icones')
                    }}
                    _pressed={{ opacity: 0.7 }}
                >
                    <Center>
                        <Image size={16} alt="logoRadio" borderRadius={100} source={require('../../assets/logoApp.png')} />
                    </Center>
                </Pressable>
                <Pressable
                    onPress={() => {
                        console.log('preesss icones')
                    }}
                    _pressed={{ opacity: 0.7 }}
                >
                    <Center>
                        <Icon as={MaterialIcons} name="attach-money" size="2xl" color="primary.genericBlack" />
                    </Center>
                </Pressable>
                <Pressable
                    onPress={() => {
                        console.log('preesss icones')
                    }}
                    _pressed={{ opacity: 0.7 }}
                >
                    <Center>
                        <Icon as={MaterialIcons} name="dashboard" size="2xl" color="primary.genericBlack" />
                    </Center>
                </Pressable>
            </VStack>
            <VStack display={'flex'} justifyContent={'flex-end'} w={'autoWidth'} h={'customHeightNavbarMenu'}>
                <Pressable
                    onPress={() => {
                        console.log('preesss icones')
                    }}
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