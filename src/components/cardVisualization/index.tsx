import { Heading, HStack, Icon, Pressable, Text, VStack } from "native-base";
import React from "react";
import { CardEditionProps } from "./interface";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CardUI from "../card";


export default function CardVisualizationUI({ items, title, onPress, object }: CardEditionProps) {

    return (
        <VStack space={32} w="100%" alignItems={'start'} justifyContent={'flex-start'}>
            <VStack w="100%" space={8}>
                <HStack w="100%" space={16}>
                    <Heading>{title}</Heading>
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
                            <>
                                <Text fontSize="lg" bold>{i.label}</Text>
                                <Text fontSize="md">{i.value}</Text>
                            </>
                        )
                    })}
                </VStack>
            </VStack>

            <VStack  w="78%" space={24}>
                {object.map((i: any) => {
                    return (
                        <CardUI title={i?.name} description1={'Frequência de divulgação: ' + i?.frenquencyDivulgation} />
                    )
                })}
            </VStack>
        </VStack>
    )
}