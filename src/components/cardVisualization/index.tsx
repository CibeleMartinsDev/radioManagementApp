import { Center, Heading, HStack, Icon, Pressable, ScrollView, Text, VStack } from "native-base";
import React from "react";
import { CardEditionProps } from "./interface";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CardUI from "../card";
import { RootStackParamList } from "../../navigator/AppNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Visualizar'>;

export default function CardVisualizationUI({ items, title, onPress, object }: CardEditionProps) {
    const navigation = useNavigation<NavigationProp>()
    return (
        <VStack space={10} w="108%" alignItems={'start'} justifyContent={'flex-start'}>
            <VStack w="100%" space={8}>
                <HStack display={'flex'} alignItems={'center'} w="100%" space={'3%'}>
                    <Heading size={'md'} flexDir={'row'} flexWrap={'wrap'}>{title}</Heading>
                    <Pressable
                        onPress={onPress}
                        _pressed={{ opacity: 0.7 }}
                    >
                        <Icon as={MaterialIcons} name="edit" size="2xl" color="primary.generic" />

                    </Pressable>
                </HStack>
                <VStack space={4} w="100%">
                    {items.map(i => {
                        return (
                            <HStack flexWrap={'wrap'} display={'flex'} alignItems={'center'} justifyContent={'flex-start'}>
                                <Text fontSize="lg" bold>{i.label}</Text>
                                <Text flexWrap={'wrap'} fontSize="md">{i.value}</Text>
                            </HStack>
                        )
                    })}
                </VStack>
            </VStack>
            <ScrollView w={'100%'} h="80">
                <VStack w="80%" space={24}>
                    {object?.length !== 0 ? object?.map((i: any) => {
                        const advertisementActive: string = i?.active === true ? 'Sim' : 'Não'
                        return (
                            <CardUI
                                key={i?.id}
                                title={i?.name}
                                description1={'Ativa: ' + advertisementActive}
                                onPressIcon={()=>  navigation.navigate('Visualizar', { object: i })}
                            />
                        );
                    }) : <Heading>Esse cliente ainda não tem propagandas</Heading>}
                </VStack>
    
            </ScrollView>
        </VStack>
    )
}