import React, { Component } from "react";
import { Container, View, Content, Card, CardItem, Text, Body, Button, Item, Label, Input, 
  Icon, Footer, FooterTab, Left, Thumbnail} from "native-base";
import {
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity
} from 'react-native';

import firebase from 'firebase';


class Inicio extends Component {
  state = { currentUser: null }

  componentDidMount() {
      const { currentUser } = firebase.auth()
      this.setState({ currentUser })
  }

    render(){
      const { currentUser } = this.state
    const navegar = this.props.navigation;
    if(this.state.showIndicator){
        return(
            <View style={misEstilos.content}>
                
                <ActivityIndicator size="large" color="#FF0000"/>
                
            </View>
  
        );
      
    }
    else{
      return (
          <>
              <Content padder contentContainerStyle = {misEstilos.content}> 
              <View style={misEstilos.container3}>
        <Text style={{fontSize: 20}}> Hi <Text style={{color:'green', fontSize: 20}}>{currentUser && currentUser.email}!
        </Text></Text>
        </View>           
            <CardItem> 
              <Left>
                <Body>
                  <Text style = {misEstilos.textCenter}>BRACELERT</Text>
                  <Text note style={{color:"#85C1E9"}}>Dispositivo Wereable</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
            <Left>
              <Body>
                <Text note style = {misEstilos.textCenter1}>
                     <Text style={{color:"#51C2EF"}}> BRACELERT </Text> es un dispositivo que te ayuda
                     a monitorear la temperatura en que se encuentra la persona con asma
                     y al mismo tiempo  que si esta llega 
                     a estar en peligro por medio de una alarma , avise a los familiares.
                </Text> 
              </Body>
            </Left> 
            </CardItem>
                <Card> 
                <View footer bordered>
                <Button full success style={{padding:20 }} onPress={()=> firebase.auth().signOut()} >
                     <Text style={{justifyContent: 'center', color:'#FFFBFB'}} >Logout</Text>
               </Button>
                </View>
                </Card>                
            </Content>      
            <Footer>
            <FooterTab>
            <Button vertical active>
              <Icon name="apps"  onPress={() => navegar.navigate('Inicio')}></Icon> 
              <Text>Inicio</Text>
            </Button>
            <Button vertical active>
              <Icon name="eye" onPress={() => navegar.navigate('Manual')}></Icon>
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
}


const misEstilos = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    
  },

  textCenter: {
    textAlign: 'left',
    width: '100%',
    color: '#07A99F',
    fontSize:30,
  },
  textCenter1: {
    textAlign: 'left',
    width: '100%',
    color: 'gray',
    fontSize: 18,
  },

  centrar: {
    flex: 1,
    marginLeft: '50%',
    justifyContent: 'center'
  },
  container3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }

});

export default Inicio;