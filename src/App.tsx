/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import {
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
import { AspectRatio, NativeBaseProvider } from "native-base";

//components/themes
import ButtonUI from './components/button/index';
import { theme } from './styles/theme/nativeBaseTheme'
import { InputUI } from './components/input';
import SelectUI from './components/select';
import CardUI from './components/card';


function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [valueBtn, setValueBtn] = useState('')
  console.log(valueBtn)
  return (
    <NativeBaseProvider theme={theme}>
      <LinearGradient
        colors={['#1A00BA', '#585865']}
        style={{ flex: 1 }}
      >
        <SafeAreaView>
          <View>
           <CardUI title='Lojas MM' description1='Propagandas ativas: 1' description2='lojasmm@gmail.com' description3='44 9 97675641'/>
          </View>
        </SafeAreaView>
      </LinearGradient>
    </NativeBaseProvider>
  );
}

export default App;
