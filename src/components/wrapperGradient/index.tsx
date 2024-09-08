import React from 'react';
import { LinearGradient } from 'react-native-linear-gradient';
import { SafeAreaView } from 'react-native';
import NavbarMenuUI from '../navBarMenu';
import { HStack } from 'native-base';

export default function withGradient(WrappedComponent: any) {
    return function (props: React.JSX.IntrinsicAttributes) {
        return (
            <LinearGradient
                colors={['#1A00BA', '#585865']}
                style={{ flex: 1 }}
            >
                <SafeAreaView style={{ flex: 1 }}>
                    <HStack>
                        <NavbarMenuUI />
                        <WrappedComponent {...props} />
                    </HStack>
                </SafeAreaView>
            </LinearGradient>
        );
    };
}