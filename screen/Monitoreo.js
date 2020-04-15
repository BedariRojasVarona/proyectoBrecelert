import React, { Component } from 'react';
import { View, Text, Button, ActivityIndicator,Switch,Linking,Container,Content } from 'react-native';
import {StyleSheet} from 'react-native';
class Monitoreo extends Component {
  render() {
    return (
      <View style={misEstilos.content} >
        <Text style={misEstilos.textCenter}>Hola:  Bienvenid@ a la Aplicación de monitoreo, para Iniciar  presione "Monitoreo".</Text>
        <Text style={misEstilos.textCenter2} onPress={() => Linking.openURL('http://thingspeak.com/channels/1011154')}> Monitoreo </Text>      
      </View>
    );
  }
}
const misEstilos = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor:'#9BB5F0'
  },textCenter: {
    textAlign: 'center',
    width: '100%',
    color: 'white',
    fontSize:30,
  },textCenter1: {
    textAlign: 'center',
    width: '100%',
    color: 'gray',
    fontSize:20,
  },textCenter2: {
    textAlign: 'center',
    width: '100%',
    color: '#E16995',
    fontSize:35,
  },centrar: {
    flex: 1,
    marginLeft: '50%',
    justifyContent: 'center'
  },
});
export default Monitoreo;