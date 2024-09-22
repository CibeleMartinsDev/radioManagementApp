/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';
import { NativeBaseProvider } from "native-base";
import { theme } from './styles/theme/nativeBaseTheme'
import Navigator from './navigator/AppNavigator';
import { AuthProvider } from './context/auth-context';

enableScreens();

function App(): React.JSX.Element {
  return (

    <NativeBaseProvider theme={theme}>
      <AuthProvider>
        <NavigationContainer>
          <Navigator />
        </NavigationContainer>
      </AuthProvider>
    </NativeBaseProvider>
  );
}

export default App;
