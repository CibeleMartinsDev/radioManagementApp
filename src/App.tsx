/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import {
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
import { NativeBaseProvider } from "native-base";

//components/themes
import ButtonUI from './components/button/index';
import { theme } from './styles/theme/nativeBaseTheme'
import { InputUI } from './components/input';


function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [valueBtn, setValueBtn] = useState('')

  return (
    <NativeBaseProvider theme={theme}>
      <LinearGradient
        colors={['#1A00BA', '#585865']}
        style={{ flex: 1 }}
      >
        <SafeAreaView>
          <View>
            <InputUI haveIcon={true} placeholder={'E-mail'} value={valueBtn} onChange={(e) => setValueBtn(e.nativeEvent.text)} />
          </View>
        </SafeAreaView>
      </LinearGradient>
    </NativeBaseProvider>
  );
}

export default App;
