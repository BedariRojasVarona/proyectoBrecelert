import React, { Component } from "react";
import { Container, View, Content, Card, CardItem, Text, Body, Button, Item, Label, Input, Icon,Accordion,Footer,FooterTab } from "native-base";
import {StyleSheet,ActivityIndicator}from 'react-native';

const dataArray = [
  { title: "First Instruction", content: "Esta aplicacion te servira para poder monitorear nuestro dispositivo." },
  { title: "Second Instruction", content: "En nuestra barra de 'Menu' podras encontrar el boton de Monitoreo daras click sobre el." },
  { title: "Third Instruction", content: "Dando click te rediccionara a la pagina del Monitoreo." },
  { title: "Fouth Instruction", content: "te mandara a un link donde veras vuestras graficas, estas miden la temperatura y humedad en nuestro dispositivo." }
  
];

class Manual extends Component {
  
  
  render(){
  const navegar = this.props.navigation;
    return (
        <>
        
        <Container>
            <Content padder contentContainerStyle = {misEstilos.content}>
            <Card>
                <CardItem header bordered >
    		<Text style = {misEstilos.textCenter}>NUESTRO MANUAL</Text>
                </CardItem>
                <CardItem bordered>
                <Body style = {misEstilos.body}>
                   
          <Accordion
            dataArray={dataArray}
            headerStyle={{ backgroundColor: "#b7daf8" }}
            contentStyle={{ backgroundColor: "#ddecf8" }}
          />  
                </Body>
                </CardItem>
                <CardItem footer bordered >
                <Button  bordered info >
            <Icon  name='camera' />
            <Text style={{justifyContent: 'center', color:'#51C2EF'}} >Imagenes</Text>
          </Button> 
          </CardItem>  
            </Card>
            </Content>
        </Container>
	<Footer>
          <FooterTab>
            <Button vertical active>
              <Icon name="apps"  onPress={() => navegar.navigate('Inicio')}></Icon> 
              <Text>Inicio</Text>
            </Button>
            <Button vertical active>
              <Icon name="eye"  onPress={() => navegar.navigate('Manual')}></Icon>
              <Text>Manual</Text>
            </Button>
            <Button vertical active>
              <Icon name="pulse" onPress={() => navegar.navigate('Monitoreo')}></Icon>
              <Text>Monitoreo</Text>
            </Button>
          </FooterTab>
        </Footer> 
        </>
    );
    }
    }


const misEstilos = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
   
  
  },

  textCenter: {
    textAlign: 'center',
    width: '100%',
    color: 'blue',
    fontSize:30,
  },


  centrar: {
    flex: 1,
    marginLeft: '50%',
    justifyContent: 'center'
  },


});

export default Manual;