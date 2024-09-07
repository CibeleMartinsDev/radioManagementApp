import { ArrowForwardIcon, AspectRatio, Box, Center, Heading, HStack, Image, Pressable, Stack, Text } from "native-base";
import React from "react";


export default function CardUI({ title, description1, description2, description3 }: CardProps) {

    return (
        <Box alignItems="center">
            <Box maxW="80" rounded="lg" overflow="hidden" borderColor={'primary.generic'} borderWidth="1" backgroundColor={'primary.generic'} color={'primary.genericBlack'}>
                <Stack p="4" space={3}>
                    <Stack space={2}>
                        <Heading size="md" ml="-1" color={'primary.genericBlack'}>
                            {title}
                        </Heading>
                        <Text fontSize="xs" color={"violet.500"} fontWeight="500" ml="-0.5" mt="-1">
                            {description1}
                        </Text>
                    </Stack>
                    <HStack height={10} display={'flex'} space={20} alignItems={'center'}>
                        <Stack>
                            <Text fontWeight="400" color={'primary.genericBlack'}>
                                {description2}
                            </Text>
                            <Text fontWeight="400" color={'primary.genericBlack'}>
                                {description3}
                            </Text>
                        </Stack>
                        <Pressable
                            onPress={() => {
                                console.log('preesss icones')
                            }}
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