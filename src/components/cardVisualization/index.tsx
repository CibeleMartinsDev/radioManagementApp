import { Heading, HStack, Icon, Pressable, Text, VStack } from "native-base";
import React from "react";
import { CardEditionProps } from "./interface";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


export default function CardVisualizationUI({ items, title, onPress }: CardEditionProps) {

    return (
        <VStack p={16} space={4} w="100%" display="flex" justifyContent="center">
            <HStack w="100%" space={16}>
                <Heading>{title}</Heading>
                <Pressable
                    onPress={onPress}
                    _pressed={{ opacity: 0.7 }}
                >
                   <Icon as={MaterialIcons} name="edit" size="2xl" color="primary.generic"/>
         
                </Pressable>
            </HStack>
            <HStack  w="100%">
                {items.map(i => {
                    return (
                        <>
                            <Text>{i.label}</Text>
                            <Text>{i.value}</Text>
                        </>
                    )
                })}
            </HStack>
        </VStack>
    )
}