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
import { AspectRatio, Center, HStack, NativeBaseProvider, useDisclose } from "native-base";

//components/themes
import { theme } from './styles/theme/nativeBaseTheme'
import NavbarMenuUI from './components/navBarMenu';
import CardVisualizationUI from './components/cardVisualization';


function App(): React.JSX.Element {

  // const [nameCustomer, setNameCustomer] = useState('')
  // const [adressCustomer, setAdressCustomer] = useState('')
  // const [phone1Customer, setPhone1Customer] = useState('')
  // const [phone2Customer, setPhone2Customer] = useState('')
  // const [emailCustomer, setEmailCustomer] = useState('')
  // const [selectValue, setSelectValue] = useState('')

  // const inputs: InputDynamicForm[] = [
  //   {
  //     type: 'text',
  //     name: 'name',
  //     placeholder: 'Nome do cliente',
  //     value: nameCustomer,
  //     onChange: (e) => { setNameCustomer(e.nativeEvent.text) }
  //   },
  //   {
  //     type: 'text',
  //     name: 'endereco',
  //     placeholder: 'Endereço do cliente',
  //     value: adressCustomer,
  //     onChange: (e) => { setAdressCustomer(e.nativeEvent.text) }
  //   },
  //   {
  //     type: 'text',
  //     name: 'phone1',
  //     placeholder: 'Telefone 1',
  //     value: phone1Customer,
  //     onChange: (e) => { setPhone1Customer(e.nativeEvent.text) }
  //   },
  //   {
  //     type: 'text',
  //     name: 'phone2',
  //     placeholder: 'Telefone 2',
  //     value: phone2Customer,
  //     onChange: (e) => { setPhone2Customer(e.nativeEvent.text) }
  //   },
  //   {
  //     type: 'text',
  //     name: 'email',
  //     placeholder: 'E-mail',
  //     value: emailCustomer,
  //     onChange: (e) => { setEmailCustomer(e.nativeEvent.text) }
  //   },
  // ]

  // const inputsAdvertisement: InputDynamicForm[] = [
  //   {
  //     type: 'text',
  //     name: 'name',
  //     placeholder: 'Nome da propaganda',
  //     value: nameCustomer,
  //     onChange: (e) => { setNameCustomer(e.nativeEvent.text) }
  //   },
  //   {
  //     type: 'text',
  //     name: 'frenquency',
  //     placeholder: 'Frequência de divulgação',
  //     value: adressCustomer,
  //     onChange: (e) => { setAdressCustomer(e.nativeEvent.text) }
  //   },
  //   {
  //     type: 'text',
  //     name: 'hours',
  //     placeholder: 'Horários de divulgação',
  //     value: phone1Customer,
  //     onChange: (e) => { setPhone1Customer(e.nativeEvent.text) }
  //   },
  //   {
  //     type: 'text',
  //     name: 'amount',
  //     placeholder: 'R$ Valor',
  //     value: phone2Customer,
  //     onChange: (e) => { setPhone2Customer(e.nativeEvent.text) }
  //   },
  //   {
  //     type: 'text',
  //     name: 'dateDue',
  //     placeholder: 'Data de vencimento',
  //     value: emailCustomer,
  //     onChange: (e) => { setEmailCustomer(e.nativeEvent.text) }
  //   },
  //   {
  //     type: 'text',
  //     name: 'activate',
  //     placeholder: 'Ativar propaganda?',
  //     value: emailCustomer,
  //     onChange: (e) => { setEmailCustomer(e.nativeEvent.text) }
  //   },
  // ]

  // const onSubmit = () => {
  //   console.log(nameCustomer),
  //     console.log(adressCustomer),
  //     console.log(emailCustomer),
  //     console.log(phone1Customer)
  //   console.log(phone2Customer)
  // }
  return (
    <NativeBaseProvider theme={theme}>
      <LinearGradient
        colors={['#1A00BA', '#585865']}
        style={{ flex: 1 }}
      >
        <SafeAreaView>
          <View>
            <HStack>
              <NavbarMenuUI />
                <Center>    <CardVisualizationUI onPress={()=> console.log('card visualization')} title={'Lojas MM'} items={[{
                label: 'Cliente: ', value:'Lojas MM'
               }]}/></Center>
           
            </HStack>
          </View>
        </SafeAreaView>
      </LinearGradient>
    </NativeBaseProvider>
  );
}

export default App;
