import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, View, Text } from 'react-native';

import Inicio from './Inicio';
import LoginForm from './LoginForm';
import Manual from './Manual';
import Registro from './Registro';
import RegistroForm from './RegistroForm';
import Monitoreo from './Monitoreo';
import Loading from './Loading';
import Login from './Login';
import firebase from '../firebase';


const Stack = createStackNavigator();

function MyStack() {
    return (
      /*<View style={styles.container}>
       <LightControl />
      </View>*/

    <Stack.Navigator
      initialRouteName="Loading"
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#3740FE',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>    
      <Stack.Screen 
        name="LoginForm" 
        component={LoginForm} 
      /> 
      <Stack.Screen 
        name="Login" 
        component={Login} 
      /> 
      <Stack.Screen 
        name="RegistroForm" 
        component={RegistroForm} 
        options={
          {title: 'REGISTRATE'}
        }
      />
      <Stack.Screen 
        name="Registro" 
        component={Registro} 
      />
      <Stack.Screen 
       name="Inicio" 
       component={Inicio} 
       options={
         { title: 'BRECERLT' }

       }
      />
      <Stack.Screen 
       name="Manual" 
       component={Manual} 
       options={
         { title: 'MANUAL' }
       }
      />
      <Stack.Screen 
       name="Monitoreo" 
       component={Monitoreo} 
       options={
         { title: 'MONITOREO' } 
       }
      />
      <Stack.Screen 
       name="Loading" 
       component={Loading}
      />
  </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
  



