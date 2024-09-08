import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LinearGradient } from 'react-native-linear-gradient';
import Login from '../pages/login';
import Home from '../pages/home';
import RegisterCustomer from '../pages/registerCustomer';
import RegisterAdvertisement from '../pages/registerAdvertisement';
import Edit from '../pages/edit';
import Visualization from '../pages/visualization';
import Dashboard from '../pages/dashboard';
import BillingInformation from '../pages/billingInformation';
import withGradient from '../components/wrapperGradient';

const Stack = createNativeStackNavigator();
// Envolva suas telas com o gradiente
const GradientLogin = withGradient(Login);
const GradientHome = withGradient(Home);

export default function Navigator() {
    return (
        <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen name="Login" component={GradientLogin} />
            {/* <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Cadastrar cliente" component={RegisterCustomer} />
            <Stack.Screen name="Cadastrar propagandas" component={RegisterAdvertisement} />
            <Stack.Screen name="editar/cliente" component={Edit} />
            <Stack.Screen name="editar/propagandas" component={Edit} />
            <Stack.Screen name="visualizar/propagandas e clientes" component={Visualization} />
            <Stack.Screen name="/dashboard" component={Dashboard} />
            <Stack.Screen name="propagandas/informações/cobrança" component={BillingInformation} /> */}
        </Stack.Navigator>
    );
}

