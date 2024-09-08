import { useNavigation } from "@react-navigation/native";
import { Button, Text, View } from "native-base"; // Certifique-se de ter o NativeBase configurado corretamente

export default function Login() {
    const navigation = useNavigation()
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Login Screen</Text>
            <Button onPress={() => navigation.navigate('Home' as never)}>Go to Home</Button>
        </View>
    );
}