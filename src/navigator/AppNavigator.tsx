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
import Customer from '../interfaces/customer';

export type RootStackParamList = {
    Login: undefined;
    Home: undefined;
    'Cadastrar cliente': undefined;
    'Cadastrar propaganda': undefined;
    'editar/cliente e propaganda': undefined;
    'Visualizar': { customer: Customer };
    Dashboard: undefined;
    'Informações Cobrança Propaganda': undefined;
  };

const Stack = createNativeStackNavigator<RootStackParamList>();
// Envolva suas telas com o gradiente
const GradientLogin = withGradient(Login);
const GradientHome = withGradient(Home);
const GradientRegisterCustomer = withGradient(RegisterCustomer);
const GradientRegisterAdvertisement = withGradient(RegisterAdvertisement);
const GradientEdit = withGradient(Edit);
const GradientVisualization = withGradient(Visualization);
const GradientDashboard = withGradient(Dashboard);
const GradientBillingInformation = withGradient(BillingInformation);
export default function Navigator() {
    return (
        <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen options={{ headerShown: false }} name="Login" component={GradientLogin} />
            <Stack.Screen options={{ headerShown: false }} name="Home" component={GradientHome} />
            <Stack.Screen options={{ headerShown: false }} name="Cadastrar cliente" component={GradientRegisterCustomer} />
            <Stack.Screen options={{ headerShown: false }} name="Cadastrar propaganda" component={GradientRegisterAdvertisement} />
            <Stack.Screen options={{ headerShown: false }} name="editar/cliente e propaganda" component={GradientEdit} />
            <Stack.Screen options={{ headerShown: false }} name="Visualizar" component={GradientVisualization} />
            <Stack.Screen options={{ headerShown: false }} name="Dashboard" component={GradientDashboard} />
            <Stack.Screen options={{ headerShown: false }} name="Informações Cobrança Propaganda" component={GradientBillingInformation} />
        </Stack.Navigator>
    );
}

