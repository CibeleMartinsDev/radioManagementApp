import React, { useContext } from 'react';
import { LinearGradient } from 'react-native-linear-gradient';
import { SafeAreaView } from 'react-native';
import NavbarMenuUI from '../navBarMenu';
import { Center, HStack, useDisclose } from 'native-base';
import { useRoute } from '@react-navigation/native';
import BottomSheetUI from '../bottomSheet';
import { AuthContext } from '../../context/auth-context';

export default function withGradient(WrappedComponent: any) {
  
    return function (props: React.JSX.IntrinsicAttributes) {
        const route = useRoute();
        const isLoginRoute = route?.name === 'Login';
        return (
            <LinearGradient
                colors={['#1A00BA', '#585865']}
                style={{ flex: 1 }}
            >
                <SafeAreaView style={{ flex: 1 }}>
                    <HStack>
                        {!isLoginRoute && <NavbarMenuUI />}
                        <Center p={10}  flexDir={'row'}>
                        <WrappedComponent {...props} />
                        </Center>
                    </HStack>
                </SafeAreaView>
            </LinearGradient>
        );
    };
}