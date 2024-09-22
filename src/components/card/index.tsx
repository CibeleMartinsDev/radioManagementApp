import { ArrowForwardIcon, AspectRatio, Box, Center, Heading, HStack, Image, Pressable, Stack, Text, VStack } from "native-base";
import React from "react";
import { CardProps } from "./interface";

export default function CardUI({ title, description1, description2, description3, onPressIcon }: CardProps) {

    return (
        <Box h={10} alignItems="center" minW={'100%'}>
            <Box maxW="100%" rounded="lg" overflow="hidden" borderColor={'primary.generic'} borderWidth="1" backgroundColor={'primary.generic'} color={'primary.genericBlack'}>
                <Stack minW={'100%'} p="4" space={3}>
                    <Stack space={2}>
                        <Heading size="md" ml="-1" color={'primary.genericBlack'}>
                            {title}
                        </Heading>
                        <Text fontSize="xs" color={"violet.500"} fontWeight="500" ml="-0.5" mt="-1">
                            {description1}
                        </Text>
                    </Stack>
                    <HStack display={'flex'} space={'72%'} justifyContent={'start'}>
                        <VStack>
                            <Text fontWeight="400" color={'primary.genericBlack'}>
                                {description2}
                            </Text>
                            <Text fontWeight="400" color={'primary.genericBlack'}>
                                {description3}
                            </Text>
                        </VStack>
                        <Pressable
                        position={'fixed'}
                        bottom={10}
                        left={6}
                            onPress={onPressIcon}
                            _pressed={{ opacity: 0.7 }}
                        >
                            <ArrowForwardIcon size={10} color={'primary.genericBlack'} />
                        </Pressable>
                    </HStack>
                </Stack>
            </Box>
        </Box>
    )
}