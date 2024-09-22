import { HStack, Spinner } from "native-base";


export default function LoadUI() {
    return (
        <HStack width={'100%'} space={2} display={'flex'} justifyContent="center">
            <Spinner size={'2xl'} accessibilityLabel="Loading" />
        </HStack>
    )
}