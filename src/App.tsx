/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import {
  GestureResponderEvent,
  Image,
  NativeSyntheticEvent,
  SafeAreaView,
  TextInputChangeEventData,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';


//libs
import { LinearGradient } from 'react-native-linear-gradient';
import { AspectRatio, NativeBaseProvider, useDisclose } from "native-base";

//components/themes
import ButtonUI from './components/button/index';
import { theme } from './styles/theme/nativeBaseTheme'
import { InputUI } from './components/input';
import SelectUI from './components/select';
import CardUI from './components/card';
import BottomSheetUI from './components/bottomSheet';


function App(): React.JSX.Element {
 
  const {
    isOpen,
    onOpen,
    onClose
  } = useDisclose();

  return (
    <NativeBaseProvider theme={theme}>
      <LinearGradient
        colors={['#1A00BA', '#585865']}
        style={{ flex: 1 }}
      >
        <SafeAreaView>
          <View>
            <ButtonUI title='Abrir bottom sheet' onPress={onOpen} size={'sm'} variant={'ghost'}/>
            <BottomSheetUI isOpen={isOpen} onClose={onClose} message={{status: 400, text: 'erro na requisicao'}}/>
          </View>
        </SafeAreaView>
      </LinearGradient>
    </NativeBaseProvider>
  );
}

export default App;
