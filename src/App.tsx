/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import { NativeBaseProvider } from "native-base";
import ButtonUI from './components/button/index';
import {theme} from './styles/theme/nativeBaseTheme'

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [valueBtn, setValueBtn] = useState('')

  
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

console.log(valueBtn)
  return (
    <NativeBaseProvider theme={theme}>
      <SafeAreaView style={backgroundStyle}>
          <View>
            <ButtonUI title={'Entrar'} onPress={()=> setValueBtn('laalalall')} size={'sm'} variant={'ghost'} />
          </View>
      </SafeAreaView>
    </NativeBaseProvider>
  );
}

export default App;
